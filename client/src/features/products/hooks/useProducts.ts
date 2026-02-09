import { useMemo } from "react";
import useDebounce from "@/hooks/useDebounce";
import { useGetAllProductsQuery } from "@/features/products/productsApi";
import { useParams, useSearchParams } from "react-router-dom";

const useProducts = () => {
    const params = useParams();
  const [searchParams, setSearchParams] = useSearchParams();
  let inputParams = searchParams.get("q");
  const { debouncedValue } = useDebounce(inputParams ?? "", 400);
  const { data, isLoading,isError } = useGetAllProductsQuery();

  const filteredProducts = useMemo(() => {
    if (!data) return [];

    const searchTerm = debouncedValue.toLowerCase().trim();
    const categoryId = params.categoryId;

    if (searchTerm) {
      return data.filter((product) =>
        product.title.toLowerCase().includes(searchTerm)
      );
    }

    if (categoryId) {
      return data.filter((product) => product.category === categoryId);
    }

    return data;
  }, [data, debouncedValue, params.categoryId]);

  return{
    setSearchParams,
    inputParams,
    filteredProducts,
    isLoading,
    isError
  }
}

export default useProducts
