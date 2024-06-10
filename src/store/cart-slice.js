import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: { cartIsVisible: false, menuIsVisible: false },
  reducers: {
    toggleCart(state, action) {
      state.cartIsVisible = action.payload;
    },
    toggleMenu(state, action) {
      state.menuIsVisible = action.payload;
    },
  },
});
export const cartActions = cartSlice.actions;

export default cartSlice;
