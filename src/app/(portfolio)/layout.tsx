import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
// import CustomCursor from "@/components/CustomCursor";
import React from "react";

export default function PortfolioLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {/* <CustomCursor /> */}
      <Navbar />
      <main className="flex-grow">{children}</main>
      <Footer />
    </>
  );
}