import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseQuery = fetchBaseQuery({
  baseUrl: "http://80.65.208.86:5000",
  //   credentials: "include",
  prepareHeaders: (headers) => {
    const token =
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNzQ5NTI5ODkyLCJpYXQiOjE3MzkxNjE4OTIsImp0aSI6IjJkNDEzNDUzMTJlYjQ1NzM4NDg3NzgwMjc5NTg0NzIwIiwidXNlcl9pZCI6MX0.xhZG6-niPF-rUjfnoM1iFinyJ5TxZZ0baIgLOukLUIU";

    if (token) {
      headers.set("authorization", `JWT ${token}`);
    }

    return headers;
  },
});
export const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery: baseQuery,
  tagTypes: ["LoanDetails"],
  endpoints: () => ({}),
});
