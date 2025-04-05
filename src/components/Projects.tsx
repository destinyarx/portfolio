import ProjectInformation from './ProjectInformation'

const projectList = [
    {
        title: 'Water Refilling Station Management System',
        description: 'A management system with features for authentication, admin management (users and roles), customer management, delivery scheduling, inventory and sales tracking, expenses tracking, and daily maintenance schedule.',
        tags: ['Laravel','Vue', 'Inertia', 'Supabase', 'PostgreSQL', 'Tailwind', 'Primevue']
    },
    {
        title: 'ENT Clinic Electronic Medical Records',
        description: 'An EMR system with the features of authentication, admin management (users and roles), managing patient records (clinical reports) , appointment scheduling, and inventory management.',
        tags: ['Nuxt.js','Supabase','Drizzle', 'PostgreSQL', 'Tailwind', 'Primevue']
    },
    {
        title: 'Coming Soon (Building in Progress)',
        description: 'Project details should be included here.',
        tags: ['Next.js','Supabase','Drizzle', 'Tailwind', 'Shadcn']
    },
    {
        title: 'React Native Project (Coming Soon)',
        description: 'Project details should be included here.',
        tags: ['React Native', 'Tailwind']
    },
]

const Projects = () => {
    return (
        <div className="min-h-[20vh] mt-20">
            <div className="font-bold text-3xl mb-2">
                Personal Projects
            </div>

            <div className="flex flex-col gap-5 text-left">
                {projectList.map((project, index) => (
                    <ProjectInformation key={index} title={project.title} description={project.description} tags={project.tags}/>
                ))}
            </div>
        </div>
    )
}

export default Projects;