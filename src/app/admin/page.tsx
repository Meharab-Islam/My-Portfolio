import { ArrowRight, Briefcase, Wrench, Settings } from 'lucide-react';
import Link from 'next/link';

export default function AdminPage() {
    // Mock data for the dashboard stats - later, this would come from your database.
    const stats = [
        { name: 'Total Projects', value: '12', icon: Briefcase, href: '/admin/projects' },
        { name: 'Skill Categories', value: '4', icon: Wrench, href: '/admin/skills' },
        { name: 'Site Settings', value: 'Manage', icon: Settings, href: '/admin/settings' },
    ];

    // Get the current date to display in the header
    const currentDate = new Date().toLocaleDateString('en-US', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    });

    return (
        // The root div will animate the whole page content on load
        <div className="animate-fade-in-up">
            {/* Header Section with your details */}
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-10">
                <div>
                    <h1 className="text-3xl md:text-4xl font-bold text-slate-900">Welcome back, Meharab!</h1>
                    <p className="mt-1 text-slate-500">{currentDate}</p>
                </div>
                <div className="flex items-center gap-3 mt-4 sm:mt-0">
                    <img 
                        src="https://avatars.githubusercontent.com/u/89135438?v=4" 
                        alt="Admin Profile Picture"
                        className="w-12 h-12 rounded-full border-2 border-blue-500 shadow-md"
                    />
                </div>
            </div>

            {/* Animated Stats Cards Section */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
                {stats.map((stat, index) => (
                    <div 
                        key={stat.name}
                        className="bg-white p-6 rounded-xl shadow-md border border-slate-200 hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
                        style={{ animationDelay: `${index * 100}ms` }}
                    >
                        <div className="flex justify-between items-center">
                            <div>
                                <p className="text-sm font-medium text-slate-500">{stat.name}</p>
                                <p className="text-3xl font-bold text-slate-900">{stat.value}</p>
                            </div>
                            <div className="bg-blue-100 p-3 rounded-full">
                                <stat.icon className="w-6 h-6 text-blue-600" />
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Quick Actions Section */}
            <div>
                <h2 className="text-2xl font-bold text-slate-800 mb-4">Quick Actions</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <Link href="/admin/projects" className="group flex items-center justify-between bg-white p-6 rounded-xl shadow-md border border-slate-200 hover:shadow-lg hover:bg-slate-50 transition-all duration-300">
                        <div>
                            <h3 className="text-lg font-bold text-slate-800">Add a New Project</h3>
                            <p className="text-slate-500">Showcase your latest work.</p>
                        </div>
                        <ArrowRight className="w-6 h-6 text-slate-400 group-hover:text-blue-600 group-hover:translate-x-1 transition-transform duration-300"/>
                    </Link>
                     <Link href="/admin/settings" className="group flex items-center justify-between bg-white p-6 rounded-xl shadow-md border border-slate-200 hover:shadow-lg hover:bg-slate-50 transition-all duration-300">
                        <div>
                            <h3 className="text-lg font-bold text-slate-800">Update Site Settings</h3>
                            <p className="text-slate-500">Change your name, title, or links.</p>
                        </div>
                        <ArrowRight className="w-6 h-6 text-slate-400 group-hover:text-blue-600 group-hover:translate-x-1 transition-transform duration-300"/>
                    </Link>
                </div>
            </div>
        </div>
    )
}