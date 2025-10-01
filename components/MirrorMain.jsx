"use client";
import React, { useState,useContext,useEffect } from "react";
import { useCart } from '../context/CartContext';
import MirrorPreview from "../components/MirrorPreview";
import AnimatedOnScroll from "./AnimatedOnScroll";

export default function MirrorPage() {
  const [widthCm, setWidth] = useState(100);
  const [heightCm, setHeight] = useState(180);
  const [cols, setCols] = useState(3);
  const [rows, setRows] = useState(4);
  const [frameT, setFrameT] = useState(2);
  const [barT, setBarT] = useState(2);
  const [barColorName, setBarColorName] = useState("crna");
  const { addToCart, openCart } = useCart();
  const [scale, setScale] = useState(0.1);
  

const mirrorVariantFromConfig = ({ widthCm, heightCm, cols, rows, barT }) =>
  `${widthCm}x${heightCm}cm_${cols}x${rows}polja_${barColorName}_lajsne${barT}cm`;




  function roundToHundreds(value) {
  return Math.floor(value / 100) * 100;
  } 
  // Zaokruži na najbližih 100 RSD
  function roundToHundreds(value) {
    return Math.round(value / 100) * 100;
  }

  const rawPrice = ((widthCm / 100) * (heightCm / 100)) * 6500;

    // izračun cene
  const totalPrice = Math.round(rawPrice / 100) * 100;


  // boja rama i lajsni – zajednički kontrolisano
  const barColorHex = barColorName === "white" ? "#ffffff" : "#0f0f10";
  //const frameColorHex = barColorName === "white" ? "#ffffff" : "#0f0f10";

    // Dimenzija jednog polja (cm)
  const cellW = widthCm / cols;
  const cellH = heightCm / rows;

  useEffect(() => {
    const updateScale = () => {
      if (window.innerWidth < 640) {
        setScale(0.048); // mobile
      } else if (window.innerWidth < 1024) {
        setScale(0.06); // tablet
      } else {
        setScale(0.1); // desktop
      }
    };

        updateScale(); // pokreni odmah kad se učita
    window.addEventListener("resize", updateScale);
    return () => window.removeEventListener("resize", updateScale);
  }, []);

  return (
    <div className="min-h-screen w-full p-2 md:p-2 rounded-3xl">
    <section className="flex flex-row items-center justify-between pb-5 mb-8 border-b-[1.5px]">
      <div className="lg:w-fit md:w-fit sm:w-fit w-[100%]">
        <AnimatedOnScroll>
        <h1 className="text-[2rem] font-medium mb-5">Izrada po meri.</h1>
        </AnimatedOnScroll>
        <AnimatedOnScroll>
        <p className="text-[#6c6474] text-[1.1rem] mt-1.5 font-[450] lg:lg:w-[80%] md:w-[80%] sm:w-[100%] w-[100%] md:w-[80%] sm:w-[100%] w-[100%]">
        Mini aplikacija za izradu ogledala sa crnim lajsnama. Unesite dimenzije, broj polja i debljinu rama i lajsni, a mi ćemo izračunati cenu i omogućiti vam da dodate ogledalo u korpu.
        </p>
        <p className="text-[#6c6474] text-[1.1rem] mt-1.5 font-[450] lg:w-[80%] md:w-[80%] sm:w-[100%] w-[100%]">
        Kako se koristi: Unesite željene dimenzije ogledala u centimetrima, odaberite broj vertikalnih i horizontalnih polja, kao i debljinu lajsni. Cena će se automatski izračunati na osnovu unetih vrednosti. Kada ste zadovoljni sa konfiguracijom, kliknite na dugme "Dodaj u korpu" da biste dodali ogledalo u vašu korpu za kupovinu.
        </p>
        </AnimatedOnScroll>
      </div>
    </section>

      <div className="w-full flex lg:flex-row sm:flex-col flex-col gap-8 items-start">
        {/* prikaz */}
        <div className="w-full  bg-gray-100 p-4 rounded-xl shadow-sm">
          <MirrorPreview
            widthCm={widthCm}
            heightCm={heightCm}
            cols={cols}
            rows={rows}
            barThicknessCm={barT}         
            barColor={barColorHex}  
            cornerRadiusCm={0.2}
            showDims
            scale={scale} 
          />

          {/* Dimenzija jednog polja */}
          <div className="mt-6 space-y-2 text-sm">
            <div className="flex items-end flex-row gap-2">
              <span className="text-[#918D8D] font-medium">Dimenzija polja:</span>
              <div className="flex items-center gap-1">
                <span className="font-medium text-[1.1rem]">{cellH.toFixed(1)}</span>
                <span className="font-medium text-[1.1rem]">x</span>
                <span className="font-medium text-[1.1rem]">{cellW.toFixed(1)} cm</span>
              </div>
            </div>
          </div>


          {/* ukupna cena */}
          <div className="flex flex-row gap-2 items-center mt-6 text-lg font-semibold text-gray-800">
            <h1 className="text-[#918D8D]">Ukupna cena:</h1> 
            <span className="text-[1.6rem]">{totalPrice.toLocaleString("sr-RS")} RSD</span>
          </div>

          {/* dugme */}
          <button
            onClick={() => {
              const colorLabel = barColorName === "white" ? "bela" : "crna";
              const product = {
                id: "mirror-grid",
                name: "Ogledalo sa lajsnama",
                // 🆕 ako je bela lajsna – postavi sliku
                image: barColorName === "white" ? "/BeleOglLajsneModel.jpg" : "/OglLajsneModel.png",
                variant: mirrorVariantFromConfig({
                  widthCm, heightCm, cols, rows, frameT, barT,barColorName, color: colorLabel
                }),
                dimenzija: `${widthCm} x ${heightCm} cm`,
                color: colorLabel, // 🆕 dodatno polje radi prikaza u korpi
                width: widthCm,
                height: heightCm,
                cols,
                rows,
                frameThickness: frameT,
                barThickness: barT,
                price: Math.round(totalPrice),
              };
              addToCart(product);
              openCart?.(); // ako želiš da se odmah otvori korpa
            }}
            className="mt-4 px-6 py-3 rounded-lg bg-[#4aaf31] text-white font-medium hover:bg-green-700 transition"
          >
            Dodaj u korpu
          </button>

        </div>

        {/* kontrole */}
        <div className="w-full bg-white p-4 rounded-xl shadow-sm space-y-4">
          <Label>Širina (cm)</Label>
          <Range value={widthCm} min={60} max={240} step={5} onChange={setWidth} />

          <Label>Visina (cm)</Label>
          <Range value={heightCm} min={60} max={240} step={5} onChange={setHeight} />

          <Label>Kolone</Label>
          <Range value={cols} min={1} max={6} step={1} onChange={setCols} />

          <Label>Redovi</Label>
          <Range value={rows} min={1} max={6} step={1} onChange={setRows} />

         

          <Label>Debljina lajsni (cm)</Label>
          <Range value={barT} min={1} max={3} step={1} onChange={setBarT} />

          <Label>Boja lajsni</Label>
          <select
            value={barColorName}
            onChange={(e) => setBarColorName(e.target.value)}
            className="w-full border rounded-md p-2 text-sm"
          >
            <option value="black">Crna</option>
            <option value="white">Bela</option>
          </select>
        </div>
      </div>
    </div>
  );
}

/* pomoćne komponente */
function Label({ children }) {
  return <div className="text-sm font-medium text-gray-700 mb-1">{children}</div>;
}

function Range({ value, min, max, step, onChange }) {
    const percent = ((value - min) / (max - min)) * 100;

    const trackStyle = {
    background: `linear-gradient(to right, #4aaf31 ${percent}%, #d1d5db ${percent}%)`
  };

  return (
    <div className="flex items-center gap-3">
      <input
        type="range"
        className="w-full h-2 rounded-lg appearance-none cursor-pointer"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={e => onChange(Number(e.target.value))}
        style={trackStyle}
        
      />
      <span className="w-16 text-right text-sm text-gray-600">{value}</span>
    </div>
  );
}
