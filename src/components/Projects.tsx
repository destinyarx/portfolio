import ProjectInformation from './ProjectInformation'

const projectList = [
    {
        title: 'Water Refilling Station Management System',
        description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et',
        tags: ['Laravel','Vue', 'Inertia', 'Supabase', 'PostgreSQL', 'Tailwind', 'Primevue']
    },
    {
        title: 'ENT Clinic Electronic Medical Records',
        description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.',
        tags: ['Nuxt.js','Supabase','Drizzle', 'PostgreSQL', 'Tailwind', 'Primevue']
    },
    {
        title: 'Coming Soon (Planning Stage)',
        description: 'Project details should be included here.',
        tags: ['Next.js','Supabase','Drizzle', 'Tailwind', 'Shadcn']
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