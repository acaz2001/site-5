'use client';
import React from 'react';
import { useCart } from '../context/CartContext';
import AddToCart from './addToCart';

function AddToCartWrapper() {
  const { isCartOpen, closeCart } = useCart();

  return (
    <>
      {isCartOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/70"
          onClick={closeCart}
        />
      )}
      <AddToCart show={isCartOpen} setShow={closeCart} />
    </>
  );
}

export default AddToCartWrapper;
