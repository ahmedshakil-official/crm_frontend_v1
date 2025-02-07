import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  basicTabId: "1",
};

const CaseDetailsTabIndicatorSlice = createSlice({
  name: "CaseDetailsTabIndicator",
  initialState,
  reducers: {
    basicTabIndicator: (state, action) => {
      state.basicTabId = action.payload;
    },
  },
});

// ✅ Correctly export action creator
export const { basicTabIndicator } = CaseDetailsTabIndicatorSlice.actions;

// ✅ Correctly export reducer
export default CaseDetailsTabIndicatorSlice.reducer;
