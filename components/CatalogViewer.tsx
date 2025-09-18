"use client"

import React from "react"
import Image from "next/image"

export default function CatalogViewer({ pages }) {
  const [idx, setIdx] = React.useState(0)

  const clamp = (n) => Math.max(0, Math.min(pages.length - 1, n))
  const prev = () => setIdx((i) => clamp(i - 1))
  const next = () => setIdx((i) => clamp(i + 1))
  const goTo = (i) => setIdx(clamp(i))

  React.useEffect(() => {
    const onKey = (e) => {
      if (e.key === "ArrowLeft") prev()
      if (e.key === "ArrowRight") next()
    }
    window.addEventListener("keydown", onKey)
    return () => window.removeEventListener("keydown", onKey)
  }, [])

  const preload = [idx - 1, idx + 1].filter(i => i >= 0 && i < pages.length)

  return (
    <div className="w-full mx-auto">
      {preload.map(i => (
        <link key={pages[i].src} rel="prefetch" as="image" href={pages[i].src} />
      ))}

      <div className="relative w-full rounded-3xl overflow-hidden bg-neutral-100">
        <div className="lg:aspect-[16/10] md:aspect-[16/10] sm:aspect-[16/14] aspect-[16/14] w-full relative">
          <Image
            key={pages[idx].src}
            src={pages[idx].src}
            alt={pages[idx].alt || `Strana ${pages[idx].pageNumber}`}
            fill
            sizes="(max-width: 1024px) 100vw, 1200px"
            className="object-contain"
            priority
          />
        </div>

        <div className="absolute inset-0 flex items-center justify-between px-2">
          <button
            onClick={prev}
            disabled={idx === 0}
            className="h-10 w-10 rounded-full bg-white/80 backdrop-blur disabled:opacity-40 grid place-items-center shadow"
            aria-label="Prethodna"
          >‹</button>
          <button
            onClick={next}
            disabled={idx === pages.length - 1}
            className="h-10 w-10 rounded-full bg-white/80 backdrop-blur disabled:opacity-40 grid place-items-center shadow"
            aria-label="Sledeća"
          >›</button>
        </div>

        <div className="absolute bottom-2 inset-x-0 flex items-center justify-center">
          <span className="px-3 py-1 rounded-full bg-white/90 text-sm shadow">
            Strana {pages[idx].pageNumber} / {pages.length}
          </span>
        </div>
      </div>

      <div className="mt-4 flex gap-2 overflow-x-auto pb-2">
        {pages.map((p, i) => (
          <button
            key={`${p.src}-${i}`}
            onClick={() => goTo(i)}
            className={`relative h-16 aspect-[16/10] rounded-lg overflow-hidden border ${i===idx?'border-black':'border-transparent'}`}
            title={`Strana ${p.pageNumber}`}
            aria-label={`Idi na stranu ${p.pageNumber}`}
          >
            <Image src={p.src} alt={p.alt || ''} fill className="object-cover" sizes="120px" />
          </button>
        ))}
      </div>
    </div>
  )
}
