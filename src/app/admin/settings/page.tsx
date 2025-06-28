import { Save } from 'lucide-react';

export default function SettingsAdminPage() {
    return (
        <div>
            <h1 className="text-3xl font-bold text-gray-800 mb-8">Site Settings</h1>

            <div className="bg-white p-8 rounded-lg shadow-md max-w-3xl">
                <form className="space-y-6">
                    <div>
                        <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-1">Your Name</label>
                        <input id="name" type="text" defaultValue="Meharab Islam" className="w-full p-2.5 border border-gray-300 rounded-lg"/>
                    </div>
                    <div>
                        <label htmlFor="title" className="block text-sm font-semibold text-gray-700 mb-1">Title / Profession</label>
                        <input id="title" type="text" defaultValue="Flutter Developer" className="w-full p-2.5 border border-gray-300 rounded-lg"/>
                    </div>
                     <div>
                        <label htmlFor="intro" className="block text-sm font-semibold text-gray-700 mb-1">Introduction Text</label>
                        <textarea id="intro" rows={3} defaultValue="I build modern, efficient, and beautiful mobile apps using Flutter..." className="w-full p-2.5 border border-gray-300 rounded-lg"></textarea>
                    </div>
                    <hr/>
                    <h2 className="text-xl font-bold text-gray-800 pt-2">Social & Contact Links</h2>
                    <div>
                        <label htmlFor="github" className="block text-sm font-semibold text-gray-700 mb-1">GitHub URL</label>
                        <input id="github" type="url" defaultValue="https://github.com/your-username" className="w-full p-2.5 border border-gray-300 rounded-lg"/>
                    </div>
                     <div>
                        <label htmlFor="linkedin" className="block text-sm font-semibold text-gray-700 mb-1">LinkedIn URL</label>
                        <input id="linkedin" type="url" defaultValue="https://linkedin.com/in/your-profile" className="w-full p-2.5 border border-gray-300 rounded-lg"/>
                    </div>
                    <div className="flex justify-end pt-4">
                        <button type="submit" className="flex items-center gap-2 bg-green-600 text-white px-6 py-2.5 rounded-lg font-semibold hover:bg-green-700 transition-colors shadow-sm">
                            <Save className="w-5 h-5" />
                            <span>Save Changes</span>
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}