import { baseApi } from "@/Redux/Api/BaseApi";

export const PropertyDetailsApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    // addNotes: builder.mutation({
    //   query: ({ case_alias, note }) => ({
    //     url: `/cases/${case_alias}/notes/`,
    //     method: "POST",
    //     body: note,
    //   }),
    //   invalidatesTags: ["Notes"],
    // }),
    getProperties: builder.query({
      query: ({ case_alias }) => ({
        url: `/cases/${case_alias}/property/details/`,
        method: "GET",
      }),
      providesTags: ["PropertyDetails"],
    }),
  }),
});

export const { useGetPropertiesQuery } = PropertyDetailsApi;
