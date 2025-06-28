"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function CreateBlogPage() {
  const router = useRouter();

  const [title, setTitle] = useState("");
  const [slug, setSlug] = useState("");
  const [excerpt, setExcerpt] = useState("");
  const [content, setContent] = useState("");
  const [coverImageFile, setCoverImageFile] = useState<File | null>(null);
  const [coverImagePreview, setCoverImagePreview] = useState<string | null>(null);
  const [publishedAt] = useState(() => new Date().toISOString().split("T")[0]);

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

  const handleCreate = () => {
    if (!title || !excerpt || !content || !coverImageFile) {
      alert("Please fill all fields and choose an image.");
      return;
    }

    alert("Blog created!\n\n" + JSON.stringify({
      title,
      slug,
      excerpt,
      content,
      publishedAt,
      coverImage: coverImageFile.name,
    }, null, 2));

    router.push("/admin/blogs");
  };

  return (
    <div className="min-h-screen w-full p-8 bg-white">
      <h1 className="text-3xl font-bold mb-6">Create Blog</h1>

      <div className="max-w-2xl space-y-6">
        {coverImagePreview ? (
          <img
            src={coverImagePreview}
            alt="Selected Cover"
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
          <label className="block font-semibold mb-1">Slug (auto-generated)</label>
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

        <input type="hidden" value={publishedAt} />

        <div className="flex gap-4 mt-6">
          <button
            onClick={() => router.back()}
            className="px-4 py-2 rounded bg-gray-300 hover:bg-gray-400"
          >
            Cancel
          </button>
          <button
            onClick={handleCreate}
            className="px-4 py-2 rounded bg-blue-600 text-white hover:bg-blue-700"
          >
            Create
          </button>
        </div>
      </div>
    </div>
  );
}
