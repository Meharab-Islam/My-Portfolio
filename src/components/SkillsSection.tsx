// File: src/components/SkillsSection.tsx
"use client";

import { flutterSkills } from "@/data/skills";
import CheckIcon from "./icons/CheckIcon";
import React, { useEffect, useRef, useState } from 'react';

// A single animated card component
function SkillCard({ category, description, skills, index }: any) {
    const [isVisible, setIsVisible] = useState(false);
    const cardRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                if (entries[0].isIntersecting) {
                    setIsVisible(true);
                    observer.disconnect();
                }
            },
            { threshold: 0.1 }
        );

        if (cardRef.current) {
            observer.observe(cardRef.current);
        }

        return () => {
            if (cardRef.current) {
                observer.unobserve(cardRef.current);
            }
        };
    }, []);

    const animationDelay = `${index * 100}ms`;

    return (
        <div
            ref={cardRef}
            className={`bg-white p-8 rounded-2xl shadow-lg border border-gray-100 transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
            style={{ transitionDelay: animationDelay }}
        >
            <h3 className="text-2xl font-bold text-gray-900 mb-2">{category}</h3>
            <p className="text-gray-600 mb-6">{description}</p>
            <ul className="space-y-3">
                {skills.map((skill: string) => (
                    <li key={skill} className="flex items-center gap-3">
                        <CheckIcon className="w-5 h-5 text-green-500 flex-shrink-0" />
                        <span className="font-medium text-gray-700">{skill}</span>
                    </li>
                ))}
            </ul>
        </div>
    );
}


// The main section component
export default function SkillsSection() {
  return (
    <section className="py-24 bg-gradient-to-b from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight">
            Core Expertise: Flutter Development
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            My passion is crafting high-quality, beautiful mobile applications exclusively with Flutter. Here's a breakdown of my technical skills within the Flutter ecosystem.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {flutterSkills.map((categoryData, index) => (
            <SkillCard key={categoryData.category} {...categoryData} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}