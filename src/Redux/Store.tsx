import { configureStore } from "@reduxjs/toolkit";
import BookmarkHeaderSlice from "./Reducers/BookmarkHeaderSlice";
import LetterBoxSlice from "./Reducers/LetterBoxSlice";
import LayoutSlice from "./Reducers/LayoutSlice";
import ProjectSlice from "./Reducers/ProjectSlice";
import AddProductSlice from "./Reducers/Ecommerce/AddProductSlice";
import FilterSlice from "./Reducers/Ecommerce/FilterSlice";
import ProductSlice from "./Reducers/Ecommerce/ProductSlice";
import CartSlice from "./Reducers/Ecommerce/CartSlice";
import TwoFactorSlice from "./Reducers/FormLayout/TwoFactorSlice";
import FormWizardTwoSlice from "./Reducers/FormLayout/FormWizardTwoSlice";
import FormWizardOne from "./Reducers/FormLayout/FormWizardOneSlice";
import ContactReducer from "./Reducers/ContactReducer";
import TaskSlice from "./Reducers/TaskSlice";
import BookmarkTabSlice from "./Reducers/BookmarkTabSlice";
import ToDoSlice from "./Reducers/ToDoSlice";
import ChatSlice from "./Reducers/ChatSlice";
import ThemeCustomizerReducer from "./Reducers/ThemeCustomizerReducer";

const Store = configureStore({
  reducer: {
    layout: LayoutSlice,
    bookmarkHeader: BookmarkHeaderSlice,
    addProduct: AddProductSlice,
    filterData: FilterSlice,
    product: ProductSlice,
    cartData: CartSlice,
    letterBox:LetterBoxSlice,
    project: ProjectSlice,
    contact: ContactReducer,
    task: TaskSlice,
    bookmarkTab:BookmarkTabSlice,
    todo:ToDoSlice,
    chat:ChatSlice,
    twoFactor: TwoFactorSlice,
    formWizardTwo: FormWizardTwoSlice,
    formWizardOne: FormWizardOne,
    themeCustomizer: ThemeCustomizerReducer,
  },
});

export default Store;

export type RootState = ReturnType<typeof Store.getState>;
export type AppDispatch = typeof Store.dispatch;
