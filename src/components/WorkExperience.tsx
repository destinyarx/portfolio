import WorkExperienceCard from './ui/WorkExperienceCard';

const experience = [
    { 
        title: "Full Stack Web Developer",
        company: "National Center for Mental Health",
        dateRange: "Aug. 2022 – Present",
        image: 'ncmh' as const,
        description: 'Experienced in building and optimizing EMR systems using Laravel, CodeIgniter, Vue, TypeScript, and Inertia. Skilled in database design, performance optimization, and ensuring seamless interoperability for hospital workflows. Strong background in production support, troubleshooting, and maintaining scalable applications.'
    },
    { 
        title: "Web Developer (Internship)",
        company: "Avasia Information Systems, Inc.",
        dateRange: "Aug. 2021 – Sep. 2021",
        image: 'avasia' as const,
        description: 'Developed a timekeeping web application with face recognition and QR code technology using JavaScript, PHP, Mustache.js, and Face API.js, enabling accurate and efficient attendance tracking. Contributed to full-stack development, system integration, and performance optimization to deliver reliable and user-friendly solutions.'

    },
    { 
        title: "Data Encoder",
        company: "TESDA Rizal Provincial Office (Special Program for Employment of Student)",
        dateRange: " April 2018 – May 2018",
        image: 'tesda' as const,
        description: 'Encoded and updated data accurately in Excel and verified documents to ensure completeness and compliance.'
    },
]

const WorkExperience = () => {
    return (
        <>
            <div className="font-bold text-3xl mb-5 mt-25">
                Work Experiences
            </div>

            <div className="w-screen grid grid-cols-1 lg:grid-cols-3 gap-6">
                {experience.map((data, index) => (
                    <div
                        key={index}
                        className="min-h-[15vh] rounded-2xl bg-gradient-to-r from-stone-950 via-neutral-700 to-stone-900 p-4"
                    >
                        <WorkExperienceCard work={data}/>
                    </div>
                ))}
            </div>

        </>
    )
}

export default WorkExperience;