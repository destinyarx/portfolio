import Badge from './Badge';

const WorkExperienceCard = ({title, company, dateRange}: {title: string, company: string, dateRange: string}) => {
    return (
        <div className="flex flex-col justify-center items-center w-[30vw]rounded-2xl">
            <div className="w-2/3 rounded-2xl p-3 items-center bg-gradient-to-r from-stone-950 via-neutral-700 to-stone-900">
                <div className="bg-neutral-700 rounded-xl min-h-24 min-w-18">
                    
                </div>
            </div>
            <div className="w-full text-left px-3 py-2">
                <div className="flex flex-col ml-2">
                    <div className="text-xl font-bold">
                        { title }
                    </div>

                    <div className="mt-1">
                        { company } 
                    </div>

                    <div className="mt-1">
                        <Badge text={dateRange} styles="italic" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WorkExperienceCard;