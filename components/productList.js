'use client'
import React from 'react';
import Product from './product';
import productPosts from '../data/products.json';
import { products } from '../sanity/lib/queries';
import getAllProducts from '../sanity/lib/getAllProducts';
import { useState, useEffect } from 'react';
import AnimatedOnScroll from './AnimatedOnScroll';

function ProductList({ activeCategory = 'All', isPopular = 'false' }) {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function fetchProducts() {
      const data = await getAllProducts()
      console.log("📦 Products fetched from Sanity:", data)
      setProducts(data)
      console.log("📦 Sanity proizvodi:", data);

      setLoading(false)
    }

    fetchProducts()
  }, [])

  const filteredByCategory = activeCategory === 'All'
    ? products
    : products.filter(p => p.category?.name === activeCategory)

  const finalProducts = isPopular === 'true'
    ? filteredByCategory.filter(p => p.popular === true)
    : filteredByCategory



  return (
    
    <main className='grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 
    gap-5 auto-rows-auto w-full'>
      {finalProducts.map((data) => (       
        <Product key={data._id} data={data} />
      ))}
    </main>
  )
}

export default ProductList