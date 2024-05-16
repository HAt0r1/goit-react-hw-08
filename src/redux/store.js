import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./auth/slice";
import filterSlice from "./filters/slice";

export default configureStore({
  reducer: {
    auth: authReducer,
    // contacts:,
    filters: filterSlice,
  },
});
