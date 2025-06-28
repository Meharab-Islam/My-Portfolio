// File: src/app/page.tsx
import { projects } from "@/data/projects";
import ProjectCard from "@/components/ProjectCard";
import Link from "next/link";
import React from "react";
import SkillsSection from "@/components/SkillsSection";
import ArrowRightIcon from "@/components/icons/ArrowRightIcon";

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
       {/* Hero Section */}
       <section className="relative min-h-screen flex items-center bg-gradient-to-br from-yellow-50 via-red-50 to-blue-50">
        <div className="absolute inset-0">
          {/* You can add a subtle pattern or texture here if you like */}
        </div>
        <div className="relative max-w-7xl w-full mx-auto px-8 grid grid-cols-1 md:grid-cols-2 items-center gap-8">
          <div className="md:col-span-1 text-center md:text-left">
            <h2 className="font-serif text-5xl md:text-7xl text-gray-800">
              Hey, there
            </h2>
            <h1 className="mt-4 text-5xl md:text-8xl font-extrabold uppercase tracking-tighter text-gray-900">
              I am Meharab
            </h1>
            <p className="mt-2 text-2xl md:text-3xl font-semibold text-gray-700">
              FLUTTER DEVELOPER
            </p>

            <div className="mt-6">
              <span className="inline-block bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-medium">
                Available for new opportunities
              </span>
            </div>

            <p className="mt-6 text-gray-600 max-w-md mx-auto md:mx-0">
              I build modern, efficient, and beautiful mobile apps using Flutter, creating seamless experiences for users.
            </p>
            
            {/* --- New Button Group --- */}
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4">
              <Link href="/contact" className="group inline-flex items-center justify-center gap-2 bg-gray-900 text-white font-semibold px-6 py-3 rounded-lg hover:bg-gray-700 transition-colors w-full sm:w-auto">
                Hire Me
                <ArrowRightIcon className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link href="/projects" className="inline-flex items-center justify-center bg-white text-gray-800 font-semibold px-6 py-3 rounded-lg border border-gray-300 hover:bg-gray-100 transition-colors w-full sm:w-auto">
                View Projects
              </Link>
            </div>
            {/* --- End of New Button Group --- */}

          </div>

          
          
          <div className="md:col-span-1 flex justify-center items-center">
    {/* The gradient border container */}
    <div className="relative group p-1.5 rounded-full bg-gradient-to-br from-blue-500 via-teal-400 to-green-400 transition-all duration-300 hover:shadow-2xl">
        
        {/* UPDATED: Increased width and height classes for a bigger look */}
        <div className="w-120 h-120 md:w-[448px] md:h-[448px] bg-gray-900 rounded-full overflow-hidden">
            <img 
              src="https://avatars.githubusercontent.com/u/89135438?v=4" 
              alt="Meharab Islam" 
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" 
            />
        </div>
    </div>
</div>



        </div>
      </section>

      {/* Recent Projects Section */}
      <section className="py-20 px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12  text-gray-500">Recent Projects</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.slice(0, 3).map((project) => ( // Show first 3 projects
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
          <div className="text-center mt-12">
             <Link href="/projects" className="bg-blue-600 text-white px-8 py-3 rounded-lg text-md font-medium hover:bg-blue-700 transition-colors">
                View All Projects
             </Link>
          </div>
        </div>
      </section>
      <SkillsSection />
    </>
  );
}