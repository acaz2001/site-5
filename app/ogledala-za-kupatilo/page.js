export const revalidate = 60; // Revalidacija svakih 60 sekundi


import React from 'react'
import Hero from '../../components/hero'
import BlogBanner from '../../components/blogBanner'
import BlogGridCard from '../../components/blogGridCard'
import BlogGrid from '../../components/blogGrid'
import MoreBanner from '../../components/moreBanner'
import AnimatedOnScroll from '../../components/AnimatedOnScroll'
import ImageGallery from '../../components/ImageGallery'
import ShopShell from '../prodavnica/ShopShell';
import Script from 'next/script';

export const metadata = {
  title: "Ogledala za kupatilo | Izrada po meri ili gotovi modeli na sajtu.",
  description: "Modeli sa ili bez led rasvete + usluga montaže, takođe jednostavna i jeftina ogledala bez led rasvete.",
  keywords: ["ogledala za kupatilo","jeftina ogledala za kupatilo"],
  alternates: {
  canonical: "https://www.verdestaklorezac.com/ogledala-za-kupatilo",
  languages: {
    "sr-RS": "https://www.verdestaklorezac.com/ogledala-za-kupatilo",
  }
  },
  openGraph: {
    type: "website",
    title: "Ogledala za kupatilo | Izrada po meri ili gotovi modeli na sajtu.",
    description: "Modeli sa ili bez led rasvete + usluga montaže, takođe jednostavna i jeftina ogledala bez led rasvete.",
    url: "https://www.verdestaklorezac.com/ogledala-za-kupatilo",
    siteName: "Staklorezačka Radnja Verde",
    images: [
      {
        url: "https://i.postimg.cc/28R7YM1c/319875486-561278205349631-3441663074748939684-n.jpg",
        width: 1200,
        height: 630,
        alt: "Paravani po meri"
      }
    ],
    locale: "sr_RS",
    type: "website",
    robots: {
    index: true,
    follow: true,
  }
  },
};

const breadcrumbLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Početna", "item": "https://www.verdestaklorezac.com/" },
    { "@type": "ListItem", "position": 2, "name": "Ogledala za kupatilo", "item": "https://www.verdestaklorezac.com/ogledala-za-kupatilo" }
  ]
}

const serviceLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Ogledala za kupatilo – izrada po meri i gotovi modeli",
  "serviceType": "Custom bathroom mirrors",
  "provider": {
    "@type": "LocalBusiness",
    "name": "Staklorezačka Radnja Verde",
    "telephone": "+381603170707",
    "image": "https://www.verdestaklorezac.com/logo.png",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Bulevar Kralja Aleksandra 546",
      "addressLocality": "Beograd",
      "postalCode": "11050",
      "addressCountry": "RS"
    }
  },
  "areaServed": { "@type": "City", "name": "Beograd" },
  "description": "Ogledala za kupatilo po meri: sa ili bez LED rasvete, različite dimenzije, brušene ili fazetirane ivice, profesionalna montaža.",
  "url": "https://www.verdestaklorezac.com/ogledala-za-kupatilo"
}

const faqLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Da li je potrebna priprema struje za LED ogledala?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Da. Za ogledala sa LED rasvetom potrebno je da postoji dovod struje na mestu montaže radi povezivanja osvetljenja."
      }
    },
    {
      "@type": "Question",
      "name": "Koliko traje montaža ogledala?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Montaža standardnog ogledala obično traje oko 30 minuta."
      }
    },
    {
      "@type": "Question",
      "name": "Koje dimenzije i obrade nudite?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Radimo ogledala po meri u različitim dimenzijama, sa brušenim ili fazetiranim (beveled) ivicama, po želji."
      }
    },
    {
      "@type": "Question",
      "name": "Da li izlazak na merenje naplaćujete?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Izlazak na merenje se ne naplaćuje – kontaktirajte nas da zakažemo termin."
      }
    }
  ]
}

{/*
  const images = [
  { src: "https://i.postimg.cc/hjTmLsJJ/Ogl-lajsne-1.jpg.avif", alt: "Image 01" },
  { src: "https://i.postimg.cc/BZ5Dth9k/Ogl-lajsne-2.jpg.avif", alt: "Image 02" },
  { src: "https://i.postimg.cc/GhqyxHpj/Ogl-lajsne-4.jpg.avif", alt: "Image 03" },
  { src: "https://i.postimg.cc/HkN8FRXc/Ogl-lajsne-5.jpg.avif", alt: "Image 04" },
  { src: "https://i.postimg.cc/qqpN8TVY/Ogl-lajsne-11.jpg.avif", alt: "Image 05" },
  { src: "https://i.postimg.cc/QCSHmyjM/Ogl-lajsne-13.jpg.avif", alt: "Image 06" }
];
   */}


const CATEGORIES = [
  'Kupatilo/ LED rasveta',
  'Kupatilo/ Bez LED rasvete'
]




function Page() {
  return (
    <main className='flex flex-col gap-[4rem]'>
          {/* JSON-LD */}
      <Script id="ld-breadcrumb-ogledala" type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />
      <Script id="ld-service-ogledala" type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceLd) }} />
      <Script id="ld-faq-ogledala" type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />


     <div>
     <Hero
        badgeText="Ogledala za kupatilo"
        heading="Uživajte u savršenom spoju modernog dizajna i praktičnosti."
        subheading="Svako ogledalo izrađujemo po meri, sa mogućnošću da prilagodite izgled, dimenzije i stil baš po svojoj želji."
      />
     </div>

    {/* 
        <AnimatedOnScroll>
    <div className='relative w-full lg:h-[700px] md:h-[700px] sm:h-[700px] h-[540px] bg-[url(/ogl-lajnse-banner.avif)] bg-no-repeat 
    bg-cover lg:bg-center md:bg-center sm:right center rounded-3xl'>
        <div className='absolute flex items-center px-10 bg-[#ede4fc] lg:h-full md:h-full h-fit py-5 lg:w-[38%] md:w-[38%] w-[100%] lg:right-0 md:right-0 bottom-0
        rounded-r-3xl leading-[30px] opacity-70 lg:visible md:visible sm:visible invisible'>
          <p className='text-black lg:text-[1.5rem] md:text-[1.5rem] sm:text-[1.2rem] text-[1.2rem] lg:leading-[40px] md:leading-[40px] sm:leading-[30px] leading-[30px] font-medium'>
            Unesite luksuz u svoj dom uz moderno dekorativno ogledalo sa drvenim lajsnama. Dostupno u crnoj, beloj ili zlatnoj varijanti, ovo ogledalo se savršeno uklapa u svaki enterijer – bilo da je u pitanju trpezarija, dnevna soba ili hodnik.
          </p>
        </div>
    </div>
    </AnimatedOnScroll>
    */}


    <section className="flex flex-row items-center justify-between pb-5">
      <div className="lg:w-fit md:w-fit sm:w-fit w-[100%]">
        <AnimatedOnScroll>
        <h1 className="text-[2rem] font-medium mb-5">Ogledala sa ili bez LED rasvete za vaše kupatilo.</h1>
        </AnimatedOnScroll>
        <AnimatedOnScroll>
        <p className="text-[#6c6474] text-[1.1rem] mt-1.5 font-[450] lg:lg:w-[80%] md:w-[80%] sm:w-[100%] w-[100%] md:w-[80%] sm:w-[100%] w-[100%]">
        Naša ogledala dolaze sa bele ili žute LED rasvete, pružajući idealno osvetljenje u svakoj prilici – od jutarnje rutine do večernjeg opuštanja.
        </p>
        <p className="text-[#6c6474] text-[1.1rem] mt-1.5 font-[450] lg:w-[80%] md:w-[80%] sm:w-[100%] w-[100%]">
Dostupna su u različitim dimenzijama i mogu se izraditi po meri, kako bi se savršeno uklopila u vaše kupatilo.
        </p>
        </AnimatedOnScroll>
      </div>
    </section>


    <section className="lg:flex lg:flex-row lg:justify-between mt-0 mb-0 md:flex md:flex-col sm:flex sm:flex-col">
      <ShopShell categories={CATEGORIES} />
    </section>


    


    

    <section className="flex flex-row items-center justify-between pb-5 border-b-[1.5px]">
      <div className="lg:w-fit md:w-fit sm:w-fit w-[100%]">
        <AnimatedOnScroll>
        <h1 className="text-[2rem] font-medium mb-5">Montaža traje 30 minuta.</h1>
        </AnimatedOnScroll>
        <AnimatedOnScroll>
        <p className="text-[#6c6474] text-[1.1rem] mt-1.5 font-[450] lg:lg:w-[80%] md:w-[80%] sm:w-[100%] w-[100%] md:w-[80%] sm:w-[100%] w-[100%]">
        Ukoliko se montiraju ogledala sa LED rasvetom, morate da imate izvedenu struju za to ogledalo da bi moglo da se poveže.
        </p>
        <p className="text-[#6c6474] text-[1.1rem] mt-1.5 font-[450] lg:w-[80%] md:w-[80%] sm:w-[100%] w-[100%]">
        Ogledalo se kači na zid, buše se rupe u zidu i stavljaju se kuke na koje se kači ogledalo.
        </p>
        </AnimatedOnScroll>
      </div>
    </section>


    {/*<ImageGallery images={images} />*/} 

    <section className="flex flex-row items-center justify-between pb-5">
      <div className="lg:w-fit md:w-fit sm:w-fit w-[100%]">
        <AnimatedOnScroll>
        <h1 className="text-[2rem] font-medium mb-5">Ako želite izradu po vašoj meri.</h1>
        </AnimatedOnScroll>
        <AnimatedOnScroll>
        <p className="text-[#6c6474] text-[1.1rem] mt-1.5 font-[450] lg:lg:w-[80%] md:w-[80%] sm:w-[100%] w-[100%] md:w-[80%] sm:w-[100%] w-[100%]">
        Ako želite da zakažete merenje ili konsultaciju ili hoćete da naručite ogledalo po vašoj meri, možete nas kontaktirati, sve podatke imate ispod. Izlazak na merenje se ne naplaćuje.        
        </p>
        <p className="text-[#6c6474] text-[1.1rem] mt-3 font-[450] lg:lg:w-[80%] md:w-[80%] sm:w-[100%] w-[100%] md:w-[80%] sm:w-[100%] w-[100%]">
        Kontakt telefon: 0603170707
        </p>
        <p>Kontakt email: verdestaklo011@gmail.com</p>
        </AnimatedOnScroll>
      </div>
    </section>

    {/*
    <BlogGrid></BlogGrid>
    */}
    
      
    </main>
  )
}

export default Page
