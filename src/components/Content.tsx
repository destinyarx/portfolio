import Button from './Button';

const Content = () => {
    return (
        <div className="h-[60vh] border-4 border-red-500">
            <div className="text-xl">
                This is the main Content

                <Button text="With Icon" icon="John"/>

            </div>
        </div>
    )
}

export default Content;