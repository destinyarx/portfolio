import WorkExperienceCard from './ui/WorkExperienceCard';

const experience = [
    { 
        title: "Full Stack Developer",
        company: "National Center for Mental Health",
        dateRange: "Aug. 2022 – Present" 
    },
    { 
        title: "Web Developer (Internship)",
        company: "Avasia Information Systems, Inc.",
        dateRange: "Aug. 2021 – Sep. 2021" 
    },
    { 
        title: "Full Stack Developer",
        company: "TESDA Rizal Provincial Office (Special Program for Employment of Student)",
        dateRange: " April 2018 – May 2018" 
    },
]

const WorkExperience = () => {
    return (
        <div className="flex flex-col gap-5 min-h-[20vh] mt-20 mb-10">
            <div className="font-bold text-3xl mb-2">
                Work Experience
            </div>

            {experience.map((data, index) => (
                <WorkExperienceCard key={index} title={data.title} company={data.company} dateRange={data.dateRange}/>
            ))}
        </div>
    )
}

export default WorkExperience;