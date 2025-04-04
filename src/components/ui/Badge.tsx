const Badge  = ({ text, styles=null }: { text: string, styles?: string|null }) => {
    return (
        <div className={`inline-block border rounded-full text-xs text-gray-400 p-1 ${styles && styles}`}>
            { text }
        </div>
    )
}

export default Badge;