import { Inter } from "next/font/google";
import "./globals.css";
import Header from "../layout/Header/page";
import Footer from "../layout/Footer/page";
import CardPage from "../components/CartPage/page";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  icons: {
    icon: "/icon.png",
  },
  title: "BYTE BAZAAR",
  description: "Byte BAZAAR E-Commerce platform",
  keywords: ["Byte BAZAAR E-Commerce platform"],

  creator: "impactmindz tech solutions",
  publisher: "impactmindz tech solutions",
};

// redux provider import
import { Providers } from "../redux/Provider";
// add to cart provider
import addToCartProvider from "../providers/addToCartProvider";
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
        <addToCartProvider>

          <Header />
          <CardPage />
          {children}
          <Footer />
        </addToCartProvider>
        </Providers>
      </body>
    </html>
  );
}
