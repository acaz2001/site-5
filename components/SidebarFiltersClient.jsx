'use client'
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
    </div>
  )
}
