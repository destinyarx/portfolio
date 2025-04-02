import ProjectInformation from './ProjectInformation'

const Projects = () => {
    return (
        <div className="min-h-[20vh] mt-20">
            <div className="font-bold text-3xl mb-2">
                Personal Projects
            </div>

            <div className="flex flex-col gap-5 text-left">
                <ProjectInformation title="Water Refilling Station Management System" description="" tags={['Laravel','Vue','Supabase']}/>
                <ProjectInformation title="ENT Clinic Electronic Medical Records" description="" tags={['Nuxt','Supabase','Drizzle']}/>
            </div>
        </div>
    )
}

export default Projects;