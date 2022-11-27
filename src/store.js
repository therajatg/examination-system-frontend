import { configureStore } from "@reduxjs/toolkit";
import { studentAuthReducer } from "./features/index";

export const store = configureStore({
  reducer: { studentAuth: studentAuthReducer },
});
