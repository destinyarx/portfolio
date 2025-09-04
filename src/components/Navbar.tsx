import { useState } from 'react';
import { RefObject } from 'react';

interface NavbarProps {
    sections: { 
        title: string; 
        ref: RefObject<HTMLDivElement | null> 
    }[];  
    scrollToSection?: (ref: RefObject<HTMLDivElement|null >) => void;
}

const Navbar = ({ sections, scrollToSection }: NavbarProps) => {
    const [selectedSection, setSelectedSection] = useState<string>('');

    return (
        <div className="relative">
            <nav className="w-full bg-gradient-to-r from-stone-950 via-neutral-800 to-stone-900 text-white py-4">
            <div className="flex w-full items-center justify-between px-5">
                <div className="font-bold text-[0.35rem] md:text-lg">Gil Jeremy Ditablan</div>

                <div className="flex items-center gap-6 text-lg">
                    {sections.map((section, index) => (
                    <a
                        key={index}
                        href="#"
                        className={`hover:text-gray-400 transition-all duration-300 text-[0.4rem] md:text-lg ${
                        selectedSection === section.title
                            ? 'font-extrabold text-sky-600'
                            : 'font-semibold'
                        }`}
                        onClick={(e) => {
                        e.preventDefault();
                        setSelectedSection(section.title);
                        scrollToSection?.(section.ref);
                        }}
                    >
                        {section.title}
                    </a>
                    ))}
                </div>
                </div>
            </nav>

            <div className="absolute left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-gray-300 to-transparent top-full" />
        </div>
    )
}

export default Navbar;