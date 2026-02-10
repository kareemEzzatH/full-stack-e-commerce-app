import ContentLoader from "react-content-loader";
import { Card } from "@/components/ui/card";

const ProductDetailsSkeleton = () => {
    return (
        <div className="w-screen h-screen flex justify-center items-center">
            <Card className="w-[1000px] h-[500px] p-0 rounded-2xl overflow-hidden bg-white shadow-sm">
                <ContentLoader
                    speed={2}
                    width={1000}
                    height={500}
                    viewBox="0 0 1000 500"
                    backgroundColor="#f3f3f3"
                    foregroundColor="#ecebeb"
                >
                    {/* Product Image - Left Side */}
                    <rect x="0" y="0" width="500" height="500" />

                    {/* Right Side Content */}
                    {/* Title */}
                    <rect x="530" y="80" rx="4" ry="4" width="300" height="32" />

                    {/* Description */}
                    <rect x="530" y="130" rx="3" ry="3" width="400" height="14" />
                    <rect x="530" y="155" rx="3" ry="3" width="350" height="14" />

                    {/* Rating and Stock Row */}
                    <circle cx="538" cy="200" r="8" />
                    <circle cx="560" cy="200" r="8" />
                    <circle cx="582" cy="200" r="8" />
                    <circle cx="604" cy="200" r="8" />
                    <circle cx="626" cy="200" r="8" />

                    <rect x="650" y="192" rx="3" ry="3" width="80" height="16" />

                    {/* Price */}
                    <rect x="530" y="240" rx="4" ry="4" width="100" height="24" />

                    {/* Buttons Row */}
                    <rect x="530" y="300" rx="6" ry="6" width="140" height="40" />
                    <rect x="690" y="300" rx="6" ry="6" width="140" height="40" />
                </ContentLoader>
            </Card>
        </div>
    );
};

export default ProductDetailsSkeleton;
