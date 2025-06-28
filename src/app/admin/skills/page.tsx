import { PlusCircle, Edit, Trash2 } from 'lucide-react';
import Link from 'next/link';

export default function SkillsAdminPage() {
    // Added an 'id' to the mock data for linking
    const skillCategories = [
        { id: 1, name: 'State Management', skills: 'GetX, Provider, BLoC' },
        { id: 2, name: 'UI & Animation', skills: 'Custom Painters, Animation Framework' },
        { id: 3, name: 'Backend & API', skills: 'Firebase, REST APIs, GraphQL' },
    ];

    return (
        <div>
            <div className="flex justify-between items-center mb-8">
                <h1 className="text-3xl font-bold text-gray-800">Manage Skills</h1>
                <Link 
                    href="/admin/skills/create" 
                    className="flex items-center gap-2 bg-blue-600 text-white px-5 py-2.5 rounded-lg font-semibold hover:bg-blue-700 transition-colors shadow-sm"
                >
                    <PlusCircle className="w-5 h-5" />
                    <span>Add New Category</span>
                </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {skillCategories.map(category => (
                    <div key={category.id} className="bg-white p-6 rounded-lg shadow-md">
                        <div className="flex justify-between items-start mb-4">
                            <h2 className="text-xl font-bold text-gray-800">{category.name}</h2>
                            <div className="flex gap-3">
                                {/* UPDATED: The Edit button is now a Link */}
                                <Link href={`/admin/skills/edit/${category.id}`} className="text-blue-500 hover:text-blue-700">
                                    <Edit className="w-5 h-5" />
                                </Link>
                                <button className="text-red-500 hover:text-red-700"><Trash2 className="w-5 h-5" /></button>
                            </div>
                        </div>
                        <p className="text-gray-600">{category.skills}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}