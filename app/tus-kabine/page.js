import React from 'react'
import { FaShopify } from "react-icons/fa";
import { LuArrowUpRight } from "react-icons/lu";
import { GoArrowRight } from "react-icons/go";
import OurCollections from '../../components/ourCollections'
import Hero from '../../components/hero'
import AnimatedOnScroll from '../../components/AnimatedOnScroll';
import Link from 'next/link';
import ProductList from '../../components/productList';
import ImageGallery from "../../components/ImageGallery";

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
          <Hero
            badgeText="Tuš kabine"
            heading="Pretražite kabinu koja odgovara vašem stilu."
            subheading="Svaka kabina na sajtu se može raditi po vašoj meri."
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

          
        <section className="flex lg:flex-row md:flex-row sm:flex-col flex-col items-start justify-between mt-15 mb-8">
          <div className="lg:w-fit md:w-fit sm:w-fit w-[100%]">
            <AnimatedOnScroll>
            <h1 className="text-[2rem] font-medium">Najprodavaniji modeli tuš kabina.</h1>
            </AnimatedOnScroll>
            <AnimatedOnScroll>
            <p className="text-[#6c6474] mt-1.5">
            Showcase your most popular products, front and center.
            </p>
            </AnimatedOnScroll>
          </div>
          
          <div className="flex flex-row items-center gap-[0.5rem] mr-3 cursor-pointer py-1.5 lg:pl-5 md:pl-5 sm:pl-5 pr-3 
          rounded-full transition duration-300 ease-in-out hover:bg-[#ede4fc]
          mt-5 lg:mt-0 md:mt-0 sm:mt-0 ">
            <Link href='/shop'>
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
            Ako ste iole odgovorna osoba i pazite da ne lupate vratima,čistite redovno kabinu od kamenca njena dugotrajnost će vam biti neograničena.
            </p>
            <p className="text-[#6c6474] text-[1.1rem] mt-1.5 font-[450] lg:w-[80%] md:w-[80%] sm:w-[100%] w-[100%]">
            Staklo koje se montira je pod obavezno kaljeno, to znači da je to staklo ojačano od običnog i mnogo je otpornije na udarce, daje sigurnost od povreda prilikom loma jer i ako se desi da pukne, staklo će pući na mnogo malih komadića 8x8mm.
            </p>
            <p className="text-[#6c6474] text-[1.1rem] mt-1.5 font-[450] lg:w-[80%] md:w-[80%] sm:w-[100%] w-[100%]">
            Okov se može plastificirati u bilo koju boju (najčešće je to crna i zlatna boja) time možete još više uklopiti kabinu u vaš enterijer ako vam se to svidja.
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



    </main>
  )
}

export default Page
