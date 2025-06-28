// src/app/layout.tsx

import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import React from "react";

import CustomCursor from "@/components/CustomCursor";

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
    <html lang="en" suppressHydrationWarning>
      <body 
        className={`
          ${inter.variable} ${playfair.variable} font-sans
          flex flex-col min-h-screen
          bg-white text-gray-900
          transition-colors duration-300 hover:cursor-none
        `}
      >
        <CustomCursor />
        {children}
      </body>
    </html>
  );
}
