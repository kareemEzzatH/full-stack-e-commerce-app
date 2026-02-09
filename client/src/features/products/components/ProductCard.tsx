import { memo,useCallback } from "react";
import type { TProduct } from "../type";
import { FaStar } from "react-icons/fa";
import { CiStar } from "react-icons/ci";
import { FaHeart } from "react-icons/fa";
import { CiHeart } from "react-icons/ci";

import { Link } from "react-router-dom";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useUpdateProductMutation } from "../productsApi";
type TProductCardProp = {
  product: TProduct;
};

const starArray=new Array(5).fill(0)
const ProductCard = memo(({ product }: TProductCardProp) => {
  const [updateProduct] = useUpdateProductMutation();

  const likedToggle = useCallback((e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();

    if (!product.documentId) return;
    // ✅ Fire and forget - no loading state needed
    updateProduct({
      documentId: product.documentId,
      data: {
        isLiked: !product.isLiked,
      },
    });
  }, [product.documentId, product.isLiked, updateProduct])
  return (
    <Card className="w-full sm:w-[260px] h-[370px]  transition-all duration-300  hover:shadow-lg p-0 ">
      <Link to={`../product-details/${product.documentId}`}>
        <div className="overflow-hidden rounded relative ">
          <img
            src={product.image?.url ?? ""}
            alt={product.title}
            className="w-full h-[150px] object-cover "
            loading="lazy"
          />
          {product.isLiked ? (
            <FaHeart
              className="bg-red- size-[25px] absolute top-2 right-2 text-red-400 text-xl cursor-pointer"
              onClick={(e) => likedToggle(e)}
            />
          ) : (
            <CiHeart
              className="  size-[30px] absolute top-2 right-2 text-red-600 text-xl cursor-pointer"
              onClick={(e) => likedToggle(e)}
            />
          )}
        </div>
        <CardHeader>
          <div className="flex justify-between items-center ">
            <div className="flex">
              {starArray.map((_, i) => {
                if (product.rating > i) {
                  return (
                    <FaStar key={i} className="text-[14px] text-amber-300  " />
                  );
                } else {
                  return <CiStar key={i} className="text-[14px] text-gray-400" />;
                }
              })}
            </div>

            <p className="text-[14px]">stock({product.stock})</p>
          </div>
        </CardHeader>
        <CardContent className="h-[100px]">
          <h3 className="h2">{product.title}</h3>
          <p className="text-small font-[100] text-gray-500">
            {product.description}
          </p>
        </CardContent>
        <CardFooter className="flex justify-center items-center p-2">
          <Button className="w-full ">add to cart</Button>
        </CardFooter>
      </Link>
    </Card>
  );
});

export default ProductCard;
