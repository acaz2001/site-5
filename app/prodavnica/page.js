'use client'
import React from 'react'
import Hero from '../../components/hero'
import Product from '../../components/product'
import ProductList from '../../components/productList'
import { LuCircle } from "react-icons/lu";
import { FaGripLines } from "react-icons/fa6";
import { useState } from 'react';
import ProductSort from '../../components/ProductSort'

const CATEGORIES = [
  'Kupatilo/ LED rasveta',
  'Kupatilo/ Bez LED rasvete',
  'Hodnik',
]


function Page() {
  const [activeCategory, setActiveCategory] = useState('Kupatilo/ LED rasveta')
  const [sortOption, setSortOption] = useState('bestselling') // default

  return (
    <main>
      <Hero
        badgeText="Ogledala"
        heading="Svaki proizvod se može raditi po vašoj meri"
        subheading="Odaberite proizvod i promenite ga kako vi želite da izgleda, dimenzije, boja, LED..."
      />

      <section
        className='lg:flex lg:flex-row lg:justify-between mt-10 mb-20
                   md:flex md:flex-col md:justify-between
                   sm:flex sm:flex-col'
      >
        {/* Sidebar */}
        <aside className='lg:w-[18%] md:w-[100%] w-[100%] mb-10'>
          <div>
            <h1 className='text-[1.3rem] font-medium'>Prodavnica</h1>
            <p
              className='text-[0.9rem] w-[70%] pt-1 lg:text-[0.9rem] text-[#6c6474] font-normal mt-1
                         sm:w-[100%] sm:text-[0.9rem]'
            >
              Pretražite proizvode po kategoriji koja vam odgovara.
            </p>
          </div>

          <div className='flex flex-col gap-4 mt-5 w-[100%]'>
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setActiveCategory(cat)}
                className='group flex flex-row items-center gap-1.5 border-b pb-4 cursor-pointer text-left'
              >
                <svg width="18" height="18">
                  <circle
                    cx="8"
                    cy="8"
                    r="8"
                    fill={activeCategory === cat ? 'black' : '#ebebeb'}
                    className='transition-all duration-400 ease-in-out group-hover:fill-black'
                  />
                </svg>
                <span
                  className={`text-[0.9rem] font-medium ${
                    activeCategory === cat ? 'text-black' : 'text-[#6c6474]'
                  }`}
                >
                  {cat}
                </span>
              </button>
            ))}
          </div>
        </aside>

        {/* Products + Sort */}
        <section className='w-[100%] lg:w-[79%]'>
          <div className='flex items-center lg:justify-end md:justify-end justify-start mb-5 gap-3'>
            <label htmlFor="sort" className='text-sm text-[#6c6474]'>
              Sortiraj:
            </label>
            <select
              id="sort"
              value={sortOption}
              onChange={(e) => setSortOption(e.target.value)}
              className='border rounded-md px-3 py-2 text-sm'
            >
              <option value="bestselling">Najprodavanije</option>
              <option value="price-asc">Cena: niža → viša</option>
              <option value="price-desc">Cena: viša → niža</option>
            </select>
          </div>

          <ProductList
            activeCategory={activeCategory}
            sortOption={sortOption}
          />
        </section>
      </section>
    </main>
  )
}

export default Page