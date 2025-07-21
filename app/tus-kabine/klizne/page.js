import React from 'react'
import HeroSmaller from '../../../components/heroSmaller'
import MostPopular from '../../../components/mostPopular'
import ProductList from '../../../components/productList';
import AnimatedOnScroll from 'components/AnimatedOnScroll';


function Page() {
  return (
    <main className='flex flex-col gap-10'>
      <HeroSmaller 
      heading='Klizne'
      subheading='Transform your living space with beatifully designed home essentials that bring comfort and style.'
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

        <section className="flex flex-row items-center justify-between pb-5 mt-8 mb-8 border-b-[1px]">
        <div className="lg:w-fit md:w-fit sm:w-fit w-[100%]">
          <AnimatedOnScroll>
          <h1 className="text-[2rem] font-medium mb-5">Besplatne konsultacije i izlazak na teren.</h1>
          </AnimatedOnScroll>
          <AnimatedOnScroll>
          <p className="text-[#6c6474] text-[1.1rem] mt-1.5 font-[450] lg:w-[80%] md:w-[80%] sm:w-[100%] w-[100%]">
          Ako želite da zakažete merenje ili konsultaciju, možete nas kontaktirati, sve podatke imate ispod. Izlazak na merenje se ne naplaćuje.           
          </p>
          </AnimatedOnScroll>
        </div>
      </section>


    </main>
  )
}

export default Page
