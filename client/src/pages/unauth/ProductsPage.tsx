import { ProductsGridList, ProductsSearch } from "@/features";
import {useProducts} from "@/features";

const ProductsPage = () => {
  const { setSearchParams, inputParams, filteredProducts, isLoading, isError } =
    useProducts();
  return (
    <div>
      <ProductsSearch
        setSearchParams={setSearchParams}
        value={inputParams ?? ""}
      />
      <ProductsGridList
        products={filteredProducts}
        isLoading={isLoading}
        isError={isError}
      />
    </div>
  );
};

export default ProductsPage;
