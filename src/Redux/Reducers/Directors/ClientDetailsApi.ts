import { baseApi } from "@/Redux/Api/BaseApi";

export const ClientDetailsApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getClientDetails: builder.query({
      query: () => ({
        url: `/director/clients/`,
        method: "GET",
      }),
      providesTags: ["ClientDetails"],
    }),
    addClientDetails: builder.mutation({
      query: () => ({
        url: `/director/clients/`,
        method: "POST",
      }),
      invalidatesTags: ["ClientDetails"],
    }),
    updateClientDetails: builder.mutation({
      query: () => ({
        url: `/director/clients/`,
        method: "PUT",
      }),
      invalidatesTags: ["ClientDetails"],
    }),
  }),
});

export const {
  useGetClientDetailsQuery,
  useAddClientDetailsMutation,
  useUpdateClientDetailsMutation,
} = ClientDetailsApi;
