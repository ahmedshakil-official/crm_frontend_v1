import { configureStore } from "@reduxjs/toolkit";
import { baseApi } from "./Api/BaseApi";
import ChatSlice from "./Reducers/ChatSlice";
import ContactReducer from "./Reducers/ContactReducer";
import FormWizardOne from "./Reducers/FormLayout/FormWizardOneSlice";
import FormWizardTwoSlice from "./Reducers/FormLayout/FormWizardTwoSlice";
import TwoFactorSlice from "./Reducers/FormLayout/TwoFactorSlice";
import LayoutSlice from "./Reducers/LayoutSlice";
import budgetPlannerReducer from "./Reducers/Organization/Cases/SingleCaseInfo/CaseDetails/BudgetPlanner/BudgetPlannerFormSlice";
import CaseDetailsTabIndicatorReducer from "./Reducers/Organization/Cases/SingleCaseInfo/CaseDetails/CaseDetailsTabIndicatorSlice";
import propertyFormReducer from "./Reducers/Organization/Cases/SingleCaseInfo/CaseDetails/PropertyDetails/propertyFormSlice";
import ThemeCustomizerReducer from "./Reducers/ThemeCustomizerReducer";

const Store = configureStore({
  reducer: {
    [baseApi.reducerPath]: baseApi.reducer,
    layout: LayoutSlice,
    contact: ContactReducer,
    chat: ChatSlice,
    twoFactor: TwoFactorSlice,
    formWizardTwo: FormWizardTwoSlice,
    formWizardOne: FormWizardOne,
    themeCustomizer: ThemeCustomizerReducer,
    caseDetails: CaseDetailsTabIndicatorReducer,
    propertyForm: propertyFormReducer,
    budgetPlanner: budgetPlannerReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(baseApi.middleware),
});

export default Store;

export type RootState = ReturnType<typeof Store.getState>;
export type AppDispatch = typeof Store.dispatch;
