import { configureStore } from "@reduxjs/toolkit";
import { baseApi } from "./Api/BaseApi";
import CaseDetailsTabIndicatorReducer from "./Reducers/CommonComponents/Cases/SingleCaseInfo/CaseDetails/CaseDetailsTabIndicatorSlice";
import FormWizardOne from "./Reducers/FormLayout/FormWizardOneSlice";
import FormWizardTwoSlice from "./Reducers/FormLayout/FormWizardTwoSlice";
import TwoFactorSlice from "./Reducers/FormLayout/TwoFactorSlice";
import LayoutSlice from "./Reducers/LayoutSlice";
import budgetPlannerReducer from "./Reducers/Organization/Cases/SingleCaseInfo/CaseDetails/BudgetPlanner/BudgetPlannerFormSlice";
import ComplianceReducer from "./Reducers/Organization/Cases/SingleCaseInfo/CaseDetails/Compliance/ComplianceSlice";
import propertyFormReducer from "./Reducers/Organization/Cases/SingleCaseInfo/CaseDetails/PropertyDetails/propertyFormSlice";
import ThemeCustomizerReducer from "./Reducers/ThemeCustomizerReducer";

const Store = configureStore({
  reducer: {
    [baseApi.reducerPath]: baseApi.reducer,
    layout: LayoutSlice,
    twoFactor: TwoFactorSlice,
    formWizardTwo: FormWizardTwoSlice,
    formWizardOne: FormWizardOne,
    themeCustomizer: ThemeCustomizerReducer,
    caseDetails: CaseDetailsTabIndicatorReducer,
    propertyForm: propertyFormReducer,
    budgetPlanner: budgetPlannerReducer,
    compliance: ComplianceReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(baseApi.middleware),
});

export default Store;

export type RootState = ReturnType<typeof Store.getState>;
export type AppDispatch = typeof Store.dispatch;
