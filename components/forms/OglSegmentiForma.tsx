'use client'
import React, { useState } from 'react';
import { useForm, ValidationError } from '@formspree/react';

function ContactForm() {
 // const [state, handleSubmit] = useForm("https://formspree.io/f/xkgkqonj");
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [message, setMessage] = useState('');
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    //console.log('Order submitted:', { name, phone, address, message });
    setFormSubmitted(true);
    setLoading(true);

    try {
      const response = await fetch('https://formspree.io/f/xkgkqonj', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, phone, address, message})
      })

      if (response.ok) {
        // Reset form after submission
        setTimeout(() => {
          setName('');
          setPhone('');
          setAddress('');
          setMessage('');
          setFormSubmitted(false);
          setSuccess(true)
        }, 3000);
      } else {
        console.log('Form submission failed')
      }
    } catch (error) {
      console.error('Error submitting form: ', error)
    }
  };

  //if (state.succeeded) {
  //  handleRedirect();
  //    return <p>Thanks for joining!</p>;
 //     
 // }
  return (
    <>
    {/*
            {formSubmitted ? (
          <div className="success-message">
            <p className="text-[#6c6474] text-[1.1rem] mt-1.5 font-[450] lg:w-[80%] md:w-[80%] sm:w-[100%] w-[100%]">Vaša forma je poslata, bićete kontaktirani u najkraćem roku.</p>
          </div>
        ) : (
    */}
          <div className='flex flex-col items-start max-w-[1618px]'>
            <form onSubmit={handleSubmit} className='flex flex-col items-start w-[100%] lg:w-[100%] gap-3'>

                <label htmlFor="name" className='justify-items-start text-[0.95rem] font-medium'>Ime i prezime:</label>
                <input 
                  className='bg-[#f9f6fe] p-2.5 w-[100%] rounded-lg text-[0.9rem]'
                  type="text" 
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              
                <label htmlFor="phone" className='justify-items-start text-[0.95rem] font-medium'>Broj telefona*</label>
                <input 
                  className='bg-[#f9f6fe] p-2.5 w-[100%] rounded-lg text-[0.9rem]'
                  type="tel" 
                  id="phone"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  required
                />

                <label htmlFor="address" className='justify-items-start text-[0.95rem] font-medium'>Email adresa:</label>
                <input 
                  className='bg-[#f9f6fe] p-2.5 w-[100%] rounded-lg text-[0.9rem]'
                  id="address"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  required
                />
              
                <label htmlFor="orderNote" className='justify-items-start text-[0.95rem] font-medium'>Poruka:</label>
                <textarea 
                  className='bg-[#f9f6fe] p-2.5 pb-12 w-[100%] rounded-lg text-[0.9rem]'
                  id="orderNote"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Ovde napišite sve što vas zanima..."
                  required
                />

              
              <button type="submit" 
              className={`bg-black text-white text-[0.95rem] font-medium w-[100%] rounded-lg pb-2 pt-2 mt-5 cursor-pointer 
              ${loading ? 'bg-red500' : null}`}>
                {success ? 'Uspešno poslato' : loading ? 'Slanje...' : 'Pošaljite poruku'}
              </button>
            </form>
          </div>
        
        </>
  );
}

function oglSegmetiForma() {
  return (
    <ContactForm />
  );
}

export default oglSegmetiForma;