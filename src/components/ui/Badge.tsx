const Badge  = ({ text }: { text: string }) => {
    return (
        <div className="inline-block border rounded-full text-xs text-gray-400 p-1">
            { text }
        </div>
    )
}

export default Badge;