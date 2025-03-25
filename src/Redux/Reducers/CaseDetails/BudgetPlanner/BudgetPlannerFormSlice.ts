import { BudgetPlanner } from "@/Types/Organization/CaseDetails/BudgetPlannerTypes";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// Initial state matching your data structure
const initialState: BudgetPlanner = {
  current_income: {
    applicant_one_net_monthly_income: null,
    applicant_two_net_monthly_income: null,
    rental_income: null,
    part_time_income: null,
    jobseekers_allowance: null,
    child_benefit: null,
    tax_credits: null,
    working_tax_credits: null,
    maintenance: null,
    pension: null,
    other_benefits: null,
    total_income: null,
  },
  post_income: {
    applicant_one_net_monthly_income: null,
    applicant_two_net_monthly_income: null,
    rental_income: null,
    part_time_income: null,
    jobseekers_allowance: null,
    child_benefit: null,
    tax_credits: null,
    working_tax_credits: null,
    maintenance: null,
    pension: null,
    other_benefits: null,
    total_income: null,
  },
  current_debt_repayments: {
    mortgage_rent: null,
    second_mortgage: null,
    shared_ownership_rental: null,
    total_debt_repayment: null,
  },
  post_debt_repayments: {
    mortgage_rent: null,
    second_mortgage: null,
    shared_ownership_rental: null,
    total_debt_repayment: null,
  },
  current_priority_debt: {
    mortgage_arrears: null,
    gas_arrears: null,
    maintenance_arrears: null,
    defaults: null,
    ccjs: null,
    debt_management_plans: null,
    magistrate_court_fines: null,
    council_tax_arrears: null,
    total_priority_debt: null,
  },
  post_priority_debt: {
    mortgage_arrears: null,
    gas_arrears: null,
    maintenance_arrears: null,
    defaults: null,
    ccjs: null,
    debt_management_plans: null,
    magistrate_court_fines: null,
    council_tax_arrears: null,
    total_priority_debt: null,
  },
  current_unsecured_borrowing: {
    credit_cards: null,
    loans: null,
    car_finance: null,
    overdraft: null,
    store_cards: null,
    student_loans: null,
    other_borrowing: null,
    total_unsecured_borrowing: null,
  },
  post_unsecured_borrowing: {
    credit_cards: null,
    loans: null,
    car_finance: null,
    overdraft: null,
    store_cards: null,
    student_loans: null,
    other_borrowing: null,
    total_unsecured_borrowing: null,
  },
  current_living_cost: {
    electricity: null,
    gas: null,
    water: null,
    landline_mobile_phone: null,
    tv_license: null,
    council_tax: null,
    ground_rent_service_charges: null,
    buildings_contents: null,
    mortgage_payment_protection: null,
    endowment: null,
    pension_contribution: null,
    childcare: null,
    maintenance: null,
    food: null,
    car_maintenance: null,
    fuel: null,
    public_transport: null,
    tv_broadband: null,
    recreation_holidays: null,
    clothing: null,
    medical_expenses: null,
    education: null,
    other_living_costs: null,
    total_living_expenses: null,
  },
  post_living_cost: {
    electricity: null,
    gas: null,
    water: null,
    landline_mobile_phone: null,
    tv_license: null,
    council_tax: null,
    ground_rent_service_charges: null,
    buildings_contents: null,
    mortgage_payment_protection: null,
    endowment: null,
    pension_contribution: null,
    childcare: null,
    maintenance: null,
    food: null,
    car_maintenance: null,
    fuel: null,
    public_transport: null,
    tv_broadband: null,
    recreation_holidays: null,
    clothing: null,
    medical_expenses: null,
    education: null,
    other_living_costs: null,
    total_living_expenses: null,
  },
  current_insurance: {
    motor_insurance: null,
    health_insurance: null,
    payment_protection: null,
    life_insurance: null,
    dental_insurance: null,
    other_insurance: null,
    total_insurance_expenses: null,
  },
  post_insurance: {
    motor_insurance: null,
    health_insurance: null,
    payment_protection: null,
    life_insurance: null,
    dental_insurance: null,
    other_insurance: null,
    total_insurance_expenses: null,
  },
  current_sub_total: {
    total_income: null,
    total_debt_repayment: null,
    total_living_expenses: null,
    available_income: null,
  },
  post_sub_total: {
    total_income: null,
    total_debt_repayment: null,
    total_living_expenses: null,
    available_income: null,
  },
  disclaimer: false,
  disclaimer_details: "",
};

// Create the slice
const budgetPlannerSlice = createSlice({
  name: "budgetPlanner",
  initialState,
  reducers: {
    // Update specific BudgetPlanner section
    updateBudgetPlannerSection: (
      state,
      action: PayloadAction<{
        section: keyof BudgetPlanner;
        data: any;
      }>
    ) => {
      const { section, data } = action.payload;
      if (typeof data === 'object' && data !== null) {
        if (section === "disclaimer") {
          state.disclaimer = Boolean(data);
        } else if (section === "disclaimer_details") {
          state.disclaimer_details = String(data);
        } else {
          state[section] = {
            ...state[section],
            ...(typeof data === 'object' ? data : {})
          };
        }
      }
    },

    // Initialize entire form with new data
    initializeBudgetPlannerForm: (state, action: PayloadAction<BudgetPlanner>) => {
      return { ...state, ...action.payload };
    },

    // Reset form to initial state
    resetBudgetPlannerForm: () => initialState,

    // Update specific field in a section
    updateField: (
      state,
      action: PayloadAction<{
        section: keyof BudgetPlanner;
        field: string;
        value: number | null | boolean | string;
      }>
    ) => {
      const { section, field, value } = action.payload;
      if (section === "disclaimer") {
        state.disclaimer = value as boolean;
      } else if (section === "disclaimer_details") {
        state.disclaimer_details = value as string;
      } else {
        (state[section] as any)[field] = value;
      }
    },
  },
});

// Export actions
export const {
  updateBudgetPlannerSection,
  initializeBudgetPlannerForm,
  resetBudgetPlannerForm,
  updateField,
} = budgetPlannerSlice.actions;

// Export reducer
export default budgetPlannerSlice.reducer;
