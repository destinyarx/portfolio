import Button from './ui/Button';
import { useState, useEffect } from 'react';

const textList = [
    "I am AlphaQuadrant, a full stack developer, leveraging PHP and JavaScript frameworks.",
    "Leveraging PHP and JavaScript frameworks to create dynamic solutions.",
    "Always learning, always improving. Embracing new technologies in web development.",
    "Dedicated to mastering full-stack development, from front-end to back-end.",
    "Building the web of tomorrow, today, with cutting-edge technologies.",
    "Empowering businesses with custom-built web applications.",
    "Transforming ideas into interactive web experiences.",
    "Turning ideas into functional, user-friendly web applications.",
    "Building seamless digital experiences, one line of code at a time.",
    "Creating user-centric web applications with performance and design in mind.",
    "Full-stack developer with a passion for building scalable, efficient web apps.",
    "Constantly evolving and grinding through the latest trends in web development.",
    "Committed to learning and growing in every aspect of web development.",
    "Pushing boundaries, exploring new frameworks, and continuously enhancing my skills.",
    "Web development isn't just my career—it's my passion, and I'm always learning.",
    "Focused on crafting modern, responsive websites with a deep understanding of PHP and JavaScript.",
    "I code, I build, I grow—dedicated to mastering full-stack development."
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
        <div className="min-h-[92vh]">
            <div className="flex flex-col">
                <div className="flex justify-center my-10">
                    <div className="w-45 h-45 rounded-full bg-[#212121] shadow-[15px_15px_30px_#191919,_-15px_-15px_30px_#3C3C3C] mt-10">
                    </div>
                </div>

                <div className={`text-4xl font-semibold mx-10 my-10 transition-opacity duration-1000 ease-in-out ${ isFadingOut ? "opacity-0" : "opacity-100" }`}>
                    {currentText}
                    <span className="inline-block w-[2px] h-[1em] bg-white animate-[blink_1s_infinite]"></span>
                </div>

                <div className="flex flex-row justify-center gap-4">
                    <Button text="Download CV" icon="arrow-down" color="orange"/>
                    <Button text="Connect with me on" icon="linkedin" url="https://www.linkedin.com/in/iamgiljeremy/"/>
                </div>
            </div>
        </div>
    );
}

export default Content;