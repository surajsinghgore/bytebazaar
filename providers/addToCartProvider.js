"use client";
import { CartProvider } from 'react-use-cart';

export function AddToCartProvider({ children }) {
  return <CartProvider>{children}</CartProvider>;
}
