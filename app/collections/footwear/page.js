import React from 'react'
import HeroSmaller from '../../../components/heroSmaller'
import MostPopular from '../../../components/mostPopular'
import ProductList from '../../../components/productList';


function Page() {
  return (
    <main className='flex flex-col gap-10'>
      <HeroSmaller
       heading='Footwear'
       subheading='Step up your style with our collection of comfortable, versatile, and on-trend footwear for every occasion.'
       page= 'Collection /'
      />
      <ProductList activeCategory="Footwear"/>
    </main>
  )
}

export default Page
