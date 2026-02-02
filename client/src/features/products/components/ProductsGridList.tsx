import React from 'react'
import ProductCard from './ProductCard'
import { useGetAllProductsQuery } from '../productsApi'

const ProductsGridList = () => {
  const {data:products,isLoading}=useGetAllProductsQuery()
  
  if (isLoading) {
    return(<><div>
      loading.......</div></>)
  }
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-20">
      {products&&products.length>0?products.map((product)=>(<ProductCard key={product.documentId} product={product}/>)):''}
    </div>
  )
}

export default ProductsGridList
