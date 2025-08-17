import HeroSmaller from '../../components/heroSmaller'
import React from 'react'
import AnimatedOnScroll from '../../components/AnimatedOnScroll'

function Page() {
  return (
    <main className='flex flex-col gap-10'>
    <section>
      <HeroSmaller 
      heading='Politika privatnosti'
      subheading='Ažurirano poslednji put: Jul 2025'/>
    </section>

    <section className='w-[100%] flex flex-col justify-center items-center font-[420] text-[1.1rem] gap-5'>
        <div className='w-[45%] flex flex-col items-center justify-center gap-5'>
        <AnimatedOnScroll>
        <p>
1. Podaci koje prikupljamo Možemo prikupljati sledeće podatke: Ime i prezime Kontakt podatke (broj telefona, e-mail adresa) Adresu isporuke i naplate Dimenzije i specifikacije proizvoda koje poručujete Informacije koje dobrovoljno dostavite putem upita ili kontakt forme na sajtu
        </p>
        </AnimatedOnScroll>
        <AnimatedOnScroll>
        <p>
2. Način prikupljanja podataka Podatke prikupljamo: Kada popunjavate kontakt formu ili šaljete upit Kada izvršite porudžbinu proizvoda ili usluga Kada nas kontaktirate putem telefona ili e-maila
        </p>
        </AnimatedOnScroll>
        <AnimatedOnScroll>
        <p>
3. Korišćenje podataka Vaši podaci koriste se isključivo za: Obradu porudžbina i isporuku proizvoda Komunikaciju u vezi sa vašim upitima i zahtevima Izdavanje računa i pravnu evidenciju Poboljšanje kvaliteta naših usluga
        </p>
        </AnimatedOnScroll>
        <AnimatedOnScroll>
        <p>
4. Čuvanje i zaštita podataka Podaci se čuvaju na siguran način i dostupni su samo ovlašćenim licima. Ne prodajemo, ne iznajmljujemo niti delimo vaše podatke sa trećim licima, osim ako je to zakonski obavezno ili neophodno radi realizacije usluge (npr. kurirska služba).
        </p>
        </AnimatedOnScroll>
        <AnimatedOnScroll>
        <p>
5. Kolačići (Cookies) Naš sajt može koristiti kolačiće radi poboljšanja korisničkog iskustva i analitike posete. Korišćenjem sajta pristajete na upotrebu kolačića u skladu sa ovom politikom.
        </p>
        </AnimatedOnScroll>
        <AnimatedOnScroll>
        <p>
6. Prava korisnika Imate pravo da: Zatražite uvid u podatke koje čuvamo o vama Zatražite ispravku ili brisanje podataka Povučete saglasnost za korišćenje podataka, osim kada zakon nalaže njihovo čuvanje
        </p>
        </AnimatedOnScroll>
        <AnimatedOnScroll>
        <p>
7. Kontakt Za sva pitanja u vezi sa zaštitom privatnosti možete nas kontaktirati putem: [email adresa] ili na broj telefona 0603170707.
        </p>
        </AnimatedOnScroll>
        </div>
    
    </section>
    </main>
  )
}

export default Page