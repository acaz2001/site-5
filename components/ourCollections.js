import React from 'react'
import Image from 'next/image'
import { LuArrowUpRight } from "react-icons/lu";
import Link from 'next/link';
import AnimatedOnScroll from './AnimatedOnScroll';

function OurCollections() {
  return (
    <AnimatedOnScroll>
    <main className='flex flex-col lg:flex lg:flex-row gap-6 lg:gap-0 md:gap-6 sm:gap-6  lg:h-fit md:h-fit sm:h-fit 
    md:grid md:grid-cols-2 md:grid-rows-2 flex-wrap items-center justify-between'>
      
      <div className='group relative lg:w-[32%] w-full'>
      <section className='collection group bg-[#f9f6fe] relative w-[100%]  lg:w-[100%] md:w-[100%] h-[275px] rounded-2xl flex 
      flex-col items-center justify-items-start cursor-pointer'>
        <Link href='/collections/home'>
        <h1 className=
        'pt-1 text-[3.8rem] font-semibold transition-all duration-400 ease-in-out group-hover:scale-[1.05]'>
        Klizne</h1>
        <img className='absolute top-5 transform translate-x-[-10%] w-[14rem] ' src={"/tus-kabina-klizna.png"}></img>
        {/*
        <div className='bg-amber-600 w-fit absolute bottom-0 right-[0] rounded-3xl p-3  '>
        <LuArrowUpRight className='text-[1.6rem] transition-transform duration-400 ease-in-out group-hover:rotate-45'/>
        </div>
        */}

        </Link>
      </section>
        <div className='collection-arrow absolute bottom-[3%] right-[2%] z-50'>
        <LuArrowUpRight className= 
          'arrow-collection bg-[#ede4fc] p-3 text-[2.9rem] rounded-4xl transition-transform duration-400 ease-in-out group-hover:rotate-45'/>
        </div>
      </div>

      <div className='group relative lg:w-[32%] w-full'>
      <section className='collection group bg-[#f9f6fe] relative w-[100%]  lg:w-[100%] md:w-[100%] h-[275px] rounded-2xl flex flex-col
      justify-items-center items-center cursor-pointer'>
        <Link href='/collections/footwear'>
        <h1 className='text-[3.8rem] font-semibold transition-all duration-400 ease-in-out group-hover:scale-[1.05]'>
          Šarke</h1>
        <img className='absolute top-5 w-[14rem]' src={"/tus-kabina-sarke.png"}></img>
        {/* 
        <div className='bg-amber-600 w-fit absolute bottom-0 right-[0] rounded-3xl p-3  '>
        <LuArrowUpRight className='text-[1.6rem] transition-transform duration-400 ease-in-out group-hover:rotate-45'/>
        </div>
        */}
        </Link>
      </section>
        <div className=' absolute bottom-1 right-2 z-50'>
          <LuArrowUpRight className= 
          'arrow-collection bg-[#ede4fc] p-3 text-[2.9rem] rounded-4xl transition-transform duration-400 ease-in-out group-hover:rotate-45'/>
        </div>
      </div>

      <div className='group relative lg:w-[32%] w-full'>
      <section className='collection group bg-[#f9f6fe] relative w-[100%]  lg:w-[100%] md:w-[100%] h-[275px] 
      rounded-2xl flex flex-col items-center justify-items-start cursor-pointer'>
        <Link href='/collections/technology'>
        <h1 className='text-[3.8rem]  font-semibold transition-all duration-400 ease-in-out 
        group-hover:scale-[1.05]'>
          Paravani
        </h1>
        <img className='absolute top-5 transform translate-x-[18%] w-[14rem]' src={"/tus-kabina-paravan.png"}></img>
        {/* 
        <div className='bg-amber-600 w-fit absolute bottom-0 right-[0] rounded-3xl p-3  '>
        <LuArrowUpRight className='text-[1.6rem] transition-transform duration-400 ease-in-out group-hover:rotate-45'/>
        </div>
        */}
        </Link>
        
      </section>
        <div className='absolute bottom-1 right-2 z-50'>
          <LuArrowUpRight className= 
          'arrow-collection bg-[#ede4fc] p-3 text-[2.9rem] rounded-4xl transition-transform duration-400 ease-in-out group-hover:rotate-45'/>
        </div>
      </div>
    </main>
    </AnimatedOnScroll>
  )
}

export default OurCollections
