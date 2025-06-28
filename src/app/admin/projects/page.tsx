import { PlusCircle, Edit, Trash2 } from 'lucide-react';
import Link from 'next/link';

export default function ProjectsAdminPage() {
    const projects = [
        { id: 1, name: 'Docment', tags: 'Medical, Flutter, Real-time' },
        { id: 2, name: 'SkillGrow', tags: 'Education, LMS, Flutter' },
        { id: 3, name: 'Finance Tracker', tags: 'Finance, Productivity' },
    ];

    return (
        <div>
            <div className="flex justify-between items-center mb-8">
                <h1 className="text-3xl font-bold text-gray-800">Manage Projects</h1>
                {/* UPDATED: Links to the create page */}
                <Link href="/admin/projects/create" className="flex items-center gap-2 bg-blue-600 text-white px-5 py-2.5 rounded-lg font-semibold hover:bg-blue-700 transition-colors shadow-sm">
                    <PlusCircle className="w-5 h-5" />
                    <span>Add New Project</span>
                </Link>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
                <table className="w-full text-left">
                    <thead className="border-b-2 border-gray-200">
                        <tr>
                            <th className="py-3 px-4 font-semibold text-gray-600">Project Name</th>
                            <th className="py-3 px-4 font-semibold text-gray-600">Tags</th>
                            <th className="py-3 px-4 font-semibold text-gray-600 text-right">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {projects.map(project => (
                            <tr key={project.id} className="border-b border-gray-100 hover:bg-gray-50">
                                <td className="py-4 px-4 font-medium text-gray-800">{project.name}</td>
                                <td className="py-4 px-4 text-gray-600">{project.tags}</td>
                                <td className="py-4 px-4">
                                    <div className="flex justify-end gap-3">
                                        {/* UPDATED: Links to the dynamic edit page */}
                                        <Link href={`/admin/projects/edit/${project.id}`} className="text-blue-500 hover:text-blue-700"><Edit className="w-5 h-5" /></Link>
                                        <button className="text-red-500 hover:text-red-700"><Trash2 className="w-5 h-5" /></button>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}