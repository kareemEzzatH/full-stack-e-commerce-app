import ContentLoader from "react-content-loader"

const ProductCardSkeleton = () => (
    <ContentLoader
        speed={2}
        width={260}
        height={370}
        viewBox="0 0 260 370"
        backgroundColor="#f3f3f3"
        foregroundColor="#ecebeb"
    >
        {/* Image */}
        <rect x="0" y="0" rx="8" ry="8" width="260" height="150" />

        {/* Rating stars */}
        <circle cx="20" cy="175" r="8" />
        <circle cx="38" cy="175" r="8" />
        <circle cx="56" cy="175" r="8" />
        <circle cx="74" cy="175" r="8" />
        <circle cx="92" cy="175" r="8" />

        {/* Stock text */}
        <rect x="200" y="168" rx="4" ry="4" width="50" height="14" />

        {/* Title */}
        <rect x="10" y="210" rx="4" ry="4" width="240" height="20" />

        {/* Description line 1 */}
        <rect x="10" y="240" rx="3" ry="3" width="230" height="12" />

        {/* Description line 2 */}
        <rect x="10" y="258" rx="3" ry="3" width="180" height="12" />

        {/* Button */}
        <rect x="10" y="330" rx="6" ry="6" width="240" height="36" />
    </ContentLoader>
)

export default ProductCardSkeleton
