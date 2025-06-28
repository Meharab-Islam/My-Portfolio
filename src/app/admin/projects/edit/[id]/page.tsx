import ProjectForm from "@/app/admin/ProjectForm";


export default function EditProjectPage({ params }: { params: { id: string } }) {
    // In a real app, you would fetch project data from your DB using params.id
    // For this UI example, we use mock data.
    const mockProjectData = {
        name: 'Docment',
        slug: 'docment-medical-app',
        description: 'A medical app for seamless doctor-patient communication.',
        longDescription: 'Docment is a comprehensive and secure medical application designed to bridge the communication gap between doctors and patients.',
        image: 'https://cdn.dribbble.com/userupload/4215865/file/original-b8332d207133742111a3641009139962.png',
        apkUrl: '/assets/apk/docment.apk',
        screenshots: [
            '/assets/screenshots/docment1.png',
            '/assets/screenshots/docment2.png'
        ],
        tags: ['Medical', 'Flutter', 'Real-time']
    };

    return (
        <div className="animate-fade-in-up">
            <h1 className="text-3xl font-bold text-slate-800 mb-8">Update Project</h1>
            <div className="bg-white p-8 rounded-lg shadow-md max-w-4xl">
                <ProjectForm  isEditing={true} />
            </div>
        </div>
    );
}