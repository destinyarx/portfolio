import Badge from './ui/Badge';
import waterStationImg from '../../public/water-station.png'
import entClinicImg from '../../public/ent-clinic.png'
import betterBuyImg from '../../public/better-buy.png'
import messengerBotImg from '../../public/n8n-messenger-bot.png'

interface Project {
    title: string,
    description: string,
    tags: string[],
    link: string,
    image: keyof typeof IMAGE_PATH
}

const IMAGE_PATH = {
    'water-station': waterStationImg,
    'ent-clinic': entClinicImg,
    'better-buy': betterBuyImg,
    'messenger-bot': messengerBotImg,
}

const ProjectInformation = ({project, onClick}: {project: Project, onClick?: () => void}) => {
    return (
            <div className="mx-3 md:mx-6 lg:mx-10" onClick={onClick} role="button">
                <div className="border-2 border-zinc-800 rounded-xl bg-gradient-to-r from-stone-950 via-neutral-700 to-stone-900 shadow-sm hover:opacity-65">
                    <div className="grid grid-cols-1 md:grid-cols-[60%_auto] lg:grid-cols-[75%_auto] gap-4 md:gap-5 lg:gap-6 p-3 md:p-4 lg:p-6">
                    
                        <div className="order-1 md:order-2 w-full md:w-64 lg:w-80 justify-self-stretch md:justify-self-end border-2 border-zinc-700 bg-neutral-800 rounded-xl overflow-hidden">
                            <img 
                                src={IMAGE_PATH[project.image]} 
                                alt="Project Image" 
                                className="w-full h-full object-cover"
                            />
                        </div>

                        <div className="order-2 md:order-1 flex flex-col">
                            <div className="font-bold text-xl md:text-2xl lg:text-3xl mb-2">
                                {project.title}
                            </div>

                            <div className="text-sm md:text-base mb-3">
                                {project.description}
                            </div>

                            <div className="flex flex-wrap gap-2 text-xs md:text-sm">
                                {project.tags.map((tag, index) => (
                                    <Badge key={index} text={tag} />
                                ))}
                            </div>
                        </div>

                    </div>
                </div>
            </div>

    )
}

export default ProjectInformation;