import Card from "@/app/components/Card";

const projects = [
  {
    title: 'Water Refilling Management System',
    description: 'A water station management system that streamlines daily operations by handling customer records, delivery scheduling, inventory, sales, expenses, and maintenance, while also providing secure role-based access for staff and administrators.',
    tags: ['Laravel', 'Vue', 'TypeScript', 'Supabase', 'PostgreSQL', 'Pinia', 'Tailwind', 'Primevue'],
    link: '/water-station-system',
    image: '/water-station.png'
  },
  {
    title: 'ENT Clinic System',
    description: 'The EMR system is a digital healthcare platform that helps clinics and hospitals manage patient information more efficiently. It provides a secure way for doctors, nurses, and staff to record and access patient histories, diagnoses, medications, and vital signs, while also simplifying appointment scheduling and overall patient care management.',
    tags: ['Nuxt.js', 'TypeScript', 'Supabase Auth & PostgreSQL', 'JWT', 'Pinia', 'Tailwind', 'Primevue', 'ChartJS'],
    link: '/ent-clinic',
    image: '/ent-clinic.png'
  },
  {
    title: 'Better Buy',
    description: 'Better Buy is a responsive Next.js web app that calculates price per unit for liquids, solids, and circular goods (like pizzas), enabling users to easily compare products and choose the most cost-effective option.',
    tags: ['Next.js', 'Zustand', 'Shadcn/UI', 'Tailwind'],
    link: '/better-buy',
    image: '/better-buy.png'
  },
  {
    title: 'Customer Service & Booking Automation',
    description: 'An AI-powered customer service and booking system that uses the Gemini model to handle inquiries, automate Messenger bookings, send real-time staff notifications, and streamline scheduling with email confirmations—making customer interactions faster, smarter, and more efficient.',
    tags: ['N8N', 'Gemini', 'Google Forms API', 'Facebook API', 'Telegram API', 'Webhooks', 'Docker', 'Render'],
    link: '/customer-service-automation',
    image: '/n8n-messenger-bot.png'
  },
]

export default function Home() {
  return (
    <div className="font-sans min-h-screen">
      <div className="text-center my-8">
        <div className="text-[2.5rem] font-semibold">
          Personal Projects
        </div>

        <div className="text-[0.8rem] font-light italic">
          (A collection of projects I&apos;ve worked on)
        </div>  
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6 items-stretch mx-5">
        { projects.map(project => (
          <Card key={project.title} project={project} />
        )) }
      </div>

    </div>
  );
}
