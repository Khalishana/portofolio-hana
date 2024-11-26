import React from "react";
import Image from "next/image";

const MyProjects = () => {
  return (
    <div
      id="my-projects"
      className="h-auto bg-cover bg-center"
      style={{ backgroundImage: "url(/bg-3.jpg)" }}
    >
      <div className="h-auto bg-cover bg-center p-10">
        <div className="flex flex-col items-center">
          <h1 className="font-semibold text-white text-[30px] md:text-[50px] mb-8">
            My&nbsp;
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500">
              Projects
            </span>
          </h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-5">
          {[
            {
              title: "Readme",
              description:
                "Developed a book inventory website utilizing HTML, CSS, JavaScript, and the Python Django framework. The project focused on building a functional and responsive web application for managing and buying books.",
              image: "/readme.jpg",
              link: "https://readme.up.railway.app/",
            },
            {
              title: "Marmut",
              description:
                "Developed a song inventory website utilizing HTML, CSS, JavaScript, and the Python Django framework, with PostgreSQL for database management. Features include role-based access control, playlist management, premium subscriptions, and more.",
              image: "/marmut.jpg",
              link: "https://web-production-8be4.up.railway.app/",
            },
            {
              title: "ZenZone",
              description:
                "Designed an interactive mental health mobile application prototype using Figma. Features include mental health community, consultations, motivational content, and a panic button for immediate assistance.",
              image: "/zenzone.jpg",
              link: "https://www.figma.com/proto/LA5D4eppKAnqxgsbIe2mH9/TK-Template-4?page-id=15%3A3&node-id=217-1277&node-type=frame&viewport=408%2C608%2C0.13&t=gWaIkGsIQOInjPE4-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=217%3A1273&show-proto-sidebar=1",
            },
          ].map((project, index) => (
            <div
              key={index}
              className="bg-transparent border border-purple-500 rounded-lg shadow-lg p-6 backdrop-blur-md transition-transform hover:scale-105"
            >
              {/* Header */}
              <div className="relative h-48 w-full rounded-lg overflow-hidden mb-4">
                <Image
                  src={project.image}
                  alt={`${project.title} Thumbnail`}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-lg"
                />
              </div>

              {/* Content */}
              <div>
                <h2 className="text-xl font-semibold text-white mb-2">{project.title}</h2>
                <p className="text-sm text-gray-300 mb-4">{project.description}</p>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block text-sm font-medium bg-gradient-to-r from-purple-600 to-pink-600 text-white px-5 py-2 rounded-lg hover:from-pink-600 hover:to-purple-600 transition-colors duration-300"
                >
                  View Details →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MyProjects;