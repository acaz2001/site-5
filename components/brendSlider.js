"use client";
import React from "react";

const brandLogos = [
  "https://upload.wikimedia.org/wikipedia/commons/a/a6/Logo_NIKE.svg",
  "https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg",
  "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg",
  "https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg",
  "https://upload.wikimedia.org/wikipedia/commons/9/96/Microsoft_logo_%282012%29.svg",
  "https://upload.wikimedia.org/wikipedia/commons/5/50/Oracle_logo.svg",
  "https://upload.wikimedia.org/wikipedia/commons/7/7c/AMD_Logo.svg",
  "https://upload.wikimedia.org/wikipedia/commons/8/85/Intel_logo_2023.svg",
  "https://upload.wikimedia.org/wikipedia/commons/a/a4/NVIDIA_logo.svg"
];

function BrendSlider() {
  return (
    <div className="relative w-[100%] overflow-hidden py-6 z-10 ">
      {/* Blur overlays left & right */}
      {/* Left blur */}
<div className="absolute top-0 left-20 lg:top-0 lg:left-0 md:top-0 md:left-0 sm:top-0 sm:left-0 h-full w-32  bg-gradient-to-r from-[#f9f6fe] via-[#f9f6fe] to-transparent z-10 pointer-events-none" />

{/* Right blur */}
<div className="absolute top-0 right-20 lg:top-0 lg:right-0 md:top-0 md:right-0 sm:top-0 sm:right-0 h-full w-30 bg-gradient-to-l from-[#f9f6fe] via-[#f9f6fe] to-transparent z-10 pointer-events-none " />

      <div className="flex w-max animate-slide gap-12 px-24">
        {[...brandLogos, ...brandLogos].map((logo, i) => (
          <img
            key={i}
            src={logo}
            alt={`brand-${i}`}
            className="h-5 w-auto object-contain filter grayscale brightness-0"
          />
        ))}
      </div>

      {/* Animation styles */}
      <style jsx>{`
        @keyframes slide {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .animate-slide {
          animation: slide 30s linear infinite;
        }
      `}</style>
    </div>
  );
}

export default BrendSlider;