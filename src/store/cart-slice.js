import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: { cartIsVisible: false, menuIsVisible: false },
  reducers: {
    toggleCart(state) {
      state.cartIsVisible = !state.cartIsVisible;
    },
    toggleMenu(state) {
      state.menuIsVisible = !state.menuIsVisible;
    },
  },
});
export const cartActions = cartSlice.actions;

export default cartSlice;
