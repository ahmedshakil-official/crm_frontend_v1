export interface CommonDashboardDataProps {
  summary_cards: {
    new_mortgage_enquiry?: number;
    mortgage_cases_submitted?: number;
    mortgage_cases_completed?: number;
    insurance_cases_submitted?: number;
    mortgage_cases_offered?: number;
  };
  mortgage_type_counts: {
    PURCHASE?: number;
    REMORTGAGE?: number;
    SECURED_LOAN?: number;
    FURTHER_ADVANCE?: number;
    PRODUCT_TRANSFER?: number;
    UNSECURED?: number;
    INVOICE_DISCOUNTING?: number;
    ASSET_FINANCE?: number;
    OTHER?: number;
  };
}
export interface CommonDashboardProps {
  isLoading: boolean;
  CommonDashboardData: CommonDashboardDataProps | null;
}
