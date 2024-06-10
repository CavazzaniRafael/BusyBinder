import { createSlice } from "@reduxjs/toolkit";

const uiSlice = createSlice({
  name: "ui",
  initialState: { screenSize: false },
  reducers: {
    checkScreenSize(state, action) {
      state.screenSize = action.payload;
    },
  },
});
export const uiActions = uiSlice.actions;

export default uiSlice;
