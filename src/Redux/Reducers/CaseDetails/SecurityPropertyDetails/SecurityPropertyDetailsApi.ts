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
    addPropertyDetails: builder.mutation({
      query: ({ case_alias, property_id, propertyDetails }) => ({
        url: `/cases/${case_alias}/existing/protection/${property_id}`,
        method: "POST",
        body: propertyDetails,
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
  useGetPropertyDetailsQuery,
  useAddPropertyDetailsMutation,
  useUpdatePropertyDetailsMutation,
} = SecurityPropertyDetailsApi;
