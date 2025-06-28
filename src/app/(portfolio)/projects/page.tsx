// File: src/app/projects/page.tsx
import { projects } from "@/data/projects";
import ProjectCard from "@/components/ProjectCard";
import React from "react";

export default function ProjectsPage() {
  return (
    <div className="py-16 px-8 bg-white min-h-screen">
      <div className="max-w-7xl mx-auto">
      <h2 className="text-4xl font-bold text-center mb-12 text-gray-500">All My Works</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </div>
  );
}