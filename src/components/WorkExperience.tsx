import WorkExperienceCard from './ui/WorkExperienceCard';

const WorkExperience = () => {
    return (
        <div className="flex flex-col gap-5 min-h-[20vh] mt-20 mb-10">
            <div className="font-bold text-3xl mb-2">
                Work Experience
            </div>

            <WorkExperienceCard title = "Full Stack Developer" company="NCMH" dateRange="Aug. 2022 – Present"/>
            <WorkExperienceCard title = "Web Developer (Internship)" company="Avasia" dateRange="Aug. 2021 – Sep. 2021"/>
            <WorkExperienceCard title = "Data Entry" company="TESDA Rizal Provincial Office (Special Program for Employment of Student)" dateRange="April 2018 – May 2018"/>
        </div>
    )
}

export default WorkExperience;