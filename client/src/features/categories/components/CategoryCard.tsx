import { memo } from "react";
import { NavLink } from "react-router-dom";

type CategoryCardProps = {
  name: string;
  image: string;
  slug:string
};
const CategoryCard = memo(({ name, image,slug }: CategoryCardProps) => {
  return (
    <NavLink className="w-full sm:w-[240px] h-[280px]" to={`/products/${slug}`}>
      <article className="w-full sm:w-[240px] h-[280px] bg-card text-card-foreground flex flex-col items-center  rounded-lg overflow-hidden  mt-4 shadow-md hover:shadow-lg transition-all duration-300">
        <img src={image} alt={name} className="w-full h-48 object-cover" />
        <h2 className="body-text mt-4">{name}</h2>
      </article>
    </NavLink>
  );
});
export default CategoryCard;
