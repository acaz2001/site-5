import { useState, useEffect } from 'react';
import products from '../data/products.json';
import Link from 'next/link';
import { GoSearch } from "react-icons/go";
import AnimatedOnScroll from './AnimatedOnScroll';

function SearchOverlay({ onClose }) {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);

  useEffect(() => {
    if (query.trim() === '') {
      setResults([]);
    } else {
        const filtered = products.filter((product) =>
        product.name.toLowerCase().includes(query.toLowerCase())
        );
      setResults(filtered);
    }
  }, [query]);

  return (
    <>
    {/* Tamni overlay pozadina */}
    
    <div
      onClick={onClose}
      className="fixed top-0 left-0 w-full h-full bg-black opacity-60 z-50"
    ></div>
    
    <div className="search-overlay fixed top-[88px] left-[30px] lg:w-[544px] md:w-[544px] sm:w-[416px] w-[87%] bg-white h-fit rounded-2xl z-50 flex flex-col items-center justify-center">
     <AnimatedOnScroll>
     <div className='flex flex-row items-center justify-between lg:w-[544px] md:w-[544px] sm:w-[416px] w-[100%] py-2 px-5'>
      <div className='flex flex-row items-center gap-5 w-[95%]'>
        <GoSearch></GoSearch>
        <input
        className='w-[100%] p-[0.5rem] text-[1.2rem] mb-1rem focus:outline-none'
        type="text"
        placeholder="Search ..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        autoFocus
      />
      </div>
    <button className="close-button cursor-pointer text-[1.2rem]" onClick={onClose}>
        &times;
    </button>
      </div>
    </AnimatedOnScroll>
        <ul className="results-list list-none p-0 w-[100%] max-h-[600px] overflow-y-auto bg-white rounded-xl shadow-inner">
        {results.map((product) => (
          <AnimatedOnScroll>
            <li key={product.id} className='py-4 px-2 mx-2 border-b border-[#ede4fc] text-black'>
            <Link href={`/shop/${product.slug}`} className='flex items-center gap-4 hover:bg-gray-100 p-2 rounded-lg'>
                <img src={`/${product.image}.png`} alt={product.name} className="w-12 h-12 object-cover rounded-md" />
                <div>
                <p className="font-medium">{product.name}</p>
                <p className="text-sm text-gray-500">${product.price}</p>
                </div>
            </Link>
            </li>
          </AnimatedOnScroll>
        ))}
        </ul>
    </div>
    </>
  );
}


export default SearchOverlay;
