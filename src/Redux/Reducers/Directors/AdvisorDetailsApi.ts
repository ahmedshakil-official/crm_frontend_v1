import { baseApi } from "@/Redux/Api/BaseApi";

export const AdvisorDetailsApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAdvisorDetails: builder.query({
      query: () => ({
        url: `/director/advisors/`,
        method: "GET",
      }),
      providesTags: ["AdvisorDetails"],
    }),
    addAdvisorDetails: builder.mutation({
      query: ({ payload }) => ({
        url: `/director/advisors/`,
        method: "POST",
        body: payload,
      }),
      invalidatesTags: ["AdvisorDetails"],
    }),
    updateAdvisorDetails: builder.mutation({
      query: ({ advisorAlias, payload }) => ({
        url: `/director/advisors/${advisorAlias}/`,
        method: "PUT",
        body: payload,
      }),
      invalidatesTags: ["AdvisorDetails"],
    }),
    deleteAdvisorDetails: builder.mutation({
      query: ({ advisorAlias }) => ({
        url: `/director/advisors/${advisorAlias}/`,
        method: "DELETE",
      }),
      invalidatesTags: ["AdvisorDetails"],
    }),
  }),
});

export const {
  useGetAdvisorDetailsQuery,
  useAddAdvisorDetailsMutation,
  useUpdateAdvisorDetailsMutation,
  useDeleteAdvisorDetailsMutation,
} = AdvisorDetailsApi;
