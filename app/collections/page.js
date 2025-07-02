import React from 'react'
import { FaShopify } from "react-icons/fa";
import { LuArrowUpRight } from "react-icons/lu";
import { GoArrowRight } from "react-icons/go";
import OurCollections from '../../components/ourCollections'
import Hero from '../../components/hero'

function Page() {
  return (
    <main>
          <Hero
            badgeText="Collections"
            heading="Curate your products into simple collections"
            subheading="Use this page to group your products into simple collections, making it easy for customers to explore."
          />

              <div className='mt-10'>
              <OurCollections></OurCollections>
              </div>
    </main>
  )
}

export default Page
