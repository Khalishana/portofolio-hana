"use client"
import { SkillData } from "@/constants";
import Image from "next/image";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import React from "react";
import 'swiper/css'

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
            {/* <a
              href="#my-skills"
              className="rounded-[20px] group relative bg-transparent px-5 border border-white py-3 text-lg text-white max-w-[200px] cursor-pointer"
            >
              My Skills
            </a>
            <a
              href="#my-projects"
              className="rounded-[20px] group relative bg-transparent px-5 border border-white py-3 text-lg text-white max-w-[200px] cursor-pointer"
            >
              My Projects
            </a> */}
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

      {/* Additional Sections like Contact Me or Projects */}
      <div id="my-projects" className="h-screen bg-cover bg-center">My Projects Section</div>
      <div id="contact-me" className="h-screen bg-cover bg-center">Contact Me Section</div>
    </main>
  );
}