import { projects } from "@/data/projects";
import { notFound } from "next/navigation";
import type { Metadata } from 'next'
import React from "react";

// This function tells Next.js which pages to build ahead of time
export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

// This function dynamically sets the page title and metadata
export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const project = projects.find((p) => p.slug === params.slug);
  if (!project) {
    return {
      title: 'Project Not Found'
    }
  }
  return {
    title: `${project.name} | Meharab Islam`,
    description: project.description,
  }
}

export default function ProjectDetailPage({ params }: { params: { slug: string } }) {
  const { slug } = params;
  const project = projects.find((p) => p.slug === slug);

  // If no project matches the slug, show a 404 page
  if (!project) {
    notFound();
  }

  return (
    <div className="bg-white py-12">
      <div className="max-w-5xl mx-auto px-6">
        {/* Project Header */}
        <div className="text-center mb-10">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900">{project.name}</h1>
          <div className="flex flex-wrap justify-center gap-2 mt-4">
            {project.tags.map((tag) => (
              <span key={tag} className="text-sm bg-blue-100 text-blue-800 px-3 py-1 rounded-full">
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Project Description and Download Button */}
        <div className="bg-gray-50 rounded-lg p-8 mb-10">
            <h2 className="text-2xl font-bold text-gray-800 mb-3">About the Project</h2>
            <p className="text-gray-700 leading-relaxed mb-6">{project.longDescription}</p>
            <a 
              href={project.apkUrl}
              download
              className="inline-block bg-green-600 text-white font-bold px-8 py-3 rounded-lg text-lg hover:bg-green-700 transition-colors shadow-lg"
            >
              Download APK
            </a>
        </div>

        {/* Screenshots Gallery */}
        <div>
          <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">Screenshots</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {project.screenshots.map((screenshot, index) => (
              <div key={index} className="bg-gray-200 rounded-lg overflow-hidden shadow-md">
                <img 
                  src={screenshot} 
                  alt={`${project.name} screenshot ${index + 1}`} 
                  className="w-full h-auto object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}