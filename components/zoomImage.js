'use client';
import React, { useRef } from 'react';

function ZoomImage({ src, alt }) {
  const containerRef = useRef(null);

  const handleMouseMove = (e) => {
    const { left, top, width, height } = containerRef.current.getBoundingClientRect();
    const x = ((e.clientX - left) / width) * 100;
    const y = ((e.clientY - top) / height) * 100;

    containerRef.current.style.backgroundPosition = `${x}% ${y}%`;
  };

  const handleMouseLeave = () => {
    containerRef.current.style.backgroundPosition = 'center';
  };

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className='w-full h-[400px] rounded-3xl overflow-hidden cursor-zoom-in'
      style={{
        backgroundImage: `url(${src})`,
        backgroundSize: '200%',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        transition: 'background-position 0.1s ease',
      }}
      aria-label={alt}
    ></div>
  );
}

export default ZoomImage;
