import React from 'react'
import HeroSmaller from '../../../components/heroSmaller'
import MostPopular from '../../../components/mostPopular'
import ProductList from '../../../components/productList';
import AnimatedOnScroll from '../../../components/AnimatedOnScroll';
import ImageGallery from '../../../components/ImageGallery';

const images = [
  { src: "https://i.postimg.cc/zfMdX0sR/368549463-510888394568520-1597494777300401450-n-2.webp", alt: "Image 01" },
  { src: "https://i.postimg.cc/HkrXsddB/312236156-662258232087085-8063440016885051875-n.jpg", alt: "Image 02" },
  { src: "https://i.postimg.cc/pLkW7ngS/385900613-660629965846807-12875019933841925-n.webp", alt: "Image 03" },
  { src: "https://i.postimg.cc/FKB9FXFg/260151651-957674281771102-7080591912376449212-n.jpg", alt: "Image 04" },
  { src: "https://i.postimg.cc/4yzZ1K6B/356628700-287660203647565-602427159856479390-n.webp", alt: "Image 05" },
  { src: "https://i.postimg.cc/DwCh53Gk/398569558-1092593405235379-2887278966517816740-n.webp", alt: "Image 06" }
];



function Page() {
  return (
    <main className='flex flex-col gap-10'>
      <HeroSmaller 
      heading='Klizne'
      subheading='Svaki model na sajtu se može raditi po vašoj meri, kontaktirajte nas.'
      page= 'Tuš kabine /'
      />
      <section className="flex flex-row items-center justify-between pb-5 mt-8 mb-8">
        <div className="lg:w-fit md:w-fit sm:w-fit w-[100%] ">
          <AnimatedOnScroll>
          <h1 className="text-[2rem] font-medium mb-5">Okov je van domašaja vode.</h1>
          </AnimatedOnScroll>
          <AnimatedOnScroll>
          <p className="text-[#6c6474] text-[1.1rem] mt-1.5 font-[450] lg:w-[80%] md:w-[80%] sm:w-[100%] w-[100%]">
          Sav okov koji se koristi u izradi je od prohroma, što znači da okov neće rdjati vremenom zbog vode. Sav sistem koji se ugradjuje nalazi se iznad vaše glave i time nema kontakt sa vodom i nema šta da ga haba.
          </p>
          </AnimatedOnScroll>
        </div>
      </section>


      <ProductList activeCategory="Kabina/ Klizna"/>



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
