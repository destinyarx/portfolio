const Button = ({ text, color=null, icon=null }: { text: string, color?: string|null, icon?: string|null }) => {
    return (
        <div className={`inline-block items-center w-auto border-1 border-amber-50 text-white text-sm rounded-full py-2 px-4 ${color || ''}`}>
            { text }
            {  icon && <span> </span> }
        </div>
    )
}

export default Button;