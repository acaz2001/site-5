'use client'
{/*
import React from 'react'
import { useState,useEffect } from 'react';
import { IoIosArrowRoundUp } from "react-icons/io";
import './style.css'
import Image from 'next/image';
import { urlFor } from '../sanity/lib/image';
import { IoIosArrowUp } from "react-icons/io";
import CartIcon from './cartIcon';
import { BsBag } from "react-icons/bs";
import { useCart } from '../context/CartContext';
import { MdClose } from "react-icons/md";


function BactToTop({image,name,cena,dimenzija,product,opis}) {
let [isVisible, setIsVisible] = useState(false);
const [showCart, setShowCart] = useState(false);
const { addToCart, openCart } = useCart();

  const handleToggleCart = () => {
    setShowCart((prev) => !prev);
  };

  const handleCloseCart = () => {
    setShowCart(false);
  };

const addToCartHandler = () => {
    addToCart({
    id: product._id,
    name: product.name,
    price: currentPrice,
    image: selectedVariant.image?.asset
        ? urlFor(selectedVariant.image.asset).width(300).url()
        : '/fallback.png',
    variant: selectedVariant.name,
    dimenzija: selectedDimension?.naziv || null,
    quantity: 1,
    });
};
  
  const handleAddToCartAndShow = () => {
    addToCartHandler();
    setIsAdded(true);         // ✅ Postavi na true
    openCart();               // ✅ Prikazuje AddToCart
  
    // ⏳ Resetuje se posle 3 sekunde
    setTimeout(() => {
      setIsAdded(false);
    }, 2000);
  };

  const currentPrice = product.price;

  const isBrowser = () => typeof window !== 'undefined'; //The approach recommended by Next.js

  function scrollToTop() {
      if (!isBrowser()) return;
      window.scrollTo({ top: 0, behavior: 'smooth' });
  }
    
  const handleScroll = () => {
    // Show the button when the user scrolls down
    if (window.scrollY > 100) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

    const closeMenu = () => {
        setIsVisible(false);
        window.removeEventListener('scroll', handleScroll);

    }

  useEffect(() => {
    // Add scroll event listener when the component mounts
    window.addEventListener('scroll', handleScroll);

    

    // Remove the event listener when the component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

    function GFG(str, maxLength) {
        if (str.length > maxLength) {
            return str.substring(0, maxLength) + '...';
        }
        return str;
    }
  


  return (
    <div className={`scrollToTopButton ${isVisible ? 'visible' : ''} sticky top-290 
     w-full flex flex-row items-end justify-end rounded-s-full px-4 rounded-[80%]  z-50 items-center text-xs 
     text-white flex gap-2 `}
>   
        <div className='flex flex-row justify-between items-end px-3 py-3 bg-white 
        md:w-[450px] sm:w-[500px] w-full h-[110px] rounded-2xl shadow-xl/30'>
            <div className='flex flex-row items-start gap-3'>
                <Image src={urlFor(image).width(200).url()}
                width={80}
                height={80}
                alt={image}
                className='h-[90px] w-[90px] rounded-xl lg:object-cover
                md:aspect-[1/1] md:object-cover'/>
                <div className='py-1 flex flex-col gap-1 items-start h-[100%]'>
                    <h1 className='text-[1.05rem] text-black font-normal tracking-[0.8px]'>
                        {name}
                    </h1>
                    <p className='text-[#8a8490] text-[0.7rem] font-medium'>
                        {GFG(opis,20)}
                    </p>
                    <p className='text-black text-[1rem] font-bold mt-3'>
                        {cena} rsd
                    </p>
                    
                </div>
            </div>

            <div className='flex flex-col items-end gap-6 pr-3 '>
                <div>
                    <MdClose className='inline-block text-black cursor-pointer
                    w-[20px] h-[20px]'
                    onClick={closeMenu}/>
                </div>
                <div className='flex flex-row gap-3'>
                    <div className='bg-[#4aaf31] rounded-full w-[35px] h-[35px] flex
                    flex-row items-center justify-center'>
                        <BsBag className="inline-block h-4 w-4 text-black cursor-pointer
                        w-[17px] h-[17px] text-white"
                        onClick={handleAddToCartAndShow}/>
                    </div>
                    <button
                        className='cursor-pointer w-[35px] h-[35px] bg-white border border-black
                        rounded-[50%]'
                        onClick={scrollToTop}
                        >
                        <IoIosArrowUp  className="inline-block h-4 w-4 text-black" />
                    </button>   
                </div>
            </div>
        </div>

    
    </div>
  )
}

export default BactToTop*/}


//AI:
import React, { useEffect, useState } from 'react';
import { IoIosArrowUp } from "react-icons/io";
import Image from 'next/image';
import { urlFor } from '../sanity/lib/image';
import { BsBag } from "react-icons/bs";
import { useCart } from '../context/CartContext';
import { MdClose } from "react-icons/md";
import './style.css';

function BactToTop({ image, name, cena, dimenzija, product, opis }) {
  const [isVisible, setIsVisible] = useState(false);
  const [isClosed, setIsClosed] = useState(false); // ✅ NOVO
  const { addToCart, openCart } = useCart();
  const [width, setWidth] = useState(window.innerWidth);

  console.log ("width is " + width);
  
  const currentPrice = product.price;

  const isBrowser = () => typeof window !== 'undefined';

  const handleScroll = () => {
    if (isClosed) return; // ✅ ako je zatvoreno, ignorisi scroll
    if (width >= 719) {
      if (window.scrollY > 100 && window.scrollY < 2800 ) setIsVisible(true);
      else setIsVisible(false);
    }
    if (width <= 718) {
      if (window.scrollY > 1450 && window.scrollY < 4400 ) setIsVisible(true);
      else setIsVisible(false);
    }
  };

  const closeMenu = () => {
    setIsVisible(false);
    setIsClosed(true); // ✅ trajno zatvori
    if (isBrowser()) window.removeEventListener('scroll', handleScroll);
  };

  useEffect(() => {
    if (!isBrowser() || isClosed) return; // ✅ ne kači listener ako je zatvoreno
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isClosed]); // ✅ prati promenu isClosed

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const scrollToTop = () => {
    if (!isBrowser()) return;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const addToCartHandler = () => {
    // prilagodi po tvojoj logici (selectedVariant itd. ako postoji u kodu)
    addToCart({
      id: product._id,
      name: product.name,
      price: currentPrice,
      image: image ? urlFor(image).width(300).url() : '/fallback.png',
      variant: dimenzija,
      dimenzija: dimenzija || null,
      quantity: 1,
    });
    openCart();
  };

  // ✅ Ako je zatvoreno, ne renderuj ništa
  if (isClosed) return null;

  return (
    <div
      className={`scrollToTopButton ${isVisible ? 'visible' : ''} sticky top-290 
      w-full flex flex-row items-end justify-end rounded-s-full px-4 rounded-[80%] z-50 text-xs text-white gap-2`}
    >
      <div className='flex flex-row justify-between items-end px-3 py-3 bg-white 
        md:w-[450px] sm:w-[500px] w-full h-[110px] rounded-2xl shadow-xl/30'>
        <div className='flex flex-row items-start gap-3'>
          <Image
            src={urlFor(image).width(200).url()}
            width={80}
            height={80}
            alt={name || 'product'}
            className='h-[90px] w-[90px] rounded-xl md:aspect-[1/1] md:object-cover'
          />
          <div className='py-1 flex flex-col gap-1 items-start h-[100%]'>
            <h1 className='text-[1.05rem] text-black font-normal tracking-[0.8px]'>
              {name}
            </h1>
            <p className='text-[#8a8490] text-[0.7rem] font-medium'>
              {opis?.length > 20 ? `${opis.slice(0, 20)}...` : opis}
            </p>
            <p className='text-black text-[1rem] font-bold mt-3'>
              {cena} rsd
            </p>
          </div>
        </div>

        <div className='flex flex-col items-end gap-6 pr-3'>
          <div>
            <MdClose
              className='inline-block text-black cursor-pointer w-[20px] h-[20px]'
              onClick={closeMenu} // ✅ sada zaista zatvara trajno
            />
          </div>
          <div className='flex flex-row gap-3'>
            <div className='hidden bg-[#4aaf31] rounded-full w-[35px] h-[35px] flex items-center justify-center'>
              <BsBag
                className='inline-block cursor-pointer w-[17px] h-[17px] text-white'
                onClick={addToCartHandler}
              />
            </div>
            <button
              className='cursor-pointer w-[35px] h-[35px] bg-[#d0f0c0] border border-black rounded-full'
              onClick={scrollToTop}
            >
              <IoIosArrowUp className='inline-block h-4 w-4 text-black' />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BactToTop;

