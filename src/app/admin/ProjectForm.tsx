"use client";
import { Save, XCircle, UploadCloud, File, Image as ImageIcon, Trash2, Lock, Unlock } from 'lucide-react';
import Link from 'next/link';
import React, { useState } from 'react';

// NOTE: InitialData would need to be handled differently now,
// as we are dealing with File objects, not just URLs.
// This example focuses on the UI for creating a new project.
type ProjectFormProps = {
    isEditing?: boolean;
};

export default function ProjectForm({ isEditing = false }: ProjectFormProps) {
    // State to hold the selected files
    const [mainImage, setMainImage] = useState<File | null>(null);
    const [apkFile, setApkFile] = useState<File | null>(null);
    const [screenshots, setScreenshots] = useState<File[]>([]);
      const [slug, setSlug] = useState('');
    const [isSlugLocked, setIsSlugLocked] = useState(true);

    const handleMainImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            setMainImage(e.target.files[0]);
        }
    };
 // Function to generate a URL-friendly slug from text
    const generateSlug = (text: string) => {
        return text
            .toLowerCase()
            .replace(/ /g, '-')
            .replace(/[^\w-]+/g, '');
    };

    const handleApkFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            setApkFile(e.target.files[0]);
        }
    };

    const handleScreenshotsChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files) {
            setScreenshots(prev => [...prev, ...Array.from(e.target.files!)]);
        }
    };
    
    const removeScreenshot = (index: number) => {
        setScreenshots(prev => prev.filter((_, i) => i !== index));
    };

    return (
        <form className="space-y-8">
            {/* Basic Info */}
            <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                        <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-1">Project Name</label>
                        <input id="name" type="text" placeholder="e.g., Docment" className="w-full p-2.5 border border-gray-300 rounded-lg"/>
                    </div>
                    <div>
                  
                        <label htmlFor="slug" className="block text-sm font-semibold text-gray-700 mb-1">URL Slug</label>
                        <div className="relative">
                            <input 
                                id="slug" 
                                type="text" 
                                value={slug} 
                                onChange={(e) => setSlug(e.target.value)}
                                placeholder="auto-generated-from-name" 
                                readOnly={isSlugLocked}
                                className={`w-full p-2.5 border border-gray-300 rounded-lg pr-10 ${isSlugLocked ? 'bg-gray-100' : ''}`}
                            />
                            <button type="button" onClick={() => setIsSlugLocked(!isSlugLocked)} className="absolute inset-y-0 right-0 px-3 flex items-center text-gray-500 hover:text-blue-600" aria-label="Toggle slug lock">
                                {isSlugLocked ? <Lock className="w-5 h-5"/> : <Unlock className="w-5 h-5"/>}
                            </button>
                        </div>
                    </div>
                    </div>
               
                <div>
                    <label htmlFor="description" className="block text-sm font-semibold text-gray-700 mb-1">Short Description</label>
                    <textarea id="description" rows={2} placeholder="A brief summary for project cards." className="w-full p-2.5 border border-gray-300 rounded-lg"></textarea>
                </div>
                <div>
                    <label htmlFor="longDescription" className="block text-sm font-semibold text-gray-700 mb-1">Detailed Description</label>
                    <textarea id="longDescription" rows={5} placeholder="Full details for the project page." className="w-full p-2.5 border border-gray-300 rounded-lg"></textarea>
                </div>
            </div>

            {/* File Uploads Section */}
            <div className="space-y-6 pt-4 border-t">
                {/* Main Image Upload */}
                <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Main Project Image</label>
                    <div className="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
                        {mainImage ? (
                            <div className="text-center">
                                <img src={URL.createObjectURL(mainImage)} alt="Preview" className="mx-auto h-24 w-auto rounded-md"/>
                                <p className="mt-2 text-sm text-gray-600">{mainImage.name}</p>
                            </div>
                        ) : (
                            <div className="text-center">
                                <UploadCloud className="mx-auto h-12 w-12 text-gray-300" aria-hidden="true" />
                                <div className="mt-4 flex text-sm leading-6 text-gray-600">
                                    <label htmlFor="main-image-upload" className="relative cursor-pointer rounded-md bg-white font-semibold text-blue-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-blue-600 focus-within:ring-offset-2 hover:text-blue-500">
                                        <span>Upload an image</span>
                                        <input id="main-image-upload" name="main-image-upload" type="file" className="sr-only" accept="image/*" onChange={handleMainImageChange} />
                                    </label>
                                    <p className="pl-1">or drag and drop</p>
                                </div>
                            </div>
                        )}
                    </div>
                </div>

                {/* APK File Upload */}
                 <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">APK File</label>
                    <label htmlFor="apk-upload" className="relative cursor-pointer rounded-lg bg-white p-4 border border-gray-300 flex items-center justify-center gap-3 w-full hover:border-blue-500">
                        <File className="w-6 h-6 text-gray-500"/>
                        <span className="font-medium text-gray-700">{apkFile ? apkFile.name : 'Click to select APK file'}</span>
                    </label>
                    <input id="apk-upload" type="file" className="sr-only" accept=".apk" onChange={handleApkFileChange} />
                </div>

                {/* Screenshots Upload */}
                <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Project Screenshots</label>
                    <label htmlFor="screenshots-upload" className="relative cursor-pointer rounded-lg bg-white p-4 border border-dashed border-gray-300 flex flex-col items-center justify-center gap-2 w-full hover:border-blue-500">
                        <ImageIcon className="w-6 h-6 text-gray-500"/>
                        <span className="font-medium text-gray-700">Click to select multiple screenshots</span>
                    </label>
                    <input id="screenshots-upload" type="file" multiple className="sr-only" accept="image/*" onChange={handleScreenshotsChange}/>
                    {screenshots.length > 0 && (
                        <div className="mt-4 grid grid-cols-2 md:grid-cols-4 gap-4">
                            {screenshots.map((file, index) => (
                                <div key={index} className="relative group">
                                    <img src={URL.createObjectURL(file)} alt={`Screenshot preview ${index + 1}`} className="w-full h-85 object-cover rounded-md"/>
                                    <button onClick={() => removeScreenshot(index)} className="absolute top-1 right-1 bg-red-600 text-white rounded-full p-0.5 opacity-0 group-hover:opacity-100 transition-opacity">
                                        <Trash2 className="w-4 h-4"/>
                                    </button>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </div>

            {/* Tags & Actions */}
            <div className="space-y-6 pt-4 border-t">
                <div>
                    <label htmlFor="tags" className="block text-sm font-semibold text-gray-700 mb-1">Tags</label>
                    <input id="tags" type="text" placeholder="Flutter, Medical, Real-time" className="w-full p-2.5 border border-gray-300 rounded-lg"/>
                    <p className="text-xs text-gray-500 mt-1">Enter tags separated by a comma.</p>
                </div>
                <div className="flex justify-end gap-4">
                    <Link href="/admin/projects" className="flex items-center gap-2 bg-gray-200 text-gray-800 px-6 py-2.5 rounded-lg font-semibold hover:bg-gray-300 transition-colors">
                        <XCircle className="w-5 h-5" />
                        <span>Cancel</span>
                    </Link>
                    <button type="submit" className="flex items-center gap-2 bg-green-600 text-white px-6 py-2.5 rounded-lg font-semibold hover:bg-green-700 transition-colors shadow-sm">
                        <Save className="w-5 h-5" />
                        <span>{isEditing ? 'Update' : 'Save'} Project</span>
                    </button>
                </div>
            </div>
        </form>
    );
}