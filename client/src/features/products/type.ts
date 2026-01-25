import type { Image, Category } from "../categories/type"

// Type for fetched products (from API responses)
export type TProduct = {
    documentId?: string,
    title: string,
    description: string,
    price: number,
    stock: number,
    rating: number,
    isLiked: boolean,
    isFeatured: boolean,
    image?: Image,
    category?:string // API returns category object with slug
}

