import React from 'react'
import HeroSmaller from '../../../components/heroSmaller'
import MostPopular from '../../../components/mostPopular'
import ProductList from '../../../components/productList';
import AnimatedOnScroll from '../../../components/AnimatedOnScroll';
import ImageGallery from '../../../components/ImageGallery';

const images = [
  { src: "https://i.postimg.cc/3RTtGsNj/272705070-1470019783395612-8195079515659878199-n.jpg", alt: "Image 01" },
  { src: "https://i.postimg.cc/GhHx4Lzw/282460393-1211901906218389-4226273125088877517-n.jpg", alt: "Image 02" },
  { src: "https://i.postimg.cc/Mp0MTgkJ/335630293-726555945862616-1348476890702537156-n.jpg", alt: "Image 03" },
  { src: "https://i.postimg.cc/tCKW7hYW/Snapins-ai-431672059-333812205792342-6441328870061537036-n-1024.jpg", alt: "Image 04" },
  { src: "https://i.postimg.cc/CLsnh53G/329343079-2400356863447761-2321960168415874905-n.jpg", alt: "Image 05" },
  { src: "https://i.postimg.cc/9fRf7QnN/451588510-1230632678377609-6558026838663741872-n.jpg", alt: "Image 06" }
];


function Page() {
  return (
    <main className='flex flex-col gap-10'>
      <HeroSmaller
       heading='Šarke'
       subheading='Svaki model na sajtu se može raditi po vašoj meri, kontaktirajte nas.'
       page= 'Tuš kabine /'
      />

      <ProductList activeCategory="Kabina/ Šarke"/>

      

      
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
