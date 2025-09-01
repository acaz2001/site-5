'use client'
import React from 'react';
import Product from './product';
import productPosts from '../data/products.json';
import { products } from '../sanity/lib/queries';
import getAllProducts from '../sanity/lib/getAllProducts';
import { useState, useEffect, useMemo } from 'react';
import AnimatedOnScroll from './AnimatedOnScroll';

export default function ProductList({
  activeCategory = 'All',
  isPopular = 'false',
  sortOption = 'bestselling',
}) {
  const [items, setItems] = useState([])
  const [loading, setLoading] = useState(true)
  const [errorMsg, setErrorMsg] = useState('')

  useEffect(() => {
    let cancelled = false
    setLoading(true)
    setErrorMsg('')

    async function fetchProducts() {
      try {
        const data = await getAllProducts()
        if (!cancelled) setItems(Array.isArray(data) ? data : [])
      } catch (err) {
        console.error('getAllProducts error:', err)
        if (!cancelled) setErrorMsg('Došlo je do greške pri učitavanju proizvoda.')
      } finally {
        if (!cancelled) setLoading(false)
      }
    }

    fetchProducts()
    return () => {
      cancelled = true
    }
  }, [])

  // Helper: efektivna cena (salePrice > price)
  const getEffectivePrice = (p) => {
    const sale = p?.salePrice
    const base = p?.price
    const nSale = sale === null || sale === undefined ? NaN : Number(sale)
    const nBase = base === null || base === undefined ? NaN : Number(base)

    // Ako je salePrice validan broj, koristi ga; u suprotnom price
    if (!Number.isNaN(nSale)) return nSale
    if (!Number.isNaN(nBase)) return nBase
    return Number.POSITIVE_INFINITY // da padne na kraj kod sort asc
  }

  // 1) Filtriranje po kategoriji
  const filteredByCategory = useMemo(() => {
    if (activeCategory === 'All') return items
    return items.filter((p) => p?.category?.name === activeCategory)
  }, [items, activeCategory])

  // 2) (Opciono) popularni
  const filteredPopular = useMemo(() => {
    if (isPopular === 'true') {
      return filteredByCategory.filter((p) => p?.popular === true)
    }
    return filteredByCategory
  }, [filteredByCategory, isPopular])

  // 3) Sortiranje
  const sortedProducts = useMemo(() => {
    const copy = [...filteredPopular]

    if (sortOption === 'price-asc') {
      copy.sort((a, b) => {
        const pa = getEffectivePrice(a)
        const pb = getEffectivePrice(b)
        return pa - pb
      })
    } else if (sortOption === 'price-desc') {
      copy.sort((a, b) => {
        const pa = getEffectivePrice(a)
        const pb = getEffectivePrice(b)
        return pb - pa
      })
    } else {
      // "bestselling" (default):
      // prvo probamo po "sold" (veći prvo), ako nema, onda "popular" true prvo,
      // i na kraju najnoviji (po _createdAt) kao fallback.
      copy.sort((a, b) => {
        const sa = typeof a?.sold === 'number' ? a.sold : -1
        const sb = typeof b?.sold === 'number' ? b.sold : -1
        if (sb !== sa) return sb - sa

        const pa = a?.popular ? 1 : 0
        const pb = b?.popular ? 1 : 0
        if (pb !== pa) return pb - pa

        // Fallback: _createdAt desc (noviji prvi)
        const da = a?._createdAt ? new Date(a._createdAt).getTime() : 0
        const db = b?._createdAt ? new Date(b._createdAt).getTime() : 0
        return db - da
      })
    }

    return copy
  }, [filteredPopular, sortOption])

  if (loading) {
    return (
      <div className="w-full py-10 text-center text-[#6c6474]">
        Učitavanje proizvoda…
      </div>
    )
  }

  if (errorMsg) {
    return (
      <div className="w-full py-10 text-center text-red-600">
        {errorMsg}
      </div>
    )
  }


  return (
  <>
    {sortedProducts.length > 0 ? (
      <main
        className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3
                   gap-5 auto-rows-auto w-full"
      >
        {sortedProducts.map((data) => (
          <Product key={data._id} data={data} />
        ))}
      </main>
    ) : (
      <div className="w-full  py-10 text-center text-[#6c6474]">
        Nema proizvoda za odabrane filtere.
      </div>
    )}
  </>
)
}