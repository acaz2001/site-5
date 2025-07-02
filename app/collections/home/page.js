import React from 'react'
import HeroSmaller from '../../../components/heroSmaller'
import MostPopular from '../../../components/mostPopular'
import ProductList from '../../../components/productList';


function Page() {
  return (
    <main className='flex flex-col gap-10'>
      <HeroSmaller 
      heading='Home'
      subheading='Transform your living space with beatifully designed home essentials that bring comfort and style.'
      page= 'Collection /'
      />
      <ProductList activeCategory="Home"/>
    </main>
  )
}

export default Page
