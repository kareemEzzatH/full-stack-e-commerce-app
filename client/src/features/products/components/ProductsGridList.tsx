import { memo } from "react";
import ProductCard from "./ProductCard";
import ProductCardSkeleton from "@/skeleton/ProductCardSkeleton";
import type { TProduct } from "../type";
import Lottie from "lottie-react";
import NoData from "@assets/lottieFiles/No Data.json";
import Error from "@assets/lottieFiles/error.json"
type TProductsGridList = {
  products: TProduct[];
  isLoading: boolean;
  isError:boolean

};

const ProductsGridList = memo(
  ({ products, isLoading,isError }: TProductsGridList) => {
    if (isLoading) {
      return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-20">
          {new Array(8).fill(0).map((_, i) => (
            <ProductCardSkeleton key={i} />
          ))}
        </div>
      );
    }
    if(isError){
     return ( <div className="w-full flex flex-col justify-center items-center h-[500px]">
            <Lottie animationData={Error} loop className="w-64 h-64" />
            <p className="text-red-500">something went wrong while loading products</p>
          </div>)
    }

    return (
      <>
        {products && products.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-20">
            {products.map((product) => (
              <ProductCard key={product.documentId} product={product} />
            ))}
          </div>
        ) : (
          <div className="w-full flex justify-center items-center h-[500px]">
            <Lottie animationData={NoData} loop className="w-64 h-64" />
          </div>
        )}
      </>
    );
  }
);

export default ProductsGridList;
