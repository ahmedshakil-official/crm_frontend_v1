import { baseApi } from "@/Redux/Api/BaseApi";

export const SuitabilityApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getSuitability: builder.query({
      query: ({ case_alias }) => ({
        url: `/cases/${case_alias}/suitability/`,
        method: "GET",
      }),
      providesTags: ["Suitability"],
    }),
    updateSuitability: builder.mutation({
      query: ({ case_alias, suitability_alias, payload }) => ({
        url: `/cases/${case_alias}/suitability/`,
        method: "PUT",
        body: payload,
      }),
      invalidatesTags: ["Suitability"],
    }),
  }),
});

export const {
  useGetSuitabilityQuery,
  useUpdateSuitabilityMutation,
} = SuitabilityApi;
