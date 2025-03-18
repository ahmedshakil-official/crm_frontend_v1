import { baseApi } from "@/Redux/Api/BaseApi";

export const SecurityPropertyDetailsApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getCaseUserDetails: builder.query({
      query: ({ case_alias }) => ({
        url: `/cases/${case_alias}/user/list/`,
        method: "GET",
      }),
      providesTags: ["CaseUserDetails"],
    }),
    getPropertyDetails: builder.query({
      query: ({ case_alias, propertyId }) => ({
        url: `/cases/${case_alias}/existing/protection/${propertyId}/`,
        method: "GET",
      }),
      providesTags: ["SecurityPropertyDetails"],
    }),
    addPropertyDetails: builder.mutation({
      query: ({ case_alias, employer_id, employmentDetails }) => ({
        url: `/cases/${case_alias}/existing/protection/${employer_id}`,
        method: "POST",
        body: employmentDetails,
      }),
      invalidatesTags: ["SecurityPropertyDetails"],
    }),
    updatePropertyDetails: builder.mutation({
      query: ({ case_alias, property_alias, propertyUpdatePayload }) => ({
        url: `/cases/${case_alias}/existing/protection/${property_alias}/`,
        method: "PUT",
        body: propertyUpdatePayload,
      }),
      invalidatesTags: ["SecurityPropertyDetails"],
    }),
  }),
});

export const {
  useGetCaseUserDetailsQuery,
  useGetPropertyDetailsQuery,
  useAddPropertyDetailsMutation,
  useUpdatePropertyDetailsMutation,
} = SecurityPropertyDetailsApi;
