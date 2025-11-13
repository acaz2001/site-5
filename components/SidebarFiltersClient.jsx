'use client'
import Link from "next/link"
import { Label } from "../@components/components/ui/label"
import {
  RadioGroup,
  RadioGroupItem,
} from "../@components/components/ui/radio-group"
import { useSearchParams } from 'next/navigation'
import { clsx } from "clsx"


export default function SidebarFiltersClient({
  categories,
  activeCategory,
  setActiveCategory,
  sortOption, // opcionalno, samo za hint / UX

}) {


  
  return (
    <div>
      <h1 className="text-[1.3rem] font-medium">Prodavnica</h1>
      <p className="text-[0.9rem] w-[70%] text-[#6c6474] mt-1">
        Pretražite proizvode po kategoriji koja vam odgovara.
      </p>

      <div className="flex flex-col gap-4 mt-5 w-full">
        {categories.map((cat) => (
          <button
            key={cat}
            type="button"
            onClick={() => setActiveCategory(cat)}
            className="group flex items-center gap-1.5 border-b pb-4 text-left"
          >
            <svg width="18" height="18" aria-hidden="true">
              <circle
                cx="8"
                cy="8"
                r="8"
                fill={activeCategory === cat ? 'black' : '#ebebeb'}
                className="transition-all group-hover:fill-black"
              />
            </svg>
            <span
              className={`text-[0.9rem] font-medium ${
                activeCategory === cat ? 'text-black' : 'text-[#6c6474]'
              }`}
            >
              {cat}
            </span>
          </button>
        ))}
    


      </div>

    {/*
      <div className="flex flex-col gap-4 mt-5 w-full">
        {colors.map((col) => (
          
        <Link key={col} href={`/ramovi-za-slike?boja=${boja}`}>
          {console.log('Boja je:' + boja)}
          <button
            type="button"
            onClick={() => setActiveColor(col)}
            className="group flex items-center gap-1.5 border-b pb-4 text-left"
          >
            <svg width="18" height="18" aria-hidden="true">
              <circle
                cx="8"
                cy="8"
                r="8"
                fill={activeColor === col ? 'black' : '#ebebeb'}
                className="transition-all group-hover:fill-black"
              />
            </svg>
            <span
              className={`text-[0.9rem] font-medium ${
                activeCategory === col ? 'text-black' : 'text-[#6c6474]'
              }`}
            >
              {col}
            </span>
          </button>
        </Link>
        
        ))}
    


      </div>
     
     */}

      {/* 
            <RadioGroup defaultValue="comfortable">
      {colors?.map((col) => ( 
        <div key={col.id} className="flex items-center gap-3">
          <Link key={col.id} href={`/ramovi-za-slike?boja=${boja}`}>
          <RadioGroupItem  value="default" id={col.id} />
          <Label htmlFor={col.id}>{col}</Label>
          </Link>
        </div>
         ))} 
        <div className="flex items-center gap-3">
          <Link href={`/ramovi-za-slike?boja=${boja}`}>
          <RadioGroupItem  value="default" id='r5' />
          <Label htmlFor='rl2'>Bela</Label>
          </Link>
        </div>
      </RadioGroup>
      */}

    

    

    </div>
  )
}
