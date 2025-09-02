import Badge from './Badge';

const WorkExperienceCard = ({title, company, dateRange}: {title: string, company: string, dateRange: string}) => {
    return (
        <div className="flex flex-col items-center w-full max-w-md md:max-w-lg lg:w-[30vw] rounded-2xl px-3 md:px-4 lg:px-6 py-3 md:py-4 lg:py-6">
        {/* IMAGE / PREVIEW */}
        <div className="w-full sm:w-4/5 md:w-2/3 mx-auto p-2 md:p-3">
          <div className="bg-neutral-700 rounded-xl h-32 sm:h-40 md:h-48 lg:h-56 min-w-24 overflow-hidden">
            {/* put <img className="w-full h-full object-cover" /> here if needed */}
          </div>
        </div>
      
        {/* TEXT CONTENT */}
        <div className="w-full text-left px-1 sm:px-2 md:px-3 py-2">
          <div className="flex flex-col gap-2 sm:gap-3">
            <div className="text-lg sm:text-lg md:text-xl lg:text-2xl font-bold text-center">
              {title}
            </div>
      
            {/* COMPANY + DATE */}
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-1 md:gap-2 text-sm md:text-base font-semibold italic mt-1">
              <div className="md:w-2/3">
                {company}
              </div>

              <div className="mt-1 md:mt-0">
                <Badge text={dateRange} styles="italic text-sm md:text-xs lg:text-[0.6rem]" />
              </div>
            </div>
      
            {/* DESCRIPTION */}
            <div className="text-xs sm:text-sm leading-relaxed text-justify md:text-left indent-4 md:indent-8 my-2">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec qu
            </div>
          </div>
        </div>
      </div>
      
    )
}

export default WorkExperienceCard;