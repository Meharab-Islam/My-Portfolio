"use client";
import Link from "next/link";
import { usePathname } from 'next/navigation';
import React from "react";
import DownloadIcon from "./icons/DownloadIcon"; // Import the new icon

export default function Navbar() {
  const pathname = usePathname();


  return (
    <header className="py-6 px-8 md:px-12 bg-white/90 backdrop-blur-sm sticky top-0 z-50 border-b border-gray-200/50">
      <nav className="flex justify-between items-center max-w-7xl mx-auto">
        <Link href="/" className="text-xl font-bold tracking-tighter text-gray-900">
          Meharab.
        </Link>
        
        {/* Navigation Links with Fancy Hover Effect */}
      
        
        {/* Action Buttons */}
        <div className="flex items-center gap-4">
            {/* New Download Resume Button */}
            <a
              href="/Meharab-Islam-Nibir-res.pdf" // Your resume file path
              download
              className="group hidden sm:inline-flex items-center gap-2 text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors"
            >
              <DownloadIcon className="w-5 h-5 transition-transform group-hover:-translate-y-0.5"/>
              <span>Download Resume</span>
            </a>

            <Link href="/contact" className="bg-gray-900 text-white px-5 py-2 rounded-lg text-sm font-medium hover:bg-gray-700 transition-colors shadow-sm hover:shadow-md">
              Contact
            </Link>
        </div>
      </nav>
    </header>
  );
}