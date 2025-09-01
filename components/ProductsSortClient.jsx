'use client'
import ProductList from "./productList"

export default function ProductsSortClient({
  categories,
  activeCategory,
  sortOption,
  setSortOption,
}) {
  return (
    <>
      <div className="flex items-center justify-end mb-5 gap-3">
        <label htmlFor="sort" className="text-sm text-[#6c6474]">
          Sortiraj:
        </label>
        <select
          id="sort"
          value={sortOption}
          onChange={(e) => setSortOption(e.target.value)}
          className="border rounded-md px-3 py-2 text-sm"
        >
          <option value="bestselling">Najprodavanije</option>
          <option value="price-asc">Cena: niža → viša</option>
          <option value="price-desc">Cena: viša → niža</option>
        </select>
      </div>

      <ProductList
        activeCategory={activeCategory}
        sortOption={sortOption}
      />
    </>
  )
}
