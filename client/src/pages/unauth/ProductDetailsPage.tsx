import { useProductDetails } from "@/features";
import ProductDetailsSkeleton from "@/skeleton/ProductDetailsSkeleton";
import { Card } from "@/components/ui/card";
import { FaStar } from "react-icons/fa";
import { CiStar } from "react-icons/ci";
import { Button } from "@/components/ui/button";
import Error from "@assets/lottieFiles/error.json";
import Lottie from "lottie-react";

const ProductDetailsPage = () => {
  const { isError, isLoading, product, starArray } = useProductDetails();
  if (isLoading) {
    return <ProductDetailsSkeleton />;
  }
  if (isError) {
    return (
      <>
        <div className="flex w-screen h-screen justify-center items-center">
          <Lottie animationData={Error} loop className="w-64 h-64" />
          <p>we have something wrong please try again later</p>
        </div>
      </>
    );
  }

  return (
    <div className="w-screen min-h-screen flex justify-center items-center p-4">
      <Card className="grid grid-cols-1 md:grid-cols-2 p-0 rounded-2xl w-full max-w-5xl">
        <div className="w-full h-[250px] sm:h-[350px] md:h-[500px]">
          <img
            className="w-full h-full object-cover md:rounded-l-2xl rounded-t-2xl md:rounded-t-none"
            src={product?.image?.url}
            alt=""
          />
        </div>
        <div className="flex flex-col justify-center gap-6 p-4 sm:p-6">
          <div>
            <h1 className="h1">{product?.title}</h1>
            <h2 className="text-gray-500 mt-1.5">{product?.description}</h2>
          </div>

          <div className="flex flex-wrap gap-4 justify-between md:w-[50%]">
            <div className="flex">
              {starArray.map((_, i) => {
                if (product?.rating > i) {
                  return (
                    <FaStar
                      key={i}
                      className="text-[14px] text-amber-300 h2 "
                    />
                  );
                } else {
                  return (
                    <CiStar key={i} className="text-[14px] text-gray-400 h2" />
                  );
                }
              })}
            </div>

            <p className="body-text">stock({product?.stock})</p>
          </div>
          <p>
            {product?.price}
            <span className="ml-2">EGP</span>
          </p>
          <div className="w-full flex flex-col sm:flex-row mt-5 gap-4">
            <Button className="w-full sm:w-[30%]">add to cart</Button>

            <Button className="w-full sm:w-[30%]">
              {product?.isLiked ? "remove from wishlist" : "add to wishlist"}
            </Button>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default ProductDetailsPage;
