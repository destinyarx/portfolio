import Badge from './Badge';

const WorkExperienceCard = ({title, company, dateRange}: {title: string, company: string, dateRange: string}) => {
    return (
        <div className="flex flex-row min-h-28 border-3 border-zinc-800 rounded-2xl mx-20">
            <div className="w-1/5 rounded-2xl p-3 items-center bg-gradient-to-r from-stone-950 via-neutral-700 to-stone-900">
                <div className="border-2 border-neutral-500 bg-neutral-700 rounded-xl min-h-24 min-w-[48px]">

                </div>
            </div>
            <div className="w-4/5 text-left bg-gradient-to-r from-stone-950 via-neutral-700 to-stone-900">
                <div className="flex flex-col ml-2">
                    <div className="text-xl font-bold">
                        { title }
                    </div>

                    <div className="flex flex-row">
                        { company } 
                        &nbsp; * &nbsp;
                        <Badge text={ dateRange }/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WorkExperienceCard;