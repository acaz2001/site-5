"use client";
import React, { useState } from 'react';
import { IoIosArrowUp } from "react-icons/io";
import AnimatedOnScroll from './AnimatedOnScroll';

const questions = [
  {
    id: 1,
    question: "How do I access my digital downloads after purchase?",
    answer: "Once your purchase is complete, you’ll receive an email with a download link. You can also access your downloads directly from your account page."
  },
  {
    id: 2,
    question: "What payment methods do you accept?",
    answer: "We accept all major credit cards, PayPal, and other secure payment options for your convenience."
  },
  {
    id: 3,
    question: "Can I customize the digital products I purchase?",
    answer: "Yes, all our digital products are fully customizable and come with easy-to-edit files to suit your needs."
  },
  {
    id: 4,
    question: "How long does shipping take for physical products?",
    answer: "Shipping times vary depending on your location, but most orders are delivered within 5–7 business days."
  },
  {
    id: 5,
    question: "What’s your return policy?",
    answer: "We offer returns on physical products within 30 days of purchase. Digital products are non-refundable due to their nature, but feel free to contact us if you encounter any issues."
  }
];

function Faq() {
  const [openItems, setOpenItems] = useState([]);

  const toggleAnswer = (id) => {
    setOpenItems((prev) =>
      prev.includes(id)
        ? prev.filter((itemId) => itemId !== id)
        : [...prev, id]
    );
  };

  return (
    <main className='w-[100%] flex flex-col gap-5
    lg:w-[65%] md:w-[65%] sm:w-[100%]'>
      {questions.map(({ id, question, answer }) => {
        const isOpen = openItems.includes(id);
        return (
          <section
            key={id}
            className='relative bg-[#f9f6fe] rounded-2xl font-medium text-[1.2rem] cursor-pointer overflow-hidden transition-all duration-300'
          >
            <AnimatedOnScroll>
            <div className='p-6' onClick={() => toggleAnswer(id)}>
              <h1 className='flex justify-between items-center text-[1rem] lg:text-[1.2rem] md:text-[1.2rem] sm:text-[1.2rem]'>
                {question}
                <IoIosArrowUp
                  className={`transition-transform duration-300 ${isOpen ? 'rotate-180' : 'rotate-0'}`}
                />
              </h1>

              <div
                className={`transition-all duration-300 ease-in-out overflow-hidden ${
                  isOpen ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <p className='mt-4 text-[#6c6474] text-[0.8rem] lg:text-[1rem] md:text-[1rem] sm:text-[1rem] font-normal'>{answer}</p>
              </div>
            </div>
            </AnimatedOnScroll>
          </section>
        );
      })}
    </main>
  );
}

export default Faq;
