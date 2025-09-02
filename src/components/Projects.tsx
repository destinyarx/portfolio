import ProjectInformation from './ProjectInformation'

const projectList = [
    {
        title: 'Water Refilling Station Management System',
        description: 'A water station management system that streamlines daily operations by handling customer records, delivery scheduling, inventory, sales, expenses, and maintenance, while also providing secure role-based access for staff and administrators.',
        tags: ['Laravel','Vue', 'Inertia', 'Supabase', 'PostgreSQL', 'Tailwind', 'Primevue'],
        link: '/better-buy',
        image: 'water-station'
    },
    {
        title: 'ENT Clinic Electronic Medical Records',
        description: 'The EMR system is a digital healthcare platform that helps clinics and hospitals manage patient information more efficiently. It provides a secure way for doctors, nurses, and staff to record and access patient histories, diagnoses, medications, and vital signs, while also simplifying appointment scheduling and overall patient care management.',
        tags: ['Nuxt.js','Supabase','Drizzle', 'PostgreSQL', 'Tailwind', 'Primevue'],
        link: '/better-buy',
        image: 'ent-clinic'
    },
    {
        title: 'Better Buy',
        description: 'Better Buy is a responsive Next.js web app that calculates price per unit for liquids, solids, and circular goods (like pizzas), enabling users to easily compare products and choose the most cost-effective option.',
        tags: ['Next.js', 'Zustand', 'Shadcn/UI', 'Tailwind'],
        link: '/better-buy',
        image: 'better-buy'
      },
      {
        title: 'Customer Service & Booking Automation',
        description: 'An AI-powered customer service and booking system that uses the Gemini model to handle inquiries, automate Messenger bookings, send real-time staff notifications, and streamline scheduling with email confirmations—making customer interactions faster, smarter, and more efficient.',
        tags: ['N8N', 'Gemini', 'Google Forms API', 'Facebook API', 'Telegram API', 'Webhooks', 'Docker', 'Render'],
        link: '/customer-service-automation',
        image: 'messenger-bot'
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
                    <ProjectInformation key={index} project={project}/>
                ))}
            </div>
        </div>
    )
}

export default Projects;