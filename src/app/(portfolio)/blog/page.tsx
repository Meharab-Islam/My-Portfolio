// src/app/blog/page.tsx
"use client";

import { useState } from "react";
import { blogs } from "@/data/blogs";
import BlogCard from "@/components/BlogCard";
import SearchBar from "@/components/SearchBar";

export default function BlogPage() {
  const [query, setQuery] = useState("");

  const filteredBlogs = blogs.filter((blog) =>
    blog.title.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <main className="min-h-screen bg-white text-gray-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-4xl font-bold text-center mb-8 text-gray-800">
          Blog
        </h1>
        <div className="flex justify-center mb-8">
          <SearchBar value={query} onChange={setQuery} />
        </div>

        {filteredBlogs.length === 0 ? (
          <p className="text-center text-gray-600">No blog posts found.</p>
        ) : (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filteredBlogs.map((blog) => (
              <BlogCard key={blog.id} blog={blog} />
            ))}
          </div>
        )}
      </div>
    </main>
  );
}
