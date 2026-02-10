import { useParams } from "react-router-dom";
import { useGetProductByIdQuery } from "../productsApi";

const useProductDetails = () => {
  const params = useParams();
  const productId = params.productId ?? "";
  const starArray = new Array(5).fill(0);
  const {
    data: product,
    isLoading,
    isError,
  } = useGetProductByIdQuery(productId);
  return {
    starArray,
    product,
    isLoading,
    isError,
  };
};

export default useProductDetails;
