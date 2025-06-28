import SkillForm from "@/app/admin/SkillForm";

export default function EditSkillPage({ params }: { params: { id: string } }) {
    // In a real app, you would fetch the skill data from your database using the params.id
    // For this UI-only example, we'll use mock data.
    const mockSkillData = {
        title: 'UI & Animation',
        description: 'Creating beautiful, responsive, and fluid user interfaces with complex animations.',
        skills: 'Custom Painters, Animation Framework, Material Design',
    };

    return (
        <div className="animate-fade-in-up">
            <h1 className="text-3xl font-bold text-slate-800 mb-8">Update Skill Category</h1>

            <div className="bg-white p-8 rounded-lg shadow-md max-w-3xl">
                <SkillForm initialData={mockSkillData} isEditing={true} />
            </div>
        </div>
    );
}