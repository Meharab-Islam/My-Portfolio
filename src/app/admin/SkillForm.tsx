"use client";
import { Save, XCircle } from 'lucide-react';
import Link from 'next/link';
import React, { useState, useEffect } from 'react';

// Define the shape of the skill data
type SkillData = {
    title: string;
    description: string;
    skills: string; // Skills as a single comma-separated string
};

type SkillFormProps = {
    initialData?: SkillData;
    isEditing?: boolean;
};

export default function SkillForm({ initialData, isEditing = false }: SkillFormProps) {
    // A single state object to manage all form fields
    const [formData, setFormData] = useState<SkillData>({
        title: '',
        description: '',
        skills: '',
    });

    // This hook pre-fills the form when initialData is provided for editing
    useEffect(() => {
        if (isEditing && initialData) {
            setFormData({
                title: initialData.title || '',
                description: initialData.description || '',
                skills: initialData.skills || '',
            });
        }
    }, [isEditing, initialData]);

    // A single handler for all text-based inputs
    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    return (
        <form className="space-y-6">
            {/* Title Input */}
            <div>
                <label htmlFor="title" className="block text-sm font-semibold text-gray-700 mb-1">
                    Category Title
                </label>
                <input 
                    name="title"
                    id="title" 
                    type="text" 
                    value={formData.title}
                    onChange={handleChange}
                    placeholder="e.g., State Management" 
                    className="w-full p-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                />
            </div>

            {/* Description Input */}
            <div>
                <label htmlFor="description" className="block text-sm font-semibold text-gray-700 mb-1">
                    Description
                </label>
                <textarea 
                    name="description"
                    id="description" 
                    rows={3} 
                    value={formData.description}
                    onChange={handleChange}
                    placeholder="A short summary of this skill category." 
                    className="w-full p-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                ></textarea>
            </div>

            {/* Skills List Input */}
            <div>
                <label htmlFor="skills" className="block text-sm font-semibold text-gray-700 mb-1">
                    Skills
                </label>
                <input 
                    name="skills"
                    id="skills" 
                    type="text" 
                    value={formData.skills}
                    onChange={handleChange}
                    placeholder="GetX, Provider, BLoC, Riverpod" 
                    className="w-full p-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                />
                <p className="text-xs text-gray-500 mt-1">
                    Enter skills separated by a comma (e.g., Skill One, Skill Two).
                </p>
            </div>

            {/* Action Buttons */}
            <div className="flex justify-end gap-4 pt-4">
                <Link href="/admin/skills" className="flex items-center gap-2 bg-gray-200 text-gray-800 px-6 py-2.5 rounded-lg font-semibold hover:bg-gray-300 transition-colors">
                    <XCircle className="w-5 h-5" />
                    <span>Cancel</span>
                </Link>
                <button 
                    type="submit" 
                    className="flex items-center gap-2 bg-green-600 text-white px-6 py-2.5 rounded-lg font-semibold hover:bg-green-700 transition-colors shadow-sm"
                >
                    <Save className="w-5 h-5" />
                    <span>{isEditing ? 'Update Category' : 'Save Category'}</span>
                </button>
            </div>
        </form>
    );
}