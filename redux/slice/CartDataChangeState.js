"use client"; 

import { createSlice } from "@reduxjs/toolkit";

const popState = {
  state: false,
};

export const counterSlice = createSlice({
  name: "CartDataState",

  initialState: popState,
  reducers: {
    // set client data
    cartDataChangeState: (state, payload) => {
      // set login state

      state.state = payload.payload;
      
    },
  },
});

export const { cartDataChangeState } = counterSlice.actions;

export default counterSlice.reducer;