"use client"
import { SkillData } from "@/constants";
import Image from "next/image";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import React from "react";
import 'swiper/css';
import ContactMe from "./contact-me/page";

export default function Home() {
  return (
    <main className="w-screen h-auto relative">
      {/* Main Section */}
      <div
        className="flex items-center w-full h-screen bg-cover bg-center"
        style={{ backgroundImage: "url(/main-bg.webp)" }}
      >
        <div className="pl-20 md:pl-40 pb-56 md:pb-20 flex flex-col gap-5 z-[10] ">
          <h1 className="text-[50px] text-white font-semibold">
            Welcome to Khalisha Hana's <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-red-500 block md:inline">
              Portofolio Website
            </span>
          </h1>
          <p className="text-gray-200 text-xl hidden md:block">A portofolio website by Khalisha Hana, penultimate year Computer Science Student at University of Indonesia</p>
          <div className="flex-col md:flex-row hidden md:flex gap-5">
            <a
              href="https://drive.google.com/file/d/1N8YXAL1wmZmUNLqoIr4QzcLSLTHHJxBF/view?usp=sharing"
              className="rounded-[20px] group relative bg-transparent px-5 border border-white py-3 text-lg text-white max-w-[200px] cursor-pointer"
            >
              See My CV
            </a>
            <a
              href="#contact-me"
              className="rounded-[20px] group relative bg-transparent px-5 border border-white py-3 text-lg text-white max-w-[200px] cursor-pointer"
            >
              Contact Me
            </a>
          </div>
        </div>
      </div>

      {/* My Skills Section */}
      <div id="my-skills" className="h-screen bg-cover bg-center relative">
        <div className="flex items-center justify-center h-full bg-cover bg-center"
          style={{ backgroundImage: "url(/bg-2.jpg)" }}>
          <div className="flex flex-col gap-20 max-w-[80%] text-center items-center">
            <div className="flex flex-col items-center gap-4">
              <h1 className="font-semibold text-white text-[50px]">
                Experienced&nbsp;
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-red-500 block md:inline">
                  Technologies
                </span>
              </h1>
            </div>

            {/* Swiper Component */}
            <Swiper
              slidesPerView={5}
              loop={true}
              autoplay={{ delay: 0, disableOnInteraction: false }}
              speed={5000}
              modules={[Autoplay]}
              className="max-w-[80%]"
            >
              {SkillData.map((skill, index) => (
                <SwiperSlide key={index}>
                  <Image
                    src={skill.Image}
                    alt={skill.name}
                    width={skill.width}
                    height={skill.height}
                  />
                </SwiperSlide>
              ))}
            </Swiper>

            {/* Reverse Swiper */}
            <Swiper
              slidesPerView={5}
              loop={true}
              autoplay={{ delay: 0, disableOnInteraction: false, reverseDirection: true }}
              speed={5000}
              modules={[Autoplay]}
              className="max-w-[80%]"
            >
              {SkillData.map((skill, index) => (
                <SwiperSlide key={index}>
                  <Image
                    src={skill.Image}
                    alt={skill.name}
                    width={skill.width}
                    height={skill.height}
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>

      {/* My Projects Section */}
      <div id="my-projects" className="h-auto bg-cover bg-center"/>
  <div
    className="flex flex-col items-center justify-center bg-cover bg-center"
    style={{ backgroundImage: "url(/bg-3.jpg)" }}
  >
     {/* My Projects Section */}
     <div id="my-projects" className="h-auto bg-cover bg-center p-10">
                <div className="flex flex-col items-center">
                    <h1 className="font-semibold text-white text-[50px] mb-8">
                        My&nbsp;
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-red-500">
                            Projects
                        </span>
                    </h1>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-5">
                    {/* Card 1 */}
                    <div className="card-wrap bg-white rounded-lg shadow-lg overflow-hidden transition-transform duration-300 transform hover:scale-105 hover:shadow-2xl p-5">
                        <div className="card-header bg-[#d8b4fe] p-4 rounded-t-lg">
                            <Image
                                src="/readme.jpg" 
                                alt="Project Overview"
                                width={400}
                                height={200}
                                className="w-full object-cover rounded-t-lg"
                            />
                        </div>
                        <div className="card-content p-5">
                            <h1 className="card-title text-xl font-semibold text-gray-800">Readme</h1>
                            <p className="card-text text-gray-600 mt-2">
                                Developed a book inventory website utilizing HTML, CSS,
                                JavaScript, and the Python Django framework. The project focused on building a functional and responsive web application for managing and buying books.
                            </p>
                            <a href="https://readme.up.railway.app/" className="card-btn inline-block mt-4 text-purple-600 hover:text-purple-500 transition duration-300 font-medium">
                                View Details
                            </a>
                        </div>
                    </div>

                    {/* Card 2 */}
                    <div className="card-wrap bg-white rounded-lg shadow-lg overflow-hidden transition-transform duration-300 transform hover:scale-105 hover:shadow-2xl p-5">
                        <div className="card-header bg-[#d8b4fe] p-4 rounded-t-lg">
                            <Image
                                src="/marmut.jpg" 
                                alt="Project Overview"
                                width={400}
                                height={200}
                                className="w-full object-cover rounded-t-lg"
                            />
                        </div>
                        <div className="card-content p-5">
                            <h1 className="card-title text-xl font-semibold text-gray-800">Marmut</h1>
                            <p className="card-text text-gray-600 mt-2">
                            Developed a song inventory website utilizing HTML, CSS, JavaScript, and the
                            Python Django framework, with PostgreSQL for database management. The project centered on building a dynamic platform, implementing
                            role-based access control to unlock features such as playlist management, song and podcast downloads, premium subscriptions, and
                            payment processing.
                            </p>
                            <a href="https://web-production-8be4.up.railway.app/" className="card-btn inline-block mt-4 text-purple-600 hover:text-purple-500 transition duration-300 font-medium">
                                View Details
                            </a>
                        </div>
                    </div>

                    {/* Card 3 */}
                    <div className="card-wrap bg-white rounded-lg shadow-lg overflow-hidden transition-transform duration-300 transform hover:scale-105 hover:shadow-2xl p-5">
                        <div className="card-header bg-[#d8b4fe] p-4 rounded-t-lg">
                            <Image
                                src="/zenzone.jpg" 
                                alt="Project Overview"
                                width={400}
                                height={200}
                                className="w-full object-cover rounded-t-lg"
                            />
                        </div>
                        <div className="card-content p-5">
                            <h1 className="card-title text-xl font-semibold text-gray-800">ZenZone</h1>
                            <p className="card-text text-gray-600 mt-2">
                            Designed an interactive mental health mobile application prototype using Figma. 
                            The project emphasized creating a responsive and user-friendly prototype aimed at promoting mental health awareness and
                            support. Developed some features included mental health community, consultations with doctors or psychologists, motivational content,
                            and a panic button for immediate assistance.
                            </p>
                            <a href="https://www.figma.com/proto/LA5D4eppKAnqxgsbIe2mH9/TK-Template-4?page-id=15%3A3&node-id=217-1277&node-type=frame&viewport=408%2C608%2C0.13&t=gWaIkGsIQOInjPE4-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=217%3A1273&show-proto-sidebar=1" className="card-btn inline-block mt-4 text-purple-600 hover:text-purple-500 transition duration-300 font-medium">
                                View Details
                            </a>
                        </div>
                    </div>
                </div>
              </div>
            </div> 

      <div id="contact-me" className="h-screen bg-cover bg-center">
      <ContactMe />
      </div>

     {/* Footer */}
     <footer className="bg-purple-600 text-white py-5 rounded-t-[40px] -mt-1">
        <div className="max-w-[80%] mx-auto text-center">
          <h2 className="text-lg font-semibold">Contact Me</h2>
          <p className="mt-2">Email: khalisha.hana10@gmail.com</p>
          <p>Phone Number: +62 859-3913-8227</p>

          <div className="flex justify-center mt-4 space-x-4">
            <a href="https://www.instagram.com/khalishana10/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <img src="/instagram.svg" alt="Instagram" className="w-8 h-8 hover:opacity-80" />
            </a>
            <a href="https://www.linkedin.com/in/khalisha-hana/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <img src="/linkedin.png" alt="LinkedIn" className="w-8 h-8 hover:opacity-80" />
            </a>
            <a href="https://github.com/Khalishana" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <img src="/github.png" alt="GitHub" className="w-8 h-8 hover:opacity-80" />
            </a>
          </div>

          {/* Copyright Section */}
          <div className="mt-5 border-t border-white pt-3">
            <p className="text-sm">© 2024 Khalisha Hana. All rights reserved.</p>
          </div>
        </div>
      </footer>

    </main>
  );
}