'use client';
import React, { useState, useEffect, useRef } from 'react';
import { PiCursorFill } from "react-icons/pi";
import FaqShop from './faqShop';
import Link from 'next/link';
import { useCart } from '../context/CartContext';
import { urlFor } from '../sanity/lib/image'; 
import AddToCart from '../components/addToCart'; 
import { useRouter } from 'next/navigation';


function ProductClient({ product}) {
  const { addToCart } = useCart();
  const [selectedDimension, setSelectedDimension] = useState(null);
  const [showCart, setShowCart] = useState(false);
  const [isAdded, setIsAdded] = useState(false);

  const router = useRouter();


  const [selectedVariant, setSelectedVariant] = useState(() => {
    if (product.variants?.length > 0) return product.variants[0];
    return {
      name: 'Default',
      price: product.price || 0,
      priceOld: product.salePrice || '',
      image: product.images?.[0] || null,
      opis: product.desc || '',
      dimenzije: []
    };
  });

  const mainImageRef = useRef(null);
  const imageRef = useRef(null);


  useEffect(() => {
    const mainImage = mainImageRef.current;
    const image = imageRef.current;

    if (!mainImage || !image) return;

    const handleMouseMove = (e) => {
      const rect = mainImage.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      image.style.transformOrigin = `${x}px ${y}px`;
      image.style.transform = 'scale(2)';
      image.style.transition = 'scale 2s ease'
    };

    const resetZoom = () => {
      image.style.transform = 'scale(1)';
    };

    mainImage.addEventListener('mousemove', handleMouseMove);
    mainImage.addEventListener('mouseleave', resetZoom);

    return () => {
      mainImage.removeEventListener('mousemove', handleMouseMove);
      mainImage.removeEventListener('mouseleave', resetZoom);
    };
  }, [selectedVariant]);

  useEffect(() => {
  if (selectedVariant?.dimenzije?.length > 0) {
    setSelectedDimension(selectedVariant.dimenzije[0]);
  } else {
    setSelectedDimension(null);
  }
}, [selectedVariant]);


  const addToCartHandler = () => {
    addToCart({
      id: product._id,
      name: product.name,
      price: currentPrice,
      image: selectedVariant.image?.asset
        ? urlFor(selectedVariant.image.asset).width(300).url()
        : '/fallback.png',
      variant: selectedVariant.name,
      dimension: selectedDimension?.naziv || null,
      quantity: 1,
    });
  };

const handleAddToCartAndShow = () => {
  addToCartHandler();
  setIsAdded(true);

  // Vrati dugme u početno stanje posle 2 sekunde:
  setTimeout(() => {
    setIsAdded(false);
  }, 5000);
};

const handleBuyNow = () => {
  // podaci proizvoda koji idu u cart page
  const productToBuy = {
    id: product._id,
    name: product.name,
    price: currentPrice,
    image: selectedVariant.image?.asset
      ? urlFor(selectedVariant.image.asset).width(300).url()
      : '/fallback.png',
    variant: selectedVariant.name,
    dimension: selectedDimension?.naziv || null,
    quantity: 1,
  };

  router.push(`/cart?buyNow=${encodeURIComponent(JSON.stringify(productToBuy))}`);
};

const currentPrice = selectedDimension?.cena ?? selectedVariant.price;
const currentOldPrice = selectedDimension?.staraCena ?? selectedVariant.priceOld;
const categoriesWithBuyButton = ['Kabina/ Šarke', 'Kabina/ Klizna', 'Paravan'];
const showBuyButton = categoriesWithBuyButton.includes(product.category.name);



  return (
    <>
    <main className='w-full productClient'>
      <section className='flex lg:flex-row gap-10 w-full h-fit flex-col'>
        {/* Image and Variants for Product */}
        <div className='lg:w-[61%] lg:h-[90%] flex flex-col-reverse lg:flex-row md:flex-row gap-5'>
          {/* Left: thumbnails */}
          <div className='flex flex-row justify-start w-[100%] gap-2 lg:w-[10%] lg:justify-start lg:flex-col lg:gap-2 md:w-[10%] md:justify-start md:flex-col md:gap-2'>
            {product.variants?.map((variant, index) => (
              <div
                key={index}
                onClick={() => setSelectedVariant(variant)}
                className='bg-[#f9f6fe] rounded-sm p-2 cursor-pointer flex flex-row justify-start h-20 lg:h-auto md:h-auto'
              >
                <img
                  src={
                    variant.image?.asset
                      ? urlFor(variant.image.asset).url()
                      : '/fallback.png'
                  }
                  alt={variant.name}
                />
              </div>
            ))}
          </div>

          {/* Main Image */}
          <div ref={mainImageRef} className='clientImg relative bg-[#f9f6fe] w-[100%] lg:w-[90%] md:w-[90%] rounded-3xl overflow-hidden'>
            <div className='absolute top-0 right-0 flex flex-col items-center gap-1 mt-3 z-50'>
              <PiCursorFill className='text-[0.8rem] text-white' />
              <p className='text-[0.8rem] text-center w-[60%] leading-[1.1] text-white cursor-pointer'>Hover to zoom</p>
            </div>
            <img
              ref={imageRef}
              src={
                selectedVariant.image?.asset
                  ? urlFor(selectedVariant.image.asset).url()
                  : '/fallback.png'
              }
              alt={selectedVariant.name}
              className='w-full h-full '
            />
          </div>
        </div>

        {/* Right: info */}
        <div className='lg:w-[35.5%] flex flex-col items-start gap-2'>
          <div className='flex flex-row items-center gap-2 mb-1'>
            <Link href="/shop">
              <p className='text-[0.9rem] text-[#6c6474] hover:text-black transition-all cursor-pointer'>Prodavnica</p>
            </Link>
            <svg width="6" height="6"><circle cx="3" cy="3" r="3" fill="grey" /></svg>
            <p className='text-[0.9rem] text-[#6c6474] hover:text-black transition-all cursor-pointer'>{product.category.name}</p>
          </div>

          <h1 className='text-[2.8rem] font-medium w-full leading-[1.1]'>{product.name}</h1>

          <div className='flex flex-row gap-4'>
            <p className='text-[1.3rem] font-[450]'>RSD {currentPrice}</p>
            {currentOldPrice && (
              <p className='text-[1.3rem] text-[#6c6474] font-[450] relative'>
                RSD {currentOldPrice}
                <span className='absolute w-full h-0.5 bg-[#6c6474] bottom-3.5 left-0'></span>
              </p>
            )}
          </div>

          <p className='text-[#6c6474] text-[1rem] mt-3'>{selectedVariant.opis || product.desc}</p>

          {/*Izaberi Varijantu */}
          <div className='mt-4'>
            <p className='text-[1rem]'>Izaberite varijantu:</p>
            <div className='flex gap-2 mt-2'>
              {product.variants?.map((variant, i) => (
                <button
                  key={i}
                  onClick={() => setSelectedVariant(variant)}
                  className={`px-5 py-2 rounded-sm font-medium text-[0.9rem] cursor-pointer transition-all duration-400 ease-in-out ${
                    selectedVariant.name === variant.name ? 'bg-black text-white' : 'bg-[#ebebeb]'
                  }`}
                >
                  {variant.name}
                </button>
              ))}
            </div>
          </div>

          {/*Izaberi Dimenziju */}    
          <div className='mt-4'>
            <p className='text-[1rem]'>Izaberite dimenziju:</p>
            <div className='flex gap-2 mt-2'>
              {selectedVariant.dimenzije?.map((dim, i) => (
                <button
                  key={i}
                  onClick={() => setSelectedDimension(dim)}
                  className={`px-5 py-2 rounded-sm font-medium text-[0.9rem] cursor-pointer transition-all duration-400 ease-in-out ${
                    selectedDimension?.naziv === dim.naziv ? 'bg-black text-white' : 'bg-[#ebebeb]'
                  }`}
                >
                  {dim.naziv}
                </button>
              ))}
            </div>
          </div>

          
          <div className='flex flex-col w-full gap-4 mt-8'>
              <button
                className={`bg-black text-white text-[1rem] font-medium w-full rounded-2xl pt-3 pb-3 cursor-pointer ${
                  isAdded ? 'bg-green-600' : ''
                }`}
                onClick={handleAddToCartAndShow}
                disabled={isAdded}
              >
                {isAdded ? 'Dodato u korpu' : 'Dodaj u korpu'}
              </button>
          </div>



          <div className='mt-8 w-full'>
            <FaqShop />
          </div>
        </div>
      </section>
      

    </main>
</>

  );
}



{/* LOGIKA ZA DUGME KUPI ILI DODAJ U KORPU ZA KABINE I OGLEDALA 
            <div className='flex flex-col w-full gap-4 mt-8'>
            {showBuyButton ? (
            <button
              className={`bg-black text-white text-[1rem] font-medium w-full rounded-2xl pt-3 pb-3 cursor-pointer`}
              onClick={handleBuyNow}
            >
              Kupi
            </button>
            ) : (
              <button
                className={`bg-black text-white text-[1rem] font-medium w-full rounded-2xl pt-3 pb-3 cursor-pointer ${
                  isAdded ? 'bg-green-600' : ''
                }`}
                onClick={handleAddToCartAndShow}
                disabled={isAdded}
              >
                {isAdded ? 'Dodato u korpu' : 'Dodaj u korpu'}
              </button>
            )}
          </div>
  
  */}

export default ProductClient;
