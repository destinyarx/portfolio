import { useState } from 'react';

const Navbar = () => {
    const [selectedSection, setSelectedSection] = useState<string>('About');
    
    const sections = [
        { title: 'About', path: '/' },
        { title: 'Experience', path: '/' },
        { title: 'Skills', path: '/' },
        { title: 'Projects', path: '/' },
    ];

    return (
        <div className="relative">
            <nav className="w-full bg-gradient-to-r from-stone-950 via-neutral-800 to-stone-900 text-white py-4">
                <div className="flex justify-between px-1">
                    <div className="text-lg font-bold">My Portfolio</div>

                    <div className="space-x-6 text-lg font-extrabold">
                        {sections.map((section, index) => (
                            <a 
                                key={index} 
                                href={section.path} 
                                className={`hover:text-gray-400 transition-all duration-300 ${
                                    selectedSection === section.title 
                                    ? 'text-2xl' 
                                    : 'text-lg'
                                }`}
                                onClick={(e) => {
                                    e.preventDefault();
                                    setSelectedSection(section.title);
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