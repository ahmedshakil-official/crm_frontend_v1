import { baseApi } from "@/Redux/Api/BaseApi";

export const AdverseDetailsApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAdverseDetails: builder.query({
      query: ({case_alias}) => ({
        url: `/cases/${case_alias}/adverse/`,
        method: "GET",
      }),
      providesTags: ["AdverseDetails"],
    }),
    getSingleAdverseDetails: builder.query({
      query: ({case_alias,adverse_alias}) => ({
        url: `/cases/${case_alias}/adverse/${adverse_alias}/`,
        method: "GET",
      }),
      providesTags: ["AdverseDetails"],
    }),
    
    // updateApplicantDetails: builder.mutation({
    //   query: ({ case_alias, applicantDetails_alias, applicantDetails }) => ({
    //     url: `/cases/${case_alias}/applicant/details/${applicantDetails_alias}/`,
    //     method: "PUT",
    //     body: applicantDetails,
    //   }),
    //   invalidatesTags: ["ApplicantsDetails", "Dependants", "CompanyDetails"],
    // }),
    
  }),
});

export const {
  useGetAdverseDetailsQuery,
  useGetSingleAdverseDetailsQuery
} = AdverseDetailsApi;
