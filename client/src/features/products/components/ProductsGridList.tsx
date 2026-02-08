import React from 'react'
import ProductCard from './ProductCard'
import { useGetAllProductsQuery } from '../productsApi'
import type { TProduct } from '../type'
type TProductsGridList={
  products:TProduct[]

}

const ProductsGridList = ({products}:TProductsGridList) => {



  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-20">
      {products && products.length > 0 ? products.map((product) => (<ProductCard key={product.documentId} product={product} />)) : 'not founded product'}
    </div>
  )
  }

export default ProductsGridList
