"use client";
import React from "react";
import "swiper/css";
import ContactMe from "./contact-me/page";
import MyProjects from "./my-projects/page";
import MySkills from "./my-skills/page";
import "./page.css";
import Image from "next/image";

export default function Home() {
  return (
    <main className="w-screen min-h-screen relative">
      {/* Main Section */}
      <div
        className="flex items-center w-full min-h-screen bg-cover bg-center"
        style={{ backgroundImage: "url(/main-bg.webp)" }}
      >
        <div className="pl-20 md:pl-40 pb-56 md:pb-20 flex flex-col gap-5 z-[10] pt-20">
          <h1 className="text-[30px] md:text-[50px] text-white font-semibold fade-in">
            Welcome to Khalisha Hana&apos;s <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-red-500 block md:inline">
              Portofolio Website
            </span>
          </h1>
          <p
            className="text-gray-200 text-sm md:text-xl fade-in"
            style={{ animationDelay: "0.5s" }}
          >
            A portofolio website by Khalisha Hana, penultimate year Computer
            Science Student at University of Indonesia
          </p>
          <div
            className="flex gap-4 flex-row fade-in"
            style={{ animationDelay: "1s" }}
          >
            <a
              href="https://univindonesia-my.sharepoint.com/:b:/g/personal/khalisha_hana_office_ui_ac_id/EZh6vpwOorxJgVg8BpWGItEBoQdZq1n6LU583D8A88mw9w?e=0aZBha"
              className="rounded-[20px] group relative bg-transparent px-3 py-2 md:px-5 md:py-3 border border-white text-sm md:text-lg text-white max-w-[150px] md:max-w-[200px] cursor-pointer"
            >
              See My CV
            </a>
            <a
              href="#contact-me"
              className="rounded-[20px] group relative bg-transparent px-3 py-2 md:px-5 md:py-3 border border-white text-sm md:text-lg text-white max-w-[150px] md:max-w-[200px] cursor-pointer"
            >
              Contact Me
            </a>
          </div>

          {/* Social Media Icons */}
          <div className="flex items-center gap-4 ml-4 fade-in" style={{ animationDelay: "1.75s" }}>
            <a
              href="https://www.instagram.com/khalishana10/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="transition-transform duration-300 hover:scale-110"
            >
              <Image
                src="/instagram.svg"
                alt="Instagram"
                className="w-6 h-6 md:w-8 md:h-8"
                width={32}
                height={32}
              />
            </a>
            <a
              href="https://www.linkedin.com/in/khalisha-hana/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="transition-transform duration-300 hover:scale-110"
            >
              <Image
                src="/linkedin-app-white-icon.webp"
                alt="LinkedIn"
                className="w-6 h-6 md:w-8 md:h-8"
                width={32}
                height={32}
              />
            </a>
            <a
              href="https://github.com/Khalishana"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="transition-transform duration-300 hover:scale-110"
            >
              <Image
                src="/github-white-icon.webp"
                alt="GitHub"
                className="w-6 h-6 md:w-8 md:h-8"
                width={32}
                height={32}
              />
            </a>
          </div>
        </div>
      </div>

      {/* My Skills Section */}
      <div id="my-skills" className="min-h-screen bg-cover bg-center relative">
        <MySkills />
      </div>

      {/* My Projects Section */}
      <div id="my-projects" className="bg-cover bg-center">
        <MyProjects />
      </div>

      {/* Contact Me Section */}
      <div id="contact-me" className="min-h-screen bg-cover bg-center">
        <ContactMe />
      </div>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-purple-700 to-pink-500 text-white py-4 md:py-8 overflow-hidden">
        <div className="max-w-full md:max-w-[80%] mx-auto text-center">
          <h2 className="text-lg font-semibold mb-2">Get to Know More About Me</h2>
          <p className="mb-1">Email: khalisha.hana10@gmail.com</p>
          <p>Phone Number: +62 859-3913-8227</p>

          {/* Copyright Section */}
          <div className="mt-6 border-t border-white pt-4">
            <p className="text-sm">© 2024 Khalisha Hana. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </main>
  );
}