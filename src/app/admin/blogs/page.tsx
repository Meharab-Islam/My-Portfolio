"use client";

import React, { useState, useEffect } from "react";
import { blogs as initialBlogs, Blog } from "@/data/blogs";
import { useRouter } from "next/navigation";

export default function AdminBlogsPage() {
  const router = useRouter();

  /* ─── state ─── */
  const [searchTerm, setSearchTerm] = useState("");
  const [blogs, setBlogs] = useState<Blog[]>(initialBlogs);
  const [filteredBlogs, setFilteredBlogs] = useState<Blog[]>(initialBlogs);

  /* edit‑modal state */
  const [editingBlog, setEditingBlog] = useState<Blog | null>(null);
  const [editTitle, setEditTitle] = useState("");
  const [editSlug, setEditSlug] = useState("");
  const [editExcerpt, setEditExcerpt] = useState("");
  const [editContent, setEditContent] = useState("");
  const [editPublishedAt, setEditPublishedAt] = useState("");
  const [editCoverPreview, setEditCoverPreview] = useState<string | null>(null);
  const [editCoverFile, setEditCoverFile] = useState<File | null>(null);

  /* ─── filtering ─── */
  useEffect(() => {
    const term = searchTerm.toLowerCase();
    setFilteredBlogs(
      blogs.filter(
        (b) =>
          b.title.toLowerCase().includes(term) ||
          b.excerpt.toLowerCase().includes(term)
      )
    );
  }, [searchTerm, blogs]);

  /* ─── helpers ─── */
  const slugify = (text: string) =>
    text.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)+/g, "");



  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setEditCoverFile(file);
      setEditCoverPreview(URL.createObjectURL(file));
    }
  };

  const saveEdit = () => {
    if (
      !editingBlog ||
      !editTitle.trim() ||
      !editExcerpt.trim() ||
      !editContent.trim() ||
      !editPublishedAt.trim() ||
      !editCoverPreview
    )
      return;

    const updatedBlogs = blogs.map((b) =>
      b.id === editingBlog.id
        ? {
            ...b,
            title: editTitle,
            slug: editSlug,
            excerpt: editExcerpt,
            content: editContent,
            publishedAt: editPublishedAt,
            coverImage: editCoverFile ? editCoverFile.name : editCoverPreview,
          }
        : b
    );

    setBlogs(updatedBlogs);
    setEditingBlog(null);
  };

  /* ─── UI ─── */
  return (
    <div className="min-h-screen w-full bg-white p-6 flex flex-col">
      {/* header */}
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-3xl font-bold">Manage Blogs</h1>
        <button
          onClick={() => router.push("/admin/blogs/create")}
          className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
        >
          + Create Blog
        </button>
      </div>

      {/* search */}
      <input
        type="search"
        placeholder="Search blogs…"
        className="w-full p-3 mb-6 border rounded focus:ring-2 focus:ring-blue-500"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      {/* grid */}
      <div className="flex-grow overflow-y-auto">
        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {filteredBlogs.length === 0 && (
            <p className="col-span-full text-center text-gray-500">
              No blogs found.
            </p>
          )}

          {filteredBlogs.map((b) => (
            <div
              key={b.id}
              className="bg-white rounded-xl shadow-md hover:shadow-2xl transition hover:-translate-y-1 hover:scale-[1.03] flex flex-col overflow-hidden"
            >
              <div className="relative group">
                <img
                  src={b.coverImage}
                  alt={b.title}
                  className="w-full h-44 object-cover transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>

              <div className="p-5 flex flex-col flex-grow">
                <h2 className="text-xl font-semibold mb-2">{b.title}</h2>
                <p className="text-gray-700 flex-grow">{b.excerpt}</p>
                <p className="mt-3 text-sm text-gray-400 italic">
                  {new Date(b.publishedAt).toLocaleDateString()}
                </p>

                <div className="mt-6 flex gap-3">
                  <a
                    href={`/blog/${b.slug}`}
                    target="_blank"
                    className="flex-1 px-5 py-2 text-center bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 text-white rounded-lg shadow hover:from-blue-600 hover:via-blue-700 hover:to-blue-800 transition"
                  >
                    View
                  </a>
                  <button
                    onClick={() => router.push(`/admin/blogs/${b.id}/edit`)}
                    className="flex-1 px-5 py-2 bg-gradient-to-r from-green-500 via-green-600 to-green-700 text-white rounded-lg shadow hover:from-green-600 hover:via-green-700 hover:to-green-800 transition"
                  >
                    Edit
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* edit modal */}
      {editingBlog && (
        <div
          className="fixed inset-0 bg-black/60 flex justify-center items-center p-4 z-50"
          onClick={() => setEditingBlog(null)}
        >
          <div
            className="bg-white rounded-lg p-6 max-w-xl w-full shadow-lg overflow-y-auto max-h-[90vh]"
            onClick={(e) => e.stopPropagation()}
          >
            <h2 className="text-2xl font-bold mb-6">Edit Blog</h2>

            {/* image preview & picker */}
            {editCoverPreview ? (
              <img
                src={editCoverPreview}
                className="w-full h-52 object-cover rounded border mb-4"
                alt="cover preview"
              />
            ) : (
              <div className="w-full h-52 flex items-center justify-center bg-gray-100 border rounded mb-4 text-gray-400">
                No image
              </div>
            )}
            <input
              type="file"
              accept="image/*"
              id="edit-image"
              onChange={handleImageChange}
              className="hidden"
            />
            <label htmlFor="edit-image" className="block mb-4">
              <span className="inline-block px-4 py-2 bg-blue-600 text-white rounded cursor-pointer hover:bg-blue-700 transition">
                Choose Image
              </span>
            </label>

            {/* title */}
            <label className="font-semibold block mb-1">Title</label>
            <input
              className="w-full border rounded px-3 py-2 mb-4"
              value={editTitle}
              onChange={(e) => {
                setEditTitle(e.target.value);
                setEditSlug(slugify(e.target.value));
              }}
            />

            {/* slug (read‑only) */}
            <label className="font-semibold block mb-1">Slug</label>
            <input
              className="w-full border rounded px-3 py-2 mb-4 bg-gray-100 text-gray-600"
              value={editSlug}
              readOnly
            />

            {/* excerpt */}
            <label className="font-semibold block mb-1">Excerpt</label>
            <textarea
              rows={3}
              className="w-full border rounded px-3 py-2 mb-4"
              value={editExcerpt}
              onChange={(e) => setEditExcerpt(e.target.value)}
            />

            {/* content */}
            <label className="font-semibold block mb-1">Content</label>
            <textarea
              rows={8}
              className="w-full border rounded px-3 py-2 mb-4"
              value={editContent}
              onChange={(e) => setEditContent(e.target.value)}
            />

            {/* published date */}
            <label className="font-semibold block mb-1">Published Date</label>
            <input
              type="date"
              className="w-full border rounded px-3 py-2 mb-6"
              value={editPublishedAt}
              onChange={(e) => setEditPublishedAt(e.target.value)}
            />

            {/* actions */}
            <div className="flex justify-end gap-4">
              <button
                onClick={() => setEditingBlog(null)}
                className="px-4 py-2 rounded bg-gray-300 hover:bg-gray-400"
              >
                Cancel
              </button>
              <button
                onClick={saveEdit}
                className="px-4 py-2 rounded bg-green-600 text-white hover:bg-green-700"
                disabled={
                  !editTitle.trim() ||
                  !editExcerpt.trim() ||
                  !editContent.trim() ||
                  !editPublishedAt.trim() ||
                  !editCoverPreview
                }
              >
                Save
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
