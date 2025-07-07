import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  basicTabId: null,
  isRequired: false,
  requiredFilledTabId:null,
};

const CaseDetailsTabIndicatorSlice = createSlice({
  name: "CaseDetailsTabIndicator",
  initialState,
  reducers: {
    basicTabIndicator: (state, action) => {
      state.basicTabId = action.payload;
    },
    isRequiredFilled: (state, action) => {
      state.requiredFilledTabId = action.payload.requiredFilledTabId;
      state.isRequired = action.payload.isRequired;
    },
    resetBasicTab: (state) => {
      state.basicTabId = null;
    },
  },
});

export const { basicTabIndicator, isRequiredFilled, resetBasicTab } =
  CaseDetailsTabIndicatorSlice.actions;

export default CaseDetailsTabIndicatorSlice.reducer;
