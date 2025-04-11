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
    const [selectedSection, setSelectedSection] = useState<string>('About');

    return (
        <div className="relative">
            <nav className="w-full bg-gradient-to-r from-stone-950 via-neutral-800 to-stone-900 text-white py-4">
                <div className="flex justify-between px-5">
                    <div className="text-lg font-bold">Gil Jeremy Ditablan</div>

                    <div className="space-x-6 text-lg font-extrabold">
                        {sections.map((section, index) => (
                            <a 
                                key={index} 
                                href="#" 
                                className={`hover:text-gray-400 transition-all duration-300 ${
                                    selectedSection === section.title 
                                    ? 'text-2xl' 
                                    : 'text-lg'
                                }`}
                                onClick={(e) => {
                                    e.preventDefault();
                                    setSelectedSection(section.title);
                                    if (scrollToSection) {
                                        scrollToSection(section.ref);
                                    }
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