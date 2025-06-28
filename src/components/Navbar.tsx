"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";
import DownloadIcon from "./icons/DownloadIcon";
import { Menu, X } from "lucide-react"; // install: npm install lucide-react

export default function Navbar() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="py-6 px-4 sm:px-8 md:px-12 bg-white/90 backdrop-blur-sm sticky top-0 z-50 border-b border-gray-200/50">
      <nav className="flex justify-between items-center max-w-7xl mx-auto">
        <Link
          href="/"
          className="text-xl font-bold tracking-tighter text-gray-900"
        >
          Meharab.
        </Link>

        {/* Desktop nav buttons */}
        <div className="hidden sm:flex items-center gap-4">

          <Link
            href="/blog"
            className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors"
          >
            Blog
          </Link>
         

          

          <Link
            href="/contact"
            className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors"
          >
            Contact
          </Link>


         <a
  href="/Meharab-Islam-Nibir-res.pdf"
  download
  className="group inline-flex items-center  group inline-flex items-center justify-center gap-2
      bg-gray-900 text-white font-semibold px-6 py-3 rounded-lg
      hover:bg-gray-700 transition-colors"
>
  <DownloadIcon className="w-5 h-5 transition-transform group-hover:-translate-y-0.5" />
  <span className="transition-opacity group-hover:opacity-90">Download Resume</span>
</a>



        </div>

        {/* Mobile hamburger menu */}
        <div className="sm:hidden flex items-center gap-2">
          <a
            href="/Meharab-Islam-Nibir-res.pdf"
            download
            className="bg-gray-900 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-gray-700 transition-colors shadow-sm hover:shadow-md flex items-center gap-2"
          >
            <DownloadIcon className="w-5 h-5" />
            <span>Resume</span>
          </a>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-300"
            aria-label="Toggle mobile menu"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6 text-gray-800" />
            ) : (
              <Menu className="w-6 h-6 text-gray-800" />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Dropdown Menu */}
      {isMobileMenuOpen && (
        <div className="sm:hidden mt-4 px-4 flex flex-col gap-2 animate-fade-in-down">
          <Link
            href="/blog"
            onClick={() => setIsMobileMenuOpen(false)}
            className="block text-sm font-medium text-gray-700 hover:text-gray-900 py-2"
          >
            Blog
          </Link>
          <Link
            href="/contact"
            onClick={() => setIsMobileMenuOpen(false)}
            className="block text-sm font-medium text-gray-700 hover:text-gray-900 py-2"
          >
            Contact
          </Link>
        </div>
      )}
    </header>
  );
}
