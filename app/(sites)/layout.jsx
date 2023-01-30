"use client"
import Header from "../../components/Header/page";
import "./globals.css";
import TopHeader from "../../components/TopHeader/page";
import Footer from "../../components/Footer/page";
import { Providers } from "./Providers";
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head />
      <body>
        <Providers>
           <Header />
          <TopHeader />
         
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
