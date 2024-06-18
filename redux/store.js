"use client";
import { combineReducers, configureStore } from "@reduxjs/toolkit";

import ClientLoginStateReducer from "./slice/ClientLoginState";
import CartPopUpModelStateReducer from "./slice/CartPopUpModelState";
// manage reducer
const rootReducer = combineReducers({

  clientLoginState: ClientLoginStateReducer,
  cartPopUpState: CartPopUpModelStateReducer,

});

export const store = configureStore({
  reducer: rootReducer,
});