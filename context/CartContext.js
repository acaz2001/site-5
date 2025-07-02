'use client';
import { createContext, useContext, useState, useEffect } from 'react';

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  // Inicijalizacija korpe iz localStorage-a
  const [cartItems, setCartItems] = useState(() => {
    if (typeof window !== 'undefined') {
      const storedCart = localStorage.getItem('cart');
      return storedCart ? JSON.parse(storedCart) : [];
    }
    return [];
  });

  // Svaki put kad se korpa promeni ➔ snimaj u localStorage
  useEffect(() => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('cart', JSON.stringify(cartItems));
    }
  }, [cartItems]);

  // ✅ Dodavanje u korpu
  const addToCart = (product) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find(
        (item) =>
          item.id === product.id &&
          item.name === product.name &&
          item.image === product.image &&
          item.variant === product.variant
      );

      if (existingItem) {
        return prevItems.map((item) =>
          item.id === product.id &&
          item.name === product.name &&
          item.image === product.image &&
          item.variant === product.variant
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        return [...prevItems, { ...product, quantity: 1 }];
      }
    });
  };

  // ✅ Povećavanje količine
  const increaseQuantity = (id, name, image, variant) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id &&
        item.name === name &&
        item.image === image &&
        item.variant === variant
          ? { ...item, quantity: item.quantity + 1 }
          : item
      )
    );
  };

  // ✅ Smanjivanje količine
  const decreaseQuantity = (id, name, image, variant) => {
    setCartItems((prevItems) =>
      prevItems
        .map((item) =>
          item.id === id &&
          item.name === name &&
          item.image === image &&
          item.variant === variant
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  // ✅ Brisanje proizvoda iz korpe
  const removeFromCart = (id, name, image, variant) => {
    setCartItems((prevItems) =>
      prevItems.filter(
        (item) =>
          !(
            item.id === id &&
            item.name === name &&
            item.image === image &&
            item.variant === variant
          )
      )
    );
  };

  // ✅ Čišćenje cele korpe (korisno za završetak kupovine)
  const clearCart = () => {
    setCartItems([]);
  };

  // ✅ Računanje ukupne cene (subtotal)
  const total = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        increaseQuantity,
        decreaseQuantity,
        removeFromCart,
        clearCart,
        total,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
