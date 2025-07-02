'use client';
import React, { useState, useEffect } from 'react';
import { FaStar } from 'react-icons/fa';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import BrendSlider from './brendSlider';
import AnimatedOnScroll from './AnimatedOnScroll';
import { getTestimonials } from '../sanity/lib/getTestimonials';


function Testimonials() {
  const [testimonials, setTestimonials] = useState([]);
  const [current, setCurrent] = useState(0);

    useEffect(() => {
    async function fetchTestimonials() {
      const data = await getTestimonials();
      setTestimonials(data);
    }
    fetchTestimonials();
  }, []);

  if (testimonials.length === 0) return null;

  
    const total = testimonials.length;
  const handlePrev = () => {
    setCurrent((prev) => (prev === 0 ? total - 1 : prev - 1));
  };
  const handleNext = () => {
    setCurrent((prev) => (prev === total - 1 ? 0 : prev + 1));
  };

  const currentTestimonial = testimonials[current];

  return (
    <div className='testimonialsAnimation relative transition transition-all 0.5s '>
    {/* Arrows */}
    <section className='absolute top-0 right-2 flex flex-row gap-3 pt-3 pr-2 z-50'>
      <div className=' cursor-pointer bg-[#ede4fc] rounded-full p-1'>
        <FiChevronLeft size={30} onClick={handlePrev} />
      </div>
      <div className=' cursor-pointer bg-[#ede4fc] rounded-full p-1'>
        <FiChevronRight size={30} onClick={handleNext} />
      </div>
    </section>

    
    <main className=
    'testimonial relative bg-[#f9f6fe] w-full  flex flex-col items-center pt-20 pb-20 mt-12 gap-12 z-5 rounded-2xl overflow-hidden'>

      
      <section className='flex flex-col items-center gap-5 relative'>
      <AnimatedOnScroll>
        <img
          className='rounded-full w-20 h-20 object-cover
          transition-all duration-400 ease-in-out'
          src={currentTestimonial.avatarImage?.asset?.url || '/fallback.jpg'}
          alt='Customer avatar'
        />
        </AnimatedOnScroll>
        <h1 className='text-[1.4rem] sm:text-[2rem] leading-[1.2] 
        lg:text-[2.5rem] w-[80%] text-center font-[480]'>
          {currentTestimonial.title}
        </h1>

        {/* Stars */}
        <AnimatedOnScroll>
        <div className='flex flex-col items-center gap-2'>
          <div className='flex flex-row items-center gap-1 text-yellow-500'>
            <FaStar className='text-[1.3rem] text-black' />
            <FaStar className='text-[1.3rem] text-black' />
            <FaStar className='text-[1.3rem] text-black' />
            <FaStar className='text-[1.3rem] text-black' />
            <FaStar className='text-[1.3rem] text-black' />
          </div>
          <h2 className='text-[1.1rem] text-[#6c6474]'>Your Customer</h2>
        </div>
        </AnimatedOnScroll>


      </section>
      

      
      {/* Logos below */}
      <section className='flex flex-col items-center justify-center mt-5'>
        <AnimatedOnScroll>
        <p className='text-[#6c6474] hidden lg:block md:block sm:block  text-[0.8rem] lg:text-[1rem] md:text-[1rem] sm:text-[1rem]'>
          Feature client logos to build trust and credibility for your brand:
        </p>
        </AnimatedOnScroll>
        <div className='w-[32%] mt-4'>
          <BrendSlider />
        </div>
      </section>
    </main>
    </div>
  );
}

export default Testimonials;
