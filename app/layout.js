import {Lato } from "next/font/google";
import "./globals.css";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import { SessionProvider } from "next-auth/react";
import { Toaster } from "react-hot-toast";
export const metadata = {
  title: "Vellicae",
  description: "Vellicae is a modern e-commerce platform for all your fashion needs. Developed by Ygsd.in",
};

const lato = Lato({
  weight: ["100", "300", "400", "700"],
  subsets: ["latin"]
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={lato.className}
      >
        <SessionProvider>
          <Navbar />
          {children}
          <Footer />
          <Toaster />
        </SessionProvider>

      </body>
    </html>
  );
}
