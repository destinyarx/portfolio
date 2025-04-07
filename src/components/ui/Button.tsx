import ArrowRight from './icons/ArrowRight';
import ArrowDown from './icons/ArrowDown';
import Linkedin from './icons/Linkedin';

type IconType = 'arrow-right' | 'arrow-down' | 'linkedin' | null;
type ButtonColorType = 'orange' | 'blue' | null;

const Button = ({ text, color = null, icon=null, url }: { text: string, color?: ButtonColorType, icon?: IconType, url?: string }) => {
    const svgIcons = {
        'arrow-right': <ArrowRight/>,
        'arrow-down': <ArrowDown/>,
        'linkedin': <Linkedin/>,
    };
    const buttonColorValues = {
        'orange': 'bg-gradient-to-r from-orange-400 via-orange-300 to-orange-500',
        'blue': 'bg-gradient-to-r from-stone-950 via-neutral-700 to-stone-900',
        'green': 'bg-gradient-to-r from-stone-950 via-neutral-700 to-stone-900',
    }
    const bgColor = color ? buttonColorValues[color] : 'bg-gradient-to-r from-stone-950 via-neutral-700 to-stone-900';

    return (
        <a 
            href={url} 
            target="_blank" 
            rel="noopener noreferrer"
            className={`${bgColor} inline-flex items-center gap-2 border-1 border-amber-50 text-white text-sm rounded-full py-2 px-4 cursor-pointer hover:opacity-90 transition-opacity`}
        >
            { text }
            {icon && svgIcons[icon]}
        </a>
    )
}

export default Button;