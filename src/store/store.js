import { configureStore } from "@reduxjs/toolkit";
import cookieReducer from "./cookie/cookieSlice";

export const store = configureStore({
  reducer: {
    cookie: cookieReducer
  },
});
