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


// /lib/queries.ts
export const frameCatalogBySlugQuery = `
*[_type == "frameCatalog" && slug.current == $slug][0]{
  title,
  "pages": pages[] | order(pageNumber asc){
    pageNumber,
    alt,
    image
  }
}
`












