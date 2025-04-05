import ArrowRight from './icons/ArrowRight';
import ArrowDown from './icons/ArrowDown';
import Linkedin from './icons/Linkedin';

type IconType = 'arrow-right' | 'arrow-down' | 'linkedin' | null;
type ButtonColorType = 'orange' | 'blue' | null;

const Button = ({ text, color = null, icon=null }: { text: string, color?: ButtonColorType, icon?: IconType }) => {
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
        <div className={`${bgColor} inline-flex items-center gap-2 border-1 border-amber-50 text-white text-sm rounded-full py-2 px-4`}>
            { text }
            {icon && svgIcons[icon]}
        </div>
    )
}

export default Button;