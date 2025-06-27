// File: src/components/Footer.tsx
import Link from "next/link";
import GitHubIcon from "./icons/GitHubIcon";
import LinkedInIcon from "./icons/LinkedInIcon";
import FacebookIcon from "./icons/FacebookIcon";
import WhatsAppIcon from "./icons/WhatsAppIcon";
import React from "react";

export default function Footer() {
  // IMPORTANT: Replace these with your actual links
  const socialLinks = {
    github: "https://github.com/Meharab-Islam",
    linkedin: "https://www.linkedin.com/in/meharab-islam-nibir-3b00b4219/",
    facebook: "https://www.facebook.com/share/19HraBFVSx/",
    whatsapp: "https://wa.me/your-phonenumber", // e.g., https://wa.me/8801234567890
  };

  return (
    <footer className="bg-gray-900 text-gray-400 mt-auto">
      <div className="max-w-7xl mx-auto py-8 px-8 flex flex-col sm:flex-row justify-between items-center gap-4">
        <p className="text-sm text-center sm:text-left">
          © {new Date().getFullYear()} Meharab Islam. All Rights Reserved.
        </p>
        <div className="flex items-center gap-4">
          <a href={socialLinks.github} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
            <GitHubIcon className="h-6 w-6" />
          </a>
          <a href={socialLinks.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
            <LinkedInIcon className="h-6 w-6" />
          </a>
          <a href={socialLinks.facebook} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
            <FacebookIcon className="h-6 w-6" />
          </a>
          <a href={socialLinks.whatsapp} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
            <WhatsAppIcon className="h-6 w-6" />
          </a>
        </div>
      </div>
    </footer>
  );
}