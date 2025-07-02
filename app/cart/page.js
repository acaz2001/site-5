'use client';
import React from 'react';
import { useCart } from '../../context/CartContext';
import Link from 'next/link';
import { FaMinus, FaPlus } from 'react-icons/fa6';
import { MdOutlineCancel } from "react-icons/md";
import { loadStripe } from '@stripe/stripe-js';
import AnimatedOnScroll from '../../components/AnimatedOnScroll';


export default function CartPage() {
  const { cartItems, increaseQuantity, decreaseQuantity, removeFromCart, total, clearCart } = useCart();

  const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY);

  const handleCheckout = async () => {
    const stripe = await stripePromise;

    const response = await fetch('/api/checkout', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ cartItems }),
    });

    const data = await response.json();

    await stripe.redirectToCheckout({ sessionId: data.id });
  };

  if (cartItems.length === 0) {
    return (
      <AnimatedOnScroll>
      <div className="flex flex-col items-center justify-center min-h-[70vh] p-8">
        <h1 className="text-2xl font-bold mb-2">Your Cart is Empty</h1>
        <p className="text-gray-600 mb-4">Start adding some products!</p>
        <Link href="/shop">
          <button className="bg-black text-white px-6 py-3 rounded-2xl cursor-pointer">
            Continue Shopping
          </button>
        </Link>
      </div>
      </AnimatedOnScroll>
    );
  }

  return (
    <AnimatedOnScroll>
    <main className="flex flex-col p-8 gap-8 min-h-[90vh] mt-12">
      <h1 className="text-3xl font-bold">Shopping Cart</h1>

      <div className="flex flex-col gap-6">
        {cartItems.map((item) => (
          <div key={`${item.name}-${item.variant}-${item.image}`} className="flex flex-row items-start border-b pb-6 gap-6">
            <div className="w-28 h-28 flex items-center justify-center bg-[#f3f3f3] p-3 rounded-xl">
              <img src={item.image} alt={item.name} className="w-full h-full object-contain" />
            </div>

            <div className="flex flex-col flex-1 gap-7">
              <div className="flex flex-row justify-between">
                <div className='flex flex-col gap-1'>
                  <h2 className="font-semibold text-lg">{item.name}</h2>
                  <p className="text-sm text-gray-500">Variant: {item.variant}</p>
                </div>
                
                <p className="font-medium">{item.price} USD</p>
              </div>

              
              <div className="flex flex-row justify-between items-center">
                <div className="flex flex-row items-center gap-2">
                  <button
                    onClick={() => decreaseQuantity(item.id, item.name, item.image, item.variant)}
                    className="bg-[#f3f3f3] p-2 rounded-md cursor-pointer"
                  >
                    <FaMinus />
                  </button>
                  <span className=" bg-[#f3f3f3] px-6 py-1.5 rounded-md cursor-pointer">{item.quantity}</span>
                  <button
                    onClick={() => increaseQuantity(item.id, item.name, item.image, item.variant)}
                    className="bg-[#f3f3f3] p-2 rounded-md cursor-pointer"
                  >
                    <FaPlus />
                  </button>
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
        ))}
      </div>

      {/* Subtotal & actions */}
      <div className="flex flex-col gap-4 border-t pt-6">
        <div className="flex flex-row justify-between text-xl font-semibold">
          <p>Subtotal:</p>
          <p>{total} USD</p>
        </div>

        <div className="flex flex-row gap-4 mt-4">
          <Link href="/shop" className="w-full">
            <button className="w-full bg-gray-300 text-black py-3 rounded-2xl font-semibold cursor-pointer">
              Continue Shopping
            </button>
          </Link>

          <button
            onClick={handleCheckout}
            className="w-full bg-black text-white py-3 rounded-2xl font-semibold cursor-pointer"
          >
            Place Order
          </button>
        </div>
      </div>
    </main>
    </AnimatedOnScroll>
  );
}
