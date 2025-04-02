const SkillsBadge = ({title, children}: {title:string, children?: React.ReactNode}) => {
    return (
        <div className="rounded-full">
          <div className="inline-block border-2 border-slate-400 bg-slate-800 rounded-lg p-1">
            {children}
            
            <div className="text-xs text-gray-300">
                {title}
            </div>
          </div>
        </div>
    );
}

export default SkillsBadge;