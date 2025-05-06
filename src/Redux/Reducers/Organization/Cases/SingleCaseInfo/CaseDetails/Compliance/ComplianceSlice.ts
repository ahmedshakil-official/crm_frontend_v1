import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface ComplianceState {
  terms_of_business: string | null;
  terms_of_business_text: string | null;
  privacy_notice: string | null;
  privacy_notice_text: string | null;
  fee_agreement: string | null;
  fee_agreement_text: string | null;
}

const initialState: ComplianceState = {
  terms_of_business: null,
  terms_of_business_text: null,
  privacy_notice: null,
  privacy_notice_text: null,
  fee_agreement: null,
  fee_agreement_text: null,
};

const complianceSlice = createSlice({
  name: "compliance",
  initialState,
  reducers: {
    updateComplianeAnswer: (
      state,
      action: PayloadAction<{ field: keyof ComplianceState; value: string | null }>
    ) => {
      const { field, value } = action.payload;
      state[field] = value;
    },
    updateComplianeComment: (
      state,
      action: PayloadAction<{ field: keyof ComplianceState; value: string | null }>
    ) => {
      const { field, value } = action.payload;
      state[field] = value;
    },
    setComplianceData: (state, action: PayloadAction<ComplianceState>) => {
      return action.payload;
    },
  },
});

export const {
  updateComplianeAnswer,
  updateComplianeComment,
  setComplianceData,
} = complianceSlice.actions;
export default complianceSlice.reducer;
