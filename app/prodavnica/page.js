import React from 'react'
import Hero from '../../components/hero'
import Product from '../../components/product'
import { LuCircle } from "react-icons/lu";
import { FaGripLines } from "react-icons/fa6";
import ProductSort from '../../components/ProductSort'
import ProductsSortClient from '../../components/ProductsSortClient' // server komponenta
import SidebarFiltersClient from '../../components/SidebarFiltersClient' // client komponenta
import ShopShell from './ShopShell' // ⬅️ novi client wrapper

export const dynamic = 'force-static'   // forsira SSG za inicijalni render

const CATEGORIES = [
  'Kupatilo/ LED rasveta',
  'Kupatilo/ Bez LED rasvete',
  'Hodnik',
]


export default function Page() {
  return (
    <main>
      <Hero
        badgeText="Ogledala"
        heading="Svaki proizvod se može raditi po vašoj meri"
        subheading="Odaberite proizvod i promenite ga kako vi želite da izgleda, dimenzije, boja, LED..."
      />

      <section className="lg:flex lg:flex-row lg:justify-between mt-10 mb-20 md:flex md:flex-col sm:flex sm:flex-col">
        <ShopShell categories={CATEGORIES} />
      </section>
    </main>
  )
}