import React from 'react'
import Hero from '../../components/hero'
import BlogBanner from '../../components/blogBanner'
import BlogGridCard from '../../components/blogGridCard'
import BlogGrid from '../../components/blogGrid'
import MoreBanner from '../../components/moreBanner'
import AnimatedOnScroll from '../../components/AnimatedOnScroll'
import ImageGallery from '../../components/ImageGallery'


const images = [
  { src: "https://picsum.photos/id/10/1000/1000", alt: "Image 01" },
  { src: "https://picsum.photos/id/11/1000/1000", alt: "Image 02" },
  { src: "https://picsum.photos/id/12/1000/1000", alt: "Image 03" },
  { src: "https://picsum.photos/id/13/1000/1000", alt: "Image 04" },
  { src: "https://picsum.photos/id/14/1000/1000", alt: "Image 05" },
  { src: "https://picsum.photos/id/15/1000/1000", alt: "Image 06" }
];


function Page() {
  return (
    <main className='flex flex-col gap-[4rem]'>
     <div>
     <Hero
        badgeText="Ogledalo iz segmenata"
        heading="Kako da vam svi zavide na dizajnu vašeg enterijera."
        subheading="Use this space to publish engaging content that educates, inspires, and connects with your audiance."
      />
     </div>
     <div className='mt-[-80px]'>
        <BlogBanner></BlogBanner>
     </div>

    <section className="flex flex-row items-center justify-between pb-5 mt-8 mb-8 border-b-[1.5px]">
      <div className="lg:w-fit md:w-fit sm:w-fit w-[100%]">
        <AnimatedOnScroll>
        <h1 className="text-[2rem] font-medium mb-5">Kako će se ogledalo uklopiti u vaš enterijer ?</h1>
        </AnimatedOnScroll>
        <AnimatedOnScroll>
        <p className="text-[#6c6474] text-[1.1rem] mt-1.5 font-[450] lg:lg:w-[80%] md:w-[80%] sm:w-[100%] w-[100%] md:w-[80%] sm:w-[100%] w-[100%]">
        U suštini kao što vidite po slikama ovakva ogledala izgledaju lepo uz svaki enterijer, bilo da je on tamnih ili svetlijih boja.        
        </p>
        <p className="text-[#6c6474] text-[1.1rem] mt-1.5 font-[450] lg:w-[80%] md:w-[80%] sm:w-[100%] w-[100%]">
          Daje vašem enterijeru konačnu lepotu, osećaj većeg prostora, sve što ste radili u kući dolazi do većeg isticanja, još ako vam se ogledalo nalazi pored nekog prozora ili sličnog izvora svetlosti dodatno povećava osvetljenost tog prostora.       
        </p>
        </AnimatedOnScroll>
      </div>
    </section>

    <section className="flex flex-row items-center justify-between pb-5 mb-8 border-b-[1.5px]">
      <div className="lg:w-fit md:w-fit sm:w-fit w-[100%]">
        <AnimatedOnScroll>
        <h1 className="text-[2rem] font-medium mb-5">Kako se odredjuje veličina komada ?</h1>
        </AnimatedOnScroll>
        <AnimatedOnScroll>
        <p className="text-[#6c6474] text-[1.1rem] mt-1.5 font-[450] lg:lg:w-[80%] md:w-[80%] sm:w-[100%] w-[100%] md:w-[80%] sm:w-[100%] w-[100%]">
        Prvi korak je da odredite koje veličine će vam biti ogledalo, npr. ako vam je zid na koji lepite ogledalo 3m visine i širine 2m i toliko će vam biti i ogledalo(3mx2m).        
        </p>
        <p className="text-[#6c6474] text-[1.1rem] mt-1.5 font-[450] lg:w-[80%] md:w-[80%] sm:w-[100%] w-[100%]">
        Drugi korak je da se odlučite za veličinu polja/komada. To je opciono, nekim ljudima se više svidja da im polja budu veća da se vide više u ogledalu, neki vole da budu manja.       
        </p>
        </AnimatedOnScroll>
      </div>
    </section>

    <ImageGallery images={images} />

    <section className="flex flex-row items-center justify-between pb-5 mb-8 border-b-[1.5px]">
      <div className="lg:w-fit md:w-fit sm:w-fit w-[100%]">
        <AnimatedOnScroll>
        <h1 className="text-[2rem] font-medium mb-5">Montaža traje manje od 3 sata.</h1>
        </AnimatedOnScroll>
        <AnimatedOnScroll>
        <p className="text-[#6c6474] text-[1.1rem] mt-1.5 font-[450] lg:lg:w-[80%] md:w-[80%] sm:w-[100%] w-[100%] md:w-[80%] sm:w-[100%] w-[100%]">
        Cela montaža je gotova za 1 dan i traje manje od 3 sata, ako je ogledalo manje onda montaža traje i kraće.        
        </p>
        <p className="text-[#6c6474] text-[1.1rem] mt-1.5 font-[450] lg:w-[80%] md:w-[80%] sm:w-[100%] w-[100%]">
        Komadi se lepe direktno na zid jedan po jedan. Lepku treba 24h da stegne i do tada ne bi trebalo da se diraju ogledala, posle toga bezbedno možete brisati ogledala. Rok izrade je 7-10 dana.       
        </p>
        </AnimatedOnScroll>
      </div>
    </section>

    <section className="flex flex-row items-center justify-between pb-5 mb-8 border-b-[1.5px]">
      <div className="lg:w-fit md:w-fit sm:w-fit w-[100%]">
        <AnimatedOnScroll>
        <h1 className="text-[2rem] font-medium mb-5">Besplatne konsultacije i izlazak na teren.</h1>
        </AnimatedOnScroll>
        <AnimatedOnScroll>
        <p className="text-[#6c6474] text-[1.1rem] mt-1.5 font-[450] lg:lg:w-[80%] md:w-[80%] sm:w-[100%] w-[100%] md:w-[80%] sm:w-[100%] w-[100%]">
        Ako želite da zakažete merenje ili konsultaciju, možete nas kontaktirati, sve podatke imate ispod. Izlazak na merenje se ne naplaćuje.        
        </p>
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
