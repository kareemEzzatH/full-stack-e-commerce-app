import { useGetAllCategoriesQuery } from "../categoriesApi";
import CategoryCard from "./CategoryCard";
import LoaderSkeleton from "@/skeleton/LoaderSkeleton";
const CategoriesSection = () => {
    const { data, isLoading, error } = useGetAllCategoriesQuery();
    if (error) return <p className="text-red-500">Failed to load categories</p>;
    // Define how many skeletons you want to show
    const skeletons = Array(4).fill(0);
    return (
        <section className="w-full p-4 md:p-10 flex flex-col items-center gap-4">
            <h2 className="h2">Shop by Category</h2>

            <div className="w-[80%] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {isLoading ? (
                    // Render Skeletons when loading
                    skeletons.map((_, index) => (
                        <div key={index} className="w-full sm:w-[240px] h-[280px] bg-card rounded-lg flex justify-center items-center shadow-md mt-4">
                            <LoaderSkeleton />
                        </div>
                    ))
                ) : (
                    // Render Real Data when loaded
                    data?.map((category) => (
                        <CategoryCard
                            key={category.documentId}
                            name={category.name}
                            image={category.image?.url}
                            slug={category.slug || ""}
                        />
                    ))
                )}
            </div>
        </section>
    );
};
export default CategoriesSection;
