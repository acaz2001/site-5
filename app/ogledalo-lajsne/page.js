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
import MirrorMain from '../../components/MirrorMain';

  const images = [
  { src: "https://i.postimg.cc/hjTmLsJJ/Ogl-lajsne-1.jpg.avif", alt: "Image 01" },
  { src: "https://i.postimg.cc/BZ5Dth9k/Ogl-lajsne-2.jpg.avif", alt: "Image 02" },
  { src: "https://i.postimg.cc/GhqyxHpj/Ogl-lajsne-4.jpg.avif", alt: "Image 03" },
  { src: "https://i.postimg.cc/HkN8FRXc/Ogl-lajsne-5.jpg.avif", alt: "Image 04" },
  { src: "https://i.postimg.cc/qqpN8TVY/Ogl-lajsne-11.jpg.avif", alt: "Image 05" },
  { src: "https://i.postimg.cc/QCSHmyjM/Ogl-lajsne-13.jpg.avif", alt: "Image 06" }
];

const CATEGORIES = [
  'Hodnik',
]




function Page() {
  return (
    <main className='flex flex-col gap-[4rem]'>
     <div>
     <Hero
        badgeText="Ogledala sa lajsnama"
        heading="Elegantno ogledalo sa lajsnama, za vaš enterijer."
        subheading="Sve se radi po vašoj meri, ogledala mogu biti i u boji braon ili sivoj, a može i obično ogledalo."
      />
     </div>

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


    <section className="flex flex-row items-center justify-between pb-5 mt-8 mb-8 border-b-[1.5px]">
      <div className="lg:w-fit md:w-fit sm:w-fit w-[100%]">
        <AnimatedOnScroll>
        <h1 className="text-[2rem] font-medium mb-5">Kako će se ogledalo uklopiti u vaš enterijer ?</h1>
        </AnimatedOnScroll>
        <AnimatedOnScroll>
        <p className="text-[#6c6474] text-[1.1rem] mt-1.5 font-[450] lg:lg:w-[80%] md:w-[80%] sm:w-[100%] w-[100%] md:w-[80%] sm:w-[100%] w-[100%]">
        Sa svojim elegantnim dizajnom i tankim lajsnama, ovo ogledalo se prilagođava svakom prostoru.
        </p>
        <p className="text-[#6c6474] text-[1.1rem] mt-1.5 font-[450] lg:w-[80%] md:w-[80%] sm:w-[100%] w-[100%]">
        U trpezariji unosi dozu luksuza i topline, u hodniku daje osećaj prostornosti i svetlosti, dok u dnevnoj sobi postaje dekorativni detalj koji privlači pažnju.
        </p>
        <p className="text-[#6c6474] text-[1.1rem] mt-1.5 font-[450] lg:w-[80%] md:w-[80%] sm:w-[100%] w-[100%]">
        Bilo da je vaš stil moderan, klasičan ili minimalistički, ovo ogledalo će se savršeno uklopiti i podići izgled enterijera – a sve to po ceni koja je pristupačna svima.
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


    <section className="lg:flex lg:flex-row lg:justify-between mt-0 mb-0 md:flex md:flex-col sm:flex sm:flex-col">
      <ShopShell categories={CATEGORIES} />
    </section>


    <ImageGallery images={images} />


    

    <section className="flex flex-row items-center justify-between pb-5 mb-8 border-b-[1.5px]">
      <div className="lg:w-fit md:w-fit sm:w-fit w-[100%]">
        <AnimatedOnScroll>
        <h1 className="text-[2rem] font-medium mb-5">Montaža traje 15-30 minuta.</h1>
        </AnimatedOnScroll>
        <AnimatedOnScroll>
        <p className="text-[#6c6474] text-[1.1rem] mt-1.5 font-[450] lg:lg:w-[80%] md:w-[80%] sm:w-[100%] w-[100%] md:w-[80%] sm:w-[100%] w-[100%]">
        Zavisi od veličine ogledala, za manja ogledala se montira i za manje od 15 minuta, za veća treba malo više vremena ,zbog iznošenja ogledala, nekih 20tak minuta.        
        </p>
        <p className="text-[#6c6474] text-[1.1rem] mt-1.5 font-[450] lg:w-[80%] md:w-[80%] sm:w-[100%] w-[100%]">
        Ogledalo se u većini slučaja kači na zid, da bi kasnije ako je potrebno mogli da pomerate ogledalo, može i da se lepi na zid ako želite umesto kačenja. Kada se kači buše se rupe u zidu (obično 2 rupe, zavisi od veličine ogledala) i stavljaju se kuke i na te kuke se kači ogledalo. Ogledalo iza sebe ima jedan ram koji se ne vidi i na taj ram se kači i drži ogledalo.
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
    

    <section>
      <MirrorMain />
    </section>
      
    </main>
  )
}

export default Page
