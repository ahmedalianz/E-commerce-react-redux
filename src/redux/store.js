import { configureStore } from "@reduxjs/toolkit";
import products from "./products";
import cart from "./cart";
import darkmode from "./darkmode";
const store = configureStore({
  reducer: {
    products,
    darkmode,
    cart,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }),
});
export default store;
