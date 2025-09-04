import Button from './ui/Button';

const Footer = () => {
    return (
        <div className="min-h-[5vh] flex flex-col flex-wrap justify-between text-center mt-20 relative"> 
            <div className="flex flex-col mb-10">            
                <div className="w-[50vw] mx-auto text-zinc-50 font-bold text-base sm:text-xl md:text-3xl lg:text-5xl">
                    Want to create something awesome?
                </div>

                <div className="mt-3 text-base">
                    <Button text="Connect with me on" icon="linkedin" url="https://www.linkedin.com/in/iamgiljeremy/"/>
                </div>
            </div>

            <div className="absolute bottom-0 right-0 italic text-[0.6rem] sm:text-base lg:text-sm">
                © Copyright 2025 Gil Jeremy Ditablan. All rights Reserved.
            </div>
        </div>
    )
}

export default Footer;