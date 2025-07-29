import { baseApi } from "@/Redux/Api/BaseApi";

export const NetPerformanceOverviewApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getNetNewMortgageEnquiry: builder.query({
      query: () => ({
        url: `/network/performance/overview`,
        method: "GET",
      }),
      providesTags: ["NetPerformanceOverview"],
    }),
  }),
});

export const { useGetNetNewMortgageEnquiryQuery } = NetPerformanceOverviewApi;
