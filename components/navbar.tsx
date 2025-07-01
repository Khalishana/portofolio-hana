"use client"

import React, {useState} from "react";
import Image from "next/image";

const Navbar = () => {
    
    const [isOpen, setIsOpen] = useState(false);

    const toogleMenu = () => {
        setIsOpen(!isOpen);
    };

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
            </div>

            {/* Hamburger Icon for Mobile */}
            <div className="md:hidden">
                <button onClick={toogleMenu} className="text-white focus:outline-none">
                    <svg
                        className="w-8 h-8"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M4 6h16M4 12h16m-7 6h7"
                        ></path>
                    </svg>
                </button>
            </div>

            {/* Navigation Links */}
            <div className={`flex gap-5 md:flex flex-row gap-10 mb-2 text-white text-lg ${isOpen ? "block" : "hidden"} md:block`}>
                <a href="#my-skills" className="hover:text-purple-500 transition duration-300">
                    My Skills
                </a>
                <a href="#my-projects" className="hover:text-purple-500 transition duration-300">
                    My Projects
                </a>
                <a href="#experiences" className="hover:text-purple-500 transition duration-300">
                    Experiences
                </a>
                <a href="#contact-me" className="hover:text-purple-500 transition duration-300">
                    Contact Me
                </a>
            </div>
        </div>
    );
};

export default Navbar;