'use client';
import React, { useEffect, useState } from 'react';
import Product from './product'; // koristi isti komponent kao RelatedProducts
import Link from 'next/link';

export default function RecentlyViewedProductsView() {
  const [recentProducts, setRecentProducts] = useState([]);

  useEffect(() => {
    const stored = localStorage.getItem('recentlyViewed');
    if (stored) {
      const parsed = JSON.parse(stored);

      // Ukloni duplikate po `slug` (ili možeš po `id`)
      const unique = parsed.filter((item, index, self) =>
        index === self.findIndex(p => p.slug === item.slug)
      );

      // Uzmi poslednja 3 gledana proizvoda (najnoviji su na kraju)
      const lastThree = unique.slice(-3).reverse(); // reverse da budu najnoviji prvi

      setRecentProducts(lastThree);
    }
  }, []);

  if (recentProducts.length === 0) return null;

  return (
    <section className='mt-16'>
      <h2 className='text-2xl font-semibold mb-4'>Proizvodi koje ste prethodno gledali</h2>
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
        {recentProducts.map((product, index) => (
          <Product key={index} data={product} />
        ))}
      </div>
    </section>
  );
}


