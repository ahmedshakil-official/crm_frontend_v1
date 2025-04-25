import { baseApi } from "@/Redux/Api/BaseApi";

export const SuitabilityApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    // getProperties: builder.query({
    //   query: ({ case_alias }) => ({
    //     url: `/cases/${case_alias}/property/details/`,
    //     method: "GET",
    //   }),
    //   providesTags: ["PropertyDetails"],
    // }),
    updateSuitability: builder.mutation({
      query: ({ case_alias, suitability_alias, payload }) => ({
        url: `/cases/${case_alias}/suitability/${suitability_alias}/`,
        method: "PUT",
        body: payload,
      }),
      invalidatesTags: ["Suitability"],
    }),
  }),
});

export const { useUpdateSuitabilityMutation } = SuitabilityApi;
