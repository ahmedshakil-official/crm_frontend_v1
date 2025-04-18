import { baseApi } from "@/Redux/Api/BaseApi";

export const OrganizationDetailsApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getOrganizationDetails: builder.query({
      query: () => ({
        url: `/organization/details/`,
        method: "GET",
      }),
      providesTags: ["OrganizationDetails"],
    }),
  }),
});

export const { useGetOrganizationDetailsQuery } = OrganizationDetailsApi;
