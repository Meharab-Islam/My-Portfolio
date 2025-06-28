import SkillForm from "@/app/admin/SkillForm";

export default function CreateSkillPage() {
    return (
        <div className="animate-fade-in-up">
            <h1 className="text-3xl font-bold text-slate-800 mb-8">Create New Skill Category</h1>

            <div className="bg-white p-8 rounded-lg shadow-md max-w-3xl">
                <SkillForm />
            </div>
        </div>
    );
}