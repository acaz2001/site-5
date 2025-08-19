'use client';
import AddToCart from './addToCart';
import RecentlyViewedProducts from './RecentlyViewedProducts';
import { useCart } from '../context/CartContext';

export default function CartSidePanel() {
    const { isCartOpen, closeCart } = useCart(); // preuzmi direktno iz konteksta
  return (
    <div className={`
      fixed top-0 right-200 h-screen w-full sm:w-[100%] md:w-[100%] lg:w-fit 
      z-50 flex flex-row bg-white shadow-xl transition-transform duration-500 ease-in-out 
      ${isCartOpen ? 'translate-x-0' : 'translate-x-full'}
    `}>
      {/* Proizvodi koje ste prethodno gledali */}
      <div className="w-1/2 h-full overflow-y-auto p-4">
        <RecentlyViewedProducts />
      </div>
      {/* AddToCart */}
      <div className="w-1/2 h-full border-r">
        <AddToCart/>
      </div>


    </div>
  );
}
