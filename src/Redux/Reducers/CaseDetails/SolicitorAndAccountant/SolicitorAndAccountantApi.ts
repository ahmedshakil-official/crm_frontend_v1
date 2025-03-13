import { baseApi } from "@/Redux/Api/BaseApi";

export const SolicitorAndAccountantApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    // Solicitor
    getSolicitorDetails: builder.query({
      query: ({ case_alias }) => ({
        url: `/cases/${case_alias}/properties/`,
        method: "GET",
      }),
      providesTags: ["SolicitorDetails"],
    }),
    addSolicitorDetails: builder.mutation({
      query: ({ case_alias, propertyDetails }) => ({
        url: `/cases/${case_alias}/properties/`,
        method: "POST",
        body: propertyDetails,
      }),
      invalidatesTags: ["SolicitorDetails"],
    }),
    // Accountant
    getAccountantDetails: builder.query({
      query: ({ case_alias }) => ({
        url: `/cases/${case_alias}/user/list/`,
        method: "GET",
      }),
      providesTags: ["AccountantDetails"],
    }),
  }),
});

export const {
  useGetSolicitorDetailsQuery,
  useAddSolicitorDetailsMutation,
  useGetAccountantDetailsQuery,
} = SolicitorAndAccountantApi;
