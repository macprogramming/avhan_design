import { configureStore } from "@reduxjs/toolkit";
import companyReducer from "./slice/company";

export const store = configureStore({
  reducer: {
    companyData : companyReducer
  }
})