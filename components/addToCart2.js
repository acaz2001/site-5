'use client';
import { useCart } from '../context/CartContext';
import Link from 'next/link';

export default function AddToCart() {
  const { cartItems, removeFromCart, increaseQuantity, decreaseQuantity, total } = useCart();

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Korpa</h2>
      {cartItems.length === 0 ? (
        <p>Korpa je prazna.</p>
      ) : (
        <ul className="space-y-4">
          {cartItems.map((item) => (
            <li key={item.id} className="flex justify-between items-center border-b pb-2">
              <div className="flex flex-col">
                <span className="font-semibold">{item.name}</span>
                <div className="flex items-center gap-2 mt-2">
                  <button
                    onClick={() => decreaseQuantity(item.id)}
                    className="px-2 py-1 bg-gray-300 rounded"
                  >
                    -
                  </button>
                  <span>{item.quantity}</span>
                  <button
                    onClick={() => increaseQuantity(item.id)}
                    className="px-2 py-1 bg-gray-300 rounded"
                  >
                    +
                  </button>
                </div>
              </div>
              <div className="flex flex-col items-end">
                <span className="font-semibold">{item.price * item.quantity} RSD</span>
                <button
                  onClick={() => removeFromCart(item.id)}
                  className="text-red-600 text-sm mt-1"
                >
                  Ukloni
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}

      <div className="mt-6 text-lg font-bold">Ukupno: {total} RSD</div>

      <Link href="/cart">
        <button className="bg-green-500 text-white w-full py-3 rounded-xl mt-6">
          Checkout
        </button>
      </Link>
    </div>
  );
}
