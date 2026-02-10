import { useMemo } from "react";
import { useGetAllProductsQuery } from "../productsApi";
import ProductCard from "./ProductCard";
import ProductCardSkeleton from "@/skeleton/ProductCardSkeleton";

const FeaturedProductsSection = () => {
  const { data: products, isLoading } = useGetAllProductsQuery();

  const filteredProducts = useMemo(() => {
    return products && products.length > 0
      ? products.filter((product) => product.isFeatured === true)
      : [];
  }, [products]);
  console.log(filteredProducts);
  return (
    <section className="w-full p-4 md:p-10  flex flex-col items-center gap-4">
      <h2 className="h2">Featured Products</h2>

      <div className="w-full md:w-[80%] m-auto   overflow-x-auto overscroll-contain">
        <div className="flex gap-3 w-max px-2">
          {isLoading
            ? Array.from({ length: 4 }).map((_, index) => (
                <div
                  key={index}
                  className="w-[260px] bg-card rounded-lg flex justify-center items-center shadow-md"
                >
                  <ProductCardSkeleton />
                </div>
              ))
            : filteredProducts.length > 0
            ? filteredProducts.map((product) => (
                <div key={product.documentId} className="w-[260px]">
                  <ProductCard product={product} />
                </div>
              ))
            : null}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProductsSection;
