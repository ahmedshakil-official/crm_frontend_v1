import { baseApi } from "@/Redux/Api/BaseApi";

export const ApplicantsDetailsApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getCaseUsers: builder.query({
      query: (case_alias) => ({
        url: `/cases/${case_alias}/user/list/`,
        method: "GET",
      }),
      providesTags: ["ApplicantsDetails"],
    }),
    addDependants: builder.mutation({
      query: ({ case_alias, applicantDetails_alias, dependantsInfo }) => ({
        url: `/cases/${case_alias}/applicant/details/${applicantDetails_alias}/dependants/`,
        method: "POST",
        body: dependantsInfo,
      }),
      invalidatesTags: ["ApplicantsDetails", "Dependants"],
    }),
    getDependants: builder.query({
      query: ({ case_alias, applicantDetails_alias }) => ({
        url: `/cases/${case_alias}/applicant/details/${applicantDetails_alias}/dependants/`,
        method: "GET",
      }),
      providesTags: ["ApplicantsDetails", "Dependants"],
    }),
    getCompanyDetails: builder.query({
      query: ({ case_alias, applicantDetails_alias }) => ({
        url: `/cases/${case_alias}/applicant/details/${applicantDetails_alias}/company/`,
        method: "GET",
      }),
      providesTags: ["ApplicantsDetails", "CompanyDetails"],
    }),
    addCompanyDetails: builder.mutation({
      query: ({ case_alias, applicantDetails_alias,CompanyDetails }) => ({
        url: `/cases/${case_alias}/applicant/details/${applicantDetails_alias}/company/`,
        method: "POST",
        body: CompanyDetails,
      }),
      invalidatesTags: ["ApplicantsDetails", "CompanyDetails"],
    })
  }),
});

export const {
  useGetCaseUsersQuery,
  useAddDependantsMutation,
  useGetDependantsQuery,
  useGetCompanyDetailsQuery,
  useAddCompanyDetailsMutation,
} = ApplicantsDetailsApi;
