import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import productsData from "./data";

export const getProducts = createAsyncThunk(
  "products/getProducts",
  async () => {
    let res = await productsData;
    return res;
  }
);
const productsSlice = createSlice({
  name: "products",
  initialState: {
    products: null,
    status: null,
  },
  reducers: {},
  extraReducers: {
    [getProducts.pending]: (state) => {
      state.status = "loading";
    },
    [getProducts.fulfilled]: (state, action) => {
      state.status = "success";
      state.products = action.payload;
    },
    [getProducts.rejected]: (state) => {
      state.status = "failed";
    },
  },
});
export default productsSlice.reducer;
export const {} = productsSlice.actions;
