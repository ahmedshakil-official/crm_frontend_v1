import { baseApi } from "@/Redux/Api/BaseApi";

export const NetworkReportsApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getNetworkReports: builder.mutation({
      query: () => ({
        url: "reports/network",
        responseHandler: (response) => response.blob(),
      }),

      invalidatesTags: ["NetworkReports"],
    }),
  }),
});

export const { useGetNetworkReportsMutation } = NetworkReportsApi;
