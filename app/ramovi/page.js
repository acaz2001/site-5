// app/ramovi/page.jsx  — SERVER komponenta

import React from 'react'
import Script from 'next/script'
import Hero from '../../components/hero'
import AnimatedOnScroll from '../../components/AnimatedOnScroll'
import CatalogViewer from '../../components/CatalogViewer'
import { client } from '../../sanity/lib/client'
import { frameCatalogBySlugQuery } from '../../sanity/lib/queries'
import { urlFor } from '../../sanity/lib/image'

// ============================
// SEO METADATA
// ============================
export const metadata = {
  title:
    'Uramljivanje slika i ogledala | Veliki izbor ramova | Staklorezačka Radnja Verde',
  description:
    'Uramljivanje slika, diploma, postera, platna, goblena i ogledala. Veliki izbor drvenih ramova, paspartua i stakala (anti-refleks). Izrada po meri, rok izrade 5-7 dana.',
  keywords: [
    'uramljivanje slika',
    'uramljivanje',
    'uramljivanje beograd',
    'uramljivanje ogledala'
  ],
  alternates: {
    canonical: 'https://www.verdestaklorezac.com/ramovi',
    languages: {
      'sr-RS': 'https://www.verdestaklorezac.com/ramovi',
    },
  },
  openGraph: {
    type: 'website',
    url: 'https://www.verdestaklorezac.com/ramovi',
    title: 'Uramljivanje slika i ogledala – Veliki izbor ramova',
    description:
      'Ramovi po meri, paspartu, anti-refleks staklo. Izrada po meri, rok izrade 5-7 dana.',
    siteName: 'Staklorezačka Radnja Verde',
    locale: 'sr_RS',
    images: [
      {
        url: 'https://i.postimg.cc/3RTtGsNj/272705070-1470019783395612-8195079515659878199-n.jpg',
        width: 1200,
        height: 630,
        alt: 'Uramljivanje slika i ogledala – ramovi po meri',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Uramljivanje slika i ogledala – Ramovi po meri',
    description:
      'Profesionalno uramljivanje: drveni ramovi, paspartu, anti-refleks i UV staklo.',
    images: [
      'https://i.postimg.cc/3RTtGsNj/272705070-1470019783395612-8195079515659878199-n.jpg',
    ],
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
    },
  },
}

// ============================
// JSON-LD BLOKOVI
// ============================
const breadcrumbLd = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    {
      '@type': 'ListItem',
      position: 1,
      name: 'Početna',
      item: 'https://www.verdestaklorezac.com/',
    },
    {
      '@type': 'ListItem',
      position: 2,
      name: 'Ramovi i uramljivanje',
      item: 'https://www.verdestaklorezac.com/ramovi',
    },
  ],
}

const serviceLd = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Uramljivanje slika i ogledala',
  serviceType: 'Uramljivanje',
  provider: {
    '@type': 'LocalBusiness',
    name: 'Staklorezačka Radnja Verde',
    image: 'https://www.verdestaklorezac.com/logo.png', // po želji promeni
    telephone: '+381603170707', // izmeni realnim
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Bulevar Kralja Aleksandra 546',
      addressLocality: 'Beograd',
      postalCode: '11050',
      addressCountry: 'RS',
    },
  },
  areaServed: { '@type': 'City', name: 'Beograd' },
  url: 'https://www.verdestaklorezac.com/ramovi',
  description:
    'Uramljivanje slika, diploma, postera, platna, goblena i ogledala. Veliki izbor drvenih ramova, paspartua i stakala (anti-refleks). Izrada po meri, rok izrade 5-7 dana.',
}

const faqLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Koliko traje uramljivanje?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Standardne porudžbine završavamo za 2–5 radnih dana, u zavisnosti od materijala i obima posla.',
      },
    },
    {
      '@type': 'Question',
      name: 'Koje staklo da izaberem?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Za većinu enterijera preporučujemo obično float staklo; za vredne radove anti-refleks staklo.',
      },
    },
    {
      '@type': 'Question',
      name: 'Radite li ramove po meri?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Da, izrađujemo ramove i ogledala po meri u svim dimenzijama.',
      },
    },
  ],
}

// ============================
// Sanity helpers (SERVER)
// ============================
export const revalidate = 3600 // ISR

async function listCatalogSlugs() {
  try {
    const rows = await client.fetch(
      `*[_type=="frameCatalog"]{ "slug": slug.current }`
    )
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
        // 1000px širina je ok; možeš 1600–2000 ako želiš veću
        src: urlFor(p.image).width(1000).format('png').url(),
      }))

    return pages.length ? { title: data.title, pages } : null
  } catch (e) {
    console.warn('[frameCatalog] fetch error:', e)
    return null
  }
}

// ============================
// PAGE (SERVER)
// ============================
export default async function Ramovi() {
  // Ako ti je slug u Sanity-ju "katalog-ramova", promeni ovde:
  const catalog = await getCatalog('ramovi')
  const slugs = await listCatalogSlugs() // debug info (po želji ukloni)

  return (
    <>
      {/* JSON-LD */}
      <Script
        id="ld-breadcrumb"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }}
      />
      <Script
        id="ld-service"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceLd) }}
      />
      <Script
        id="ld-faq"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }}
      />

      <Hero
        badgeText="Ramovi za slike"
        heading="Uramljivanje slika i ogledala."
        subheading="Birajte između velikog izbora ramova – od klasičnih drvenih i elegantnih zlatnih, do modernih minimalističkih varijanti."
      />

      <section className="flex flex-row items-center justify-between pb-5 mt-10 mb-8 border-b-[1.5px]">
        <div className="lg:w-fit md:w-fit sm:w-fit w-[100%]">
          <AnimatedOnScroll>
            <h1 className="text-[2rem] font-medium mb-5">
              Uramljivanje čuva uspomene.
            </h1>
          </AnimatedOnScroll>
          <AnimatedOnScroll>
            <p className="text-[#6c6474] text-[1.1rem] mt-1.5 font-[450] lg:w-[80%] md:w-[80%] sm:w-[100%] w-[100%]">
              Svaka fotografija, slika ili umetničko delo zaslužuje ram koji
              ističe njegovu vrednost. U našoj radionici spajamo tradiciju
              staklorezačkog zanata i moderan dizajn ramova, stvarajući okvir
              koji je istovremeno zaštita i ukras.
            </p>
          </AnimatedOnScroll>
        </div>
      </section>

      <div className="w-full lg:h-[720px] bg-[url(/frame.jpg)] bg-cover bg-center rounded-3xl my-10 md:h-[720px] sm:h-[720px] h-[400px]" />

      <section className="flex flex-row items-center justify-between pb-5 mt-10 mb-6 border-b-[1.5px]">
        <div className="lg:w-fit md:w-fit sm:w-fit w-[100%]">
          <AnimatedOnScroll>
            <h2 className="text-[2rem] font-medium mb-5">Katalog ramova</h2>
          </AnimatedOnScroll>
          <AnimatedOnScroll>
            <p className="text-[#6c6474] text-[1.1rem] mt-1.5 font-[450] lg:w-[100%] md:w-[100%] sm:w-[100%] w-[100%]">
              Svi ramovi su od drveta, različitih dimenzija - debljine i širine,
              različitih boja i oblika.
            </p>
          </AnimatedOnScroll>

        </div>
      </section>

      {catalog?.pages?.length ? (
        <div className="mb-16">
          <CatalogViewer pages={catalog.pages} />
        </div>
      ) : (
        <p className="text-[#6c6474]">Katalog trenutno nije dostupan.</p>
      )}

      <section className="flex flex-row items-center justify-between pb-5 mt-10 mb-6 border-b-[1.5px]">
        <div className="lg:w-fit md:w-fit sm:w-fit w-[100%]">
          <AnimatedOnScroll>
            <h2 className="text-[2rem] font-medium mb-5">
              Kako uramiti sliku kod nas.
            </h2>
          </AnimatedOnScroll>
          <AnimatedOnScroll>
            <p className="text-[#6c6474] text-[1.1rem] mt-1.5 font-[450] lg:w-[100%] md:w-[100%] sm:w-[100%] w-[100%]">
              Ukoliko se odličite da sliku uramite kod nas, donesite sliku u
              našu radnju, izaberite ram i, ako želite, i paspartu dodatno na
              sliku.
            </p>
            <p className="text-[#6c6474] text-[1.1rem] mt-1.5 font-[450] lg:w-[100%] md:w-[100%] sm:w-[100%] w-[100%]">
              Rok izrade je 5–7 dana.
            </p>
            <p className="text-[#6c6474] text-[1.1rem] mt-1.5 font-[450] lg:w-[100%] md:w-[100%] sm:w-[100%] w-[100%]">
              Lokacija naše radnje: Bulevar Kralja Aleksandra 546, Zvezdara
            </p>
          </AnimatedOnScroll>
        </div>
      </section>
    </>
  )
}
