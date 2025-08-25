import { baseApi } from "@/Redux/Api/BaseApi";

export const OrganisationReportsApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getOrganisationReports: builder.mutation({
      query: (params) => ({
        url: "reports/organization",
        method: "GET",
        params,
        responseHandler: (response) => response.blob(),
      }),

      invalidatesTags: ["NetworkReports"],
    }),
  }),
});

export const { useGetOrganisationReportsMutation } = OrganisationReportsApi;
