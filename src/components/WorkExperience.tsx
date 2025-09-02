import WorkExperienceCard from './ui/WorkExperienceCard';

const experience = [
    { 
        title: "Full Stack Web Developer",
        company: "National Center for Mental Health",
        dateRange: "Aug. 2022 – Present" 
    },
    { 
        title: "Web Developer (Internship)",
        company: "Avasia Information Systems, Inc.",
        dateRange: "Aug. 2021 – Sep. 2021" 
    },
    { 
        title: "Data Encoder",
        company: "TESDA Rizal Provincial Office (Special Program for Employment of Student)",
        dateRange: " April 2018 – May 2018" 
    },
]

const WorkExperience = () => {
    return (
        <>
            <div className="font-bold text-3xl mb-5 mt-25">
                Work Experiences
            </div>

            {/* <div className="flex flex-row flex-wrap gap-5 mx-7">
                {experience.map((data, index) => (
                    <div className="lg:w-[30vw] min-h-[15vh] rounded-2xl bg-gradient-to-r from-stone-950 via-neutral-700 to-stone-900">
                        <WorkExperienceCard key={index} title={data.title} company={data.company} dateRange={data.dateRange}/>
                    </div>
                ))}
            </div> */}

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {experience.map((data, index) => (
                    <div
                        key={index}
                        className="min-h-[15vh] rounded-2xl bg-gradient-to-r from-stone-950 via-neutral-700 to-stone-900 p-4"
                    >
                        <WorkExperienceCard
                            title={data.title}
                            company={data.company}
                            dateRange={data.dateRange}
                        />
                    </div>
                ))}
            </div>

        </>
    )
}

export default WorkExperience;