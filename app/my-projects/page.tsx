import React from "react";
import Image from "next/image"; // Sesuaikan sesuai cara kamu mengimpor Image di Next.js atau framework lain

const MyProjects = () => {
  return (
    <div
      id="my-projects"
      className="h-auto bg-cover bg-center"
      style={{ backgroundImage: "url(/bg-3.jpg)" }}
    >
      <div className="h-auto bg-cover bg-center p-10">
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
              <h1 className="card-title text-xl font-semibold text-gray-800">
                Readme
              </h1>
              <p className="card-text text-gray-600 mt-2">
                Developed a book inventory website utilizing HTML, CSS,
                JavaScript, and the Python Django framework. The project focused
                on building a functional and responsive web application for
                managing and buying books.
              </p>
              <a
                href="https://readme.up.railway.app/"
                className="card-btn inline-block mt-4 text-purple-600 hover:text-purple-500 transition duration-300 font-medium"
              >
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
              <h1 className="card-title text-xl font-semibold text-gray-800">
                Marmut
              </h1>
              <p className="card-text text-gray-600 mt-2">
                Developed a song inventory website utilizing HTML, CSS,
                JavaScript, and the Python Django framework, with PostgreSQL for
                database management. The project centered on building a dynamic
                platform, implementing role-based access control to unlock
                features such as playlist management, song and podcast
                downloads, premium subscriptions, and payment processing.
              </p>
              <a
                href="https://web-production-8be4.up.railway.app/"
                className="card-btn inline-block mt-4 text-purple-600 hover:text-purple-500 transition duration-300 font-medium"
              >
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
              <h1 className="card-title text-xl font-semibold text-gray-800">
                ZenZone
              </h1>
              <p className="card-text text-gray-600 mt-2">
                Designed an interactive mental health mobile application
                prototype using Figma. The project emphasized creating a
                responsive and user-friendly prototype aimed at promoting mental
                health awareness and support. Developed some features included
                mental health community, consultations with doctors or
                psychologists, motivational content, and a panic button for
                immediate assistance.
              </p>
              <a
                href="https://www.figma.com/proto/LA5D4eppKAnqxgsbIe2mH9/TK-Template-4?page-id=15%3A3&node-id=217-1277&node-type=frame&viewport=408%2C608%2C0.13&t=gWaIkGsIQOInjPE4-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=217%3A1273&show-proto-sidebar=1"
                className="card-btn inline-block mt-4 text-purple-600 hover:text-purple-500 transition duration-300 font-medium"
              >
                View Details
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyProjects;