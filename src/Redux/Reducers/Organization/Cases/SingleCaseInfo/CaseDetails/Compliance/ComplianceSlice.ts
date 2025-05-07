import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface ComplianceState {
  terms_of_business: string | null | undefined;
  terms_of_business_text: string | null | undefined;
  privacy_notice: string | null | undefined;
  privacy_notice_text: string | null | undefined;
  fee_agreement: string | null | undefined;
  fee_agreement_text: string | null | undefined;
}

const initialState: ComplianceState = {
  terms_of_business: undefined,
  terms_of_business_text: undefined,
  privacy_notice: undefined,
  privacy_notice_text: undefined,
  fee_agreement: undefined,
  fee_agreement_text: undefined,
};


const complianceSlice = createSlice({
  name: "compliance",
  initialState,
  reducers: {
    updateComplianceAnswer: (
      state,
      action: PayloadAction<{ field: keyof ComplianceState; value: string | null }>
    ) => {
      const { field, value } = action.payload;
      state[field] = value;
    },
    updateComplianceComment: (
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
  updateComplianceAnswer,
  updateComplianceComment,
  setComplianceData,
} = complianceSlice.actions;
export default complianceSlice.reducer;
