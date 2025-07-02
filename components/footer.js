import Link from 'next/link'
import React from 'react'
import AnimatedOnScroll from './AnimatedOnScroll'

function Footer() {
  return (
    <AnimatedOnScroll>
    <main className='relative mt-12 flex flex-col justify-between items-start  bg-[#ede4fc] rounded-2xl
    lg:flex-row
    md:flex-row'>
      <section className='flex flex-col relative pt-10 pr-10 pb-5 pl-5
      lg:pl-15
      md:pl-15 '>
        <div className='relative w-fit'>
            <h1 className='text-[1.6rem] font-medium w-[100%]
            lg:w-[55%] md:-w[90%]'>
            Join our newsletter and get 20% off your first purchase.
            </h1>
            <div className='bg-white mt-4 rounded-2xl w-fit flex flex-row justify-between w-[100%]'>
            <input className='w-[60%] border-[5px] py-2 border-transparent pl-3 pr-8 focus:outline-none'
            type="text" id="fname" name="firstname" placeholder="Your email adress">
            </input>
            <button type='submit' className='bg-[#8345d8] rounded-xl my-1 mx-1 pt-2 pb-2 pl-8 pr-8 text-[1.1rem]
            text-white font-[450] cursor-pointer'>
            Join
            </button>
            </div>
            <p className='w-fit mt-10 text-[#6c6474] text-[0.8rem]'>
            Created by <span className='text-black'>Aleksandar Živković</span> © 2024    
            </p>
        </div>
      </section>



      <section className='flex flex-row gap-15 pl-8  pr-20 pb-5
      lg:pt-17 md:pt-17'>
        <div >
            <ul className='flex flex-col gap-3'>
                <li className='text-[1.1rem] font-medium'>Pages</li>
                <Link href='/'>
                <li className='text-[0.90rem] text-[#6c6474] hover:text-black cursor-pointer'>
                  Home</li></Link>
                <Link href='/shop'>
                <li className='text-[0.90rem] text-[#6c6474] hover:text-black cursor-pointer'>
                  Shop</li></Link>
                <Link href='/collections'>
                <li className='text-[0.90rem] text-[#6c6474] hover:text-black cursor-pointer'>
                  Collections</li></Link>
                <Link href='/blog'>
                <li className='text-[0.90rem] text-[#6c6474] hover:text-black cursor-pointer'>
                  Blog</li></Link>
            </ul>
        </div>
        <div>
        <ul className='flex flex-col gap-3'>
                <li className='text-[1.1rem] font-medium'>Information</li>
                <Link href='/terms-and-conditions'>
                <li className='text-[0.90rem] text-[#6c6474] hover:text-black cursor-pointer'>
                  Terms & Conditions</li>
                </Link>
                <Link href= '/privacy-policy'>
                <li className='text-[0.90rem] text-[#6c6474] hover:text-black cursor-pointer '>
                  Privacy policy</li>
                </Link>
                <Link href= '/support'>
                <li className='text-[0.90rem] text-[#6c6474] hover:text-black cursor-pointer'>
                  Support</li>
                </Link>
                <li className='text-[0.90rem] text-[#6c6474] hover:text-black cursor-pointer'>
                  404</li>
            </ul>
        </div>
      </section>
    </main>
  </AnimatedOnScroll>
  )
}

export default Footer
