import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { getSession } from "next-auth/react";

const baseQuery = fetchBaseQuery({
  baseUrl: process.env.NEXT_PUBLIC_API_BASE_URL,
  // credentials: "include",
  prepareHeaders: async (headers) => {
    const session = await getSession();
    const token = session?.user?.accessToken;

    if (token) {
      headers.set("authorization", `JWT ${token}`);
    }

    return headers;
  },
});
export const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery: baseQuery,
  tagTypes: [
    "LeadDetails",
    "ClientDetails",
    "AdvisorDetails",
    "IntroducerDetails",
    "CaseFilesDetails",
    "OrganizationDetails",
    "CaseDetails",
    "JointUserDetails",
    "LoanDetails",
    "ApplicantsDetails",
    "Dependants",
    "CompanyDetails",
    "EmploymentDetails",
    "CreditCommitmentsDetails",
    "AdverseDetails",
    "PortfolioDetails",
    "PropertyDetails",
    "SolicitorDetails",
    "AccountantDetails",
    "ExistingProtectionDetails",
    "Notes",
    "BudgetPlanner",
    "ProductDetails",
    "DIPHistoryDetails",
    "Fees",
  ],
  endpoints: () => ({}),
});
