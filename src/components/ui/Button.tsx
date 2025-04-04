import ArrowRight from './icons/ArrowRight';
import ArrowDown from './icons/ArrowDown';
import Linkedin from './icons/Linkedin';

type IconType = 'arrow-right' | 'arrow-down' | 'linkedin' | null;

const Button = ({ text, color = null, icon=null }: { text: string, color?: string|null, icon?: IconType }) => {
    const bgColor = color ? `bg-gradient-to-r from-${color}-400 to-${color}-500` : 'bg-gradient-to-r from-stone-950 via-neutral-700 to-stone-900';
    const svgIcons = {
        'arrow-right': <ArrowRight/>,
        'arrow-down': <ArrowDown/>,
        'linkedin': <Linkedin/>,
    };

    return (
        <div className={`${bgColor} inline-flex items-center gap-2 border-1 border-amber-50 text-white text-sm rounded-full py-2 px-4`}>
            { text }
            {icon && svgIcons[icon]}
        </div>
    )
}

export default Button;