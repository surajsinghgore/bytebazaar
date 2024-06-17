import { Inter } from "next/font/google";
import "./globals.css";
import Header from '../layout/Header/page'
import Footer from '../layout/Footer/page'
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  icons: {
    icon: "./favicon.png",
  },
  title: "BYTE BAZAAR",
  description: "Byte BAZAAR E-Commerce platform",
  keywords: ["Byte BAZAAR E-Commerce platform",],
 
  creator: "impactmindz tech solutions",
  publisher: "impactmindz tech solutions"
};
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <Header />
      {children}
      <Footer />

      </body>
    </html>
  );
}
