"use client";

import { useEffect, useState } from "react";
import { useRouter, useParams } from "next/navigation";
import { blogs as initialBlogs, Blog } from "@/data/blogs";

export default function EditBlogPage() {
  const router = useRouter();
  const { id } = useParams();
  const blogId = Number(id);

  const [blog, setBlog] = useState<Blog | null>(null);
  const [title, setTitle] = useState("");
  const [slug, setSlug] = useState("");
  const [excerpt, setExcerpt] = useState("");
  const [content, setContent] = useState("");
  const [coverImageFile, setCoverImageFile] = useState<File | null>(null);
  const [coverImagePreview, setCoverImagePreview] = useState<string | null>(null);

  useEffect(() => {
    const existing = initialBlogs.find((b) => b.id === blogId);
    if (!existing) {
      alert("Blog not found");
      router.push("/admin/blogs");
      return;
    }

    setBlog(existing);
    setTitle(existing.title);
    setSlug(existing.slug);
    setExcerpt(existing.excerpt);
    setContent(existing.content);
    setCoverImagePreview(existing.coverImage);
  }, [blogId, router]);

  const generateSlug = (text: string) =>
    text.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)+/g, "");

  const handleTitleChange = (value: string) => {
    setTitle(value);
    setSlug(generateSlug(value));
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setCoverImageFile(file);
      setCoverImagePreview(URL.createObjectURL(file));
    }
  };

  const handleUpdate = () => {
    if (!title || !excerpt || !content || !coverImagePreview) {
      alert("All fields including an image are required.");
      return;
    }

    const updatedBlog = {
      ...blog!,
      title,
      slug,
      excerpt,
      content,
      coverImage: coverImageFile ? coverImageFile.name : coverImagePreview,
    };

    alert("Blog updated!\n\n" + JSON.stringify(updatedBlog, null, 2));
    router.push("/admin/blogs");
  };

  return (
    <div className="min-h-screen w-full p-8 bg-white">
      <h1 className="text-3xl font-bold mb-6">Edit Blog</h1>

      {blog && (
        <div className="max-w-2xl space-y-6">
          {coverImagePreview ? (
            <img
              src={coverImagePreview}
              alt="Cover Preview"
              className="w-full h-64 object-cover rounded-lg border"
            />
          ) : (
            <div className="w-full h-64 flex items-center justify-center bg-gray-100 border rounded-lg text-gray-400">
              No Image Selected
            </div>
          )}

          <div>
            <input
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              id="image-upload"
              className="hidden"
            />
            <label htmlFor="image-upload">
              <span className="inline-block px-4 py-2 bg-blue-600 text-white rounded cursor-pointer hover:bg-blue-700 transition">
                Choose Image
              </span>
            </label>
          </div>

          <div>
            <label className="block font-semibold mb-1">Title</label>
            <input
              type="text"
              value={title}
              onChange={(e) => handleTitleChange(e.target.value)}
              className="w-full border border-gray-300 rounded px-4 py-2"
            />
          </div>

          <div>
            <label className="block font-semibold mb-1">Slug</label>
            <input
              type="text"
              value={slug}
              readOnly
              className="w-full border border-gray-300 rounded px-4 py-2 bg-gray-100 text-gray-600"
            />
          </div>

          <div>
            <label className="block font-semibold mb-1">Excerpt</label>
            <textarea
              rows={3}
              value={excerpt}
              onChange={(e) => setExcerpt(e.target.value)}
              className="w-full border border-gray-300 rounded px-4 py-2"
            />
          </div>

          <div>
            <label className="block font-semibold mb-1">Content</label>
            <textarea
              rows={8}
              value={content}
              onChange={(e) => setContent(e.target.value)}
              className="w-full border border-gray-300 rounded px-4 py-2"
            />
          </div>

          <div className="flex gap-4 mt-6">
            <button
              onClick={() => router.back()}
              className="px-4 py-2 rounded bg-gray-300 hover:bg-gray-400"
            >
              Cancel
            </button>
            <button
              onClick={handleUpdate}
              className="px-4 py-2 rounded bg-green-600 text-white hover:bg-green-700"
            >
              Update
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
