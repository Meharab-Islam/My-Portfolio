"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Home,
  Briefcase,
  Wrench,
  Settings,
  LogOut,
  Menu,
  X,
  FileText,   // ← NEW icon for Blogs
} from "lucide-react";

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  // Close the mobile sidebar when the route changes
  useEffect(() => {
    if (isSidebarOpen) setIsSidebarOpen(false);
  }, [pathname]);

  /* ─── Navigation items (Blogs added) ─── */
  const navItems = [
    { name: "Dashboard", href: "/admin", icon: Home },
    { name: "Projects", href: "/admin/projects", icon: Briefcase },
    { name: "Blogs", href: "/admin/blogs", icon: FileText },     // ← NEW
    { name: "Skills", href: "/admin/skills", icon: Wrench },
    { name: "Site Settings", href: "/admin/settings", icon: Settings },
  ];

  /* ─── Sidebar content component ─── */
  const SidebarContent = () => (
    <>
      <div className="h-16 flex items-center justify-center text-xl font-bold border-b border-slate-700">
        Admin Panel
      </div>

      <nav className="flex-grow p-4">
        <ul className="space-y-2">
          {navItems.map(({ name, href, icon: Icon }) => (
            <li key={name}>
              <Link
                href={href}
                className={`flex items-center gap-3 px-4 py-2.5 rounded-lg transition-colors ${
                  pathname === href ? "bg-blue-600 text-white" : "hover:bg-slate-800"
                }`}
              >
                <Icon className="w-5 h-5" />
                <span>{name}</span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      <div className="p-4 border-t border-slate-700">
        <button className="flex items-center gap-3 w-full px-4 py-2.5 rounded-lg text-left hover:bg-red-500/80 transition-colors">
          <LogOut className="w-5 h-5" />
          <span>Log Out</span>
        </button>
      </div>
    </>
  );

  return (
    <div className="min-h-screen bg-slate-100 font-sans text-slate-800">
      <div className="flex">
        {/* Desktop sidebar */}
        <aside className="hidden md:flex w-64 flex-shrink-0 bg-slate-900 text-slate-200 flex-col h-screen sticky top-0">
          <SidebarContent />
        </aside>

        {/* Mobile overlay */}
        {isSidebarOpen && (
          <div
            className="md:hidden fixed inset-0 bg-black/60 z-30"
            onClick={() => setIsSidebarOpen(false)}
          />
        )}

        {/* Mobile sidebar */}
        <aside
          className={`fixed md:hidden inset-y-0 left-0 z-40 w-64 bg-slate-900 text-slate-200 flex flex-col transition-transform duration-300 ${
            isSidebarOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <SidebarContent />
        </aside>

        {/* Main content */}
        <div className="flex-1 flex flex-col">
          {/* Mobile header */}
          <header className="md:hidden sticky top-0 bg-white p-4 z-20 flex justify-between items-center border-b border-slate-200">
            <span className="text-lg font-bold">Admin Menu</span>
            <button onClick={() => setIsSidebarOpen(!isSidebarOpen)} aria-label="Toggle Menu">
              {isSidebarOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </header>

          <main className="flex-1 p-4 sm:p-6 md:p-8">{children}</main>
        </div>
      </div>
    </div>
  );
}
