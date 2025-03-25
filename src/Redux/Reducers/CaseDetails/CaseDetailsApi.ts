import { baseApi } from "@/Redux/Api/BaseApi";

export const CaseDetailsApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getCaseDetails: builder.query({
      query: (params) => ({
        url: `/cases/`,
        method: "GET",
        params,
      }),
      providesTags: ["CaseDetails"],
    }),
    getSingleCaseDetails: builder.query({
      query: ({ case_alias }) => ({
        url: `/cases/${case_alias}/`,
        method: "GET",
      }),
      providesTags: ["CaseDetails"],
    }),
    addCaseDetails: builder.mutation({
      query: ({ payload }) => ({
        url: `/cases/`,
        method: "POST",
        body: payload,
      }),
      invalidatesTags: ["CaseDetails", "LeadDetails"],
    }),
    updateCaseDetails: builder.mutation({
      query: ({ caseAlias, payload }) => ({
        url: `/cases/${caseAlias}/`,
        method: "PUT",
        body: payload,
      }),
      invalidatesTags: ["CaseDetails", "LeadDetails"],
    }),
    deleteCaseDetails: builder.mutation({
      query: ({ caseAlias }) => ({
        url: `/cases/${caseAlias}/`,
        method: "DELETE",
      }),
      invalidatesTags: ["CaseDetails", "LeadDetails"],
    }),
  }),
});

export const {
  useGetCaseDetailsQuery,
  useGetSingleCaseDetailsQuery,
  useAddCaseDetailsMutation,
  useUpdateCaseDetailsMutation,
  useDeleteCaseDetailsMutation,
} = CaseDetailsApi;
