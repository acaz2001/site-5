import React from 'react'
import Link from 'next/link'

function HeroSmaller({page, heading, subheading}) {
  return (
    <>
      <svg width="0" height="0" className='absolute'>
        <defs>
          <clipPath id="clip-path-1" clipPathUnits="objectBoundingBox">
          <path d="M0.012 0.1614 C-0.0011 0.1614 0.0008 0.204 0.0008 0.2524 C0.0008 0.2957 0.0008 0.855 0.0008 0.9751 C0.0008 0.9866 0.0034 0.9972 0.0066 0.9972 H0.9934 C0.9966 0.9972 1 0.9863 1 0.9747 V0.0425 C1 0.013 0.9921 0.0057 0.9891 0.0057 C0.7998 0.0057 0.4167 0.0028 0.4081 0.0028 C0.3993 0.0028 0.3982 0.0302 0.3985 0.0411 C0.3985 0.0699 0.3982 0.0999 0.3982 0.1204 C0.3982 0.1499 0.3948 0.1614 0.3873 0.1614 H0.012 Z"/>          
          </clipPath>
          </defs>
      </svg>
    <main style={{
                  clipPath: 'url(#clip-path-1)',
                  WebkitClipPath: 'url(#clip-path-1)',
                  
                }}
    className='bg-[#ede4fc] w-[100%] h-[350px]  rounded-2xl'>
    <div className="bg-[#ede4fc] rounded-3xl flex flex-col gap-[1rem] rounded-2x pl-20 pt-24 pr-30
    lg:pt-30 md:pt-30">              
        <div className='flex flex-col items-center'>
        <h1 style={{ lineHeight:'1.1'}} 
         className="text-[3.2rem] tracking-tight text-center font-medium
         lg:text-[4.2rem] md:text-[3.5rem]">
        <Link href="/collections">
        <span className=
        'pr-3 text-[#7c7783] transition-all duration-400 ease-in-out hover:text-black cursor-pointer'>
          {page}</span>
        </Link>
        {heading}
        </h1>
         <p 
         className="w-[100%] text-center text-[0.9rem] text-[#6c6474] mt-6
         lg:w-[65%] lg:text-[1.1rem] 
         md:w-[65%] md:text-[1.1rem]" >
        {subheading}
        </p>
        </div>
     </div>
      
    </main>
    </>
  )
}

export default HeroSmaller
