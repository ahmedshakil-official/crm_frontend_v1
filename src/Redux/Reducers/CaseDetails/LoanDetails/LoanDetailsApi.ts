import { baseApi } from "@/Redux/Api/BaseApi";

export const LoanDetailsApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getLoanDetails: builder.query({
      query: () => ({
        url: "/cases/08e9a9df-3754-43c0-bef3-73a7d88c2af2/loan/details/cfbe1b00-78c9-4f9f-a98c-24366f6f6ab5/",
        method: "GET",
      }),
      providesTags: ["LoanDetails"],
    }),
    updateLoanDetails: builder.mutation({
      query: (mergedData) => ({
        url: "/cases/08e9a9df-3754-43c0-bef3-73a7d88c2af2/loan/details/cfbe1b00-78c9-4f9f-a98c-24366f6f6ab5/",
        method: "PATCH",
        body: mergedData,
      }),
      invalidatesTags: ["LoanDetails"],
    }),
  }),
});

export const { useGetLoanDetailsQuery, useUpdateLoanDetailsMutation } =
  LoanDetailsApi;
