"use client"; // Ensure this is a client component

import { CartProvider } from "react-use-cart";

export const AddToCartProvider = ({ children }) => {
  return <CartProvider>{children}</CartProvider>;
};
