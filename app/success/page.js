'use client';
import Link from 'next/link';
import { useEffect } from 'react';
import { useCart } from '../../context/CartContext';

export default function SuccessPage() {
  const { clearCart } = useCart();

  useEffect(() => {
    // Kada korisnik dođe na Success stranicu, očistimo korpu
    clearCart();
  }, [clearCart]);

  return (
    <main className="flex flex-col items-center justify-center min-h-[80vh] p-8">
      <h1 className="text-3xl font-bold mb-4 text-black">Thank you for your purchase! </h1>
      <p className="text-lg text-gray-600 mb-6">Your order has been successfully placed.</p>

      <Link href="/shop">
        <button className="bg-black text-white px-6 py-3 rounded-2xl font-semibold cursor-pointer">
          Continue Shopping
        </button>
      </Link>
    </main>
  );
}
