import { baseApi } from "@/Redux/Api/BaseApi";

export const OrganizationListApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getOrganizationList: builder.query({
      query: (params) => ({
        url: `/organization/list/`,
        method: "GET",
        params,
      }),
      providesTags: ["OrganizationList"],
    }),
    AddOrganization: builder.mutation({
      query: ({ payload }) => ({
        url: `/organization/list/`,
        method: "POST",
        body: payload,
      }),
      invalidatesTags: ["OrganizationList"],
    }),
  }),
});

export const { useGetOrganizationListQuery, useAddOrganizationMutation } =
  OrganizationListApi;
