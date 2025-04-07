import { baseApi } from "@/Redux/Api/BaseApi";

export const DIPHistoryDetailsApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getDIPHistoryDetails: builder.query({
      query: ({ case_alias }) => ({
        url: `/cases/${case_alias}/dip/history/`,
        method: "GET",
      }),
      providesTags: ["DIPHistoryDetails"],
    }),
    updateDIPHistoryDetails: builder.mutation({
      query: ({ case_alias, dipHistory_alias, payload }) => ({
        url: `/cases/${case_alias}/dip/history/${dipHistory_alias}/`,
        method: "PUT",
        body: payload,
      }),
      invalidatesTags: ["DIPHistoryDetails"],
    }),
  }),
});

export const {
  useGetDIPHistoryDetailsQuery,
  useUpdateDIPHistoryDetailsMutation,
} = DIPHistoryDetailsApi;
