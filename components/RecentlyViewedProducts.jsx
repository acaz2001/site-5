'use client';
import React, { useEffect, useState } from 'react';
import Link from 'next/link';

export default function RecentlyViewedProducts() {
  const [recentProducts, setRecentProducts] = useState([]);

  useEffect(() => {
    const stored = localStorage.getItem('recentlyViewed');
    if (stored) {
      setRecentProducts(JSON.parse(stored));
    }
  }, []);

  return (
    <div className='flex flex-col gap-4'>
      <h2 className="text-lg font-semibold mb-4">Prethodno gledani proizvodi</h2>
      {recentProducts.length === 0 ? (
        <p className="text-gray-500">Nema prethodno gledanih proizvoda.</p>
      ) : (
        recentProducts.map((product, index) => (
          <Link key={index} href={`/product/${product.slug}`}>
            <div className="flex items-center gap-4 border p-3 rounded-lg cursor-pointer hover:bg-gray-50">
              <img src={product.image} alt={product.name} className="w-16 h-16 object-cover rounded-md" />
              <div className="flex flex-col">
                <p className="font-medium">{product.name}</p>
                <p className="text-sm text-gray-500">{product.price} RSD</p>
              </div>
            </div>
          </Link>
        ))
      )}
    </div>
  );
}
