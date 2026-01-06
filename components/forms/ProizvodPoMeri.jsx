'use client'
import React, { useState } from 'react';
import { useForm, ValidationError } from '@formspree/react';
import { getProductBySlug } from '../../sanity/lib/getProductBySlug'

function ProizvodPoMeriForma({product,params}) {
 // const [state, handleSubmit] = useForm("https://formspree.io/f/xkgkqonj");
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [message, setMessage] = useState('');
  const [dimenzija, setDimenzija] = useState('');
  const [sirina, setSirina] = useState('');
  const [visina, setVisina] = useState('');
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [ledBoja, setLedBoja] = useState("Žuta boja");
  const [okovBoja, setOkovBoja] = useState("Siva");
  const [bojaStakla, setBojaStakla] = useState("Providno")
  const [slug, setSlug] = useState(params)

  const handleSubmit = async (e) => {
    e.preventDefault();
    //console.log('Order submitted:', { name, phone, address, message });
    setFormSubmitted(true);
    setLoading(true);

    try {
      const response = await fetch('https://formspree.io/f/xnjaylkn', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, phone, address, message, dimenzija,sirina, visina,
          ledBoja,okovBoja,bojaStakla,slug,
        })
      })

      if (response.ok) {
        // Reset form after submission
        setTimeout(() => {
          setName('');
          setPhone('');
          setAddress('');
          setMessage('');
          setDimenzija('');
          setLedBoja('');
          setOkovBoja('');
          setSirina('');
          setVisina('');
          setBojaStakla('');
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


                {/*Slucaj kada je ogledalo sa ramom u pitanju*/}
                {product.category?.name === 'Sa ramom' ? 
                  <>
                   <label htmlFor="visina" className='justify-items-start text-[0.95rem] font-medium'>Visina (unesite u centimetrima):</label>
                    <input 
                      className='bg-[#f9f6fe] p-2.5 w-[100%] rounded-lg text-[0.9rem]'
                      id="visina"
                      value={visina}
                      onChange={(e) => setVisina(e.target.value)}
                      required
                    />
                    <label htmlFor="sirina" className='justify-items-start text-[0.95rem] font-medium'>Širina (unesite u centimetrima):</label>
                    <input 
                      className='bg-[#f9f6fe] p-2.5 w-[100%] rounded-lg text-[0.9rem]'
                      id="sirina"
                      value={sirina}
                      onChange={(e) => setSirina(e.target.value)}
                      required
                    />
                  </> : null}
                

                {product.category?.name === 'Kupatilo/ LED rasveta' ||  product.category?.name === 'Kupatilo/ Bez LED rasvete' ? 
                <>
                  <label htmlFor="visina" className='justify-items-start text-[0.95rem] font-medium'>Visina (unesite u centimetrima):</label>
                  <input 
                    className='bg-[#f9f6fe] p-2.5 w-[100%] rounded-lg text-[0.9rem]'
                    id="visina"
                    value={visina}
                    onChange={(e) => setVisina(e.target.value)}
                    required
                  />
                  <label htmlFor="sirina" className='justify-items-start text-[0.95rem] font-medium'>Širina (unesite u centimetrima):</label>
                  <input 
                    className='bg-[#f9f6fe] p-2.5 w-[100%] rounded-lg text-[0.9rem]'
                    id="sirina"
                    value={sirina}
                    onChange={(e) => setSirina(e.target.value)}
                    required
                  />
                  <label htmlFor="ledBoja" className='justify-items-start text-[0.95rem] font-medium'>Boja led rasvete:</label>
                  <select
                      name="ledBoja"
                      value={ledBoja}
                      onChange={(e) => setLedBoja(e.target.value)}
                      required
                      className="border border-gray-300 p-2 rounded-md w-full"
                    >
                      <option value="Žuta boja">Žuta boja</option>
                      <option value="Bela boja">Bela boja</option>
                    </select>
                </> : null}

                {/*Slucaj kada je tus kabina u pitanju */}
                {product.category?.name === 'Kabina/ Šarke' ||  
                product.category?.name === 'Kabina/ Klizna' ? 
                <>
                  <label htmlFor="dimenzija" className='justify-items-start text-[0.95rem] font-medium'>Dimenzija (unesite u centimetrima):</label>
                  <input 
                    className='bg-[#f9f6fe] p-2.5 w-[100%] rounded-lg text-[0.9rem]'
                    id="dimenzija"
                    value={dimenzija}
                    onChange={(e) => setDimenzija(e.target.value)}
                    required
                  />
                  <label htmlFor="visina" className='justify-items-start text-[0.95rem] font-medium'>Visina (unesite u centimetrima):</label>
                  <input 
                    className='bg-[#f9f6fe] p-2.5 w-[100%] rounded-lg text-[0.9rem]'
                    id="visina"
                    value={visina}
                    onChange={(e) => setVisina(e.target.value)}
                    required
                  />       
                  <label htmlFor="bojaStakla" className='justify-items-start text-[0.95rem] font-medium'>Staklo boja:</label>
                    <select
                        name="bojaStakla"
                        value={bojaStakla}
                        onChange={(e) => setBojaStakla(e.target.value)}
                        required
                        className="border border-gray-300 p-2 rounded-md w-full"
                      >
                        <option value="Providno">Providno</option>
                        <option value="Sivo">Sivo</option>
                        <option value="Braon">Braon</option>
                        <option value="Matirano">Matirano</option>
                  </select>      
                    <label htmlFor="okovBoja" className='justify-items-start text-[0.95rem] font-medium'>Boja okova:</label>
                    <select
                        name="okovBoja"
                        value={okovBoja}
                        onChange={(e) => setOkovBoja(e.target.value)}
                        required
                        className="border border-gray-300 p-2 rounded-md w-full"
                      >
                        <option value="Siva">Siva</option>
                        <option value="Mat crna">Mat crna</option>
                        <option value="Mat zlatna">Mat zlatna</option>
                        <option value="Sjaj zlatna">Sjaj zlatna</option>
                      </select>
                  </> : null}

                {/*Slucaj kada je paravan u pitanju */}
                {product.category?.name === 'Paravan' ? 
                <>
                  <label htmlFor="visina" className='justify-items-start text-[0.95rem] font-medium'>Visina (unesite u centimetrima):</label>
                  <input 
                    className='bg-[#f9f6fe] p-2.5 w-[100%] rounded-lg text-[0.9rem]'
                    id="visina"
                    value={visina}
                    onChange={(e) => setVisina(e.target.value)}
                    required
                  />
                  <label htmlFor="sirina" className='justify-items-start text-[0.95rem] font-medium'>Širina (unesite u centimetrima):</label>
                  <input 
                    className='bg-[#f9f6fe] p-2.5 w-[100%] rounded-lg text-[0.9rem]'
                    id="sirina"
                    value={sirina}
                    onChange={(e) => setSirina(e.target.value)}
                    required
                  />
                  
                  <label htmlFor="bojaStakla" className='justify-items-start text-[0.95rem] font-medium'>Staklo boja:</label>
                    <select
                        name="bojaStakla"
                        value={bojaStakla}
                        onChange={(e) => setBojaStakla(e.target.value)}
                        required
                        className="border border-gray-300 p-2 rounded-md w-full"
                      >
                        <option value="Providno">Providno</option>
                        <option value="Sivo">Sivo</option>
                        <option value="Braon">Braon</option>
                        <option value="Matirano">Matirano</option>
                  </select>
                  <label htmlFor="okovBoja" className='justify-items-start text-[0.95rem] font-medium'>Boja okova:</label>
                    <select
                        name="okovBoja"
                        value={okovBoja}
                        onChange={(e) => setOkovBoja(e.target.value)}
                        required
                        className="border border-gray-300 p-2 rounded-md w-full"
                      >
                        <option value="Siva">Siva</option>
                        <option value="Mat crna">Mat crna</option>
                        <option value="Mat zlatna">Mat zlatna</option>
                        <option value="Sjaj zlatna">Sjaj zlatna</option>
                  </select>
                </> 
                : null}


              
                <label htmlFor="orderNote" className='justify-items-start text-[0.95rem] font-medium'>Dodatni zahtevi (nije obavezno):</label>
                <textarea 
                  className='bg-[#f9f6fe] p-2.5 pb-12 w-[100%] rounded-lg text-[0.9rem]'
                  id="orderNote"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Ovde pišite ako hoćete još neke dodatne izmene na proizvodu..."
                  //required
                />

              
              <button type="submit" 
              className={`bg-black text-white text-[0.95rem] font-medium w-[100%] rounded-lg pb-2 pt-2 mt-5 cursor-pointer 
              ${loading ? 'bg-red500' : success ? 'bg-green-400' : null}`}>
                {success ? 'Uspešno poslato' : loading ? 'Slanje...' : 'Pošaljite upit'}
              </button>
            </form>
          </div>
        
        </>
  );
}

function  ProizvodPoMeri({product,params}) {
  return (
    <ProizvodPoMeriForma product={product} params={params}/>
  );
}

export default ProizvodPoMeri;