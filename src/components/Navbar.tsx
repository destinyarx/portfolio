const Navbar = () => {
    return (
        <nav className="bg-gray-900 text-white p-4">
            <div className="container mx-auto flex justify-between">
                <div className="text-lg font-bold">My Portfolio</div>

                <div className="space-x-4">
                    <a href="#skills" className="hover:text-gray-400">Skills</a>
                    <a href="#work-experience" className="hover:text-gray-400">Work Experience</a>
                    <a href="#contact-me" className="hover:text-gray-400">Contact Me</a>
                    <a href="#contact-me" className="hover:text-gray-400">Contact Me</a>
                </div>
            </div>
      </nav>
    )
}

export default Navbar;