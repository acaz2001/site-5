import { client } from "./client";

export async function getProductBySlug(slug) {
  const query = `
    *[_type == "Product" && slug.current == $slug][0]{
      _id,
      name,
      slug,
      desc,
      details,
      variantTitle,
      category->{_id, name},
      infoTitle1,
      infoDesc1,
      infoImg1{asset->},
      infoTitle2,
      infoDesc2,
      infoImg2{asset->},
      popular,
      images[]{asset->},
      price,
      salePrice,
      inStock,
      isActive,
      variants[] {
        name,
        price,
        priceOld,
        image { asset-> }
      }
    }
  `;

  return await client.fetch(query, { slug });
}
