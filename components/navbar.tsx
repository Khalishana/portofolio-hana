import React from "react";
import Image from "next/image";

const Navbar = () => {
    return (
        <div className="fixed top-0 z-[40] w-full h-[100px] bg-transparent flex justify-between items-center px-10 md:px-20">
            <div className="flex flex-row gap-3 items-center">
                <div className="relative">
                <a href="#top"> {/* Link to top */}
                        <Image
                            src="/k.png"
                            alt='logo'
                            width={40}
                            height={40}
                            className="w-full h-full object-contain rounded-full"
                        />
                    </a>
                </div>
                <a href="#top">
                    <h1 className="text-white text-[25px] font-semibold">Portofolio Hana</h1>
                </a>
                {/* <h1 className="text-white text-[25px] font-semibold">Portofolio Hana</h1> */}
            </div>

            {/* Navigation Links */}
            <div className="flex flex-row gap-10 mb-2 text-white text-lg">
                <a href="#my-skills" className="hover:text-purple-500 transition duration-300">
                    My Skills
                </a>
                <a href="#my-projects" className="hover:text-purple-500 transition duration-300">
                    My Projects
                </a>
                <a href="#contact-me" className="hover:text-purple-500 transition duration-300">
                    Contact Me
                </a>
            </div>
        </div>
    )
}

export default Navbar;