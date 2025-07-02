import {defineQuery} from 'next-sanity'

export const getAllProductsQuery = defineQuery(`
    *[_type == "Product"] {
      name,
      slug,
      desc,
      details,
      category,
      images,
      price,
      salePrice,
      inStock
}
    `)
  
export const heroBanner = defineQuery(`*[_type == "heroBanner"]{ title, description, imageMain, imageDesc, price }`)

export const getAllProductsByCategoryFootwear = defineQuery (``)











