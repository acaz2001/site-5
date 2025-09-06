"use client";
import React, { useState } from 'react';
import { IoIosArrowUp } from "react-icons/io";
import AnimatedOnScroll from './AnimatedOnScroll';

const questions = [
   {
    id: 1,
    question: "Kako da naručim tuš kabinu po meri?",
    answer: "Možete nas kontaktirati na broj telefona 0603170707 ili na email: verdestaklo011@gmail.com."
  },   
  {
    id: 2,
    question: "Koji je rok izrade za tuš kabinu?",
    answer: "Rok izrade je 7-10 dana."
  },
  {
    id: 3,
    question: "Koje staklo se montira na kabini?",
    answer: "Staklo debljine 8mm i kali se, može da bude u boji sivo ili braon, ili peskirano staklo."
  },
  {
    id: 4,
    question: "Da li dajete garanciju?",
    answer: "Da, garancija se dobija na okov i traje 2 godine."
  },
  {
    id: 5,
    question: "Koliko treba vremena za montažu?",
    answer: "Vremenski treba sat i po, do dva sata da se namontira kabina."
  }
];

function FaqKabine() {
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
    lg:w-[100%] md:w-[100%] sm:w-[100%]'>
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

export default FaqKabine;
