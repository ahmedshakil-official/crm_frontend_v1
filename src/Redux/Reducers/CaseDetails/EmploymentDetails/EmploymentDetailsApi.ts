import { baseApi } from "@/Redux/Api/BaseApi";

export const EmploymentDetailsApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    // getApplicants: builder.query({
    //   query: ({ case_alias }) => ({
    //     url: `/cases/${case_alias}/applicant/details/`,
    //     method: "GET",
    //   }),
    //   providesTags: ["ApplicantsDetails"],
    // }),

    addEmploymentDetails: builder.mutation({
      query: ({ case_alias, employer_id, employmentDetails }) => ({
        url: `/cases/${case_alias}/employment/details/${employer_id}`,
        method: "POST",
        body: employmentDetails,
      }),
      invalidatesTags: ["EmploymentDetails"],
    }),
  }),
});

export const {
  useAddEmploymentDetailsMutation,
} = EmploymentDetailsApi;
