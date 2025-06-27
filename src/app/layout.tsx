import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import React from "react";
import Footer from "@/components/Footer";
import CustomCursor from "@/components/CustomCursor"; // 1. Import the cursor component

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair" });

export const metadata: Metadata = {
  title: "Meharab Islam - Flutter Developer",
  description: "Modern portfolio of Meharab Islam, a Flutter Developer.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      {/* 3. Add "hover:cursor-none" to hide the default cursor on hover */}
      <body className={`${inter.variable} ${playfair.variable} font-sans bg-gray-50 text-gray-900 flex flex-col min-h-screen hover:cursor-none`}>
        <CustomCursor /> {/* 2. Add the cursor component here */}
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}