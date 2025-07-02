'use client'
import React, { useState } from 'react'
import { IoIosArrowUp } from "react-icons/io"
import AnimatedOnScroll from './AnimatedOnScroll';

const questions = [
  {
    id: 1,
    question: "Shipping Information?",
    answer: "We offer reliable and fast shipping to ensure your order reaches you on time. All orders are processed within 1–2 business days, with tracking provided for a seamless delivery experience."
  },
  {
    id: 2,
    question: "What payment methods do you accept?",
    answer: "We accept all major credit cards, PayPal, and other secure payment options for your convenience."
  }
];

function FaqShop() {
  const [openItems, setOpenItems] = useState([]);
  const [warrantyOpen, setWarrantyOpen] = useState(false);

  const toggleAnswer = (id) => {
    setOpenItems((prev) =>
      prev.includes(id)
        ? prev.filter((itemId) => itemId !== id)
        : [...prev, id]
    );
  };

  const toggleWarranty = () => {
    setWarrantyOpen(!warrantyOpen);
  };

  return (
    <main className='flex flex-col w-[100%] gap-10'>

      {/* Warranty section */}
      <div className='border-b relative '>
        <div
          onClick={toggleWarranty}
          className='flex flex-row justify-between items-center cursor-pointer '
        >
          <h3 className='text-[1rem] font-[450] pb-4'>Warranty</h3>
          <IoIosArrowUp
            className={`transition-transform duration-300 ${
              warrantyOpen ? 'rotate-0' : 'rotate-180'
            }`}
          />
        </div>
        {warrantyOpen && (
          <AnimatedOnScroll>
          <p className='text-[0.8rem] font-[450] text-[#6c6474] mt-[-5] pb-3 '>
            Every purchase is backed by our commitment to quality. Enjoy peace of mind with a 90-day warranty, ensuring your product delivers satisfaction and reliability.
          </p>
          </AnimatedOnScroll>
        )}
      </div>

      {/* FAQ list */}
      {questions.map((q) => (
        <div key={q.id} className='border-b'>
          <div
            onClick={() => toggleAnswer(q.id)}
            className='flex flex-row justify-between items-center cursor-pointer'
          >
            <h3 className='text-[1rem] font-[450] pb-4'>{q.question}</h3>
            <IoIosArrowUp
              className={`transition-all duration-300 ease-in-out ${
                openItems.includes(q.id) ? 'rotate-0' : 'rotate-180'
              }`}
            />
          </div>
          {openItems.includes(q.id) && (
            <AnimatedOnScroll>
            <p className='text-[0.8rem] font-[450] text-[#6c6474] mt-[-5] pb-3'>
              {q.answer}
            </p>
            </AnimatedOnScroll>
          )}
        </div>
      ))}

    </main>
  )
}

export default FaqShop
