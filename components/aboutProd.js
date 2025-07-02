// components/AboutProd.jsx
import React from 'react'
import { BsFillLightningChargeFill } from "react-icons/bs"

function AboutProd({ icon, title, description }) {
  return (
    <div className='relative'>
    <section className='highlights relative pt-15 pb-10 pl-7 bg-[#f9f6fe] rounded-2xl w-[100%]'>
      <div className='mt-10 w-fit'>
        <h1 className='w-fit text-[1.1rem] font-medium'>{title}</h1>
        <p className='mt-2 text-[#6c6474] text-[0.95rem] w-[90%]'>{description}</p>
      </div>
    </section>
      <div className='highlights-icon absolute top-[-5px] left-0 bg-[#ede4fc] p-3 my-4 mx-4 rounded-full z-50'>
        {icon}
      </div>
    </div>
  )
}

export default AboutProd
