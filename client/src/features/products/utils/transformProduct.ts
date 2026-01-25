import type { TProduct } from '../type';

/**
 * Transforms raw API product data into the TProduct type
 * @param product - Raw product data from the API
 * @returns Transformed product object matching TProduct type
 */
export const transformProduct = (product: any): TProduct => ({
    documentId: product.documentId,
    title: product.title,
    description: product.description || '',
    price: product.price,
    stock: product.stock,
    rating: product.rating || 0,
    isLiked: product.isLiked ?? false,
    isFeatured: product.isFeatured ?? false,
    image: {
        url: `${import.meta.env.VITE_IMAGE_BASE_URL}${product.image?.url || ''}`
    },
    category:product.category.documentId
});
