'use client'
import React, { useState } from 'react'
import { IoIosArrowUp } from "react-icons/io"
import AnimatedOnScroll from './AnimatedOnScroll';

const questions = [
  {
    id: 1,
    question: "Informacije o načinu isporuke.",
    answer: "Kada odete na checkout stranicu imaćete opcije za isproruke. Možete preuzeti u našoj radnji, dostavljamo na adresu i još dodatno ako vam treba montaža."
  },
  {
    id: 2,
    question: "Koji su načini plaćanja?",
    answer: "Možete izabrati da platite karticom online, platite pouzećem kešom ili uplata na račun(inforamcije za plaćanje na račun prilikom isporuke proizvoda)."
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
          <h3 className='text-[1rem] font-[450] pb-4'>Kako kupiti proizvod?</h3>
          <IoIosArrowUp
            className={`transition-transform duration-300 ${
              warrantyOpen ? 'rotate-0' : 'rotate-180'
            }`}
          />
        </div>
        {warrantyOpen && (
          <AnimatedOnScroll>
          <p className='text-[0.8rem] font-[450] text-[#6c6474] mt-[-5] pb-3 '>
          Proizvod na stranici kupite tako što kada izaberete varijantu i dimenzije kliknete na dugme "Dodaj u korpu", nakon toga otvorite korpu i kliknite checkout dugme.
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
