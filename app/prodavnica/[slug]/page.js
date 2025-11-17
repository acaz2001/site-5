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
import { CiDeliveryTruck } from "react-icons/ci";
import RecentlyViewedProductsView from '../../../components/RecentlyViewedProductsView'
import Image from 'next/image'
import BackToTop from '../../../components/bactToTop'


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


  return slugs.map((p) => ({
    slug: p.slug.toLowerCase(), // 🔐 lowercase za bezbednost
  }))
}

// ✅ Omogućava i dinamičke slugove (npr. kad nisu u buildu)
export const dynamicParams = true

// ✅ Sprečava keširanje — svaki request je svež
export const revalidate = 60

export default async function Page({ params }) {

  const product = await getProductBySlug(params.slug)



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
      icon: <CiDeliveryTruck className='text-[1.2rem]' />,
      title: "Načini isporuke",
      description: "Preuzmite proizvod kod nas u radnji bez nadoknade, dostava ili montaža na adresi sa nadoknadom."
    }
  ]

  return (
    <main className='pt-25 w-[100%] relative'>
      
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

      <BackToTop image={product.infoImg1} name={product.name} cena={product.price}
      dimenzija={product.dimension} product={product} opis={product.desc}/>
      
      <AnimatedOnScroll>
      <section 
      className='flex flex-col lg:flex-row gap-[3%] w-[100%] 
      h-fit mb-15 mt-0'>
        <div
          className='w-[100%] h-fit flex items-center rounded-2xl '
        >
          <Image src={urlFor(product.infoImg1).width(800).url()}
          width={800}
          height={900}
          alt={product.infoTitle1}
          className='lg:h-[850px] w-[100%] rounded-3xl lg:object-cover
          md:aspect-[1/1] md:object-cover'/>
        </div>

        <div className='w-[100%] h-[50%] lg:h-[30%] sm:h-[30%] md:h-[25%] flex flex-col gap-4 lg:pt-62 lg:pb-62
        pt-5'>
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
      <section 
      className='flex flex-col lg:flex-row gap-[6%] w-[100%] 
            h-fit mb-15 mt-15'>        
      <div className='w-[100%] h-[30%] md:h-[25%] flex flex-col gap-4 lg:pt-62 lg:pb-62'>
          <h1 className='text-[2.4rem] lg:text-[2.8rem] md:text-[2.8rem] font-[450] leading-[1.2]'>
            {product.infoTitle2}
          </h1>
          
          <p className='text-[#6c6474] text-[1.1rem]'>
            {product.infoDesc2}
          </p>
        </div>
        <div
          className='w-[100%] h-fit flex items-center rounded-2xl '
        >
        <Image src={urlFor(product.infoImg2).width(800).url()}
          width={800}
          height={900}
          alt={product.infoTitle2}
          className='lg:h-[850px] w-[100%] rounded-3xl lg:object-cover
          md:aspect-[1/1] md:object-cover lg:mt-0 mt-5'/>
        </div>
      </section>
      </AnimatedOnScroll>

      <RelatedProducts
        currentProductId={product._id}
        categoryName={product.category?.name}
      />

      {/*<RecentlyViewedProductsView /> */}
      

    
    </main>
  )
}
