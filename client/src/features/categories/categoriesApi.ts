import { apiSlice } from "@/services/apiSlice";
import type { ApiResponse } from "@/types/api";
import type { Category } from "./type";

export const categoriesApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getAllCategories: builder.query<Category[], void>({
      query: () => "/categories?populate=*",
      transformResponse: (response: ApiResponse<Category[]>) =>
        response.data.map((category) => ({
          documentId: category.documentId,
          name: category.name,
          image: {
            url: `${import.meta.env.VITE_IMAGE_BASE_URL}${category.image?.url}`,
          },
        })),
      providesTags: ["Category"],
    }),
    getCategoryById: builder.query<Category, string>({
      query: () => "/categories?populate=*",
      transformResponse: (response: ApiResponse<Category>) =>(
        {
          documentId: response.data.documentId,
          name: response.data.name,
          image: {
            url: `${import.meta.env.VITE_IMAGE_BASE_URL}${response.data.image?.url}`,
          },
        }),
        providesTags: (_result, _error, id) => [{ type: "Category", id }],
      }),
    addACategory: builder.mutation<Category, Category>({
      query: (body) => ({
        url: "/categories?populate=*",
        method: "POST",
        body: { data: { name: body.name } },
      }),
      invalidatesTags: ["Category"],
    }),
    updateACategory: builder.mutation<void, Category>({
      query: (body) => ({
        url: `/categories/${body.documentId}?populate=*`,
        method: "PUT",
        body: { data: { name: body.name } },
      }),
      invalidatesTags: ["Category"],
    }),
    deleteACategory: builder.mutation<void, string>({
      query: (documentId) => ({
        url: `/categories/${documentId}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Category"],
    }),
  }),
});
export const {
  useGetAllCategoriesQuery,
  useGetCategoryByIdQuery,
  useAddACategoryMutation,
  useUpdateACategoryMutation,
  useDeleteACategoryMutation,
} = categoriesApi;
