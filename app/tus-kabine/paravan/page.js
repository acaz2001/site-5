import React from 'react'
import HeroSmaller from '../../../components/heroSmaller'
import MostPopular from '../../../components/mostPopular'
import ProductList from '../../../components/productList';
import AnimatedOnScroll from '../../../components/AnimatedOnScroll';
import ImageGallery from '../../../components/ImageGallery';

const images = [
  { src: "https://i.postimg.cc/28R7YM1c/319875486-561278205349631-3441663074748939684-n.jpg", alt: "Image 01" },
  { src: "https://i.postimg.cc/g24Vv0NQ/306771389-649502900020199-6796661271470327583-n.jpg", alt: "Image 02" },
  { src: "https://i.postimg.cc/43dzwT0d/281561047-530483038615821-8037878920340169486-n.jpg", alt: "Image 03" },
  { src: "https://i.postimg.cc/1z5KTF8y/334213633-3539654409605518-6976260171136581174-n.jpg", alt: "Image 04" },
  { src: "https://i.postimg.cc/3xrpJTYB/273003793-358312402467939-4570261833178148085-n.jpg", alt: "Image 05" },
  { src: "https://i.postimg.cc/v8zZ86BJ/270039083-286515056781617-1549269258386397363-n.jpg", alt: "Image 06" }
];

export const metadata = {
  title: "Paravani za tuš kabine | Jeftine cene moderan dizajn.",
  description: "Paravani po meri ili gotovi modeli spremni za naručivanje na našem sajtu. Moderni i kvalitetni modeli sa garancijom i brzom montažom.",
  keywords: ["paravani za tus kabine","paravan za tus kabinu"],
  openGraph: {
    title: "Paravani za tuš kabine | Jeftine cene moderan dizajn.",
    description: "Paravani po meri ili gotovi modeli spremni za naručivanje na našem sajtu. Moderni i kvalitetni modeli sa garancijom i brzom montažom.",
    url: "https://verdestaklorezac/tus-kabine",
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


function Page() {
  return (
    <main className='flex flex-col gap-10'>
      <HeroSmaller
       heading='Paravani'
       subheading='Svaki model na sajtu se može raditi po vašoj meri, kontaktirajte nas.'
       page= 'Tuš kabine /'
      />
      <ProductList activeCategory="Paravan"/>

      <section className="flex flex-row items-center justify-between pb-5 mt-8 mb-8 border-b-[1px]">
      <div className="lg:w-fit md:w-fit sm:w-fit w-[100%]">
        <AnimatedOnScroll>
        <h1 className="text-[2rem] font-medium mb-5">Okov u boji.</h1>
        </AnimatedOnScroll>
        <AnimatedOnScroll>
        <p className="text-[#6c6474] text-[1.1rem] mt-1.5 font-[450] lg:w-[100%] md:w-[100%] sm:w-[100%] w-[100%]">
        Postoji mogućnost da sistem,okov budu u boji, najčešće je to zlatna ili crna boja.          
        </p>
        </AnimatedOnScroll>
      </div>
    </section>

    <section className="flex flex-row items-center justify-between pb-5 mb-8 border-b-[1px]">
      <div className="lg:w-fit md:w-fit sm:w-fit w-[100%]">
        <AnimatedOnScroll>
        <h1 className="text-[2rem] font-medium mb-5">Montaža traje manje od 45 minuta.</h1>
        </AnimatedOnScroll>
        <AnimatedOnScroll>
        <p className="text-[#6c6474] text-[1.1rem] mt-1.5 font-[450] lg:w-[100%] md:w-[100%] sm:w-[100%] w-[100%]">
        Što se tiče montaže paravana dosta je jednostavno i ne traje dugo, u nekim slučajevima ne treba ni 30 minuta da se iznese i namontira. Na zid se lepe lajsne (U profili) i u njih se ubacuje paravan i silikonira se. Na kraju se u zid buši i šrafi teleskop, koji se pričvršćuje i za staklo i dodatno fiksira paravan da se ne pomera.         
        </p>
        </AnimatedOnScroll>
      </div>
    </section>


    <ImageGallery images={images}/>

      <section className="flex flex-row items-center justify-between pb-5 mt-8 mb-8 border-b-[1px]">
      <div className="lg:w-fit md:w-fit sm:w-fit w-[100%]">
        <AnimatedOnScroll>
        <h1 className="text-[2rem] font-medium mb-5">Besplatne konsultacije i izlazak na teren.</h1>
        </AnimatedOnScroll>
        <AnimatedOnScroll>
        <p className="text-[#6c6474] text-[1.1rem] mt-1.5 font-[450] lg:w-[80%] md:w-[80%] sm:w-[100%] w-[100%]">
        Ako želite da zakažete merenje ili konsultaciju, možete nas kontaktirati, sve podatke imate ispod. Izlazak na merenje se ne naplaćuje.           
        </p>
        <p className="text-[#6c6474] text-[1.1rem] mt-1.5 font-[450] lg:w-[80%] md:w-[80%] sm:w-[100%] w-[100%]">
        Kontakt telefon: 0603170707
        </p>
        <p className="text-[#6c6474] text-[1.1rem] mt-1.5 font-[450] lg:w-[80%] md:w-[80%] sm:w-[100%] w-[100%]">
        Kontakt email: verdestaklo011@gmail.com
        </p>
        </AnimatedOnScroll>
      </div>
    </section>


    </main>
  )
}

export default Page
