// src/components/BlogCard.tsx
import Link from "next/link";
import { Blog } from "@/data/blogs";

export default function BlogCard({ blog }: { blog: Blog }) {
  return (
    <div className="group relative rounded-2xl overflow-hidden bg-white shadow-md transition-transform duration-300 hover:shadow-2xl hover:-translate-y-1">
      {/* Image with gradient overlay */}
      <div className="relative h-48 w-full overflow-hidden rounded-t-2xl">
        <img
          src={blog.coverImage}
          alt={blog.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
      </div>

      <div className="p-6 flex flex-col justify-between min-h-[260px] md:min-h-[300px]">
        <div>
          <p className="text-xs text-gray-500 mb-2">
            {new Date(blog.publishedAt).toLocaleDateString(undefined, {
              year: "numeric",
              month: "short",
              day: "numeric",
            })}
          </p>

          <h3 className="text-xl md:text-2xl font-semibold text-gray-900 mb-3 leading-snug line-clamp-2">
            {blog.title}
          </h3>

          <p className="text-gray-600 text-sm line-clamp-3">
            {blog.excerpt}
          </p>
        </div>

        {/* Button-style Read More link */}
        <Link
          href={`/blog/${blog.slug}`}
          className="mt-6 inline-flex items-center justify-center self-start px-5 py-2.5 bg-blue-700 text-white font-medium rounded-lg shadow hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all duration-300"
          aria-label={`Read more about ${blog.title}`}
        >
          Read More
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="ml-2 h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
          </svg>
        </Link>
      </div>
    </div>
  );
}
