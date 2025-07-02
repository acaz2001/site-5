'use client';
import React from 'react';
import { MdOutlineCancel } from "react-icons/md";
import { useCart } from '../context/CartContext';
import Link from 'next/link';
import { FaMinus, FaPlus } from "react-icons/fa6";

function AddToCart({ show, setShow }) {
  const { cartItems, removeFromCart, increaseQuantity, decreaseQuantity, total } = useCart();

  return (
    <main className={`
      fixed top-0 right-0 h-[100vh] lg:w-[500px] md:w-[500px] sm:w-[500px] w-[100%] bg-[white]
      flex flex-col justify-between z-50
      transition-transform duration-500 ease-in-out
      ${show ? 'translate-x-0' : 'translate-x-full'}
    `}>
      
      {/* Header */}
      <section className='flex flex-row items-center justify-between pt-4 pb-4 pl-6 pr-6 border-b'>
        <div className='flex flex-row items-center gap-5'>
          <h1 className='text-[1.6rem] font-[450]'>Your Cart</h1>
          <div className='bg-[#f9f6fe] p-1 rounded-full'>
            <p className='font-[500]'>{cartItems.length}</p> {/* Broj različitih proizvoda */}
          </div>
        </div>
        <div
          onClick={() => setShow(false)}
          className='p-2 bg-[#f9f6fe] rounded-xl cursor-pointer'
        >
          <MdOutlineCancel className='text-[1.7rem]' />
        </div>
      </section>

      {/* Body */}
      <section className='flex-1 overflow-y-auto flex flex-col'>
        {cartItems.length === 0 ? (
          <div className='flex flex-col items-center justify-center mt-10'>
            <h1 className='text-[1.3rem] font-[450]'>Your Cart is Empty</h1>
            <p className='text-[#6c6474]'>Add some items to the cart.</p>
          </div>
        ) : (
          cartItems.map((item) => (
            <div key={`${item.name}-${item.variant}-${item.image}`} className='flex flex-row items-start p-5 gap-4 border-b'>
              <div className='w-28 h-28 flex items-center justify-center bg-[#f3f3f3] p-5 rounded-xl'>
                <img src={item.image} alt={item.name} className='w-full h-full object-contain' />
              </div>

              <div className='flex flex-col flex-1 gap-6'>
                <div className='flex lg:flex-row md:flex-row sm:flex-row flex-col
                lg:justify-between md:justify-between sm:justify-between justify-between'>
                  <div className='flex flex-col gap-1'>
                    <h1 className='font-[450]'>{item.name}</h1>
                    <p className='text-sm text-gray-500'>{item.variant}</p> {/* Prikazuje varijantu */}
                  </div>
                  <p className='font-[450]'>{item.price} RSD</p>
                </div>
                

                <div className='flex flex-row justify-between items-center'>
                  <div className='flex flex-row gap-2 items-center'>
                    <div
                      onClick={() => decreaseQuantity(item.id, item.name, item.image, item.variant)}
                      className='bg-[#f3f3f3] p-3 rounded-md cursor-pointer'
                    >
                      <FaMinus />
                    </div>
                    <div className='bg-[#f3f3f3] p-2 px-6 rounded-md'>
                      <p className='font-[650]'>{item.quantity}</p>
                    </div>
                    <div
                      onClick={() => increaseQuantity(item.id, item.name, item.image, item.variant)}
                      className='bg-[#f3f3f3] p-3 rounded-md cursor-pointer'
                    >
                      <FaPlus />
                    </div>
                  </div>

                  <div
                    onClick={() => removeFromCart(item.id, item.name, item.image, item.variant)}
                    className='p-2 bg-[#f9f6fe] rounded-xl cursor-pointer'
                  >
                    <MdOutlineCancel className='text-[1.7rem]' />
                  </div>
                </div>
              </div>
            </div>
          ))
        )}
      </section>

      {/* Footer */}
      <section className='flex flex-col pt-4 pb-6 pl-6 pr-6 gap-6'>
        <div className='flex flex-row items-center justify-between'>
          <h1 className='text-[1.1rem] font-[450]'>Subtotal</h1>
          <p className='font-[450]'>{total} RSD</p>
        </div>
        <div className='bg-[#888888] flex flex-row justify-center rounded-3xl'>
          <Link href="/cart" className='w-full'>
            <button
              onClick={() => setShow(false)}
              className='text-white w-full pt-3 pb-3 text-[0.9rem] font-[450] rounded-3xl cursor-pointer'
            >
              Checkout
            </button>
          </Link>
        </div>
      </section>
    </main>
  );
}

export default AddToCart;
