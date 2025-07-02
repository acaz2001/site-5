import React from 'react'
import Hero from '../../components/hero'
import Faq from '../../components/faq'
import AnimatedOnScroll from '../../components/AnimatedOnScroll'

function page() {
  return (
    <main className='flex flex-col gap-15 '>
        <Hero
        badgeText="Support"
        heading="Help your customers."
        subheading="Use this page to answer common questions, offer help, and guide customers to solutions quickly and efficiently."
        />
        <div className='flex flex-col items-center w-full'>
          <AnimatedOnScroll>
            <h1 className='text-[2.5rem] font-medium text-center'>
            Frequently asked questions
            </h1>
          </AnimatedOnScroll>
            <p className='text-[#6c6474] text-[1.1rem] mt-2 mb-10 text-center'>
            Give your visitors quick answers to common questions about your store like these.
            </p>
            <Faq></Faq>
        </div>


        <div className='flex flex-col items-center'>
          <AnimatedOnScroll>
            <h1 className='text-[2.5rem] font-medium text-center'>
            Still got questions?
            </h1>
          </AnimatedOnScroll>
          <AnimatedOnScroll>
            <p className='text-[#6c6474] text-[1.1rem] mt-2 mb-10 text-center w-[80%]'>
            Send us a message below and we'll get back to you in 1 business day.
            </p>
          </AnimatedOnScroll>  
        </div>

        <AnimatedOnScroll>
        <div className='flex flex-col items-center mt-[-45]'>
        <form className='flex flex-col items-start w-[100%] lg:w-[64%] gap-3'>
        <label className='justify-items-start text-[0.95rem] font-medium' for="fname">Name:</label>
        <input className='bg-[#f9f6fe] p-2.5 w-[100%] rounded-lg text-[0.9rem]' type="text" id="fname" name="fname"></input>
        <label className='justify-items-start text-[0.95rem] font-medium' for="fname">Email:</label>
        <input className='bg-[#f9f6fe] p-2.5 w-[100%] rounded-lg text-[0.9rem]' type="email" id="fname" name="fname"></input>
        <label className='justify-items-start text-[0.95rem] font-medium' for="fname">Message:</label>
        <input className='bg-[#f9f6fe] p-2.5 pb-12 w-[100%] rounded-lg text-[0.9rem]' type="text" id="fname" name="fname"></input>
        <button className='bg-[#8345d8] text-[#ffff] text-[0.95rem] font-medium w-[100%] rounded-lg pb-2 pt-2 mt-5 cursor-pointer' type='submit'>Submit</button>
        </form>
        </div>
        </AnimatedOnScroll>
    </main>
  )
}

export default page
