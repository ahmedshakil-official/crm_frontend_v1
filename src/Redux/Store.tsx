import { configureStore } from "@reduxjs/toolkit";
import { baseApi } from "./Api/BaseApi";
import BookmarkHeaderSlice from "./Reducers/BookmarkHeaderSlice";
import BookmarkTabSlice from "./Reducers/BookmarkTabSlice";
import ChatSlice from "./Reducers/ChatSlice";
import ContactReducer from "./Reducers/ContactReducer";
import AddProductSlice from "./Reducers/Ecommerce/AddProductSlice";
import CartSlice from "./Reducers/Ecommerce/CartSlice";
import FilterSlice from "./Reducers/Ecommerce/FilterSlice";
import ProductSlice from "./Reducers/Ecommerce/ProductSlice";
import FormWizardOne from "./Reducers/FormLayout/FormWizardOneSlice";
import FormWizardTwoSlice from "./Reducers/FormLayout/FormWizardTwoSlice";
import TwoFactorSlice from "./Reducers/FormLayout/TwoFactorSlice";
import LayoutSlice from "./Reducers/LayoutSlice";
import LetterBoxSlice from "./Reducers/LetterBoxSlice";
import budgetPlannerReducer from "./Reducers/Organization/Cases/SingleCaseInfo/CaseDetails/BudgetPlanner/BudgetPlannerFormSlice";
import CaseDetailsTabIndicatorReducer from "./Reducers/Organization/Cases/SingleCaseInfo/CaseDetails/CaseDetailsTabIndicatorSlice";
import propertyFormReducer from "./Reducers/Organization/Cases/SingleCaseInfo/CaseDetails/PropertyDetails/propertyFormSlice";
import ProjectSlice from "./Reducers/ProjectSlice";
import TaskSlice from "./Reducers/TaskSlice";
import ThemeCustomizerReducer from "./Reducers/ThemeCustomizerReducer";
import ToDoSlice from "./Reducers/ToDoSlice";

const Store = configureStore({
  reducer: {
    [baseApi.reducerPath]: baseApi.reducer,
    layout: LayoutSlice,
    bookmarkHeader: BookmarkHeaderSlice,
    addProduct: AddProductSlice,
    filterData: FilterSlice,
    product: ProductSlice,
    cartData: CartSlice,
    letterBox: LetterBoxSlice,
    project: ProjectSlice,
    contact: ContactReducer,
    task: TaskSlice,
    bookmarkTab: BookmarkTabSlice,
    todo: ToDoSlice,
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
