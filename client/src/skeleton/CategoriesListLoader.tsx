
import ContentLoader from "react-content-loader"

const CategoriesListLoader = (

) => (
    <ContentLoader
        speed={2}
        width={250}
        height={150}
        viewBox="0 0 250 150"
        backgroundColor="#f3f3f3"
        foregroundColor="#ecebeb"
    >
        <rect x="8" y="15" rx="4" ry="4" width="200" height="20" />
        <rect x="8" y="55" rx="4" ry="4" width="200" height="20" />
        <rect x="8" y="95" rx="4" ry="4" width="200" height="20" />
        <rect x="8" y="135" rx="4" ry="4" width="200" height="20" />
    </ContentLoader>
)

export default CategoriesListLoader
