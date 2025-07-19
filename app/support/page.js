'use client'
import { useState } from 'react';
import React from 'react'
import Hero from '../../components/hero'
import Faq from '../../components/faq'
import AnimatedOnScroll from '../../components/AnimatedOnScroll'

function page() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch('https://formspree.io/f/xjkovpng', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (res.ok) {
        setSuccess(true);
        setFormData({
          name: '',
          email: '',
          message: ''
        });
      } else {
        alert('Greška prilikom slanja poruke.');
      }
    } catch (error) {
      console.error(error);
      alert('Došlo je do greške.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className='flex flex-col gap-15 '>
        <Hero
        badgeText="Support"
        heading="Kako možemo da vam pomognemo."
        subheading="Use this page to answer common questions, offer help, and guide customers to solutions quickly and efficiently."
        />
        <div className='flex flex-col items-center w-full'>
          <AnimatedOnScroll>
            <h1 className='text-[2.5rem] font-medium text-center'>
            Često postavljena pitanja
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
            <p className='text-[#6c6474] text-[1.1rem] mt-2 mb-10 text-center w-[100%]'>
            Send us a message below and we'll get back to you in 1 business day.
            </p>
          </AnimatedOnScroll>  
        </div>

      <AnimatedOnScroll>
        <div className='flex flex-col items-center mt-[-45px]'>
          <form
            onSubmit={handleSubmit}
            className='flex flex-col items-start w-[100%] lg:w-[64%] gap-3'
          >
            <label
              htmlFor="name"
              className='justify-items-start text-[0.95rem] font-medium'
            >
              Name:
            </label>
            <input
              className='bg-[#f9f6fe] p-2.5 w-[100%] rounded-lg text-[0.9rem]'
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />

            <label
              htmlFor="email"
              className='justify-items-start text-[0.95rem] font-medium'
            >
              Email:
            </label>
            <input
              className='bg-[#f9f6fe] p-2.5 w-[100%] rounded-lg text-[0.9rem]'
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />

            <label
              htmlFor="message"
              className='justify-items-start text-[0.95rem] font-medium'
            >
              Message:
            </label>
            <textarea
              className='bg-[#f9f6fe] p-2.5 pb-12 w-[100%] rounded-lg text-[0.9rem]'
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>

            <button
              type='submit'
              className={`bg-[#8345d8] text-white text-[0.95rem] font-medium w-[100%] rounded-lg pb-2 pt-2 mt-5 cursor-pointer ${
                loading ? 'opacity-50 cursor-not-allowed' : ''
              }`}
              disabled={loading}
            >
              {success ? 'Uspešno poslato' : loading ? 'Slanje...' : 'Submit'}
            </button>
          </form>
        </div>
      </AnimatedOnScroll>

    </main>
  )
}

export default page
