import Link from 'next/link'
import React from 'react'
import AnimatedOnScroll from './AnimatedOnScroll'

function Footer() {
  return (
    <AnimatedOnScroll>
    <main className='relative mt-12 flex flex-col justify-between items-start  bg-[#D0F0C0] rounded-2xl
    lg:flex-row
    md:flex-row'>
      <section className='flex flex-col relative pt-10 pr-10 pb-5 pl-5
      lg:pl-15
      md:pl-15 '>
        <div className='relative w-fit'>
            <h1 className='text-[1.6rem] font-medium w-[100%]
            lg:w-[55%] md:-w[90%]'>
            Uključite se na naš newsletter i pratite obaveštenja o raznim popustima.
            </h1>
            <div className='bg-white mt-4 rounded-2xl w-fit flex flex-row justify-between w-[100%]'>
            <input className='w-[60%] border-[5px] py-2 border-transparent pl-3 pr-8 focus:outline-none'
            type="text" id="fname" name="firstname" placeholder="Vaša email adresa">
            </input>
            <button type='submit' className='bg-[black] rounded-xl my-1 mx-1 pt-2 pb-2 pl-8 pr-8 text-[1.1rem]
            text-white font-[450] cursor-pointer'>
            Pošalji
            </button>
            </div>
            
            <p className='w-fit mt-10 text-[#6c6474] text-[0.8rem]'>
            Radnja Lokacija: <span className='text-black'>Bulevar Kralja Aleksandra 546 Zvezdara</span> 
            </p>
        </div>
      </section>



      <section className='flex flex-row gap-15 pl-8  pr-20 pb-5
      lg:pt-17 md:pt-17'>
        <div >
            <ul className='flex flex-col gap-3'>
                <li className='text-[1.1rem] font-medium'>Stranice</li>
                <Link href='/' prefetch>
                <li className='text-[0.90rem] text-[#6c6474] hover:text-black cursor-pointer'>
                  Početna</li></Link>
                <Link href='/prodavnica' prefetch>
                <li className='text-[0.90rem] text-[#6c6474] hover:text-black cursor-pointer'>
                  Prodavnica</li></Link>
                <Link href='/tus-kabine' prefetch>
                <li className='text-[0.90rem] text-[#6c6474] hover:text-black cursor-pointer'>
                  Tuš kabine</li></Link>
                <Link href='/ogledala-iz-segmenata' prefetch>
                <li className='text-[0.90rem] text-[#6c6474] hover:text-black cursor-pointer'>
                  Ogl. segmenti</li></Link>
                <Link href='/ogledalo-lajsne' prefetch>
                <li className='text-[0.90rem] text-[#6c6474] hover:text-black cursor-pointer'>
                  Ogl. sa lajsnama</li></Link>
                <Link href='/ogledala-za-kupatilo' prefetch>
                <li className='text-[0.90rem] text-[#6c6474] hover:text-black cursor-pointer'>
                  Ogl. za kupatilo</li></Link>
            </ul>
        </div>
        <div>
        <ul className='flex flex-col gap-3'>
                <li className='text-[1.1rem] font-medium'>Informacije</li>
                <Link href='/uslovi-i-odredbe' prefetch={false}>
                <li className='text-[0.90rem] text-[#6c6474] hover:text-black cursor-pointer'>
                  Uslovi i odredbe
                </li>
                </Link>
                <Link href= '/politika-privatnosti' prefetch={false}>
                <li className='text-[0.90rem] text-[#6c6474] hover:text-black cursor-pointer '>
                  Politika privatnosti
                </li>
                </Link>
                <Link href= '/podrska' prefetch={false}>
                <li className='text-[0.90rem] text-[#6c6474] hover:text-black cursor-pointer'>
                  Podrška</li>
                </Link>
            </ul>
        </div>
      </section>
    </main>
  </AnimatedOnScroll>
  )
}

export default Footer
