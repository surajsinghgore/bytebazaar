"use client";
import { combineReducers, configureStore } from "@reduxjs/toolkit";

import ClientLoginStateReducer from "./slice/ClientLoginState";
// manage reducer
const rootReducer = combineReducers({

  clientLoginState: ClientLoginStateReducer,

});

export const store = configureStore({
  reducer: rootReducer,
});