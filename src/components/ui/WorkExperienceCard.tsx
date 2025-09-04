import Badge from './Badge';
import ncmh from '../../../public/NCMH.png'
import avasia from '../../../public/avasia.png'
import tesda from '../../../public/tesda.png'


interface Work {
  title: string,
  company: string,
  dateRange: string,
  image: string
  description: string
}

const IMAGE_PATH = {
  'ncmh': ncmh,
  'avasia': avasia,
  'tesda': tesda,
}

const WorkExperienceCard = ({work}: {work: Work}) => {
    return (
      <div className="flex flex-col justify-center items-center w-full mx-auto max-w-md md:max-w-lg lg:w-[30vw] rounded-2xl px-3 md:px-4 lg:px-6 py-3 md:py-4 lg:py-6">
        {/* <div className="w-full sm:w-4/5 md:w-2/3 mx-auto p-2 md:p-3">
          <div className="bg-neutral-700 rounded-xl h-32 sm:h-40 md:h-48 lg:h-56 min-w-24 overflow-hidden">
          </div>
        </div> */}

        <div className="w-full md:w-64 lg:w-80 h-64 justify-self-stretch md:justify-self-end border-2 border-zinc-700 bg-neutral-800 rounded-xl overflow-hidden">
          <img 
              src={IMAGE_PATH[work.image]} 
              alt="Project Image" 
              className="w-full h-full object-cover"
          />
        </div>
      
        <div className="w-full text-left px-1 sm:px-2 md:px-3 py-2">
          <div className="flex flex-col justify-center gap-2 sm:gap-3">
            <div className="text-lg sm:text-lg md:text-xl lg:text-2xl font-bold text-center">
              {work.title}
            </div>
      
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-1 md:gap-2 text-sm md:text-base font-semibold italic mt-1">
              <div className="md:w-2/3">
                {work.company}
              </div>

              <div className="mt-1 md:mt-0">
                <Badge text={work.dateRange} styles="italic text-sm md:text-xs lg:text-[0.6rem]" />
              </div>
            </div>
      
            <div className="text-xs sm:text-sm leading-relaxed text-justify md:text-left indent-4 md:indent-8 my-2">
              {work.description}
            </div>
          </div>
        </div>
      </div>
      
    )
}

export default WorkExperienceCard;