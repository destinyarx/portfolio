import Button from './ui/Button';

const Footer = () => {
    return (
        <div className="min-h-[5vh] flex flex-col flex-wrap justify-between text-center mt-20 relative"> 
            <div className="flex flex-col mb-10">            
                <div className="w-[50vw] mx-auto text-5xl text-zinc-50 font-bold">
                    Want to create something awesome?
                </div>

                <div className="mt-3">
                    <Button text="Connect with me on" icon="linkedin"/>
                </div>
            </div>

            <div className="absolute bottom-0 right-0 text-sm italic">
                © Copyright 2025 Gil Jeremy Ditablan. All rights Reserved.
            </div>
        </div>
    )
}

export default Footer;