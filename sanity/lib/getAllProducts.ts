import React from 'react'
import { defineQuery } from 'next-sanity'
import { sanityFetch } from './live'
import { client } from './client'

export default async function getAllProducts() {
  const query = `
    *[_type == "Product" && isActive == true]{
      _id,
      name,
      slug,
      desc,
      price,
      salePrice,
      popular,
      category->{name},
    images {
      asset->{
        _id,
        url
      }
    }
    }
  `

  try {
    const data = await client.fetch(query)
    return data
  } catch (err) {
    console.error("❌ Greška pri fetchovanju proizvoda:", err.message)
    return []
  }
}
