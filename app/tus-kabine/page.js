import React from 'react'
import { FaShopify } from "react-icons/fa";
import { LuArrowUpRight } from "react-icons/lu";
import { GoArrowRight } from "react-icons/go";
import OurCollections from '../../components/ourCollections'
import Hero from '../../components/hero'
import FaqKabine from '../../components/faqKabine';
import Link from 'next/link';
import AnimatedOnScroll from '../../components/AnimatedOnScroll';
import ProductList from '../../components/productList';
import ImageGallery from "../../components/ImageGallery";
import ShopShell from '../prodavnica/ShopShell';
import Script from 'next/script';

export const metadata = {
  title: "Tuš kabine po meri | Moderna i kvalitetna rešenja",
  description: "Izrada tuš kabina po meri i gotovih modela. Klizne, na šarke i paravani – moderni i kvalitetni modeli sa garancijom i brzom montažom.",
  keywords: ["tuš kabine po meri", "tus kabine,paravani za tus kabine,klizni paravan za tus kabinu,paravan za tus kabinu"],
    alternates: {
    canonical: "https://www.verdestaklorezac.com/tus-kabine",
    languages: {
      "sr-RS": "https://www.verdestaklorezac.com/tus-kabine",
    }
    },
  openGraph: {
    type: "website",
    url: "https://www.verdestaklorezac.com/tus-kabine",
    title: "Tuš kabine po meri | Moderna i kvalitetna rešenja",
    description: "Pretražite našu ponudu tuš kabina – klizne, na šarke i paravani. Kvalitet, sigurnost i moderan dizajn.",
    siteName: "Staklorezačka Radnja Verde",
    images: [
      {
        url: "https://i.postimg.cc/3RTtGsNj/272705070-1470019783395612-8195079515659878199-n.jpg",
        width: 1200,
        height: 630,
        alt: "Tuš kabine po meri"
      }
    ],
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true
  }
  },
};

const breadcrumbLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Početna", "item": "https://www.verdestaklorezac.com/" },
    { "@type": "ListItem", "position": 2, "name": "Tuš kabine", "item": "https://www.verdestaklorezac.com/tus-kabine" }
  ]
}

const serviceLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Tuš kabine po meri",
  "serviceType": "Custom shower enclosures",
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
  "description": "Izrada tuš kabina po meri: klizne, na šarke i paravani. Kaljeno staklo, kvalitetan okov, plastifikacija u boji i montaža za 7 dana.",
  "url": "https://www.verdestaklorezac.com/tus-kabine"
}

const itemListLd = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Klizne tuš kabine",
      "url": "https://www.verdestaklorezac.com/tus-kabine/klizne"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "Tuš kabine na šarke",
      "url": "https://www.verdestaklorezac.com/tus-kabine/sarke"
    },
    {
      "@type": "ListItem",
      "position": 3,
      "name": "Paravani",
      "url": "https://www.verdestaklorezac.com/tus-kabine/paravan"
    }
  ]
}

const faqLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Koliko traje montaža?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Montaža standardne tuš kabine traje obično do 2 sata. Paravan se obično montira za 25–35 minuta."
      }
    },
    {
      "@type": "Question",
      "name": "Koji je rok izrade?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Rok izrade je 7–10 dana, u zavisnosti od modela i gužve."
      }
    },
    {
      "@type": "Question",
      "name": "Da li je staklo kaljeno i bezbedno?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Da. Koristimo kaljeno staklo koje je znatno otpornije na udarce i pri lomu se rasipa u male komadiće radi bezbednosti."
      }
    },
    {
      "@type": "Question",
      "name": "Da li okov rđa?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Okov ne rdja on je od prohroma visokog kvaliteta i može se plastificirati u boju (najčešće crna ili zlatna). Dajemo garanciju 3 godine na okov."
      }
    },
    {
      "@type": "Question",
      "name": "Kako mogu da naručim?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Ako dimenzije odgovaraju, možete naručiti direktno sa sajta. Za izradu po meri, kontakt je moguć telefonom, Instagramom, Facebook-om ili e-mailom. Kontakt telefon: 0603170707."
      }
    }
  ]
}


const CATEGORIES = [
  'Kabina/ Klizna',
  'Kabina/ Šarke',
  'Paravan'
]

export const revalidate = 3600;

const images = [
  { src: "https://i.postimg.cc/3RTtGsNj/272705070-1470019783395612-8195079515659878199-n.jpg", alt: "Image 01" },
  { src: "https://i.postimg.cc/GhHx4Lzw/282460393-1211901906218389-4226273125088877517-n.jpg", alt: "Image 02" },
  { src: "https://i.postimg.cc/5tMBKwJb/319875486-561278205349631-3441663074748939684-n.jpg", alt: "Image 03" },
  { src: "https://i.postimg.cc/tCKW7hYW/Snapins-ai-431672059-333812205792342-6441328870061537036-n-1024.jpg", alt: "Image 04" },
  { src: "https://i.postimg.cc/vB26ynJ1/260151651-957674281771102-7080591912376449212-n.jpg", alt: "Image 05" },
  { src: "https://i.postimg.cc/Mp0MTgkJ/335630293-726555945862616-1348476890702537156-n.jpg", alt: "Image 06" }
];

function Page() {
  
  return (
    <main>
            {/* JSON-LD */}
      <Script id="ld-breadcrumb-tus" type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />
      <Script id="ld-service-tus" type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceLd) }} />
      <Script id="ld-itemlist-tus" type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListLd) }} />
      <Script id="ld-faq-tus" type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />


          <Hero
            badgeText="Tuš kabine"
            heading="Izrada po meri ili gotovi modeli na sajtu."
            subheading="Pretražite kabinu koja odgovara vašem stilu."
          />

          <div className='mt-10'>
          <OurCollections></OurCollections>
          </div>

        <section className="flex flex-row items-center justify-between pb-5 mt-8 mb-8 border-b-[1.5px]">
          <div className="lg:w-fit md:w-fit sm:w-fit w-[100%]">
            <AnimatedOnScroll>
            <h1 className="text-[2rem] font-medium mb-5">Zašto baš izrada po meri.</h1>
            </AnimatedOnScroll>
            <AnimatedOnScroll>
            <p className="text-[#6c6474] text-[1.1rem] mt-1.5 font-[450] lg:lg:w-[80%] md:w-[80%] sm:w-[100%] w-[100%] md:w-[80%] sm:w-[100%] w-[100%]">
            Često ljudi biraju izradu po meri jer postoji dosta varijacija u samom izgledu, kakav će vam biti okov i koje boje, koja vrsta stakla, kakvog je položaja kabina, i tako mogu dobiti svoju kabinu koju su zamislili ili videli negde na internetu.
            </p>
            <p className="text-[#6c6474] text-[1.1rem] mt-1.5 font-[450] lg:w-[80%] md:w-[80%] sm:w-[100%] w-[100%]">
            Izradjivanje kabine po meri je pogodno za sve tipove kupatila, možete biti jako kreativni sa izborom dizajna i time ulepšati izgled vašeg kupatila.            </p>
            </AnimatedOnScroll>
          </div>
        </section>


        <section className="flex flex-row items-center justify-between pb-5 mt-8 mb-8">
          <div className="lg:w-fit md:w-fit sm:w-fit w-[100%]">
            <AnimatedOnScroll>
            <h1 className="text-[2rem] font-medium mb-5">Kakva kabina vam odgovara?</h1>
            </AnimatedOnScroll>
            <AnimatedOnScroll>
            <p className="text-[#6c6474] text-[1.1rem] mt-1.5 font-[450] lg:w-[80%] md:w-[80%] sm:w-[100%] w-[100%]">
            Postoje 3 vrste kabina: Klizna, Na Šarke i Paravani</p>
            <p className="text-[#6c6474] text-[1.1rem] mt-1.5 font-[450] lg:w-[80%] md:w-[80%] sm:w-[100%] w-[100%]">
              Zavisi dosta od prostora i mogućnosti u kupatilu , ako imate veš mašinu na primer i vrata na šarke će vam udarati u mašinu onda je bolja opcija ugraditi Klizna Vrata jer ona ne izlaze iz gabarita kabine.            
            </p>
            <p className="text-[#6c6474] text-[1.1rem] mt-1.5 font-[450] lg:w-[80%] md:w-[80%] sm:w-[100%] w-[100%]">
            Druga stvar je estetika, nekim ljudima se jednostavno više svidja Klizna kabina nego na Šarke, nekima obrnuto.
            </p>
            </AnimatedOnScroll>
          </div>
        </section>


        <ShopShell categories={CATEGORIES} />

          
        <section className="flex lg:flex-row md:flex-row sm:flex-col flex-col items-start justify-between mt-15 mb-8">
          <div className="lg:w-fit md:w-fit sm:w-fit w-[100%]">
            <AnimatedOnScroll>
            <h1 className="text-[2rem] font-medium">Najprodavaniji modeli tuš kabina.</h1>
            </AnimatedOnScroll>
            <AnimatedOnScroll>
            <p className="text-[#6c6474] mt-1.5">
            Pretažite kabine koje se najviše sviđaju kupcima.
            </p>
            </AnimatedOnScroll>
          </div>
          
          <div className="flex flex-row items-center gap-[0.5rem] mr-3 cursor-pointer py-1.5 lg:pl-5 md:pl-5 sm:pl-5 pr-3 
          rounded-full transition duration-300 ease-in-out hover:bg-[#ede4fc]
          mt-5 lg:mt-0 md:mt-0 sm:mt-0 ">
            <Link href='/tus-kabine/klizne'>
            <AnimatedOnScroll>
            <p className="font-medium ">Vidi još</p>
            </AnimatedOnScroll>
            </Link>
            <AnimatedOnScroll>
            <GoArrowRight className="text-[1.1rem] font-bold"/>
            </AnimatedOnScroll>
          </div>
          
        </section>
        <div className='pb-15'>
        <ProductList activeCategory='Kabina/ Klizna'/>
        </div>



        <section className="flex flex-row items-center justify-between pb-5 mt-8 mb-8 border-b-[1.5px]">
          <div className="lg:w-fit md:w-fit sm:w-fit w-[100%]">
            <AnimatedOnScroll>
            <h1 className="text-[2rem] font-medium mb-5">Dugotrajnost kabine i garancija.</h1>
            </AnimatedOnScroll>
            <AnimatedOnScroll>
            <p className="text-[#6c6474] text-[1.1rem] mt-1.5 font-[450] lg:w-[80%] md:w-[80%] sm:w-[100%] w-[100%]">
            Ako ste odgovorna osoba i pazite da ne lupate vratima,čistite redovno kabinu od kamenca njena dugotrajnost će vam biti neograničena.
            </p>
            <p className="text-[#6c6474] text-[1.1rem] mt-1.5 font-[450] lg:w-[80%] md:w-[80%] sm:w-[100%] w-[100%]">
            Staklo koje se montira je pod obavezno kaljeno, to znači da je to staklo ojačano od običnog i mnogo je otpornije na udarce, daje sigurnost od povreda prilikom loma jer i ako se desi da pukne, staklo će pući na mnogo malih komadića 8x8mm.
            </p>
            <p className="text-[#6c6474] text-[1.1rem] mt-1.5 font-[450] lg:w-[80%] md:w-[80%] sm:w-[100%] w-[100%]">
            Okov je od prohroma odličnog kvaliteta, može se plastificirati u bilo koju boju (najčešće je to crna i zlatna boja) time možete još više uklopiti kabinu u vaš enterijer ako vam se to svidja.
            </p>
            </AnimatedOnScroll>
          </div>
        </section>

        <section className="flex flex-row items-center justify-between pb-5 mt-8 mb-8 border-b-[1.5px]">
          <div className="lg:w-fit md:w-fit sm:w-fit w-[100%]">
            <AnimatedOnScroll>
            <h1 className="text-[2rem] font-medium mb-5">Kvalitet okova i garancija.</h1>
            </AnimatedOnScroll>
            <AnimatedOnScroll>
            <p className="text-[#6c6474] text-[1.1rem] mt-1.5 font-[450] lg:w-[80%] md:w-[80%] sm:w-[100%] w-[100%]">
            Sav okov koji se koristi u izradi je od prohroma, što znači da okov neće rdjati vremenom zbog vode.
            </p>
            <p className="text-[#6c6474] text-[1.1rem] mt-1.5 font-[450] lg:w-[80%] md:w-[80%] sm:w-[100%] w-[100%]">
            Kod Kabina kao što je Klizna dobra stvar je što se apsolutno sav okov koji je potreban nalazi iznad glave i nema nikakvog kontakta sa vodom time nema šta da haba okov.Što se tiče vrata na Šarke i Paravana ista je situacija sa tim što će donja šarka kod vrata biti niže i biće malo u kontaktu sa vodom.
            </p>
            <p className="text-[#6c6474] text-[1.1rem] mt-1.5 font-[450] lg:w-[80%] md:w-[80%] sm:w-[100%] w-[100%]">
            Sav okov koji se koristi u izradi je od prohroma, što znači da okov neće rdjati vremenom zbog vode.
            </p>
            <p className="text-[#6c6474] text-[1.1rem] mt-1.5 font-[450] lg:w-[80%] md:w-[80%] sm:w-[100%] w-[100%]">
            Dajemo garanciju 3 godine na okov.
            </p>
            <p className="text-[#6c6474] text-[1.1rem] mt-1.5 font-[450] lg:w-[80%] md:w-[80%] sm:w-[100%] w-[100%]">
            Okov se može plastificirati u bilo koju boju (najčešće je to crna i zlatna boja) time možete još više uklopiti kabinu u vaš enterijer ako vam se to svidja.
            </p>
            </AnimatedOnScroll>
          </div>
        </section>


      <ImageGallery images={images} />       

      <section className='py-15'>
        <AnimatedOnScroll>
            <h1 className="text-[2rem] font-medium pb-3">Najčešće postavljena pitanja.</h1>
            <p className="text-[#6c6474] text-[1.1rem] mb-7 font-[450] lg:w-[80%] md:w-[80%] sm:w-[100%] w-[100%]">
            Pitanja koje nas kupci najčešće pitaju u vezi tuš kabina.
            </p>
        </AnimatedOnScroll>
        <FaqKabine></FaqKabine>
      </section>
      

        <section className="flex flex-row items-center justify-between pb-5 mt-8 mb-8 border-b-[1.5px]">
          <div className="lg:w-fit md:w-fit sm:w-fit w-[100%]">
            <AnimatedOnScroll>
            <h1 className="text-[2rem] font-medium mb-5">Montaža traje manje od 3 sata.</h1>
            </AnimatedOnScroll>
            <AnimatedOnScroll>
            <p className="text-[#6c6474] text-[1.1rem] mt-1.5 font-[450] lg:w-[80%] md:w-[80%] sm:w-[100%] w-[100%]">
            Što se tiče montaže, kabina bude gotova za manje od 2 sata, čak se Paravan montira i za kraće vreme za 25-35min.
            </p>
            <p className="text-[#6c6474] text-[1.1rem] mt-1.5 font-[450] lg:w-[80%] md:w-[80%] sm:w-[100%] w-[100%]">
            Rok izrade je 7-10 dana.
            </p>
            </AnimatedOnScroll>
          </div>
        </section>

        <section className="flex flex-row items-center justify-between pb-5 mt-8 mb-8 border-b-[1.5px]">
          <div className="lg:w-fit md:w-fit sm:w-fit w-[100%]">
            <AnimatedOnScroll>
            <h1 className="text-[2rem] font-medium mb-5">Kako da naručite ?</h1>
            </AnimatedOnScroll>
            <AnimatedOnScroll>
            <p className="text-[#6c6474] text-[1.1rem] mt-1.5 font-[450] w-[100%]">
            Ako vam odgovara dimenzija na sajtu, kabinu možete naručiti preko našeg sajta.
            </p>
            <p className="text-[#6c6474] text-[1.1rem] mt-1.5 font-[450] w-[100%]">
            Ako hoćete da naručite kabinu po vašoj meri:
            </p>
            <p className="text-[#6c6474] text-[1.1rem] mt-1.5 font-[450] w-[100%]">
            Sve porudžbine se vrše preko telefona, Instagrama, Facebook-a, Gmail.
            </p>
            <p className="text-[#6c6474] text-[1.1rem] mt-1.5 font-[450] w-[100%]">
            Broj za naručivanje: 0603170707
            </p>
            </AnimatedOnScroll>
          </div>
        </section>

<script type="application/ld+json" dangerouslySetInnerHTML={{ __html: `
{
  "@context": "https://schema.org",
  "@type": "Product",
  "name": "Tuš kabine po meri",
  "image": "https://i.postimg.cc/3RTtGsNj/272705070-1470019783395612-8195079515659878199-n.jpg",
  "description": "Izrada tuš kabina po meri – klizne, na šarke i paravani. Moderna rešenja za svako kupatilo.",
  "brand": {
    "@type": "Brand",
    "name": "Staklorezačka Radnja"
  },
  "offers": {
    "@type": "AggregateOffer",
    "priceCurrency": "RSD",
    "lowPrice": "15000",
    "highPrice": "55000",
    "availability": "https://schema.org/InStock"
  }
}
`}} />

    </main>

    
  )
}

export default Page
