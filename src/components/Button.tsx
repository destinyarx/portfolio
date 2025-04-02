const Button = ({ text, icon = null }: { text: string, icon: string|null }) => {
    return (
        <div className="inline-block border-1 border-amber-50 bg-orange-600 text-white text-sm rounded-full py-2 px-4">
            { text }
            { icon && <span> { icon } </span>}
        </div>
    )
}

export default Button;