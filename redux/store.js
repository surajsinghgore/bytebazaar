"use client";
import { combineReducers, configureStore } from "@reduxjs/toolkit";

import ClientLoginStateReducer from "./slice/ClientLoginState";
import CartPopUpModelStateReducer from "./slice/CartPopUpModelState";
import CartDataChangeStateReducer from "./slice/CartDataChangeState";
// manage reducer
const rootReducer = combineReducers({

  clientLoginState: ClientLoginStateReducer,
  cartPopUpState: CartPopUpModelStateReducer,
  cartDataChangeState: CartDataChangeStateReducer

});

export const store = configureStore({
  reducer: rootReducer,
});