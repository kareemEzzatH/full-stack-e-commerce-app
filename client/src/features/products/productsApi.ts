import { apiSlice } from "@/services/apiSlice";


export const productsApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getProducts: builder.query<any, void>({
            query: () => '/products'
        }),
        getProductById: builder.query<any, any>({
            query: (id) => `/products/${id}&populate[image][fields][0]=url`
        })
    })
});

export const { useGetProductsQuery, useGetProductByIdQuery } = productsApi;
