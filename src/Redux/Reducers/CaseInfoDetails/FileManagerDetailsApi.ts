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

    getCaseUserDetails: builder.query({
      query: ({ case_alias }) => ({
        url: `/cases/${case_alias}/users/`,
        method: "GET",
      }),
      providesTags: ["CaseFilesDetails", "JointUserDetails"],
    }),

    addCaseFilesDetails: builder.mutation({
      query: ({ case_alias, payload }) => ({
        url: `/cases/${case_alias}/files/`,
        method: "POST",
        body: payload,
      }),
      invalidatesTags: ["CaseFilesDetails"],
    }),

    deleteCaseFilesDetails: builder.mutation({
      query: ({ case_alias, file_alias }) => ({
        url: `/cases/${case_alias}/files/${file_alias}/`,
        method: "DELETE",
      }),
      invalidatesTags: ["CaseFilesDetails"],
    }),
  }),
});

export const {
  useGetCaseFilesDetailsQuery,
  useGetCaseUserDetailsQuery,
  useAddCaseFilesDetailsMutation,
  useDeleteCaseFilesDetailsMutation,
} = CaseFilesDetailsApi;
