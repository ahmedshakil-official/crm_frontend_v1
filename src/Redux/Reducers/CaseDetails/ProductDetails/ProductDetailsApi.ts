import { baseApi } from "@/Redux/Api/BaseApi";

export const ProductDetailsApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getProductDetails: builder.query({
      query: ({ case_alias }) => ({
        url: `/cases/${case_alias}/product/`,
        method: "GET",
      }),
      providesTags: ["ProductDetails"],
    }),
    // addProductDetails: builder.mutation({
    //   query: ({ case_alias, product_id, productDetailsPayload }) => ({
    //     url: `/cases/${case_alias}/product/${product_id}/`,
    //     method: "POST",
    //     body: productDetailsPayload,
    //   }),
    //   invalidatesTags: ["ProductDetails"],
    // }),
    updateProductDetails: builder.mutation({
      query: ({ case_alias, product_alias, productUpdatePayload }) => ({
        url: `/cases/${case_alias}/product/${product_alias}/`,
        method: "PUT",
        body: productUpdatePayload,
      }),
      invalidatesTags: ["ProductDetails"],
    }),
  }),
});

export const {
  useGetProductDetailsQuery,
//   useAddProductDetailsMutation,
  useUpdateProductDetailsMutation,
} = ProductDetailsApi;
