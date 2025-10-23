'use client'
import React, { useMemo, useState } from 'react';

/**
 * POČETNIČKI FRIENDLY KALKULATOR SEČENJA TABLI
 * -------------------------------------------------
 * Koraci:
 * 1) Korisnik unosi liste dostupnih tabli (formati u cm) i više komada (w×h, count).
 * 2) Aplikacija prvo proba da sve komade spakuje u JEDNU tablu (za svaki format);
 *    ako uspe, bira format sa NAJMANJIM OTPADOM.
 * 3) Ako ne može u jednu, koristi VIŠE TABLI i MEŠA komade po tablama uz LOOK-AHEAD heuristiku
 *    (pametniji izbor sledeće table) – cilj: minimalan ukupan otpad.
 * 4) SVG prikaz: tabla, komadi, i OTPAD (sa dimenzijama).
 *
 * Heuristika: “shelf” (redovi/police). Nema kerf-a; lako može da se doda kasnije.
 */

// =============== UI KOMPONENTA ===============
export default function OptimalSheetsPicker() {
  // --- Dostupne table (korisnik može dodati još) ---
  const [sheetOptions, setSheetOptions] = useState([
    { id: 1, w: 160, h: 225, label: '160×225' },
    { id: 2, w: 225, h: 321, label: '225×321' },
  ]);
  const [newSheetW, setNewSheetW] = useState(200);
  const [newSheetH, setNewSheetH] = useState(300);

  // --- Više tipova komada (širina, visina, količina) ---
  const [pieces, setPieces] = useState([
    { id: 1, w: 60,  h: 160, count: 4 },
    { id: 2, w: 40,  h:  80, count: 6 },
  ]);

  // --- Opcije ---
  const [allowRotate, setAllowRotate] = useState(true);
  const [scale, setScale] = useState(1.0);      // cm -> px za SVG prikaz
  const [lookaheadK, setLookaheadK] = useState(3); // dubina “pogleda unapred”
  const PX_PER_CM = 3 * scale;

  const SHOW_MAX_SHEETS = 8; // koliko SVG tabli da prikažemo (da UI ne bude ogroman)

  // --- UI helperi ---
  function addSheetOption() {
    const w = Number(newSheetW), h = Number(newSheetH);
    if (w > 0 && h > 0) {
      setSheetOptions(prev => [
        ...prev,
        { id: Date.now(), w, h, label: `${w}×${h}` }
      ]);
    }
  }
  function addPiece() {
    setPieces(prev => [...prev, { id: Date.now(), w: 50, h: 50, count: 1 }]);
  }
  function updatePiece(id, field, value) {
    setPieces(prev => prev.map(p => p.id === id ? { ...p, [field]: Number(value) } : p));
  }
  function removePiece(id) {
    setPieces(prev => prev.filter(p => p.id !== id));
  }

  // =============== POMOĆNE FUNKCIJE (ALG.) ===============

  // Raširi komade po count-u
  function expandPieces(piecesList) {
    const out = [];
    for (const p of piecesList) {
      for (let i = 0; i < p.count; i++) {
        out.push({ id: `${p.id}-${i}`, w: p.w, h: p.h });
      }
    }
    return out;
  }

  // Pakovanje SVIH komada u JEDNU tablu (shelf)
  function packShelfOneSheet(sheetW, sheetH, items, rotate) {
    const sorted = [...items].sort((a, b) => (b.w * b.h) - (a.w * a.h));

    let x = 0, y = 0;
    let shelfH = 0;
    const placements = []; // {id, x, y, w, h} u cm

    for (const it of sorted) {
      const variants = rotate ? [
        { w: it.w, h: it.h },
        { w: it.h, h: it.w }
      ] : [{ w: it.w, h: it.h }];

      // 1) isti red
      let chosen = null;
      for (const v of variants) {
        const targetShelfH = (shelfH === 0 ? v.h : shelfH);
        const fitsRow = (x + v.w <= sheetW) && (y + targetShelfH <= sheetH) && (shelfH === 0 || v.h <= shelfH);
        if (fitsRow) { chosen = { ...v, mode: 'same' }; break; }
      }
      // 2) novi red
      if (!chosen) {
        for (const v of variants) {
          const canNewShelf = (v.w <= sheetW) && (y + shelfH + v.h <= sheetH);
          if (canNewShelf) { chosen = { ...v, mode: 'new' }; break; }
        }
      }
      if (!chosen) return null; // ne staje u ovu tablu

      if (chosen.mode === 'same') {
        if (shelfH === 0) shelfH = chosen.h;
        placements.push({ id: it.id, x, y, w: chosen.w, h: chosen.h });
        x += chosen.w;
      } else {
        y += shelfH;
        x = 0;
        shelfH = chosen.h;
        placements.push({ id: it.id, x, y, w: chosen.w, h: chosen.h });
        x += chosen.w;
      }
    }
    const usedArea = items.reduce((s, i) => s + i.w * i.h, 0);
    return { placements, usedArea };
  }

  // Pokušaj “sve u jednu” za sve formate; vrati najbolji po otpadu
  function bestSingleSheetFit(items, sheetTypes, rotate) {
    const candidates = [];
    for (const s of sheetTypes) {
      const res = packShelfOneSheet(s.w, s.h, items, rotate);
      if (!res) continue;
      const totalSheetArea = s.w * s.h;
      const wasteArea = totalSheetArea - res.usedArea;
      const wastePercent = wasteArea / totalSheetArea;
      candidates.push({
        sheet: s,
        placements: res.placements,
        usedArea: res.usedArea,
        totalSheetArea,
        wasteArea,
        wastePercent
      });
    }
    if (candidates.length === 0) return null;
    candidates.sort((a, b) => a.wastePercent - b.wastePercent);
    return candidates[0];
  }

  // Stanje jedne otvorene table
  function createEmptyShelfState(sheetW, sheetH) {
    return { sheetW, sheetH, x: 0, y: 0, shelfH: 0, placements: [], usedArea: 0 };
  }
  function tryPlaceOnShelf(state, item, rotate) {
    const variants = rotate ? [
      { w: item.w, h: item.h },
      { w: item.h, h: item.w }
    ] : [{ w: item.w, h: item.h }];

    // isti red
    for (const v of variants) {
      const targetShelfH = (state.shelfH === 0 ? v.h : state.shelfH);
      const fitsRow = (state.x + v.w <= state.sheetW) && (state.y + targetShelfH <= state.sheetH) && (state.shelfH === 0 || v.h <= state.shelfH);
      if (fitsRow) {
        if (state.shelfH === 0) state.shelfH = v.h;
        state.placements.push({ id: item.id, x: state.x, y: state.y, w: v.w, h: v.h });
        state.x += v.w;
        state.usedArea += v.w * v.h;
        return true;
      }
    }
    // novi red
    for (const v of variants) {
      const canNewShelf = (v.w <= state.sheetW) && (state.y + state.shelfH + v.h <= state.sheetH);
      if (canNewShelf) {
        state.y += state.shelfH;
        state.x = 0;
        state.shelfH = v.h;
        state.placements.push({ id: item.id, x: state.x, y: state.y, w: v.w, h: v.h });
        state.x += v.w;
        state.usedArea += v.w * v.h;
        return true;
      }
    }
    return false;
  }

  // =============== LOOK-AHEAD HEURISTIKA (JAČA) ===============

  function cloneShelfState(s) {
    return {
      sheetW: s.sheetW,
      sheetH: s.sheetH,
      x: s.x,
      y: s.y,
      shelfH: s.shelfH,
      usedArea: s.usedArea,
      placements: s.placements.map(p => ({...p})),
    };
  }
  function estimateShelvesHeights(state) {
    if (!state.placements.length) return [];
    const byY = new Map();
    for (const p of state.placements) {
      const y = p.y;
      if (!byY.has(y)) byY.set(y, []);
      byY.get(y).push(p);
    }
    const rows = [];
    for (const [y, arr] of byY.entries()) {
      rows.push({ y, h: Math.max(...arr.map(a => a.h)) });
    }
    rows.sort((a,b) => a.y - b.y);
    return rows.map(r => r.h);
  }
  function scoreShelfState(openSheets, totalItemArea) {
    if (openSheets.length === 0) return 0;

    let totalSheetArea = 0;
    let fragPenalty = 0;

    for (const s of openSheets) {
      totalSheetArea += s.state.sheetW * s.state.sheetH;

      const lastShelfRightWaste = Math.max(0, s.state.sheetW - s.state.x);
      const shelvesHeights = estimateShelvesHeights(s.state);
      const shallowShelves = shelvesHeights.filter(h => h > 0 && h < (0.2 * s.state.sheetH)).length;

      fragPenalty += (lastShelfRightWaste / s.state.sheetW) * 0.6
                   + (shallowShelves * 0.15);
    }

    const wasteArea = Math.max(0, totalSheetArea - totalItemArea);
    const wasteRatio = totalSheetArea > 0 ? (wasteArea / totalSheetArea) : 0;

    const sheetCountPenalty = (openSheets.length - 1) * 0.08;

    return wasteRatio + fragPenalty + sheetCountPenalty;
  }
  function virtualPlace(openSheets, targetIndex, item, rotate) {
    const next = openSheets.map(s => ({ typeId: s.typeId, label: s.label, state: cloneShelfState(s.state) }));
    const ok = tryPlaceOnShelf(next[targetIndex].state, item, rotate);
    return ok ? next : null;
  }
  function virtualOpenNewAndPlace(openSheets, sheetType, item, rotate) {
    const newState = createEmptyShelfState(sheetType.w, sheetType.h);
    const ok = tryPlaceOnShelf(newState, item, rotate);
    if (!ok) return null;
    return [
      ...openSheets.map(s => ({ typeId: s.typeId, label: s.label, state: cloneShelfState(s.state) })),
      { typeId: sheetType.id, label: sheetType.label ?? `${sheetType.w}×${sheetType.h}`, state: newState }
    ];
  }
  function simulateLookahead(items, startPos, openSheets, sheetTypes, rotate, K, totalItemArea) {
    const state = openSheets.map(s => ({ typeId: s.typeId, label: s.label, state: cloneShelfState(s.state) }));
    const end = Math.min(items.length, startPos + K);

    for (let p = startPos; p < end; p++) {
      const it = items[p];

      // greedy: u postojeće table...
      let placed = false;
      for (let i = 0; i < state.length; i++) {
        if (tryPlaceOnShelf(state[i].state, it, rotate)) {
          placed = true; break;
        }
      }
      if (!placed) {
        // ...ili otvori najbolju novu po leftover-u za ovaj item
        let choice = null;
        for (const t of sheetTypes) {
          const temp = createEmptyShelfState(t.w, t.h);
          if (!tryPlaceOnShelf(temp, it, rotate)) continue;
          const sheetArea = t.w * t.h;
          const leftover = sheetArea - temp.usedArea;
          if (!choice || leftover < choice.leftover) {
            choice = { t, temp };
          }
        }
        if (choice) {
          state.push({ typeId: choice.t.id, label: choice.t.label ?? `${choice.t.w}×${choice.t.h}`, state: choice.temp });
        } else {
          break; // prevelik item za sve – kraj simulacije
        }
      }
    }

    const score = scoreShelfState(state, totalItemArea);
    return { score, state };
  }
  function pickBestActionForItem(items, pos, openSheets, sheetTypes, rotate, lookaheadK) {
    const current = items[pos];
    const totalItemArea = items.reduce((s, i) => s + i.w * i.h, 0);
    let best = null;

    // A) postojeće table
    for (let i = 0; i < openSheets.length; i++) {
      const after = virtualPlace(openSheets, i, current, rotate);
      if (!after) continue;
      const scored = simulateLookahead(items, pos + 1, after, sheetTypes, rotate, lookaheadK, totalItemArea);
      if (!best || scored.score < best.score) {
        best = { kind: 'existing', index: i, after, score: scored.score };
      }
    }

    // B) otvaranje svake nove table
    for (const t of sheetTypes) {
      const after = virtualOpenNewAndPlace(openSheets, t, current, rotate);
      if (!after) continue;
      const scored = simulateLookahead(items, pos + 1, after, sheetTypes, rotate, lookaheadK, totalItemArea);
      if (!best || scored.score < best.score) {
        best = { kind: 'new', sheetType: t, after, score: scored.score };
      }
    }

    return best;
  }
  function packMultiSheetsLookahead(items, sheetTypes, rotate, { lookaheadK = 3 } = {}) {
    const sorted = [...items].sort((a,b) => (b.w*b.h) - (a.w*a.h));
    let openSheets = [];

    for (let pos = 0; pos < sorted.length; pos++) {
      const best = pickBestActionForItem(sorted, pos, openSheets, sheetTypes, rotate, lookaheadK);
      if (!best) return null; // prevelik komad za sve formate
      openSheets = best.after; // prihvati najbolju odluku
    }

    const sheets = openSheets.map(s => ({
      typeId: s.typeId,
      label: s.label,
      sheetW: s.state.sheetW,
      sheetH: s.state.sheetH,
      placements: s.state.placements,
      usedArea: s.state.usedArea,
    }));

    const totalSheetArea = sheets.reduce((sum, sh) => sum + sh.sheetW * sh.sheetH, 0);
    const usedArea = items.reduce((s, i) => s + i.w * i.h, 0);
    const wasteArea = Math.max(0, totalSheetArea - usedArea);
    const wastePercent = totalSheetArea > 0 ? (wasteArea / totalSheetArea) * 100 : 0;

    return { sheets, totalSheetArea, usedArea, wasteArea, wastePercent };
  }

  // =============== OTPAD PRAVOUGAONICI (po policama + dno) ===============
  function computeWasteRects(sheetW, sheetH, placements) {
    if (!placements || placements.length === 0) {
      return [{ x: 0, y: 0, w: sheetW, h: sheetH }];
    }
    const byY = new Map();
    for (const p of placements) {
      const y = p.y;
      if (!byY.has(y)) byY.set(y, []);
      byY.get(y).push(p);
    }
    const shelves = [];
    for (const [y, arr] of byY.entries()) {
      const shelfH = Math.max(...arr.map(a => a.h));
      const usedWidth = arr.reduce((sum, a) => sum + a.w, 0);
      shelves.push({ y, h: shelfH, used: usedWidth });
    }
    shelves.sort((a, b) => a.y - b.y);

    const waste = [];
    // desno po policama
    for (const sh of shelves) {
      const rightW = sheetW - sh.used;
      if (rightW > 0 && sh.h > 0) {
        waste.push({ x: sh.used, y: sh.y, w: rightW, h: sh.h });
      }
    }
    // dno
    const totalUsedHeight = shelves.length > 0 ? (shelves[shelves.length - 1].y + shelves[shelves.length - 1].h) : 0;
    const bottomH = sheetH - totalUsedHeight;
    if (bottomH > 0) {
      waste.push({ x: 0, y: totalUsedHeight, w: sheetW, h: bottomH });
    }
    return waste;
  }

  // =============== GLAVNA ODLUKA ===============
  const solution = useMemo(() => {
    const items = expandPieces(pieces);
    if (items.length === 0) return { mode: 'empty', message: 'Nema komada za pakovanje.' };
    if (sheetOptions.length === 0) return { mode: 'empty', message: 'Unesite bar jedan format table.' };

    // 1) “Sve u jednu” – najbolji format po otpadu
    const single = bestSingleSheetFit(items, sheetOptions, allowRotate);
    if (single) {
      const wasteRects = computeWasteRects(single.sheet.w, single.sheet.h, single.placements);
      return { mode: 'single', single: { ...single, wasteRects } };
    }

    // 2) Multi-sheet sa look-ahead heuristikom
    const multi = packMultiSheetsLookahead(items, sheetOptions, allowRotate, { lookaheadK });
    if (!multi) {
      return { mode: 'impossible', message: 'Bar jedan komad je veći od svih dostupnih tabli (ni rotacija ne pomaže).' };
    }
    const withWaste = multi.sheets.map(sh => ({
      ...sh,
      wasteRects: computeWasteRects(sh.sheetW, sh.sheetH, sh.placements),
    }));
    return {
      mode: 'multi',
      multi: { ...multi, sheets: withWaste }
    };
  }, [pieces, sheetOptions, allowRotate, lookaheadK]);

  // =============== RENDER UI ===============
  return (
    <div className="p-5 max-w-[1200px]">
      <h1 className="text-2xl font-bold mb-4">Optimalan izbor i raspored tabli (look-ahead, sa otpadom)</h1>

      {/* Dostupne table */}
      <div className="p-3 border rounded mb-4">
        <h2 className="font-semibold mb-2">Dostupne table (cm)</h2>
        <div className="flex flex-wrap gap-2 mb-3">
          {sheetOptions.map(s => (
            <div key={s.id} className="px-3 py-1 border rounded bg-white">{s.label ?? `${s.w}×${s.h}`}</div>
          ))}
        </div>

        <div className="flex items-end gap-2">
          <div>
            <label className="block text-sm">Širina</label>
            <input type="number" className="border p-1 w-28" value={newSheetW} onChange={e=>setNewSheetW(Number(e.target.value))}/>
          </div>
          <div>
            <label className="block text-sm">Visina</label>
            <input type="number" className="border p-1 w-28" value={newSheetH} onChange={e=>setNewSheetH(Number(e.target.value))}/>
          </div>
          <button className="px-3 py-2 border rounded" onClick={addSheetOption}>+ Dodaj tablu</button>
        </div>
      </div>

      {/* Komadi */}
      <div className="p-3 border rounded mb-4">
        <h2 className="font-semibold mb-2">Komadi (w×h u cm, količina)</h2>
        <div className="grid gap-3">
          {pieces.map(p => (
            <div key={p.id} className="flex flex-wrap items-end gap-2">
              <div>
                <label className="block text-sm">Širina</label>
                <input type="number" className="border p-1 w-24" value={p.w} onChange={e=>updatePiece(p.id,'w',e.target.value)}/>
              </div>
              <div>
                <label className="block text-sm">Visina</label>
                <input type="number" className="border p-1 w-24" value={p.h} onChange={e=>updatePiece(p.id,'h',e.target.value)}/>
              </div>
              <div>
                <label className="block text-sm">Količina</label>
                <input type="number" className="border p-1 w-24" value={p.count} onChange={e=>updatePiece(p.id,'count',e.target.value)}/>
              </div>
              <button className="px-3 py-2 border rounded" onClick={()=>removePiece(p.id)}>Ukloni</button>
            </div>
          ))}
        </div>
        <button className="mt-3 px-3 py-2 border rounded" onClick={addPiece}>+ Dodaj komad</button>
      </div>

      {/* Opcije */}
      <div className="p-3 border rounded mb-4">
        <h2 className="font-semibold mb-2">Opcije</h2>
        <label className="inline-flex items-center gap-2">
          <input type="checkbox" checked={allowRotate} onChange={e=>setAllowRotate(e.target.checked)}/>
          Dozvoli rotaciju komada
        </label>
        <div className="mt-2 flex gap-6 items-end">
          <div>
            <label className="block text-sm">Skala prikaza (vizuelno)</label>
            <input type="number" step="0.1" min="0.3" className="border p-1 w-28" value={scale} onChange={e=>setScale(Number(e.target.value) || 1)}/>
          </div>
          <div>
            <label className="block text-sm">Look-ahead K (2–5 preporuka)</label>
            <input type="number" min="1" max="8" className="border p-1 w-28" value={lookaheadK} onChange={e=>setLookaheadK(Math.max(1, Math.min(8, Number(e.target.value)||3)))}/>
          </div>
        </div>
      </div>

      {/* Rezultat */}
      {solution.mode === 'empty' && (
        <div className="p-3 border rounded text-gray-600">{solution.message}</div>
      )}
      {solution.mode === 'impossible' && (
        <div className="p-3 border rounded text-red-600">{solution.message}</div>
      )}

      {solution.mode === 'single' && (
        <div className="p-3 border rounded">
          <h2 className="font-semibold mb-2">✅ Sve staje u jednu tablu: {solution.single.sheet.label ?? `${solution.single.sheet.w}×${solution.single.sheet.h}`}</h2>
          <p>Iskorišćena površina: <b>{solution.single.usedArea.toFixed(0)} cm²</b></p>
          <p>Ukupna površina table: <b>{solution.single.totalSheetArea.toFixed(0)} cm²</b></p>
          <p>Otpad: <b>{solution.single.wasteArea.toFixed(0)} cm²</b> ({(solution.single.wastePercent*100).toFixed(2)}%)</p>

          <div className="mt-3">
            <SVGSheet
              label={solution.single.sheet.label ?? `${solution.single.sheet.w}×${solution.single.sheet.h}`}
              sheetW={solution.single.sheet.w}
              sheetH={solution.single.sheet.h}
              placements={solution.single.placements}
              wasteRects={solution.single.wasteRects}
              PX_PER_CM={PX_PER_CM}
            />
          </div>
        </div>
      )}

      {solution.mode === 'multi' && (
        <div className="p-3 border rounded">
          <h2 className="font-semibold mb-2">Ne staje u jednu — kombinacija tabli (look-ahead, sa označenim otpadom)</h2>
          <p>Ukupna površina tabli: <b>{solution.multi.totalSheetArea.toFixed(0)} cm²</b></p>
          <p>Iskorišćena površina: <b>{solution.multi.usedArea.toFixed(0)} cm²</b></p>
          <p>Otpad: <b>{solution.multi.wasteArea.toFixed(0)} cm²</b> ({solution.multi.wastePercent.toFixed(2)}%)</p>

          <div className="mt-4 grid gap-6 md:grid-cols-2">
            {solution.multi.sheets.slice(0, SHOW_MAX_SHEETS).map((sh, idx) => (
              <SVGSheet
                key={idx}
                label={`${sh.label ?? (sh.sheetW + '×' + sh.sheetH)} (tabla #${idx+1})`}
                sheetW={sh.sheetW}
                sheetH={sh.sheetH}
                placements={sh.placements}
                wasteRects={sh.wasteRects}
                PX_PER_CM={PX_PER_CM}
              />
            ))}
          </div>

          {solution.multi.sheets.length > SHOW_MAX_SHEETS && (
            <div className="mt-2 text-sm text-gray-600">
              … (još {solution.multi.sheets.length - SHOW_MAX_SHEETS} tabli nije prikazano radi preglednosti)
            </div>
          )}
        </div>
      )}
    </div>
  );
}

// =============== SVG PRIKAZ ===============
function SVGSheet({ label, sheetW, sheetH, placements, wasteRects, PX_PER_CM }) {
  const W = sheetW * PX_PER_CM;
  const H = sheetH * PX_PER_CM;

  return (
    <div>
      <div className="mb-1 text-sm font-medium">{label}</div>
      <svg width={W + 50} height={H + 50} style={{ border: '1px solid #ddd', background: '#fff' }}>
        {/* Tabla */}
        <rect x={20} y={20} width={W} height={H} fill="none" stroke="#2b6cb0" strokeWidth="2" />

        {/* Komadi */}
        {placements.map((p, i) => (
          <g key={`piece-${i}`}>
            <rect
              x={20 + p.x * PX_PER_CM}
              y={20 + p.y * PX_PER_CM}
              width={p.w * PX_PER_CM}
              height={p.h * PX_PER_CM}
              fill="rgba(66,153,225,0.15)"
              stroke="#333"
              strokeWidth="1"
            />
            <text x={24 + p.x * PX_PER_CM} y={34 + p.y * PX_PER_CM} fontSize="12" fill="#333">
              {Math.round(p.w)}×{Math.round(p.h)} cm
            </text>
          </g>
        ))}

        {/* OTPAD (pravougaonici sa dimenzijama) */}
        {wasteRects && wasteRects.map((w, i) => (
          <g key={`waste-${i}`}>
            <rect
              x={20 + w.x * PX_PER_CM}
              y={20 + w.y * PX_PER_CM}
              width={w.w * PX_PER_CM}
              height={w.h * PX_PER_CM}
              fill="rgba(255, 99, 132, 0.18)"
              stroke="rgba(200,0,0,0.85)"
              strokeWidth="1"
              strokeDasharray="4 3"
            />
            <text
              x={24 + w.x * PX_PER_CM}
              y={34 + w.y * PX_PER_CM}
              fontSize="12"
              fill="#b00020"
            >
              otpad: {Math.round(w.w)}×{Math.round(w.h)} cm
            </text>
          </g>
        ))}
      </svg>
    </div>
  );
}
