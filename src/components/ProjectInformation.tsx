import Badge from './ui/Badge';

const ProjectInformation = ({title, description, tags}: {title:string, description: string, tags: string[]}) => {
    return (
        <div className="border-3 border-zinc-800 rounded-xl mx-20 bg-gradient-to-r from-stone-950 via-neutral-700 to-stone-900">
            <div className="flex flex-row justify-between p-2">
                {/* project title, description, and tags */}
                <div className="flex flex-col">
                    <div className="font-bold text-2xl mb-2">
                        { title }
                    </div>

                    <div className="text-sm mb-3">
                        { description && description }
                    </div>

                    <div className="flex flex-row gap-2 text-xs">
                        {tags.map((tag, index) => (
                            <Badge key={index} text={tag}/>
                        ))}
                    </div>
                </div>

                <div className="min-w-32 border-2 border-zinc-700 bg-neutral-800 rounded-xl mr-1 p-2">
                    
                </div>
            </div>
        </div>
    )
}

export default ProjectInformation;