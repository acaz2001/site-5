'use client'
import { useState } from 'react'
import SidebarFiltersClient from '../../components/SidebarFiltersClient'
import ProductsSortClient from '../../components/ProductsSortClient'

export default function ShopShell({ categories }) {
  const [activeCategory, setActiveCategory] = useState(categories[0])
  const [sortOption, setSortOption] = useState('bestselling')

  return (
    <section className="lg:flex lg:flex-row lg:justify-between mt-10 mb-20 md:flex md:flex-col sm:flex sm:flex-col">
      <aside className="lg:w-[18%] md:w-[100%] w-[100%] mb-10">
        <SidebarFiltersClient
          categories={categories}
          activeCategory={activeCategory}
          setActiveCategory={setActiveCategory}
          sortOption={sortOption}              // samo da se zadrži pri UX-u ako želiš
        />
      </aside>

      <section className="w-[100%] lg:w-[79%]">
        <ProductsSortClient
          categories={categories}
          activeCategory={activeCategory}
          sortOption={sortOption}
          setSortOption={setSortOption}
        />
      </section>
    </section>
  )
}
