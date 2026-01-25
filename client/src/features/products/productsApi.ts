import { apiSlice } from "@/services/apiSlice";
import type { TProduct } from "./type";
import type { ApiResponse } from "@/types/api";
import { transformProduct } from "./utils/transformProduct";

export const productsApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getAllProducts: builder.query<TProduct[], void>({
      query: () => "/products?populate[image][fields][0]=url&populate[category][fields][0]=slug",
      transformResponse: (response: ApiResponse<any[]>) =>
        response.data.map(transformProduct),
      providesTags: (result) =>
        result
          ? [
              ...result.map((product) => ({
                type: "Product" as const,
                id: product.documentId,
              })),
              { type: "Product", id: "LIST" },
            ]
          : [{ type: "Product", id: "LIST" }],
    }),
    getProductById: builder.query<TProduct, string>({
      query: (documentId) => `/products/${documentId}?populate[image][fields][0]=url&populate[category][fields][0]=slug`,
      transformResponse: (response: ApiResponse<any>) =>
        transformProduct(response.data),
      providesTags: (_result, _error, id) => [{ type: "Product", id }],
    }),
    addProduct: builder.mutation<TProduct, TProduct>({
      query: (body) => ({
        url: "/products",
        method: "POST",
        body: { data: body },
      }),
      invalidatesTags: [{ type: "Product", id: "LIST" }],
    }),
    deleteProduct: builder.mutation<void, string>({
      query: (documentId) => ({
        url: `/products/${documentId}`,
        method: "DELETE",
      }),
      invalidatesTags: [{ type: "Product", id: "LIST" }],
    }),
    updateProduct: builder.mutation<TProduct, TProduct>({
      query: (body) => ({
        url: `/products/${body.documentId}`,
        method: "PUT",
        body: { data: body },
      }),
      invalidatesTags: [{ type: "Product", id: "LIST" }],
    }),
  }),
});

export const {
  useGetAllProductsQuery,
  useGetProductByIdQuery,
  useAddProductMutation,
  useDeleteProductMutation,
  useUpdateProductMutation,
} = productsApi;
