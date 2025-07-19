import React from 'react'
import { LuArrowUpRight } from "react-icons/lu";
import Link from 'next/link';
import AnimatedOnScroll from './AnimatedOnScroll';

function BlogBanner() {
  return (
    <AnimatedOnScroll>
    <main className='flex flex-col w-[100%] h-[55rem] mt-20
    lg:flex lg:flex-row lg:w-[100%] lg:h-[32rem]
    md:flex-col md:w-[100%] md:h-[53rem]
    sm:flex-col sm:w-[100%] sm:h-[48rem]'>

        <section className='bg-[url(/ogledalo-segmenti.jfif)] bg-cover bg-center object-cover w-[100%] h-[46%] 
        lg:rounded-l-2xl lg:rounded-tr-none  lg:w-[48%] lg:h-[100%]
        md:w-[100%] md:rounded-l-2xl md:h-[63%]
        sm:w-[100%] sm:rounded-t-2xl sm:h-[58%]
        rounded-t-[15px]'>
                
        </section>

        
        <section className='flex flex-col justify-between w-[100%] h-[54%] p-6 bg-[#f9f6fe] rounded-b-2xl 
        lg:w-[52%] lg:h-[100%] lg:rounded-r-2xl lg:rounded-bl-none
        md:w-[100%] md:rounded-b-2xl md:h-[37%]
        sm:w-[100%] sm:rounded-b-2xl sm:h-[42%]
        lg:p-8 md:p-8 sm:p-8'>
            <div>
                <h1 className='text-[1.9rem] w-[100%] 
                lg:text-[2.5rem] 
                font-medium leading-[1.2] lg:w-[85%]
                md:text-[2rem]
                sm:text-[2rem] sm:w-[100%]
                '>
                    Šta je to ogledalo iz segmenata?
                </h1>
                <p className='text-[1rem] text-[#6c6474] font-medium mt-5 w-[100%]
                lg:w-[85%] lg:text-[1.1rem]
                md:text-[1.1rem]
                sm:w-[100%]'>
                Ogledalo (može biti i u boji) koje je podeljeno, ispresecano na manje komade/polja
                i to mu daje njegovu formu.Na svakom komadu je uradjena obrada takozvane oborene 
                ivice ili stručno fazeta, ona još poboljšava izgled i daje ogledalu na izgledu 
                skupocenosti i otmenosti. </p>
            </div>
            <div className=' relative flex lg:flex-row md:flex-row sm:flex-row flex-col'>
                <div className=' flex flex-row items-center gap-2'>
                    <div className='rounded-full'>
                        <img className='w-[2.2rem] h-[2.2rem] rounded-full' src={"/avatar2.jpg"}></img>
                    </div>
                    <div>
                        <p className='font-medium'>Written by Sarah Miller</p>
                        <p className='text-[0.8rem] text-[#6c6474] font-normal'>Graphic Designer</p>
                    </div>
                </div>
                <Link href={`/blog/how-to-make-your-social-media`}>
                <div className='blogBanner-icon absolute bottom-0 right-0 bg-[#ede4fc] p-3 rounded-3xl transition-transform duration-400 ease-in-out cursor-pointer hover:rotate-45'>
                    <LuArrowUpRight className='text-[1.4rem] '/>
                </div>
                </Link>
            </div>
        </section>
    </main>
    </AnimatedOnScroll>
  )
}

export default BlogBanner
