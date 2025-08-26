'use client'
import React, { useEffect, useMemo, useState } from 'react'
import { client } from '../sanity/lib/client'
import Product from './product' // pretpostavka: prima prop { product }

const buildQuery = (sortOption) => {
  // Napravi SORT deo upita
  // Koristimo coalesce(salePrice, price) da vrednost bude “efektivna cena” kad postoji sniženje
  let orderClause = 'sold desc, _createdAt desc' // default: najprodavanije
  if (sortOption === 'price-asc') orderClause = 'coalesce(salePrice, price) asc'
  if (sortOption === 'price-desc') orderClause = 'coalesce(salePrice, price) desc'

  return `
    *[_type == "Product" && isActive == true && category->name == $category]
    | order(${orderClause}) {
      _id,
      name,
      "slug": slug.current,
      price,
      salePrice,
      sold,
      "images": images[]{ asset->{ url } },
      "category": category->{
        name
      }
    }
  `
}

export default function ProductSort({ activeCategory, sortOption }) {
  const [items, setItems] = useState([])
  const [loading, setLoading] = useState(true)
  const [errorMsg, setErrorMsg] = useState('')

  const query = useMemo(() => buildQuery(sortOption), [sortOption])

  useEffect(() => {
    let cancelled = false
    setLoading(true)
    setErrorMsg('')

    client
      .fetch(query, { category: activeCategory })
      .then((data) => {
        if (!cancelled) {
          setItems(Array.isArray(data) ? data : [])
        }
      })
      .catch((err) => {
        if (!cancelled) {
          console.error('Sanity fetch error:', err)
          setErrorMsg('Došlo je do greške pri učitavanju proizvoda.')
        }
      })
      .finally(() => {
        if (!cancelled) setLoading(false)
      })

    return () => {
      cancelled = true
    }
  }, [activeCategory, query])

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

  if (items.length === 0) {
    return (
      <div className="w-full py-10 text-center text-[#6c6474]">
        Nema proizvoda za odabranu kategoriju.
      </div>
    )
  }

  return (
    <div className="grid gap-6
                    grid-cols-1
                    sm:grid-cols-2
                    lg:grid-cols-3">
      {items.map((product) => (
        <Product key={product._id} product={product} />
      ))}
    </div>
  )
}
