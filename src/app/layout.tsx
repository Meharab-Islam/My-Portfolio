// src/app/layout.tsx

import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import React from "react";

import CustomCursor from "@/components/CustomCursor";

// Setup primary and display fonts using next/font for optimized performance
const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair" });

// SEO Metadata for the entire site
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
    // suppressHydrationWarning is a best practice when using next-themes
    <html lang="en" suppressHydrationWarning>
      <body 
        className={`${inter.variable} ${playfair.variable} font-sans flex flex-col min-h-screen bg-gray-50 text-gray-900 dark:bg-slate-900 dark:text-slate-100 transition-colors duration-300 hover:cursor-none`}
      >
          <CustomCursor />
          {children}
      </body>
    </html>
  );
}
