import Button from './ui/Button';
import { useState, useEffect } from 'react';
import avatar from '../../public/avatar-no-username.png';
import ArrowDown from '../components/ui/icons/ArrowDown';

const textList = [
    "I am AlphaQuadrant, a full-stack developer proficient in JavaScript and PHP frameworks, leveraging AI integration and automation to streamline processes and drive innovation.",
    "Committed to learning and growing in every aspect of web development.",
    "Pushing boundaries, exploring new frameworks, and continuously enhancing my skills.",
    "I code, I build, I grow—dedicated to mastering full-stack development.",
    "Transforming ideas into interactive web experiences.",
    "Turning ideas into functional, user-friendly web applications.",
    "Creating user-centric web applications with performance and design in mind.",
    "Full-stack developer with a passion for building scalable, efficient web apps.",
    "Constantly evolving and grinding through the latest trends in web development.",
];
  

const Content = () => {
    const [currentText, setCurrentText] = useState('');
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isTyping, setIsTyping] = useState(true);
    const [isFadingOut, setIsFadingOut] = useState(false);

    useEffect(() => {
        let timeout: ReturnType<typeof setTimeout>;
        
        if (isTyping && currentText.length < textList[currentIndex].length) {
            timeout = setTimeout(() => {
                setCurrentText(textList[currentIndex].slice(0, currentText.length + 1));
            }, 50); // Typing speed
        } else if (isTyping) {
            // Finished typing, wait before starting to fade
            timeout = setTimeout(() => {
                setIsTyping(false);
                setIsFadingOut(true);
            }, 2000); // Wait 2 seconds before fading
        } else if (isFadingOut) {
            // Start fading out
            timeout = setTimeout(() => {
                setCurrentIndex((prev) => (prev + 1) % textList.length);
                setCurrentText('');
                setIsTyping(true);
                setIsFadingOut(false);
            }, 1000); // Fade duration
        }

        return () => clearTimeout(timeout);
    }, [currentText, currentIndex, isTyping, isFadingOut]);

    return (
        <div className="h-auto">
            <div className="flex flex-col">
                <div className="flex justify-center items-center mt-10">
                    <div className="w-50 h-50 rounded-full bg-[#212121] shadow-[15px_15px_30px_#191919,_-15px_-15px_30px_#3C3C3C] mt-10 overflow-hidden flex justify-center items-center">
                        <img src={avatar} alt="Profile Avatar"  className="w-40 h-40"/>
                    </div>
                </div>

                <div className="flex flex-row mx-auto text-xl italic text-gray-400 mt-2 mb-10">
                    <div className="text-green-600">{'<code>'}</div>
                    <div>AlphaQuadrant</div>
                    <div className="text-green-600">{'</code>'}</div>
                </div>



                <div className={`min-h-[14vh] text-4xl font-semibold mx-10 transition-opacity duration-1000 ease-in-out ${ isFadingOut ? "opacity-0" : "opacity-100" }`}>
                    {currentText}
                    <span className="inline-block w-[2px] h-[1em] bg-white animate-[blink_1s_infinite]"></span>
                </div>

                <div className="flex flex-row justify-center gap-4 text-xs sm:text-[0.6rem] md:text-xs lg:text-base">
                    <a
                        href="/portfolio/Gil-Jeremy-Ditablan_CV.pdf"
                        download="Gil Jeremy Ditablan - CV.pdf"
                        className="flex flex-row items-center gap-2 border border-amber-50 text-white rounded-full py-2 px-4 cursor-pointer hover:opacity-90 transition-opacity bg-gradient-to-r from-orange-400 via-orange-300 to-orange-500"
                    >
                        Download Resume
                        <ArrowDown />
                    </a>

                    <Button
                        text="Connect with me on"
                        icon="linkedin"
                        url="https://www.linkedin.com/in/iamgiljeremy/"
                    />
                </div>

            </div>
        </div>
    );
}

export default Content;