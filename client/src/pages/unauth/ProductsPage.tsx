import { useEffect, useState } from "react"
import useDebounce from "@/hooks/useDebounce"
import { ProductsGridList, ProductsSearch } from "@/features"
import { useGetAllProductsQuery } from "@/features/products/productsApi"
import type { TProduct } from "@/features/products/type"


const ProductsPage = () => {
  const [searchValue, setSearchValue] = useState('')
  const [filtredProduct, setFiltredProduct] = useState<TProduct[]>([])
  const { debouncedValue } = useDebounce(searchValue, 400)
  const { data } = useGetAllProductsQuery()
  useEffect(() => {
    if (!data) {
      setFiltredProduct([])
      return
    }

    const searchTerm = debouncedValue.toLowerCase().trim()

    if (!searchTerm) {
      setFiltredProduct(data) // Show all when empty
      return
    }

    setFiltredProduct(
      data.filter((product) =>
        product.title.toLowerCase().includes(searchTerm)
      )
    )
  }, [debouncedValue, data])

  console.log(filtredProduct)

  return (
    <div>
      <ProductsSearch onChange={setSearchValue} />
      <ProductsGridList products={filtredProduct} />

    </div>
  )
}

export default ProductsPage
