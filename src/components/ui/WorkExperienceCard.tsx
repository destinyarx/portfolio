import Badge from './Badge';

const WorkExperienceCard = ({title, company, dateRange}: {title: string, company: string, dateRange: string}) => {
    return (
        <div className="flex flex-col justify-center items-center w-[30vw] rounded-2xl py-2">
            <div className="w-2/3 rounded-2xl p-3 items-center">
                <div className="bg-neutral-700 rounded-xl min-h-40 min-w-24">
                    
                </div>
            </div>
            <div className="w-full text-left px-3 py-2">
                <div className="flex flex-col gap-2 ml-2">
                    <div className="text-2xl text-center font-bold">
                        { title }
                    </div>

                    <div className="flex flex-row flex-wrap justify-between items-center text-sm font-semibold italic mt-1">
                        <div className="w-2/3">
                            { company }
                        </div> 

                        <div className="mt-1">
                            <Badge text={dateRange} styles="italic" />
                        </div>
                    </div>

                    <div className="text-justify text-xs indent-8 my-2">
                        Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec qu
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WorkExperienceCard;