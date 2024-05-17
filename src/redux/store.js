import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./auth/slice";
import filterSlice from "./filters/slice";
import contactsSlice from "./contacts/slice";

export default configureStore({
  reducer: {
    auth: authReducer,
    contacts: contactsSlice,
    filters: filterSlice,
  },
});
