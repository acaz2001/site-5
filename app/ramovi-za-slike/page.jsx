import React from 'react'
import Hero from '../../components/hero'
import AnimatedOnScroll from '../../components/AnimatedOnScroll'
import ShopShell from '../prodavnica/ShopShell'
import { getRamoviByColors } from '../../sanity/lib/getRamoviByColors'

const CATEGORIES = [
  'Ramovi za slike',
]

const COLOR = [
  'Sve boje',
  'Crna',
  'Bela'
];


async function RamoviZaSlike() {
  //console.log("Boja"+COLOR[0])

  const bojaRamova = await getRamoviByColors()


  return (
    <div className='px-[0]'>
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

    <section className="lg:flex lg:flex-row lg:justify-between mt-10 mb-20 md:flex md:flex-col sm:flex sm:flex-col">
    <ShopShell categories={CATEGORIES} colors={COLOR}/>
    </section>
    </div>
  )
}

export default RamoviZaSlike
