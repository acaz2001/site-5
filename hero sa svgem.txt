import React from 'react'

function Hero({ heading, subheading, badgeText }) {
  return (
    <main>
      <svg width="0" height="0">
        <defs>
          <clipPath id="clip-path-1" clipPathUnits="objectBoundingBox">
          <path d="M0.98923 0.001968 C0.995697 0.002599 0.998337 0.0159 0.998853 0.022473 C0.999107 0.340297 0.999546 0.978309 0.999238 0.987773 C0.99893 0.997237 0.99475 0.999076 0.992694 0.998814 H0.010401 C0.003935 0.995028 0.001292 0.983566 0.000778 0.978309 C0.000907 0.699129 0.001086 0.136195 0.000778 0.117898 C0.00047 0.099602 0.008605 0.09345 0.012711 0.092662 H0.388384 C0.396082 0.092662 0.398007 0.083198 0.398007 0.078466 C0.397878 0.069791 0.397699 0.046921 0.398007 0.024838 C0.398315 0.002756 0.408143 0.000391 0.413018 0.001968 C0.602395 0.001705 0.982764 0.001337 0.98923 0.001968 Z" />
          </clipPath>
        </defs>
      </svg>
      <div style={{
                  clipPath: 'url(#clip-path-1)',
                  WebkitClipPath: 'url(#clip-path-1)',
                }}
      className="bg-[#ede4fc] rounded-3xl flex flex-col items-center gap-[1rem]  pt-26 pb-30 h-[500px] 
      lg:h-[600px] lg:pt-30 md:pt-27 
      sm:h-[450px] ">
        {/* Badge */}
        <div className="bg-[#f7f3fe] w-fit p-1 rounded-2xl flex flex-row gap-[0.5rem]">
          <p className="text-[0.8rem] font-medium pt-0.5 pb-0.5 pl-1.5 pr-1.5">{badgeText}</p>
        </div>

        {/* Heading and Subheading */}
        <div className='flex flex-col items-center'>
          <h1 style={{  lineHeight: '1.1' }} className="text-[2.5rem] sm:text-[2.5rem] md:text-[3.5rem] 
          lg:text-[4.2rem] tracking-tight text-center font-medium w-[90%] lg:w-[70%] md:w-[80%] sm:w-[90%]">
            {heading}
          </h1>
          <p className="text-center text-[1.1rem] text-[#6c6474] mt-6 font-[450]
          w-[75%] lg:w-[42%] md:w-[42%] sm:w-[70%]">
            {subheading}
          </p>
        </div>
      </div>
    </main>
  )
}

export default Hero;
