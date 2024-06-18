"use client"; 

import { createSlice } from "@reduxjs/toolkit";

const popState = {
  state: false,
};

export const counterSlice = createSlice({
  name: "CartPopState",

  initialState: popState,
  reducers: {
    // set client data
    cartPopUpState: (state, payload) => {
      // set login state

      state.state = payload.payload;
      
    },
  },
});

export const { cartPopUpState } = counterSlice.actions;

export default counterSlice.reducer;