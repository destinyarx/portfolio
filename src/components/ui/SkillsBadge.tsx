const SkillsBadge = ({title, size = null, children}: {title:string, size?: string|null, children?: React.ReactNode}) => {
    const [first, second] = title.split(' ');

    return (
        <div className="rounded-full">
          <div className="inline-block border-2 border-slate-400 bg-slate-800 rounded-lg p-1 hover:bg-gradient-to-r from-slate-700 via-slate-600 to-slate-800 hover:p-2">
            {children}
            <div className={`text-gray-300 ${second ? '-mt-1' : 'mt-1'} ${size ?? 'text-xs'}`}>
                {second ? (
                    <span>
                        {first}<br/>
                        <span className="mt-[-0.25rem]">{second}</span>
                    </span>
                ) : title}
            </div>

          </div>
        </div>
    );
}

export default SkillsBadge;