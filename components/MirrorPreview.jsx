"use client";
import React from "react";

/**
 * 2D prikaz ogledala sa lajsnama (uključujući ivice umesto rama).
 * Dimenzije su u centimetrima (cm).
 */
export default function MirrorPreview({
  widthCm = 90,
  heightCm = 140,
  barThicknessCm = 2,   // jedino podešavanje debljine
  cols = 3,
  rows = 3,
  barColor = "#111",    // crna ili bela
  cornerRadiusCm = 0,   // 0 = oštre ivice
  showDims = true,
  scale = 0.1,         // 1cm ≈ 37.79px; scale za kompaktnost
}) {
  const PX_PER_CM = 37.795275591 * scale;

  const W = Math.max(1, widthCm * PX_PER_CM);
  const H = Math.max(1, heightCm * PX_PER_CM);

  const barT = Math.max(0, barThicknessCm * PX_PER_CM);
  const r = Math.max(0, cornerRadiusCm * PX_PER_CM);

  // “Staklo” je cela površina; lajsne crtamo preko (i ivice i unutrašnje).
  const innerX = 0;
  const innerY = 0;
  const innerW = W;
  const innerH = H;

  // Unutrašnje linije (bez ivica) – pozicije u px
  const vInner = Array.from({ length: Math.max(0, cols - 1) }, (_, i) => innerW * ((i + 1) / cols));
  const hInner = Array.from({ length: Math.max(0, rows - 1) }, (_, i) => innerH * ((i + 1) / rows));

  return (
    <svg viewBox={`0 0 ${W} ${H}`} width={W} height={H} role="img" aria-label="2D ogledalo sa lajsnama">
      <defs>
        {/* blaga refleksija stakla */}
        <linearGradient id="glassShade" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="130%" stopColor="#e9eef1" stopOpacity="8.25" />
          <stop offset="130%" stopColor="#ffffff" stopOpacity="5.12" />
          <stop offset="130%" stopColor="#cfd6da" stopOpacity="6.20" />
        </linearGradient>
        {/* diskretni sjaj */}
        <linearGradient id="sheen" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="white" stopOpacity="0" />
          <stop offset="30%" stopColor="white" stopOpacity="0.18" />
          <stop offset="60%" stopColor="white" stopOpacity="0.04" />
          <stop offset="100%" stopColor="white" stopOpacity="0" />
        </linearGradient>
      </defs>

      {/* staklo */}
      <rect
        x={innerX}
        y={innerY}
        width={innerW}
        height={innerH}
        rx={r}
        ry={r}
        fill="url(#glassShade)"
      />

      {/* HORIZONTALNE lajsne – unutrašnje */}
      {hInner.map((y, idx) => (
        <rect
          key={`h-${idx}`}
          x={innerX}
          y={y - barT / 2}
          width={innerW}
          height={barT}
          fill={barColor}
          shapeRendering="crispEdges"
        />
      ))}

      {/* VERTIKALNE lajsne – unutrašnje */}
      {vInner.map((x, idx) => (
        <rect
          key={`v-${idx}`}
          x={x - barT / 2}
          y={innerY}
          width={barT}
          height={innerH}
          fill={barColor}
          shapeRendering="crispEdges"
        />
      ))}

      {/* LAJSNE NA IVICAMA (umesto rama) */}
      {/* levo */}
      <rect x={0} y={0} width={barT} height={H} fill={barColor} />
      {/* desno */}
      <rect x={W - barT} y={0} width={barT} height={H} fill={barColor} />
      {/* gore */}
      <rect x={0} y={0} width={W} height={barT} fill={barColor} />
      {/* dole */}
      <rect x={0} y={H - barT} width={W} height={barT} fill={barColor} />

      {/* sjaj preko stakla */}
      <rect
        x={innerX + innerW * 0.05}
        y={innerY + innerH * 0.08}
        width={innerW * 0.55}
        height={Math.max(innerH * 0.06, 6)}
        fill="url(#sheen)"
      />

      {/* mere (opciono) */}
      {showDims && (
        <>
          <text x={W / 2} y={H + 20} textAnchor="middle" fontSize={14} fill="#333">
            {Math.round(widthCm)} cm
          </text>
          <text
            x={W + 30}
            y={H / 2}
            textAnchor="middle"
            fontSize={14}
            fill="#333"
            transform={`rotate(90, ${W + 30}, ${H / 2})`}
          >
            {Math.round(heightCm)} cm
          </text>
        </>
      )}
    </svg>
  );
}
