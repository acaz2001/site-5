'use client';
import {React, useState, useEffect} from 'react';
import { useCart } from '../../context/CartContext';
import Link from 'next/link';
import { FaMinus, FaPlus } from 'react-icons/fa6';
import { MdOutlineCancel } from "react-icons/md";
import { loadStripe } from '@stripe/stripe-js';
import AnimatedOnScroll from '../../components/AnimatedOnScroll';
import { useSearchParams } from 'next/navigation';


export default function CartPage() {
  const searchParams = useSearchParams();
  const [buyNowItem, setBuyNowItem] = useState(null);
  const { cartItems, increaseQuantity, decreaseQuantity, removeFromCart, total, clearCart } = useCart();
  const [shippingOption, setShippingOption] = useState(null);
  const [selectedShipping, setSelectedShipping] = useState('');
  const [customerData, setCustomerData] = useState({
  imePrezime: '',
  adresa: '',
  telefon: '',
  spratStan: '',
  opstina: '',
  grad: 'Beograd',
  email: ''
});


  const handleCustomerDataChange = (e) => {
    setCustomerData({
      ...customerData,
      [e.target.name]: e.target.value
    });
  };

  const isFormValid = () => {
    if (shippingOption === 'store') {
      return (
        customerData.imePrezime.trim() &&
        customerData.telefon.trim() &&
        customerData.email.trim()
      );
    }
    if (shippingOption === 'delivery' || shippingOption === 'installation') {
      return (
        customerData.imePrezime.trim() &&
        customerData.adresa.trim() &&
        customerData.telefon.trim() &&
        customerData.opstina.trim() &&
        customerData.grad.trim()
      );
    }
    return false;
  };


  const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY);

    const handleCheckout = async (paymentType) => {
      if (paymentType === 'cod') {
        try {
          const res = await fetch('https://formspree.io/f/myzpgvow', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              imePrezime: customerData.imePrezime,
              adresa: customerData.adresa,
              telefon: customerData.telefon,
              spratStan: customerData.spratStan,
              opstina: customerData.opstina,
              grad: customerData.grad,
              proizvodi: buyNowItem 
                ? [{
                    naziv: buyNowItem.name,
                    varijanta: buyNowItem.variant,
                    dimenzija: buyNowItem.dimension,
                    kolicina: buyNowItem.quantity,
                    cena: buyNowItem.price,
                  }]
                : cartItems.map(item => ({
                    naziv: item.name,
                    varijanta: item.variant,
                    dimenzija: item.dimension,
                    kolicina: item.quantity,
                    cena: item.price,
                  })),
              ukupno: totalWithShipping,
              nacinPlacanja: 'Plaćanje pouzećem',
              nacinIsporuke: shippingOption,
            }),
          });

          if (res.ok) {
            window.location.href = '/success';
          } else {
            alert('Došlo je do greške prilikom slanja porudžbine.');
          }
        } catch (error) {
          console.error(error);
          alert('Greška prilikom slanja forme.');
        }
      } else {
        // Plaćanje karticom → Stripe checkout
        const stripe = await stripePromise;

        const response = await fetch('/api/checkout', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ cartItems, shippingOption, customerData }),
        });

        const data = await response.json();

        await stripe.redirectToCheckout({ sessionId: data.id });
      }
    };
  useEffect(() => {
  const buyNowParam = searchParams.get('buyNow');
  if (buyNowParam) {
    try {
      const parsedItem = JSON.parse(buyNowParam);
      setBuyNowItem(parsedItem);
    } catch (error) {
      console.error("Failed to parse buyNow param:", error);
    }
  }
}, [searchParams]);




// Računanje total price:
const productSubtotal = buyNowItem
  ? buyNowItem.price * buyNowItem.quantity
  : total;

// Izračunaj shipping za buy-now:
let shippingCost = 0;
if (shippingOption === 'delivery') {
  shippingCost = 1000;
} else if (shippingOption === 'installation') {
  shippingCost = buyNowItem
    ? productSubtotal * 0.35
    : total * 0.35;
}

const totalWithShipping = productSubtotal + shippingCost;


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
    <main className="flex flex-col p-8 gap-8 min-h-[90vh] mt-15">
      <h1 className="text-3xl font-bold">Vaša korpa</h1>

<div className="flex flex-col gap-6">
  {buyNowItem ? (
    <div className="flex flex-row items-start border-b pb-6 gap-6">
      <div className="w-28 h-28 flex items-center justify-center bg-[#f3f3f3] p-3 rounded-xl">
        <img src={buyNowItem.image} alt={buyNowItem.name} className="w-full h-full object-contain" />
      </div>
      <div className="flex flex-col flex-1 gap-7">
        <div className="flex flex-row justify-between">
          <div className='flex flex-col gap-1'>
            <h2 className="font-semibold text-lg">{buyNowItem.name}</h2>
            <p className="text-sm text-gray-500">Variant: {buyNowItem.variant}</p>
          </div>
          <p className="font-medium">{buyNowItem.price} RSD</p>
        </div>
        <div className="flex flex-row justify-between items-center">
          <span className=" bg-[#f3f3f3] px-6 py-1.5 rounded-md cursor-pointer">
            {buyNowItem.quantity}
          </span>
        </div>
      </div>
    </div>
  ) : (
    cartItems.map((item) => (
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
    ))
  )}
</div>


      {/* Nacin isporuke */}
      <div className="flex flex-col gap-4 border-t pt-6">
        <h2 className="text-xl font-semibold mb-2">Način isporuke</h2>
        <div className="flex flex-col gap-3">
          <label className="flex items-center gap-3 cursor-pointer">
            <input
              type="radio"
              name="shipping"
              value="store"
              checked={shippingOption === 'store'}
              onChange={() => setShippingOption('store')}
            />
            <span>Preuzimanje u radnji (0 RSD)</span>
          </label>
          <label className="flex items-center gap-3 cursor-pointer">
            <input
              type="radio"
              name="shipping"
              value="delivery"
              checked={shippingOption === 'delivery'}
              onChange={() => setShippingOption('delivery')}
            />
            <span>Dostava (+1000 RSD)</span>
          </label>
          <label className="flex items-center gap-3 cursor-pointer">
            <input
              type="radio"
              name="shipping"
              value="installation"
              checked={shippingOption === 'installation'}
              onChange={() => setShippingOption('installation')}
            />
            <span>Montaža (+35%)</span>
          </label>
        </div>
      </div>

      {/* Podaci Kupaca */}
      {shippingOption && (
        <div className="flex flex-col gap-4 mt-6">
          <h2 className="text-xl font-semibold">Podaci Kupca</h2>

          <input
            name="imePrezime"
            type="text"
            placeholder="Ime i Prezime"
            className="border border-gray-300 p-2 rounded"
            value={customerData.imePrezime}
            onChange={handleCustomerDataChange}
          />

          <input
            name="telefon"
            type="text"
            placeholder="Broj telefona"
            className="border border-gray-300 p-2 rounded"
            value={customerData.telefon}
            onChange={handleCustomerDataChange}
          />

          <input
            name="email"
            type="email"
            placeholder="Email adresa"
            className="border border-gray-300 p-2 rounded"
            value={customerData.email}
            onChange={handleCustomerDataChange}
          />

          {shippingOption !== 'store' && (
            <>
              <input
                name="adresa"
                type="text"
                placeholder="Adresa"
                className="border border-gray-300 p-2 rounded"
                value={customerData.adresa}
                onChange={handleCustomerDataChange}
              />
              <input
                name="spratStan"
                type="text"
                placeholder="Sprat i stan (opciono)"
                className="border border-gray-300 p-2 rounded"
                value={customerData.spratStan}
                onChange={handleCustomerDataChange}
              />
              <input
                name="opstina"
                type="text"
                placeholder="Opština"
                className="border border-gray-300 p-2 rounded"
                value={customerData.opstina}
                onChange={handleCustomerDataChange}
              />
              <select
                name="grad"
                value={customerData.grad}
                onChange={handleCustomerDataChange}
                className="border border-gray-300 p-2 rounded"
              >
                <option value="Beograd">Beograd</option>
              </select>
            </>
          )}
        </div>
      )}





      {/* Subtotal & actions */}
      <div className="flex flex-col gap-4 border-t pt-6">
        <div className="flex flex-row justify-between text-xl font-semibold">
          <p>Subtotal:</p>
          <p>{productSubtotal} RSD</p>
        </div>
        {shippingOption && shippingOption !== 'store' && (
          <div className="flex flex-row justify-between text-lg">
            <p>Dodatak za isporuku:</p>
            <p>+ {shippingCost.toFixed(2)} RSD</p>
          </div>
        )}
        <div className="flex flex-row justify-between text-xl font-bold mt-2">
          <p>Ukupno za naplatu:</p>
          <p>{totalWithShipping.toFixed(2)} RSD</p>
        </div>

        <div className="flex flex-col gap-4 mt-4">
        <div className='flex flex-row gap-[1rem]'>
          <button
            onClick={() => handleCheckout('card')}
            disabled={!shippingOption || !isFormValid()}
            className={`w-full py-3 rounded-2xl font-semibold cursor-pointer ${
              shippingOption && isFormValid()
                ? 'bg-black text-white'
                : 'bg-gray-300 text-gray-600 cursor-not-allowed'
            }`}
          >
            Plaćanje karticom
          </button>

          <button
            onClick={() => handleCheckout('cod')}
            disabled={!shippingOption || !isFormValid()}
            className={`w-full py-3 rounded-2xl font-semibold cursor-pointer ${
              shippingOption && isFormValid()
                ? 'bg-black text-white'
                : 'bg-gray-300 text-gray-600 cursor-not-allowed'
            }`}
          >
            Plaćanje pouzećem
          </button>

        </div>



        <div>
          <Link href="/shop" className="w-full">
            <button className="w-full bg-gray-300 text-black py-3 rounded-2xl font-semibold cursor-pointer">
              Continue Shopping
            </button>
          </Link>
        </div>




        </div>
      </div>

    </main>
    </AnimatedOnScroll>
  );
}
