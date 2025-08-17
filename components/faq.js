"use client";
import React, { useState } from 'react';
import { IoIosArrowUp } from "react-icons/io";
import AnimatedOnScroll from './AnimatedOnScroll';

const questions = [
  {
    id: 1,
    question: "Koji su sve načini plaćanja kada dostavite proizvod?",
    answer: "Proizvod možete platiti u gotovini ili karticom, a možete direktno na račun."
  },
  {
    id: 2,
    question: "Kako da vas kontaktiramo?",
    answer: "Na broj telefona: 0603170707, email: verdestaklo011@gmail.com"
  },
  {
    id: 3,
    question: "Kako da poručim tuš kabinu po meri.",
    answer: "Možete nas kontaktirati na broj telefona 0603170707 ili na email: verdestaklo011@gmail.com."
  },
  {
    id: 4,
    question: "Da li radite van Beograda?",
    answer: "Radimo, ali samo ako je veći posao u pitanju, za takvu uslugu morate nas kontaktirati na 0603170707."
  },
  {
    id: 5,
    question: "Gde vam se nalazi radnja?",
    answer: "Bulevar kralja Aleksandra 546, Mali Mokri Lug, Beograd"
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
