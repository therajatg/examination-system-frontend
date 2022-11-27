import { configureStore } from "@reduxjs/toolkit";
import { studentAuthReducer, staffAuthReducer } from "./features/index";

export const store = configureStore({
  reducer: { studentAuth: studentAuthReducer, staffAuth: staffAuthReducer },
});
