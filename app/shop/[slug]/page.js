// app/shop/[slug]/page.js
import React from 'react'
import { PiCursorFill } from "react-icons/pi"
import FaqShop from '../../../components/faqShop'
import AboutProdGrid from '../../../components/aboutProdGrid'
import AboutProd from '../../../components/aboutProd'
import Link from 'next/link'
import Testimonials from '../../../components/testimonials'
import ProductClient from '../../../components/ProductClient'
import { client } from '../../../sanity/lib/client'
import imageUrlBuilder from '@sanity/image-url'
import { getProductBySlug } from '../../../sanity/lib/getProductBySlug'
import AnimatedOnScroll from '../../../components/AnimatedOnScroll'
import RelatedProducts from '../../../components/RelatedProducts'
import { GiMirrorMirror } from "react-icons/gi";
import { PiShower } from "react-icons/pi";


const builder = imageUrlBuilder(client)
function urlFor(source) {
  return builder.image(source)
}

// ✅ Build-time param generation
export async function generateStaticParams() {
  const slugs = await client.fetch(`
    *[_type == "Product" && defined(slug.current)]{
      "slug": slug.current
    }
  `)

  console.log("🟢 Static slugs:", slugs) // 🔍 vidi da li se generišu

  return slugs.map((p) => ({
    slug: p.slug.toLowerCase(), // 🔐 lowercase za bezbednost
  }))
}

// ✅ Omogućava i dinamičke slugove (npr. kad nisu u buildu)
export const dynamicParams = true

// ✅ Sprečava keširanje — svaki request je svež
export const revalidate = 0

export default async function Page({ params }) {

  const product = await getProductBySlug(params.slug)


  console.log("🧩 Product data:", product)

  if (!product) return <p>Product not found</p>

  const features = [
    {
      icon: <GiMirrorMirror className='text-[1.2rem]' />,
      title: "Rok isporuke ogledala",
      description: "Je 7-9 dana od dana kada ste poručili proizod. Ako preuzimate u radnji onda je rok 4-5 dana,"
    },
    {
      icon: <PiShower className='text-[1.2rem]' />,
      title: "Rok isporuke tuš kabine",
      description: "Je 10-12 dana od dana kada ste poručili kabinu. Ako preuzimate u radnji onda je rok 5-7 dana,"
    },
    {
      icon: <PiCursorFill className='text-[1.2rem]' />,
      title: "International Shipping",
      description: "Shop from anywhere with convenient worldwide shipping. Only with us enjoy."
    }
  ]

  return (
    <main className='pt-25 w-[100%]'>
      <ProductClient product={product} />

      <section>
        <AboutProdGrid>
          {features.map((item, index) => (
            <AboutProd
              key={index}
              icon={item.icon}
              title={item.title}
              description={item.description}
            />
          ))}
        </AboutProdGrid>
      </section>

      <AnimatedOnScroll>
      <section className='flex flex-col lg:flex-row gap-[3%] w-[100%] h-[750] mb-15 mt-15'>
        <div
          style={{
            backgroundImage: product.infoImg1
              ? `url(${urlFor(product.infoImg1).width(800).url()})`
              : 'none'
          }}
          className='w-[100%] h-[70%] rounded-2xl md:h-[75%] lg:h-[100%]'
        ></div>

        <div className='w-[100%] h-[30%] md:h-[25%] flex flex-col gap-4 lg:pt-62 lg:pb-62'>
          <h1 className='text-[2.4rem] lg:text-[2.8rem] md:text-[2.8rem] font-[450] leading-[1.2]'>
            {product.infoTitle1}
          </h1>
          <p className='text-[#6c6474] text-[1.1rem]'>
            {product.infoDesc1}
          </p>
        </div>
      </section>
      </AnimatedOnScroll>


      <section>
        <Testimonials />
      </section>

      <AnimatedOnScroll>
      <section className='flex flex-col lg:flex-row gap-[5%] w-[100%] h-[750] mt-10'>
        <div className='w-[100%] h-[30%] md:h-[25%] flex flex-col gap-4 lg:pt-62 lg:pb-62'>
          <h1 className='text-[2.4rem] lg:text-[2.8rem] md:text-[2.8rem] font-[450] leading-[1.2]'>
            {product.infoTitle2}
          </h1>
          
          <p className='text-[#6c6474] text-[1.1rem]'>
            {product.infoDesc2}
          </p>
        </div>
        <div
          className='w-[100%] h-[70%] rounded-2xl md:h-[75%] lg:h-[100%]'
          style={{
            backgroundImage: product.infoImg2
              ? `url(${urlFor(product.infoImg2).width(800).url()})`
              : 'none'
          }}
        ></div>
      </section>
      </AnimatedOnScroll>

      <RelatedProducts
  currentProductId={product._id}
  categoryName={product.category?.name}
/>


    </main>
  )
}
