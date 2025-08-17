import HeroSmaller from '../../components/heroSmaller'
import React from 'react'
import AnimatedOnScroll from '../../components/AnimatedOnScroll'

function Page() {
  return (
    <main className='flex flex-col gap-10'>
    <section>
      <HeroSmaller 
      heading='Uslovi i odredbe'
      subheading='Ažurirano poslednji put: Jul 2025'/>
    </section>

    <section className='w-[100%] flex flex-col justify-center items-center font-[420] text-[1.1rem] gap-5'>
        <div className='w-[45%] flex flex-col items-center justify-center gap-5'>
        <AnimatedOnScroll>
        <p>
1. Predmet poslovanja Prodavac se bavi proizvodnjom i prodajom ogledala, tuš kabina i drugih staklarskih proizvoda po meri, kao i pratećim uslugama montaže i isporuke.
        </p>
        </AnimatedOnScroll>
        <AnimatedOnScroll>
        <p>
2. Poručivanje i cene Sve porudžbine proizvoda po meri realizuju se na osnovu tačnih dimenzija koje kupac dostavi ili koje naši zaposleni izmere na licu mesta (uz dogovoreni termin). Cene su izražene u dinarima i uključuju PDV, osim ako nije drugačije naznačeno. Prodavac zadržava pravo da izmeni cene bez prethodne najave, ali se na već potvrđene porudžbine primenjuju cene važeće u trenutku poručivanja.
        </p>
        </AnimatedOnScroll>
        <AnimatedOnScroll>
        <p>
3. Plaćanje se vrši gotovinski, uplatom na račun ili drugim dogovorenim metodama (npr. kartično plaćanje).
Za proizvode po meri moguće je tražiti avansno plaćanje u iznosu od 30–50% ukupne vrednosti porudžbine.        
        </p>
        </AnimatedOnScroll>
        <AnimatedOnScroll>
        <p>
4. Isporuka i montaža Rok izrade i isporuke proizvoda zavisi od kompleksnosti porudžbine i biće dogovoren individualno. Prodavac ne snosi odgovornost za kašnjenja izazvana okolnostima van naše kontrole (kvarovi, nestašica materijala, vremenski uslovi). Montaža proizvoda se vrši po prethodnom dogovoru i uz obezbeđen pristup prostoru gde se proizvod postavlja.
        </p>
        </AnimatedOnScroll>
        <AnimatedOnScroll>
        <p>
5. Reklamacije i povraćaj robe Za proizvode izrađene po meri kupca povraćaj nije moguć, osim u slučaju fabričke greške ili oštećenja prilikom transporta/montaže. Kupac je dužan da odmah po prijemu pregleda proizvod i prijavi eventualna oštećenja. Prodavac ne odgovara za oštećenja nastala nepravilnom upotrebom, samostalnom montažom ili kasnijim fizičkim oštećenjem.
        </p>
        </AnimatedOnScroll>
        <AnimatedOnScroll>
        <p>
6. Garancija
Garancija važi isključivo za materijalne i proizvodne nedostatke u skladu sa zakonom o zaštiti potrošača.
Trajanje garancije i uslovi održavanja naznačeni su u garantnom listu koji se izdaje uz proizvod.
        </p>
        </AnimatedOnScroll>
        <AnimatedOnScroll>
        <p>
7. Zaštita podataka Prodavac prikuplja i obrađuje lične podatke kupaca isključivo u svrhu realizacije porudžbine. Podaci se ne dele sa trećim licima, osim ako je to neophodno za isporuku ili po zahtevu zakona.
        </p>
        </AnimatedOnScroll>
        <AnimatedOnScroll>
        <p>
8. Odgovornost Prodavac nije odgovoran za štetu nastalu nepravilnim rukovanjem, nepoštovanjem uputstava za montažu ili održavanje proizvoda. Kupac je dužan da obezbedi odgovarajuće uslove na lokaciji gde se vrši montaža (ravna površina, pristup bez prepreka).
        </p>
        </AnimatedOnScroll>
        <AnimatedOnScroll>
        <p>
9. Izmene uslova Prodavac zadržava pravo da menja ove uslove i odredbe bez prethodne najave. Važeća verzija biće objavljena na našem sajtu.
        </p>
        </AnimatedOnScroll>
        <AnimatedOnScroll>
        <p>
10. Primena prava Ovi uslovi i odredbe uređeni su zakonima Republike Srbije. Eventualni sporovi rešavaće se mirnim putem, a u suprotnom pred nadležnim sudom u mestu sedišta firme.
        </p>
        </AnimatedOnScroll>
        </div>
    
    </section>
    </main>
  )
}

export default Page