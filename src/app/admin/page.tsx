import { ArrowRight, Briefcase, Wrench, Settings, FileText } from 'lucide-react';
import Link from 'next/link';
import { blogs } from '@/data/blogs'; // ✅ import blog data
import {flutterSkills} from '@/data/skills';
import { projects } from '@/data/projects';

export default function AdminPage() {
  const stats = [
    { name: 'Total Projects', value: projects.length.toString(), icon: Briefcase, href: '/admin/projects' },
    { name: 'Skill Categories', value: flutterSkills.length.toString(), icon: Wrench, href: '/admin/skills' },
    { name: 'Total Blogs', value: blogs.length.toString(), icon: FileText, href: '/admin/blogs' }, // ✅ dynamic count
    { name: 'Site Settings', value: 'Manage', icon: Settings, href: '/admin/settings' },
  ];

  const currentDate = new Date().toLocaleDateString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <div className="animate-fade-in-up">
      {/* Header */}
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

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
        {stats.map((stat, index) => (
          <Link
            key={stat.name}
            href={stat.href}
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
          </Link>
        ))}
      </div>

      {/* Quick Actions */}
      <div>
        <h2 className="text-2xl font-bold text-slate-800 mb-4">Quick Actions</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Link
            href="/admin/projects"
            className="group flex items-center justify-between bg-white p-6 rounded-xl shadow-md border border-slate-200 hover:shadow-lg hover:bg-slate-50 transition-all duration-300"
          >
            <div>
              <h3 className="text-lg font-bold text-slate-800">Add a New Project</h3>
              <p className="text-slate-500">Showcase your latest work.</p>
            </div>
            <ArrowRight className="w-6 h-6 text-slate-400 group-hover:text-blue-600 group-hover:translate-x-1 transition-transform duration-300" />
          </Link>

          <Link
            href="/admin/blogs/create"
            className="group flex items-center justify-between bg-white p-6 rounded-xl shadow-md border border-slate-200 hover:shadow-lg hover:bg-slate-50 transition-all duration-300"
          >
            <div>
              <h3 className="text-lg font-bold text-slate-800">Add a New Blog</h3>
              <p className="text-slate-500">Write and publish a new post.</p>
            </div>
            <ArrowRight className="w-6 h-6 text-slate-400 group-hover:text-blue-600 group-hover:translate-x-1 transition-transform duration-300" />
          </Link>

          <Link
            href="/admin/settings"
            className="group flex items-center justify-between bg-white p-6 rounded-xl shadow-md border border-slate-200 hover:shadow-lg hover:bg-slate-50 transition-all duration-300"
          >
            <div>
              <h3 className="text-lg font-bold text-slate-800">Update Site Settings</h3>
              <p className="text-slate-500">Change your name, title, or links.</p>
            </div>
            <ArrowRight className="w-6 h-6 text-slate-400 group-hover:text-blue-600 group-hover:translate-x-1 transition-transform duration-300" />
          </Link>
        </div>
      </div>
    </div>
  );
}
