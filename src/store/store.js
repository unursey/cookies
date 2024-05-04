import { configureStore } from "@reduxjs/toolkit";
import orderReducer from "./order/order.slice";

export const store = configureStore({
  reducer: {
    order: orderReducer
  },
});
