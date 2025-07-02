'use client';
import { useCart } from '../../context/CartContext';

export default function CheckoutPage() {
  const { cartItems, total, clearCart } = useCart();

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-6">Checkout</h1>
      {cartItems.length === 0 ? (
        <p>Nemate proizvode za naplatu.</p>
      ) : (
        <>
          <ul className="space-y-4">
            {cartItems.map((item) => (
              <li key={item.id} className="flex justify-between items-center border-b pb-2">
                <div>
                  {item.name} × {item.quantity}
                </div>
                <div>
                  {item.price * item.quantity} RSD
                </div>
              </li>
            ))}
          </ul>
          <div className="mt-6 font-bold">Ukupno: {total} RSD</div>

          <button
            className="bg-green-600 text-white px-6 py-2 mt-6"
            onClick={() => {
              alert('Uspešno ste završili kupovinu!');
              clearCart();
            }}
          >
            Plati
          </button>
        </>
      )}
    </div>
  );
}
