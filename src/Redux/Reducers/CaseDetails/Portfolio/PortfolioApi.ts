import { baseApi } from "@/Redux/Api/BaseApi";

export const PortfolioApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getPortfolioDetails: builder.query({
      query: ({case_alias}) => ({
        url: `/cases/${case_alias}/properties/`,
        method: "GET",
      }),
      providesTags: ["PortfolioDetails"],
    }),
    updatePortfolioDetails: builder.mutation({
      query: ({ case_alias, loanDetails_alias, mergedData }) => ({
        url: `/cases/${case_alias}/loan/details/${loanDetails_alias}/`,
        method: "PATCH",
        body: mergedData,
      }),
      invalidatesTags: ["PortfolioDetails"],
    }),
  }),
});

export const { useGetPortfolioDetailsQuery } = PortfolioApi;
