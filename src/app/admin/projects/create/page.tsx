import ProjectForm from "../../ProjectForm";

export default function CreateProjectPage() {
    return (
        <div className="animate-fade-in-up">
            <h1 className="text-3xl font-bold text-slate-800 mb-8">Add New Project</h1>
            <div className="bg-white p-8 rounded-lg shadow-md max-w-4xl">
                <ProjectForm />
            </div>
        </div>
    );
}