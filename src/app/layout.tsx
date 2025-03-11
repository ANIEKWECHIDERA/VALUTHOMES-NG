import { Inter } from "next/font/google";
import "@/app/globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "ValutHomes NG",
  description: "Luxury Real Estate Platform",
};

import { ReactNode } from "react";
import Navbar from "@/components/home/NavBar";
import Footer from "@/components/home/Footer";

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
