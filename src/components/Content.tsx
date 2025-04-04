import Button from './ui/Button';

const Content = () => {
    return (
        <div className="min-h-[92vh]">
            <div className="flex flex-col">
                <div className="flex justify-center my-10">
                    <div className="w-38 h-38 rounded-full bg-[#212121] shadow-[15px_15px_30px_#191919,_-15px_-15px_30px_#3C3C3C]">
                    </div>
                </div>

                <div className="text-5xl mb-5">
                    Designing Dreams, Shipping Stories: <br/>
                    A Human-Centered Odyssey
                </div>


                <div className="flex flex-row justify-center gap-4">
                    <div> <Button text="Download CV" icon="arrow-down" color="orange"/> </div>

                    <div> <Button text="Contact Me"/> </div>
                </div>
            </div>
        </div>
    )
}

export default Content;