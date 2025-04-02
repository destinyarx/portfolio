const Navbar = () => {
    return (
        <div>
            <nav className="w-full bg-gray-900 text-white py-4">
                <div className="flex justify-between px-1">
                    <div className="text-lg font-bold">My Portfolio</div>

                    <div className="space-x-4">
                        <a href="#skills" className="hover:text-gray-400">About</a>
                        <a href="#work-experience" className="hover:text-gray-400">Work Experience</a>
                        <a href="#skills" className="hover:text-gray-400">Skills</a>
                        <a href="#skills" className="hover:text-gray-400">Projects</a>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar;