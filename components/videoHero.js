"use client";
import React, { useRef, useState } from "react";
import { FaPause, FaPlay } from "react-icons/fa"; // Ikonice
import AnimatedOnScroll from "./AnimatedOnScroll";

function VideoHero() {
  const videoRef = useRef(null);
  const [isPaused, setIsPaused] = useState(false);

  const togglePlay = () => {
    if (!videoRef.current) return;

    if (videoRef.current.paused) {
      videoRef.current.play();
      setIsPaused(false);
    } else {
      videoRef.current.pause();
      setIsPaused(true);
    }
  };

  return (
    <AnimatedOnScroll>
    <div className="relative w-[100%]">
    <main className="video relative w-full h-[480px] overflow-hidden">
      {/* VIDEO */}
      <video
        ref={videoRef}
        className="w-full h-[480px] object-cover z-10 rounded-2xl"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src="/rfC1p1gUmOqGA6GUrdSJt8IjRA4.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* OVERLAY TEKST */}
      <div className="absolute bottom-0 w-full h-full flex items-center justify-center z-10">
        <h1 className="text-white lg:text-[3rem] md:text-[3rem] sm:text-[3rem] text-[2.3rem] 
        lg:w-[65%] md::w-[55%] sm::w-[55%] w-[90%] leading-[1.2] font-medium text-center drop-shadow-lg">
          Showcase your products in action and outline their benefits.
        </h1>
      </div>

    </main>
          {/* PLAY/PAUSE DUGME */}
      <button
        onClick={togglePlay}
        className="absolute top-2 right-2 bg-[#ede4fc] bg-opacity-100 text-white p-3 rounded-full z-40 cursor-pointer hover:bg-opacity-70 transition"
      >
        {isPaused ? <FaPlay className="text-xl text-black" /> : <FaPause className="text-xl text-black" />}
      </button>
    </div>
    </AnimatedOnScroll>
  );
}

export default VideoHero;
