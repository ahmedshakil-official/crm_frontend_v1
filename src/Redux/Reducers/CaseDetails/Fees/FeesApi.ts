import { baseApi } from "@/Redux/Api/BaseApi";

export const FeesApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getFeesInDetails: builder.query({
      query: ({ case_alias }) => ({
        url: `/cases/${case_alias}/fees/in/`,
        method: "GET",
      }),
      providesTags: ["Fees"],
    }),
    addFeesInDetails: builder.mutation({
      query: ({ case_alias, feesInDetails }) => ({
        url: `/cases/${case_alias}/fees/in/`,
        method: "POST",
        body: feesInDetails,
      }),
      invalidatesTags: ["Fees"],
    }),
    // updateEmploymentDetails: builder.mutation({
    //   query: ({ case_alias, employmentDetails_alias, employmentDetails }) => ({
    //     url: `/cases/${case_alias}/employment/details/${employmentDetails_alias}/`,
    //     method: "PUT",
    //     body: employmentDetails,
    //   }),
    //   invalidatesTags: ["EmploymentDetails"],
    // }),
  }),
});

export const {
  useGetFeesInDetailsQuery,
  useAddFeesInDetailsMutation,
} = FeesApi;
