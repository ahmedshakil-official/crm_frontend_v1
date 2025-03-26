import { baseApi } from "@/Redux/Api/BaseApi";

export const CaseFilesDetailsApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getCaseFilesDetails: builder.query({
      query: ({ case_alias }) => ({
        url: `/cases/${case_alias}/files/`,
        method: "GET",
      }),
      providesTags: ["CaseFilesDetails"],
    }),

    addCaseFilesDetails: builder.mutation({
      query: ({ case_alias, payload }) => ({
        url: `/cases/${case_alias}/files/`,
        method: "POST",
        body: payload,
      }),
      invalidatesTags: ["CaseFilesDetails", "LeadDetails"],
    }),

    deleteCaseFilesDetails: builder.mutation({
      query: ({ case_alias }) => ({
        url: `/cases/${case_alias}/files/`,
        method: "DELETE",
      }),
      invalidatesTags: ["CaseFilesDetails", "LeadDetails"],
    }),
  }),
});

export const {
  useGetCaseFilesDetailsQuery,
  useAddCaseFilesDetailsMutation,
  useDeleteCaseFilesDetailsMutation,
} = CaseFilesDetailsApi;
