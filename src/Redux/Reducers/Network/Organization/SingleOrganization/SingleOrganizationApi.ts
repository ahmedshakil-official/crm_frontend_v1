import { baseApi } from "@/Redux/Api/BaseApi";

export const SingleOrganizationApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getSingleOrganization: builder.query({
      query: ({ organizationslug }) => ({
        url: `/organization/list/${organizationslug}`,
        method: "GET",
      }),
      providesTags: ["SingleOrganization"],
    }),
    updateOrganization: builder.mutation({
      query: ({ payload }) => ({
        url: `/organization/list/`,
        method: "PUT",
        body: payload,
      }),
      invalidatesTags: ["SingleOrganization"],
    }),
    deleteOrganization: builder.mutation({
      query: ({ slug }) => ({
        url: `/organization/list/${slug}/`,
        method: "DELETE",
      }),
      invalidatesTags: ["SingleOrganization", "OrganizationList"],
    }),
  }),
});

export const {
  useGetSingleOrganizationQuery,
  useUpdateOrganizationMutation,
  useDeleteOrganizationMutation,
} = SingleOrganizationApi;
