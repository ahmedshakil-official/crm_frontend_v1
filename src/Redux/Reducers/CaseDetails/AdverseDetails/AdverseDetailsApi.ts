import { baseApi } from "@/Redux/Api/BaseApi";

export const AdverseDetailsApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAdverseDetails: builder.query({
      query: ({ case_alias }) => ({
        url: `/cases/${case_alias}/adverse/`,
        method: "GET",
      }),
      providesTags: ["AdverseDetails", "JointUserDetails"],
    }),
    getSingleAdverseDetails: builder.query({
      query: ({ case_alias, adverse_alias }) => ({
        url: `/cases/${case_alias}/adverse/${adverse_alias}/`,
        method: "GET",
      }),
      providesTags: ["AdverseDetails", "JointUserDetails"],
    }),

    updateAdverseDetails: builder.mutation({
      query: ({ case_alias, adverse_alias, adverse_details }) => ({
        url: `/cases/${case_alias}/adverse/${adverse_alias}/`,
        method: "PUT",
        body: adverse_details,
      }),
      invalidatesTags: ["AdverseDetails", "JointUserDetails"],
    }),
    addPropertyRepossessed: builder.mutation({
      query: ({ case_alias, adverse_alias, value }) => ({
        url: `/cases/${case_alias}/adverse/${adverse_alias}/property/repossessed/`,
        method: "POST",
        body: value,
      }),
      invalidatesTags: ["AdverseDetails"],
    }),
    getPropertyRepossessed: builder.query({
      query: ({ case_alias, adverse_alias }) => ({
        url: `/cases/${case_alias}/adverse/${adverse_alias}/property/repossessed/`,
        method: "GET",
      }),
      providesTags: ["AdverseDetails"],
    }),
  }),
});

export const {
  useGetAdverseDetailsQuery,
  useGetSingleAdverseDetailsQuery,
  useUpdateAdverseDetailsMutation,
  useAddPropertyRepossessedMutation,
  useGetPropertyRepossessedQuery,
} = AdverseDetailsApi;
