'use client'
import Image from "next/image";
import { FaShopify } from "react-icons/fa";
import { Inter } from 'next/font/google'
import { LuArrowUpRight } from "react-icons/lu";
import "./globals.css";
import { GoArrowRight } from "react-icons/go";
import MostPopular from "../components/mostPopular";
import Testimonials from "../components/testimonials";
import OurCollections from "../components/ourCollections";
import AboutProd from "../components/aboutProd";
import BlogBanner from "../components/blogBanner";
import MoreBanner from "../components/moreBanner";
import VideoHero from "../components/videoHero";
import AboutProdGrid from "../components/aboutProdGrid";
import Link from "next/link";
import ProductList from "../components/productList";
import { AiFillThunderbolt } from "react-icons/ai";
import { FaDiamond } from "react-icons/fa6";
import { FaForward } from "react-icons/fa";
import AnimatedOnScroll from "../components/AnimatedOnScroll";
import BlogGrid from "../components/blogGrid";


export default function Home() {



  const features = [
    {
      icon: <AiFillThunderbolt className='text-[1.2rem]' />,
      title: "Instant Downloads",
      description: "Access your digital products purchase immediately after checkout."
    },
    {
      icon: <FaDiamond className='text-[1.2rem]' />,
      title: "Premium Quality Files",
      description: "All files are high-resolution and carefully crafted for professional use."
    },
    {
      icon: <FaForward className='text-[1.2rem]' />,
      title: "Fast & Easy Integration",
      description: "Easily add your assets to any platform, with ready-to-use formats."
    }
  ]

  
  return (
    <main className="home">
        <section className="custom-box rounded-2xl">
          <div
              className="relative pt-38 pl-8 bg-cover w-full h-[600px] rounded-2xl
              lg:pt-38 lg:pl-15
              md:pt-38 md:pl-15"
            >
                <video
                  className="absolute top-0 left-0 w-full h-full object-cover z-1 rounded-2xl"
                  autoPlay
                  muted
                  loop
                  playsInline
                >
                  <source src="/81656-576083123.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
            <div className="bg-white w-fit p-1 pl-3 pr-3 rounded-2xl flex flex-row items-center gap-[0.5rem] z-10 relative">
              <FaShopify className="z-100 "/>
              <p className="text-[0.8rem] font-medium z-100  ">Powered by Shopify</p>
            </div>
    
            <div className="z-10 relative">
              <h1 style={{lineHeight:'1.1'}} 
              className=" z-100 text-[2.6rem] tracking-tight font-[450] mt-7 w-[90%]
              lg:text-[3.8rem] lg:w-[68%]
              md:w-[65%]">
                The <span className="text-[#8345d8] z-10">beautiful</span> way to sell anything with Us.
              </h1>
              <p className="text-[1.1rem] text-[#6c6474] mt-3 w-[80%] z-100
              lg:w-[40%] md:w-[55%]" >
                Designed by us, this template makes it easy to turn your website into a powerful ecommerce store.
              </p>
            </div>
            <div className="cursor-pointer w-[187px]">
            <Link href='/shop' className="w-10 cursor-pointer">
            <div className="group relative w-fit rounded-3xl flex flex-row items-center gap-[0.5rem] mt-6 pt-2 pb-3 ">
              <LuArrowUpRight 
              className="absolute right-[13px] text-[1rem] z-10 transition-transform duration-400 ease-in-out group-hover:rotate-45" />
              <div className="absolute bg-white rounded-3xl w-[100%] h-full z-1 opacity-50"></div>
              <h4 className="text-[0.9rem] w-fit pl-7 z-10 pr-15 font-medium overflow-hidden">
                Shop Products</h4>
              <div className='absolute right-0.5 bg-white rounded-full w-10 p-[19px] z-9 transition-all duration-800 
              ease-in-out group-hover:w-[98%]' />

            </div>
           
            </Link>
            </div>
          </div>
        </section>

        <section className="flex flex-row items-center justify-between mt-8 mb-8">
          <div className="lg:w-fit md:w-fit sm:w-fit w-[60%]">
            <AnimatedOnScroll>
            <h1 className="text-[1.5rem] font-medium">Most Popular</h1>
            </AnimatedOnScroll>
            <AnimatedOnScroll>
            <p className="text-[#6c6474] mt-1.5">
            Showcase your most popular products, front and center.
            </p>
            </AnimatedOnScroll>
          </div>
          
          <div className="flex flex-row items-center gap-[0.5rem] mr-3 cursor-pointer pt-1.5 pb-1.5 pl-5 pr-3 
          rounded-full transition duration-300 ease-in-out hover:bg-[#ede4fc]">
            <Link href='/shop'>
            <AnimatedOnScroll>
            <p className="font-medium ">View All</p>
            </AnimatedOnScroll>
            </Link>
            <AnimatedOnScroll>
            <GoArrowRight className="text-[1.1rem] font-bold"/>
            </AnimatedOnScroll>
          </div>
          
        </section>

        <ProductList isPopular="true"/>

        <Testimonials></Testimonials>


        <section className="flex flex-row items-center justify-between mt-8 mb-8">
          <div className="lg:w-fit md:w-fit sm:w-fit w-[60%]">
            <AnimatedOnScroll>
            <h1 className="text-[1.5rem] font-medium">Our Collections</h1>
            </AnimatedOnScroll>
            <AnimatedOnScroll>
            <p className="text-[#6c6474] mt-1.5 font-[450]">
            Showcase all of the different collections you have to offer.
            </p>
            </AnimatedOnScroll>
          </div>
          <div className="flex flex-row items-center gap-[0.5rem] mr-3 cursor-pointer pt-1.5 pb-1.5 pl-5 pr-3 
          rounded-full transition duration-300 ease-in-out hover:bg-[#ede4fc]">
            <Link href='/collections'>
            <AnimatedOnScroll>
            <p className="font-medium ">View All</p>
            </AnimatedOnScroll>
            </Link>
            <AnimatedOnScroll>
            <GoArrowRight className="text-[1.1rem] font-bold"/>
            </AnimatedOnScroll>
          </div>
        </section>


        <OurCollections></OurCollections>

        <section className="mt-20">
        <VideoHero></VideoHero>
        </section>
        

        <section className="flex flex-col items-center mt-10">
          <AnimatedOnScroll>
          <h1 className="lg:text-[2.5rem] md::text-[2.5rem] text-[2rem] font-medium text-center">
          Highlight what makes you stand out
          </h1>
          </AnimatedOnScroll>
          <AnimatedOnScroll>
          <p className="text-[#6c6474] mt-4">
          Use this section to show off the key features like these.
          </p>
          </AnimatedOnScroll>
        </section>

        <AboutProdGrid>
        {features.map((item, index) => (
          <AboutProd
            key={index}
            icon={item.icon}
            title={item.title}
            description={item.description}
          />
        ))}
        </AboutProdGrid>



        <section className="flex lg:flex-row md:flex-row sm:flex-row flex-col lg:items-center md:items-center sm:items-center items-start justify-between mt-20  mb-8">
          <div className="lg:w-fit md:w-fit sm:w-fit w-[60%]">
            <AnimatedOnScroll>
            <h1 className="text-[1.5rem] font-medium">Explore the blog</h1>
            </AnimatedOnScroll>
            <AnimatedOnScroll>
            <p className="text-[#6c6474] mt-1.5 font-normal ">
            Share insights, boost SEO, and build trust with your audience.
            </p>
            </AnimatedOnScroll>
          </div>
          <Link href='/blog'>
          <AnimatedOnScroll>
          <div className="flex flex-row items-center gap-[0.5rem] mr-3 cursor-pointer 
          pt-1.5 pb-1.5 lg:pl-5 md:pl-5 sm:pl-5 pl-2 pr-3 mt-4 rounded-full transition duration-300 ease-in-out hover:bg-[#ede4fc]">
            <p className="font-medium">View Posts</p>
            <GoArrowRight className="text-[1.1rem] font-bold"/>
          </div>
          </AnimatedOnScroll>
          </Link>
        </section>
        
        <BlogBanner></BlogBanner>

        <div className="mt-[4rem]">
          <BlogGrid isPopular="true" />
        </div>
        


        

    </main>
  );
}
