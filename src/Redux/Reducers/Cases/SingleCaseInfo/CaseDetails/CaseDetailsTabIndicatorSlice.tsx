import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  basicTabId: null,
};

const CaseDetailsTabIndicatorSlice = createSlice({
  name: "CaseDetailsTabIndicator",
  initialState,
  reducers: {
    basicTabIndicator: (state, action) => {
      state.basicTabId = action.payload;
    },

    resetBasicTab: (state) => {
      state.basicTabId = null; //
    },
  },
});

// ✅ Correctly export action creator
export const { basicTabIndicator, resetBasicTab } =
  CaseDetailsTabIndicatorSlice.actions;

// ✅ Correctly export reducer
export default CaseDetailsTabIndicatorSlice.reducer;
