// app/cart/page.tsx
"use client";


import React, { useState, useEffect, Suspense } from "react";
import { useCart } from "../../context/CartContext";
import Link from "next/link";
import { FaMinus, FaPlus } from "react-icons/fa6";
import { MdOutlineCancel } from "react-icons/md";
import { loadStripe } from "@stripe/stripe-js";
import AnimatedOnScroll from "../../components/AnimatedOnScroll";
import { useSearchParams } from "next/navigation";
import Image from "next/image";
import { getProductBySlug } from "../../sanity/lib/getProductBySlug";
import { cn } from "../../src/components/lib/utils";

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY);

function CartInner() {
  
  const searchParams = useSearchParams();
  const [buyNowItem, setBuyNowItem] = useState(null);

  const {
    cartItems,
    increaseQuantity,
    decreaseQuantity,
    removeFromCart,
    total,
    clearCart,
  } = useCart();

  console.log('Cart Items Je:',cartItems);
  console.log('Cart Items Inlucdes:',cartItems.find(item => item.dostavnaCena));
  

  const [shippingOption, setShippingOption] = useState(null);

  const [customerData, setCustomerData] = useState({
    imePrezime: "",
    adresa: "",
    telefon: "",
    spratStan: "",
    opstina: "",
    grad: "Beograd",
    gradDostava: "",
    email: "",
  });

  // ✅ BITNO: ovde (e) MORA da postoji da ne bi bacao "e is not defined"
  const handleCustomerDataChange = (e) => {
    setCustomerData({
      ...customerData,
      [e.target.name]: e.target.value,
    });
  };

  // ✅ Učitaj buy-now item iz query parametra (?buyNow=...)
  useEffect(() => {
    const buyNowParam = searchParams.get("buyNow");
    if (!buyNowParam) return;

    try {
      const parsedItem = JSON.parse(buyNowParam);
      setBuyNowItem(parsedItem);
    } catch (error) {
      console.error("Failed to parse buyNow param:", error);
    }
  }, [searchParams]);

  // ✅ Računanje total price
  const productSubtotal = buyNowItem
    ? buyNowItem.price * buyNowItem.quantity
    : total;

  let shippingCost = 0;
  if (shippingOption === "dostava") {
    const itemsForShipping = buyNowItem ? [buyNowItem] : cartItems;

    shippingCost = itemsForShipping.reduce((sum, item) => {
      const cena = Number(item?.dostavnaCena || 0);
      const qty = Number(1);
      return sum + cena * qty;
    }, 0);
  } else if (shippingOption === "montaža") {
    shippingCost = productSubtotal * 0.35;
  }

  //KAda hocu da se naplacuje dostava po komadu i da 
  //kada se doda jos istih proizvoda dodaje se dostavna cena
  {/*
    const productSubtotal = buyNowItem
    ? buyNowItem.price * buyNowItem.quantity
    : total;

  let shippingCost = 0;
  if (shippingOption === "dostava") {
    const itemsForShipping = buyNowItem ? [buyNowItem] : cartItems;

    shippingCost = itemsForShipping.reduce((sum, item) => {
      const cena = Number(item?.dostavnaCena || 0);
      const qty = Number(item?.quantity || 1);
      return sum + cena * qty;
    }, 0);
  } else if (shippingOption === "montaža") {
    shippingCost = productSubtotal * 0.35;
  }
    */}

  const totalWithShipping = productSubtotal + shippingCost;

  // ✅ Validacija forme (sređene zagrade + return)
  const isFormValid = () => {
    if (shippingOption === "store") {
      return (
        customerData.imePrezime.trim() &&
        customerData.telefon.trim() &&
        customerData.email.trim()
      );
    }

    if (shippingOption === "dostava") {
      return (
        customerData.imePrezime.trim() &&
        customerData.adresa.trim() &&
        customerData.telefon.trim() &&
        customerData.opstina.trim() &&
        customerData.gradDostava.trim() &&
        customerData.email.trim()
      );
    }

    if (shippingOption === "montaža") {
      return (
        customerData.imePrezime.trim() &&
        customerData.adresa.trim() &&
        customerData.telefon.trim() &&
        customerData.opstina.trim() &&
        customerData.grad.trim() &&
        customerData.email.trim()
      );
    }

    return false;
  };

  // ✅ Checkout logika (posle totalWithShipping)
  const handleCheckout = async (paymentType) => {
    if (paymentType === "cod") {
      try {
        const res = await fetch("https://formspree.io/f/myzpgvow", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            imePrezime: customerData.imePrezime,
            adresa: customerData.adresa,
            telefon: customerData.telefon,
            spratStan: customerData.spratStan,
            opstina: customerData.opstina,
            grad: customerData.grad,
            gradDostava: customerData.gradDostava,
            email: customerData.email,
            proizvodi: buyNowItem
              ? [
                  {
                    naziv: buyNowItem.name,
                    varijanta: buyNowItem.variant,
                    dimenzija: buyNowItem.dimenzija,
                    kolicina: buyNowItem.quantity,
                    cena: buyNowItem.price,
                  },
                ]
              : cartItems.map((item) => ({
                  naziv: item.name,
                  varijanta: item.variant,
                  dimenzija: item.dimenzija,
                  kolicina: item.quantity,
                  cena: item.price,
                })),
            ukupno: totalWithShipping,
            nacinPlacanja: "Plaćanje pouzećem",
            nacinIsporuke: shippingOption,
          }),
        });

        

        if (res.ok) {
          await fetch("/api/send-confirmation", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              toEmail: customerData.email,
              ime: customerData.imePrezime,
              proizvodi: buyNowItem
              ? [
                  {
                    naziv: buyNowItem.name,
                    varijanta: buyNowItem.variant,
                    dimenzija: buyNowItem.dimenzija,
                    kolicina: buyNowItem.quantity,
                    cena: buyNowItem.price,
                    slika: buyNowItem.image,
                  },
                ]
              : cartItems.map((item) => ({
                  naziv: item.name,
                  varijanta: item.variant,
                  dimenzija: item.dimenzija,
                  kolicina: item.quantity,
                  cena: item.price,
                  slika: item.image
                })),
              cena: totalWithShipping,
              nacinPlacanja: "Plaćanje pouzećem",
              nacinIsporuke: shippingOption,
            }),
          });

          window.location.href = "/success";
        } else {
          alert("Došlo je do greške prilikom slanja porudžbine.");
        }
      } catch (error) {
        console.error(error);
        alert("Greška prilikom slanja forme.");
      }
    } else {
      const stripe = await stripePromise;
      const response = await fetch("/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ cartItems, shippingOption, customerData }),
      });
      const data = await response.json();
      await stripe?.redirectToCheckout({ sessionId: data.id });
    }
  };

  // ✅ Prazna korpa
  if (cartItems.length === 0 && !buyNowItem) {
    return (
      <AnimatedOnScroll>
        <div className="flex flex-col items-center justify-center min-h-[70vh] p-8">
          <h1 className="text-2xl font-bold mb-2">Vaša korpa je prazna</h1>
          <p className="text-gray-600 mb-4">Počnite da ubacujete proizvode!</p>
          <Link href="/prodavnica">
            <button className="bg-black text-white px-6 py-3 rounded-2xl cursor-pointer">
              Nastavite kupovinu
            </button>
          </Link>
        </div>
      </AnimatedOnScroll>
    );
  }

  // ✅ UI
  return (
    <AnimatedOnScroll>
      <main className="flex flex-col md:p-8 sm:p-8 md:px-0 sm:px-0 px-2
      gap-8 min-h-[90vh] md:mt-15 sm:mt-15 mt-20">
        <h1 className="text-3xl font-bold">Vaša korpa</h1>

        <div className="flex flex-col gap-6">
          {buyNowItem ? (
            <div className="flex flex-row items-start border-b pb-6 gap-6">
              <div className="w-28 h-28 flex items-center justify-center bg-[#f3f3f3] p-3 rounded-xl">
                <Image
                  width={112}
                  height={120}
                  src={buyNowItem.image}
                  alt={buyNowItem.name}
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="flex flex-col flex-1 gap-7">
                <div className="flex flex-row justify-between">
                  <div className="flex flex-col gap-1">
                    <h2 className="font-semibold text-lg">
                      {buyNowItem.name}
                    </h2>
                    <p className="text-sm text-gray-500">
                      Varijanta: {buyNowItem.variant}
                    </p>
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
              <div
                key={`${item.name}-${item.variant}-${item.image}`}
                className="flex flex-row items-start border-b pb-6 gap-6"
              >
                <div className="w-28 h-30 flex items-center justify-center bg-[#f3f3f3] rounded-xl">
                  <Image
                    width={112}
                    height={120}
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover rounded-xl"
                  />
                </div>

                <div className="flex flex-col flex-1 gap-7">
                  <div className="flex flex-row justify-between">
                    <div className="flex flex-col gap-1">
                      <h2 className="font-semibold text-lg">{item.name}</h2>
                      <p className="text-sm text-gray-500">
                        Varijanta: {item.variant}
                      </p>
                      <p className="text-sm text-gray-500">
                        Dimezija: {item.dimenzija}
                      </p>
                      <p className="text-sm text-gray-500">
                        {item.dostavnaCena != null ? `Cena dostave: ${item.dostavnaCena} RSD` 
                        : <p className="font-bold text-sm text-gray-500">Za ovaj proizvod cena dostave se obračunava nakon kupovine.</p>}
                      </p>
                    </div>

                    <p className="font-medium">{item.price} RSD</p>
                  </div>

                  <div className="flex flex-row justify-between items-center">
                    <div className="flex flex-row items-center gap-2">
                      <button
                        onClick={() =>
                          decreaseQuantity(
                            item.id,
                            item.name,
                            item.image,
                            item.variant
                          )
                        }
                        className="bg-[#f3f3f3] p-2 rounded-md cursor-pointer"
                      >
                        <FaMinus />
                      </button>
                      <span className=" bg-[#f3f3f3] px-6 py-1.5 rounded-md cursor-pointer">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() =>
                          increaseQuantity(
                            item.id,
                            item.name,
                            item.image,
                            item.variant
                          )
                        }
                        className="bg-[#f3f3f3] p-2 rounded-md cursor-pointer"
                      >
                        <FaPlus />
                      </button>
                    </div>

                    <div
                      onClick={() =>
                        removeFromCart(
                          item.id,
                          item.name,
                          item.image,
                          item.variant
                        )
                      }
                      className="p-2 bg-[#f9f6fe] rounded-xl cursor-pointer translate-x-[10px] lg:translate-x-0 md:translate-x-0 sm:translate-x-0"
                    >
                      <MdOutlineCancel className="lg:text-[1.7rem] md:text-[1.7rem] sm:text-[1.7rem] text-[1.4rem]" />
                    </div>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

      {/* Način isporuke */}
      {cartItems.find(item => item.dostavnaCena) ? (
        <div className="flex flex-col gap-4 border-t pt-6">
          <h2 className="text-xl font-semibold mb-2">Način isporuke</h2>
          <div className="flex flex-col gap-3">
            <label className="flex items-center gap-3 cursor-pointer">
              <input
                type="radio"
                name="shipping"
                value="store"
                checked={shippingOption === "store"}
                onChange={() => setShippingOption("store")}
              />
              <span>Preuzimanje u radnji (0 RSD)</span>
            </label>
            
            <div className={cn("")}>
              <label className="flex items-center gap-3 cursor-pointer">
                <input
                  type="radio"
                  name="shipping"
                  value="dostava"
                  checked={shippingOption === "dostava"}
                  onChange={() => setShippingOption("dostava")}
                />
                <span>Dostava (Naplaćuje se)</span>
              </label>
            </div> 

            <label className="flex items-center gap-3 cursor-pointer">
              <input
                type="radio"
                name="shipping"
                value="montaža"
                checked={shippingOption === "montaža"}
                onChange={() => setShippingOption("montaža")}
              />
              <span>Montaža</span>
            </label>
          </div>
        </div>
       ) : 
        <div className="flex flex-col gap-4 border-t pt-6">
          <label className="flex items-center gap-3 cursor-pointer">
              <input
                type="radio"
                name="shipping"
                value="store"
                checked={shippingOption === "store"}
                onChange={() => setShippingOption("store")}
              />
              <span>Preuzimanje u radnji (0 RSD)</span>
          </label>

          <div className={cn("")}>
              <label className="flex items-center gap-3 cursor-pointer">
                <input
                  type="radio"
                  name="shipping"
                  value="dostava"
                  checked={shippingOption === "dostava"}
                  onChange={() => setShippingOption("dostava")}
                />
                <span>Dostava (Naplaćuje se)</span>
              </label>
            </div>

            {/*  <h1>Proizvod u korpi nema opciju dostave, pošto je prevelik za 
            slanje.
          </h1>*/}
         
          <label className="flex items-center gap-3 cursor-pointer">
              <input
                type="radio"
                name="shipping"
                value="montaža"
                checked={shippingOption === "montaža"}
                onChange={() => setShippingOption("montaža")}
              />
              <span>Montaža</span>
            </label>
        </div>
       }

        {/* Podaci Kupca */}
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

            {shippingOption !== "store" && (
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
                {shippingOption === "montaža" ? (
                  <select
                    name="grad"
                    value={customerData.grad}
                    onChange={handleCustomerDataChange}
                    className="border border-gray-300 p-2 rounded"
                  >
                    <option value="Beograd">Beograd</option>
                  </select>
                ) : (
                  <input
                    name="gradDostava"
                    type="text"
                    placeholder="Unesite grad"
                    value={customerData.gradDostava}
                    onChange={handleCustomerDataChange}
                    className="border border-gray-300 p-2 rounded"
                  />
                )}
              </>
            )}
          </div>
        )}

        {/* Subtotal & actions */}
        <div className="flex flex-col gap-4 border-t pt-6">
          <div className="flex flex-row justify-between text-xl font-semibold">
            <p>Cena proizvoda:</p>
            <p>{productSubtotal} RSD</p>
          </div>
          {shippingOption && shippingOption !== "store" && (
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
            <div className="flex flex-row gap-[1rem]">
              <button
                onClick={() => handleCheckout("cod")}
                disabled={!shippingOption || !isFormValid()}
                className={`w-full py-3 rounded-2xl font-semibold cursor-pointer ${
                  shippingOption && isFormValid()
                    ? "bg-black text-white"
                    : "bg-gray-300 text-gray-600 cursor-not-allowed"
                }`}
              >
                Plaćanje pouzećem
              </button>
            </div>

            <div>
              <Link href="/prodavnica" className="w-full">
                <button className="w-full bg-gray-300 text-black py-3 rounded-2xl font-semibold cursor-pointer">
                  Nastavite kupovinu
                </button>
              </Link>
            </div>
          </div>
        </div>
      </main>
    </AnimatedOnScroll>
  );
}

export default function CartPage() {
  
  return (
    <Suspense fallback={<div>Učitavanje korpe…</div>}>
      <CartInner />
    </Suspense>
  );
}
