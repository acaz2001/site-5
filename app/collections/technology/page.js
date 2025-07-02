import React from 'react'
import HeroSmaller from '../../../components/heroSmaller'
import MostPopular from '../../../components/mostPopular'
import ProductList from '../../../components/productList';

function Page() {
  return (
    <main className='flex flex-col gap-10'>
      <HeroSmaller
       heading='Technology'
       subheading='Explore cutting-edge gadgets and devices designed to make your ife easier and more entertaining.'
       page= 'Collection /'
      />
      <ProductList activeCategory="Technology"/>
    </main>
  )
}

export default Page
