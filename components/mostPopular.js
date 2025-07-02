import React from 'react'
import Image from 'next/image'
import { LuArrowUpRight } from "react-icons/lu";



function MostPopular() {
  return (
    <main className='h-[520px] flex flex-row items-center justify-between'>
      <section className='group h-[100%]  flex flex-col relative w-[31%]'>
        <div className='h-[80%] bg-[#f9f6fe] p-10 relative rounded-3xl cursor-pointer'>
            <img className='w-[20rem] transition-all duration-400 ease-in-out group-hover:scale-[1.05]' src={"/mostpopular1.png"}></img>
            <div className='bg-amber-600 w-fit absolute bottom-0 right-[0] rounded-3xl p-3  '><LuArrowUpRight className='text-[1.6rem] transition-transform duration-400 ease-in-out group-hover:rotate-45'/></div>
        </div>
        <div className='mt-4 flex flex-col gap-1'>
            <h1 className='text-[1.3rem] font-medium'>Retro Handheld Console</h1>
            <h4 className='text-[1.1rem font-medium'>Technology</h4>
            <p className='text-[0.8rem] text-[#6c6474]'>USD $59.99</p>
        </div>
      </section>
      <section className='h-[100%] group flex flex-col relative w-[31%]' >
      <div className='h-[80%] bg-[#f9f6fe] p-10 relative rounded-3xl cursor-pointer'>
      <img className='w-[20rem] transition-all duration-400 ease-in-out group-hover:scale-[1.05]' src={"/shoe.png"}></img>
      <div className='bg-amber-600 w-fit absolute bottom-0 right-[0] rounded-3xl p-3  '><LuArrowUpRight className='text-[1.6rem] transition-transform duration-400 ease-in-out group-hover:rotate-45'/></div>
        </div>
        <div className='mt-4 flex flex-col gap-1'>
            <h1 className='text-[1.3rem] font-medium'>Horizon Glow Sneakers</h1>
            <h4 className='text-[1.1rem] font-medium'>Footwear</h4>
            <p className='text-[0.8rem] text-[#6c6474]'>USD $59.99</p>
        </div>
      </section>
      <section className='h-[100%] group flex flex-col relative w-[31%]'>
      <div className='h-[80%] bg-[#f9f6fe] p-10 relative rounded-3xl cursor-pointer'>
      <img className='w-[20rem] transition-all duration-400 ease-in-out group-hover:scale-[1.05]' src={"/houseplant.png"}></img>
      <div className='bg-amber-600 w-fit absolute bottom-0 right-[0] rounded-3xl p-3  '><LuArrowUpRight className='text-[1.6rem] transition-transform duration-400 ease-in-out group-hover:rotate-45'/></div>
        </div>
        <div className='mt-4 flex flex-col gap-1'>
            <h1 className='text-[1.3rem] font-medium'>Tropical Paradise Plant</h1>
            <h4 className='text-[1.1rem] font-medium'>Home</h4>
            <p className='text-[0.8rem] text-[#6c6474]'>USD $39.99</p>
        </div>
      </section>
    </main>
  )
}

export default MostPopular
