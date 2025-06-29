"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

const projects = [
  {
    title: "BudidayaPlus",
    description:
      "BudidayaPlus is a web application built with TypeScript and designed with a mobile view interface to support catfish farming, covering everything from water quality monitoring to task management.",
    image: "/budidayaplus.jpg",
    link: "https://budidayaplus-fe-gray.vercel.app/",
  },
  {
    title: "Health Admission Analysis",
    description:
      "Explored patient data to uncover health trends and built predictive models using machine learning algorithms such as Decision Tree, Linear Regression, and K-Means Clustering.",
    image: "/kasdad.jpg",
    link: "https://ristek.link/DatSciFinalProject",
    github: "https://github.com/Khalishana/finalcode_kasdad",
  },
  {
    title: "ZenZone",
    description:
      "Mental health mobile app prototype with community, consultation, panic button.",
    image: "/zenzone.jpg",
    link: "https://www.figma.com/proto/LA5D4eppKAnqxgsbIe2mH9/TK-Template-4?page-id=15%3A3&node-id=217-1277&node-type=frame&viewport=408%2C608%2C0.13&t=gWaIkGsIQOInjPE4-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=217%3A1273&show-proto-sidebar=1",
  },
  {
    title: "Handling Catastrophic Forgetting in TTS with Interleaved Replay",
    description:
      "Mental health mobile app prototype with community, consultation, panic button.",
    image: "/pbl.jpg",
    link: "https://ristek.link/demo-pbl",
    github: "https://github.com/Khalishana/finalcode_pbl",
    paper:"https://ristek.link/paper-pbl",
  },
  {
    title: "Readme",
    description:
      "Book inventory website using Django & JS for managing and buying books.",
    image: "/readme.jpg",
    link: "https://readme.up.railway.app/",
  },
  {
    title: "Marmut",
    description:
      "Song inventory with role-based access, PostgreSQL DB, playlist, and premium.",
    image: "/marmut.jpg",
    link: "https://web-production-8be4.up.railway.app/",
  },
];

const ProjectsPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-950 to-pink-800 p-10">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-bold text-white text-center mb-12">
          All{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
            Projects
          </span>
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white/10 border border-purple-400 rounded-xl p-6 shadow-xl backdrop-blur-md hover:scale-105 transition-transform"
            >
              {/* Gambar */}
              <div className="relative h-48 w-full mb-4 rounded-lg overflow-hidden">
                <Image
                  src={project.image}
                  alt={`${project.title} Thumbnail`}
                  fill
                  className="object-cover rounded-lg"
                />
              </div>

              {/* Judul dan Deskripsi */}
              <h2 className="text-xl font-bold text-white mb-2">
                {project.title}
              </h2>
              <p className="text-gray-200 text-sm mb-4">{project.description}</p>

              {/* Tombol Visit dan GitHub */}
              <div className="flex items-center gap-3">
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-medium bg-gradient-to-r from-purple-600 to-pink-600 text-white px-4 py-2 rounded-md hover:from-pink-600 hover:to-purple-600 transition"
                >
                  Visit Project →
                </a>

                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub Repository"
                    className="transition-transform duration-300 hover:scale-110"
                  >
                    <Image
                      src="/github-white-icon.webp"
                      alt="GitHub"
                      width={32}
                      height={32}
                      className="w-8 h-8 md:w-9 md:h-9"
                    />
                  </a>
                )}

                {project.paper && (
                  <a
                    href={project.paper}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Paper Link"
                    className="transition-transform duration-300 hover:scale-110"
                  >
                    <Image
                      src="/paper.png"
                      alt="GitHub"
                      width={32}
                      height={32}
                      className="w-8 h-8 md:w-9 md:h-9"
                    />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Back to Home */}
        <div className="mt-16 text-center">
          <Link
            href="/"
            className="text-sm text-white underline hover:text-pink-300"
          >
            ← Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProjectsPage;
