'use client';
import React, { useEffect, useState } from 'react';
import Product from './product';
import getAllProducts from '../sanity/lib/getAllProducts';

function RelatedProducts({ currentProductId, categoryName }) {
  const [related, setRelated] = useState([]);

  useEffect(() => {
    async function fetchRelated() {
      const allProducts = await getAllProducts();

      const filtered = allProducts.filter(
        (p) => p._id !== currentProductId && p.category?.name === categoryName
      );

      setRelated(filtered.slice(0, 3)); // uzmi samo 3
    }

    fetchRelated();
  }, [currentProductId, categoryName]);

  if (related.length === 0) return null;

  return (
    <section className='mt-16'>
      <h2 className='text-2xl font-semibold mb-4'>Related Products</h2>
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
        {related.map((product) => (
          <Product key={product._id} data={product} />
        ))}
      </div>
    </section>
  );
}

export default RelatedProducts;
