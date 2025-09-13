
import React from 'react'
import { LuArrowUpRight } from "react-icons/lu";
import Link from 'next/link'
import { client } from '../sanity/lib/client';
import imageUrlBuilder from '@sanity/image-url'
import AnimatedOnScroll from './AnimatedOnScroll';
import Image from 'next/image';



const builder = imageUrlBuilder(client)
function urlFor(source) {
  return builder.image(source)
}


function Product({ data }) {
  if (!data) return null;

console.log("Slika Product Images:", data.image)

  return (
    <>
    <AnimatedOnScroll>
    <main className='relative group w-[100%] lg:w-[100%] z-40'>

      <div className='relative'>
      <Link href={`/prodavnica/${data.slug.current}`}> 
      <div className=' product bg-[#f9f6fe] flex items-center justify-center relative w-[100%] h-[82%] rounded-2xl cursor-pointer z-40'>
        <Image width={412} height={412} alt={data.name}  src={
          data.images?.asset
            ? urlFor(data.images.asset).url()
            : data.image || '/fallback.png'
        }
        className='w-[90%] p-5 my-3 transition-all duration-400 ease-in-out group-hover:scale-[1.05]
        object-cover object-center'>
        </Image>

      </div>
      </Link>
      <Link href={`/prodavnica/${data.slug.current}`}>
      <div className='arrow bg-[#ede4fc] rounded-4xl  absolute bottom-[3%] left-[87.2%] z-50 '>
        <LuArrowUpRight className=
        'p-3 text-[2.9rem] rounded-4xl transition-transform duration-400 ease-in-out group-hover:rotate-45'/>
      </div>
      </Link>
      </div>
      <div className='mt-2 z-50'>
        <h1 className='text-[1.3rem] font-medium'>
        {data.name}
        </h1>
        <p className='text-[0.9rem] text-[#6c6474] font-medium mt-1'>
        RSD <span>{data.price},₀₀</span>    
        </p>
      </div>

    </main>
    </AnimatedOnScroll>
    </>
  )
}

export default Product
