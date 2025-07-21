"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import AnimatedOnScroll from "./AnimatedOnScroll";

export interface GalleryImage {
  src: string;
  alt: string;
}

interface ImageGalleryProps {
  images: GalleryImage[];
}

export default function ImageGallery({ images }: ImageGalleryProps) {
  const [lightboxImage, setLightboxImage] = useState<GalleryImage | null>(null);

  const openLightbox = (image: GalleryImage) => {
    setLightboxImage(image);
  };

  const closeLightbox = () => {
    setLightboxImage(null);
  };

  // Sprečava scroll dok je lightbox otvoren
  useEffect(() => {
    if (lightboxImage) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }

    // Escape zatvara lightbox
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        closeLightbox();
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [lightboxImage]);

  return (
    <main className="relative">
      {/* Gallery grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {images.map((image, idx) => (
          <button
            key={idx}
            type="button"
            className="group relative overflow-hidden rounded-2xl focus:outline-none"
          >
            <AnimatedOnScroll>
              <Image
                src={image.src}
                alt={image.alt}
                width={1000}
                height={13000}
                className="w-full h-[500px] object-cover transition-transform duration-300 group-hover:scale-105 rounded-2xl"
              />
            </AnimatedOnScroll>
            <span className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity"></span>
          </button>
        ))}
      </div>

      {/* Lightbox overlay 
      {lightboxImage && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
          onClick={closeLightbox}
        >
          <button
            type="button"
            className="absolute top-6 right-6 text-white text-4xl font-bold hover:text-gray-300"
            onClick={(e) => {
              e.stopPropagation();
              closeLightbox();
            }}
          >
            &times;
          </button>
          <Image
            src={lightboxImage.src}
            alt={lightboxImage.alt}
            width={1200}
            height={1200}
            className="max-h-full max-w-full object-contain rounded-2xl shadow-lg"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
        */}
    </main>
  );
}
