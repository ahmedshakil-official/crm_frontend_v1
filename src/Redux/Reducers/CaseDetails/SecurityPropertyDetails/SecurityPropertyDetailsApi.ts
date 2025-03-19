import { baseApi } from "@/Redux/Api/BaseApi";

export const SecurityPropertyDetailsApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getPropertyDetails: builder.query({
      query: ({ case_alias }) => ({
        url: `/cases/${case_alias}/existing/protections/`,
        method: "GET",
      }),
      providesTags: ["SecurityPropertyDetails"],
    }),
    addSecurityPropertyDetails: builder.mutation({
      query: ({ case_alias, property_id, propertyDetailsPayload }) => ({
        url: `/cases/${case_alias}/existing/protections/${property_id}/`,
        method: "POST",
        body: propertyDetailsPayload,
      }),
      invalidatesTags: ["SecurityPropertyDetails"],
    }),
    updatePropertyDetails: builder.mutation({
      query: ({ case_alias, property_alias, propertyUpdatePayload }) => ({
        url: `/cases/${case_alias}/existing/protections/${property_alias}/`,
        method: "PUT",
        body: propertyUpdatePayload,
      }),
      invalidatesTags: ["SecurityPropertyDetails"],
    }),
  }),
});

export const {
  useGetPropertyDetailsQuery,
  useAddSecurityPropertyDetailsMutation,
  useUpdatePropertyDetailsMutation,
} = SecurityPropertyDetailsApi;
