import React from 'react'
import Link from 'next/link'
import AnimatedOnScroll from './AnimatedOnScroll'

function HeroSmaller({page, heading, subheading}) {
  return (
    <>
    <AnimatedOnScroll>
    <main className='custom-box bg-[#ede4fc] w-[100%] h-[350px]  rounded-2xl'>
    <div className="bg-[#ede4fc] rounded-3xl flex flex-col gap-[1rem] rounded-2x 
    pl-10 pr-10 lg:pl-20 md:pl-20 sm:pl-20 lg:pr-30 md:pr-30 sm:pr-30 pt-24 
    lg:pt-30 md:pt-30 pb-10 lg:pb-0 md:pb-0 sm:pb-0">              
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
    </AnimatedOnScroll>
    </>
  )
}

export default HeroSmaller
