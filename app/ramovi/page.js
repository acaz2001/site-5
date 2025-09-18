import React from 'react'
import Hero from '../../components/hero'
import AnimatedOnScroll from '../../components/AnimatedOnScroll'
import CatalogViewer from '../../components/CatalogViewer'
import { client } from '../../sanity/lib/client'
import { frameCatalogBySlugQuery } from '../../sanity/lib/queries'
import { urlFor } from '../../sanity/lib/image'

export const revalidate = 3600 // ISR

async function listCatalogSlugs() {
  try {
    const rows = await client.fetch(`*[_type=="frameCatalog"]{ "slug": slug.current }`)
    return (rows || []).map((r) => r.slug).filter(Boolean)
  } catch (e) {
    return [`ERR_FETCH: ${e.message}`]
  }
}

async function getCatalog(slug) {
  try {
    const data = await client.fetch(frameCatalogBySlugQuery, { slug })
    if (!data?.pages?.length) return null

    const pages = data.pages
      .filter((p) => p?.image && Number.isFinite(p?.pageNumber))
      .sort((a, b) => a.pageNumber - b.pageNumber)
      .map((p) => ({
        pageNumber: p.pageNumber,
        alt: p.alt ?? `Strana ${p.pageNumber}`,
        src: urlFor(p.image).width(1000).format('png').url(),
      }))

    return pages.length ? { title: data.title, pages } : null
  } catch (e) {
    console.warn('[frameCatalog] fetch error:', e)
    return null
  }
}

export default async function Ramovi() {
  const slugs = await listCatalogSlugs()         // debug info
  const catalog = await getCatalog('ramovi')     // promeni slug po potrebi

  return (
    <>
      <Hero
        badgeText="Ramovi za slike"
        heading="Uramljivanje slika i ogledala."
        subheading="Birajte između velikog izbora ramova – od klasičnih drvenih i elegantnih zlatnih, do modernih minimalističkih varijanti."
      />

      <section className="flex flex-row items-center justify-between pb-5 mt-10 mb-8 border-b-[1.5px]">
        <div className="lg:w-fit md:w-fit sm:w-fit w-[100%]">
          <AnimatedOnScroll>
            <h1 className="text-[2rem] font-medium mb-5">Uramljivanje čuva uspomene.</h1>
          </AnimatedOnScroll>
          <AnimatedOnScroll>
            <p className="text-[#6c6474] text-[1.1rem] mt-1.5 font-[450] lg:w-[80%] md:w-[80%] sm:w-[100%] w-[100%]">
              Svaka fotografija, slika ili umetničko delo zaslužuje ram koji ističe njegovu vrednost. U našoj radionici spajamo tradiciju staklorezačkog zanata i moderan dizajn ramova, stvarajući okvir koji je istovremeno zaštita i ukras.
            </p>
          </AnimatedOnScroll>
        </div>
      </section>

      <div className='w-full h-[720px] bg-[url(/frame.jpg)] bg-cover bg-center rounded-3xl my-10' />

      <section className="flex flex-row items-center justify-between pb-5 mt-10 mb-6 border-b-[1.5px]">
        <div className="lg:w-fit md:w-fit sm:w-fit w-[100%]">
          <AnimatedOnScroll>
            <h2 className="text-[2rem] font-medium mb-5">Katalog ramova</h2>
          </AnimatedOnScroll>
          <AnimatedOnScroll>
            <p className="text-[#6c6474] text-[1.1rem] mt-1.5 font-[450] lg:w-[100%] md:w-[100%] sm:w-[100%] w-[100%]">
              Svi ramovi su od drveta, različitih dimenzija - debljine i širine, različitih boja i oblika.
            </p>
          </AnimatedOnScroll>

        </div>
      </section>

    {/*
    
    */}
      {catalog?.pages?.length ? (
        <div className="mb-16">
          <CatalogViewer pages={catalog.pages} />
        </div>
      ) : (
        <p className="text-[#6c6474]">Katalog trenutno nije dostupan.</p>
      )}
    </>
  )
}
