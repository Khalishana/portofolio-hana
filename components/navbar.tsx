"use client"

import React, { useState } from "react";
import Image from "next/image";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="fixed top-0 z-[40] w-full h-[100px] bg-transparent flex justify-between items-center px-10 md:px-20">
            {/* Logo + Judul */}
            <div className="flex flex-row gap-3 items-center">
                <div className="relative flex-shrink-0">
                    <a href="#top">
                    <Image
                        src="/k.png"
                        alt="logo"
                        width={40}
                        height={40}
                        className="w-full h-full object-contain rounded-full"
                    />
                    </a>
                </div>

                <a href="#top" className="hidden md:block">
                    <h1 className="text-white text-[25px] font-semibold whitespace-nowrap">
                    Portofolio Hana
                    </h1>
                </a>
                </div>

            {/* Burger icon (mobile only) */}
            <div className="md:hidden">
                <button onClick={toggleMenu} className="text-white focus:outline-none">
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

            {/* Navigation links */}
            <div className={`
                ${isOpen ? "flex" : "hidden"} 
                absolute top-[100px] left-0 w-full flex-col items-end pr-5 bg-black/30 backdrop-blur-md py-4 
                md:static md:flex md:flex-row md:items-center md:justify-end md:bg-transparent md:backdrop-blur-none md:py-0 md:pr-0
                text-white text-lg gap-4 md:gap-10 transition-all duration-300
            `}>
                <a href="#my-skills" className="text-right md:text-left hover:text-purple-500 transition duration-300">
                    My Skills
                </a>
                <a href="#my-projects" className="text-right md:text-left hover:text-purple-500 transition duration-300">
                    My Projects
                </a>
                <a href="#experiences" className="text-right md:text-left hover:text-purple-500 transition duration-300">
                    Experiences
                </a>
                <a href="#contact-me" className="text-right md:text-left hover:text-purple-500 transition duration-300">
                    Contact Me
                </a>
            </div>
        </div>
    );
};

export default Navbar;
