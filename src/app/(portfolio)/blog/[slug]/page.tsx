// src/app/blog/[slug]/page.tsx
import { blogs } from "@/data/blogs";
import { notFound } from "next/navigation";

export default function BlogDetailPage({ params }: { params: { slug: string } }) {
  const blog = blogs.find((b) => b.slug === params.slug);

  if (!blog) return notFound();

  return (
    <main className="min-h-screen bg-white text-gray-900">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-4xl font-bold mb-2 text-gray-800">{blog.title}</h1>
        <p className="text-sm text-gray-600 mb-6">{blog.publishedAt}</p>
        <img
          src={blog.coverImage}
          alt={blog.title}
          className="w-full h-64 object-cover rounded mb-6"
        />
        <article className="prose prose-lg max-w-none text-gray-800">
          {blog.content}
        </article>
      </div>
    </main>
  );
}
