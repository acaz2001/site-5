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

export const metadata = {
  title: "Ogledala | Prodavnica",
  description: "Prodavnica za ogledala, pretražite ogledala za kupatilo, hodnik, dnevnu ili spavaću sobu.",
  keywords: ["paravani za tus kabine","paravan za tus kabinu"],
  openGraph: {
    title: "Ogledala | Prodavnica",
    description: "Prodavnica za ogledala, pretražite ogledala za kupatilo, hodnik, dnevnu ili spavaću sobu.",
    url: "https://verdestaklorezac/tus-kabine",
    siteName: "Staklorezačka Radnja Verde",
    images: [
      {
        url: "https://i.postimg.cc/28R7YM1c/319875486-561278205349631-3441663074748939684-n.jpg",
        width: 1200,
        height: 630,
        alt: "Paravani po meri"
      }
    ],
    locale: "sr_RS",
    type: "website",
    robots: {
    index: true,
    follow: true,
  }
  },
};

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