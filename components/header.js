'use client'
import React, { useState,useRef, useEffect } from 'react'
import { GoSearch } from "react-icons/go";
import { PiBasketFill } from "react-icons/pi";
import { FaGripLines } from "react-icons/fa6";
import Link from 'next/link'
import AddToCart from '../components/addToCart'; // prilagodi putanju
import CartIcon from './cartIcon';
import SearchOverlay from './SearchOverlay ';

function Header() {
  const [showCart, setShowCart] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false); // ✅ NOVO

  const menuRef = useRef(null);

  const handleToggleCart = () => {
    setShowCart((prev) => !prev);
  };

  const handleCloseCart = () => {
    setShowCart(false);
  };

  const handleCloseMenu = () => {
    setIsClosing(true);
    setTimeout(() => {
      setIsMenuOpen(false);
      setIsClosing(false);
    }, 300);
  };

  // klik van menija
  useEffect(() => {
    function handleClickOutside(event) {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        handleCloseMenu();
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // ✅ scroll listener za promenu pozadine
  useEffect(() => {
    if (typeof window === 'undefined') return;

    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);   // skrolovano malo na dole
      } else {
        setIsScrolled(false);  // na vrhu stranice
      }
    };

    handleScroll(); // inicijalno stanje
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Header meni */}
      <main
        className={`header fixed z-40 flex flex-row items-center w-fit lg:gap-2 
        md:gap-2 sm:gap-0 gap-0 px-4 py-[10px] rounded-xl
        ${isScrolled ? 'bg-[#ede4fc] transition-all transition-discrete ' : 'bg-transparent transition-all transition-discrete'}`}
      >
        {isMenuOpen && (
          <div
            ref={menuRef}
            className={`lg:hidden md:hidden heder-dropdown absolute top-[-2px] right-0 z-30 bg-white w-full shadow-md p-4 pt-15 rounded-xl ${
              isClosing ? 'animate-slide-up' : 'animate-slide-down'
            }`}
          >
            <ul className="flex flex-col gap-4 text-lg font-medium">
              <li><Link href="/prodavnica">Ogledala</Link></li>
              <li><Link href="/ogledala-za-kupatilo">Ogledala za kupatilo</Link></li>
              <li><Link href="/ogledalo-lajsne">Ogledala sa lajsnama</Link></li>
              <li><Link href="/ogledala-iz-segmenata">Ogledalo Segmenti</Link></li>
              <li><Link href="/tus-kabine">Tuš kabine</Link></li>
              <li><Link href="/ramovi">Uramljivanje</Link></li>
              <li><Link href="/podrska">Kontakt</Link></li>
            </ul>
          </div>
        )}

        <section className='mr-1.5 z-40'>
          <Link href="/">
            <h2 className='text-[1.35rem] text-[#4aaf31] font-medium cursor-pointer'>
              VERDE
            </h2>
          </Link>
        </section>

        <section>
          <ul className='flex flex-row items-center gap-0 text-[0.9rem] z-40'>
            <Link href="/prodavnica">
              <li className='header-shop cursor-pointer text-[0.9rem] hover:bg-[#d9d1f7] hover:rounded-[10px] pt-2 pb-2 pl-3 pr-3 font-[450] lg:block md:block sm:block hidden'>
                Ogledala
              </li>
            </Link>
            <Link href="/tus-kabine">
              <li className='cursor-pointer text-[0.9rem] hover:bg-[#d9d1f7] hover:rounded-[10px] pt-2 pb-2 pl-3 pr-3 font-[450] lg:block md:block sm:block hidden'>
                Tuš kabine
              </li>
            </Link>
            <Link href="/ogledala-iz-segmenata">
              <li className='cursor-pointer text-[0.9rem] hover:bg-[#d9d1f7] hover:rounded-[10px] pt-2 pb-2 pl-3 pr-3 font-[450] lg:block md:block sm:block hidden'>
                Ogl. Segmenti
              </li>
            </Link>
            <Link href="/podrska">
              <li className='cursor-pointer hidden lg:block md:block sm:hidden text-[0.85rem] hover:bg-[#d9d1f7] hover:rounded-[10px] pt-2 pb-2 pl-3 pr-3 font-[450]'>
                Kontakt
              </li>
            </Link>
          </ul>
        </section>

        <section className='header-icons flex flex-row items-center lg:gap-2 md:gap-2 sm:gap-1.5 gap-2 ml-2 z-40'>
          <GoSearch
            onClick={() => setIsSearchOpen(true)}
            className='text-[1.6rem] cursor-pointer font-bold p-1 lg:block md:block sm:block block hover:bg-[#d9d1f7] hover:rounded-2xl'
          />
          <CartIcon showCart={showCart} setShowCart={setShowCart} className='text-[1.15rem]' />
          <FaGripLines
            onClick={() => setIsMenuOpen((prev) => !prev)}
            className='lg:hidden md:hidden sm:hidden block ml-2.5'
          />
        </section>

        {isSearchOpen && (
          <SearchOverlay onClose={() => setIsSearchOpen(false)} />
        )}
      </main>

      {showCart && (
        <div
          className="fixed inset-0 z-50 w-[100%] bg-black opacity-80"
          onClick={handleCloseCart}
        />
      )}

      <div className='z-100'>
        <AddToCart show={showCart} setShow={setShowCart} />
      </div>
    </>
  );
}

export default Header;
