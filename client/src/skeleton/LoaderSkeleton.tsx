import ContentLoader from "react-content-loader"
const LoaderSkeleton = () => (
    <ContentLoader
        speed={2}
        width={240}
        height={280}
        viewBox="0 0 240 280"
        backgroundColor="#f3f3f3"
        foregroundColor="#ecebeb"
    >
        <rect x="0" y="0" rx="4" ry="4" width="240" height="192" />
        <rect x="70" y="210" rx="4" ry="4" width="100" height="20" />
    </ContentLoader>
)

export default LoaderSkeleton
