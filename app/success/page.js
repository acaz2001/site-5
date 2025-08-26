'use client';
import Link from 'next/link';
import { useEffect,useRef } from 'react';
import { useCart } from '../../context/CartContext';

export default function SuccessPage() {
  const { clearCart } = useCart();
  const clearedRef = useRef(false);

  useEffect(() => {
    if (!clearedRef.current) {
      clearCart();
      clearedRef.current = true;
    }
  }, []); // 👈 bez clearCart u deps

  return (
    <main className="flex flex-col items-center justify-center min-h-[80vh] p-8">
      <h1 className="text-3xl font-bold mb-4 text-black">Hvala na porudžbini! </h1>
      <p className="text-lg text-gray-600 mb-6">Uspešno ste poručili proizvode.</p>

      <Link href="/prodavnica">
        <button className="bg-black text-white px-6 py-3 rounded-2xl font-semibold cursor-pointer">
          Nastavite kupovinu
        </button>
      </Link>
    </main>
  );
}
