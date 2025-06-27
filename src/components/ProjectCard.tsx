
// File: src/components/ProjectCard.tsx
"use client";
import React from "react";
import Link from 'next/link'; // Import the Link component

export default function ProjectCard({ project }: any) {
  return (
    // Wrap the entire card with the Link component
    <Link href={`/projects/${project.slug}`} className="block">
      <div className="group relative block bg-black rounded-xl overflow-hidden shadow-lg border border-gray-200/50 h-full">
        <img
          src={project.image}
          alt={project.name}
          className="w-full h-96 object-cover object-top transform transition-transform duration-500 ease-in-out group-hover:scale-105"
        />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>
        
        {/* Content */}
        <div className="absolute inset-x-0 bottom-0 p-6">
          <h3 className="text-xl font-bold text-white">{project.name}</h3>
          <p className="text-gray-300 text-sm mt-1">{project.description}</p>
          <div className="flex flex-wrap gap-2 mt-4">
              {project.tags.map((tag: string, i: number) => (
                  <span key={i} className="text-xs bg-white/20 text-white px-2 py-1 rounded-full backdrop-blur-sm">
                      {tag}
                  </span>
              ))}
          </div>
        </div>
      </div>
    </Link>
  );
}