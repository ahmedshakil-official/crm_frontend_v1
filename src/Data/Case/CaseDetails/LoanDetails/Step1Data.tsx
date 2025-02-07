import { InputType } from "@/Components/General/Dashboard/Organization/CaseStatus/[CaseAlias]/components/CaseDetails/components/LoanDetails/LoanDetailsFormFields";

// Ensure LoanDetailsFormFields data is properly typed with InputType for `type`
export const LoanDetailsFormFields = {
  "1": [
    { name: "fullName", label: "Full Name", type: "text" as InputType },
    { name: "email", label: "Email", type: "email" as InputType },
    { name: "age", label: "Age", type: "number" as InputType },
    {
      name: "loanAmount",
      label: "Loan Amount (£)",
      type: "number" as InputType,
    },
  ],
  "2": [
    {
      name: "propertyValue",
      label: "Property Value (£)",
      type: "number" as InputType,
    },
    {
      name: "loanTerm",
      label: "Loan Term (Years)",
      type: "number" as InputType,
    },
    {
      name: "repaymentMethod",
      label: "Repayment Method",
      type: "select" as InputType,
      options: ["Capital and Interest", "Interest Only"],
    },
    {
      name: "currentLender",
      label: "Current Lender",
      type: "text" as InputType,
    },
  ],
  "3": [
    {
      name: "DIPAcceptDate",
      label: "DIP Accept Date",
      type: "date" as InputType,
    },
    {
      name: "DIPExpiryDate",
      label: "DIP Expiry Date",
      type: "date" as InputType,
    },
    {
      name: "expectedCompletionDate",
      label: "Expected Completion Date",
      type: "date" as InputType,
    },
    {
      name: "productExpiryDate",
      label: "Product Expiry Date",
      type: "date" as InputType,
    },
  ],
  "4": [
    {
      name: "salesConsultant",
      label: "Sales Consultant",
      type: "text" as InputType,
    },
    { name: "caseManager", label: "Case Manager", type: "text" as InputType },
    {
      name: "saleType",
      label: "Sale Type",
      type: "select" as InputType,
      options: ["New Purchase", "Remortgage"],
    },
    {
      name: "introductionType",
      label: "Introduction Type",
      type: "select" as InputType,
      options: ["Direct", "Broker"],
    },
  ],
};
