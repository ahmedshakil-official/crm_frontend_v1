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
      invalidatesTags: ["ApplicantsDetails"],
    }),
  }),
});

export const { useGetCaseUsersQuery, useAddDependantsMutation } =
  ApplicantsDetailsApi;
