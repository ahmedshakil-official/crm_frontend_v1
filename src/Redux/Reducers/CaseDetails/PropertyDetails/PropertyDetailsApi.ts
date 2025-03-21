import { baseApi } from "@/Redux/Api/BaseApi";

export const PropertyDetailsApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    // addNotes: builder.mutation({
    //   query: ({ case_alias, note }) => ({
    //     url: `/cases/${case_alias}/notes/`,
    //     method: "POST",
    //     body: note,
    //   }),
    //   invalidatesTags: ["Notes"],
    // }),
    getProperties: builder.query({
      query: ({ case_alias }) => ({
        url: `/cases/${case_alias}/property/details/`,
        method: "GET",
      }),
      providesTags: ["PropertyDetails"],
    }),
    updateSingleProperty: builder.mutation({
      query: ({ case_alias, property_alias, updatedPropertyDetails }) => ({
        url: `/cases/${case_alias}/property/details/${property_alias}/`,
        method: "PUT",
        body: updatedPropertyDetails,
      }),
      invalidatesTags: ["PropertyDetails"],
    }),
  }),
});

export const { useGetPropertiesQuery,useUpdateSinglePropertyMutation } = PropertyDetailsApi;
