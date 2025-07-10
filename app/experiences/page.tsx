import React from "react";
import Image from "next/image";

const Experiences = () => {
  const experiences = [
    {
      title: "Digistar Class Intern 2025 by Telkom Indonesia",
      date: "Feb 2025 – Jul 2025",
      description:
        "Selected as 1 of 253 mentees among 9,415 registrants. Assigned to work under Netmonk development team, a startup incubated by PT Telkom Indonesia in order to provide a more robust and easy-to-use network monitoring solution, as a data scientist intern. Contributed to the migration of Netmonk's data dashboard from Grafana to Looker Studio and also analyzing database query for Netmonk Prime and Netmonk Hi products to improve system performance and efficiency.",
      image: "/townhall.jpg",
      skills: ["Data Analytics", "Looker Studio", "PostgreSQL"],
    },
    {
      title: "Teaching Assistant of Calculus 2",
      date: "Jan 2024 – Jun 2024",
      description:
        "As a member of the teaching assistant team for Calculus 2 (CSCM601213) course at the Faculty of Computer Science, University of Indonesia, alongside 9 other teaching assistants, responsible for assists in grading and providing assistance for students to enhance their understanding of course material.",
      image: "/asdos.jpg",
      skills: ["Mathematics", "Academic Support", "Teaching"],
    },
    {
      title: "PIC HRD of Competition COMPFEST 16",
      date: "Dec 2023 – Sep 2024",
      description:
        "As part of COMPFEST 16, Competition provides a platform for participants across the country to enhance their skills in information technology. I was responsible for coordinating a team of six HRD staff members and collaborating with the manager and deputy manager of Competition in order to oversee each competition branch to ensure effective coordination and collaboration across all division teams.",
      image: "/compe2.jpg",
      skills: ["Leadership", "Team Work", "Event Coordination"],
    },
  ];

  return (
    <div
      id="experiences"
      className="h-auto bg-cover bg-center"
      style={{ backgroundImage: "url(/bg-2.jpg)" }}
    >
      <div className="h-auto bg-cover bg-center p-10">
        <div className="flex flex-col items-center">
          <h1 className="font-semibold text-white text-[30px] md:text-[50px] mb-8">
            My&nbsp;
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500">
              Experiences
            </span>
          </h1>
        </div>

        <div className="flex flex-col gap-10">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="flex flex-col md:flex-row items-center bg-transparent border border-purple-500 rounded-xl shadow-lg p-6 backdrop-blur-md transition-transform hover:scale-[1.02]"
            >
              {/* Image */}
              <div className="relative w-full md:w-1/3 h-48 md:h-64 rounded-lg overflow-hidden mb-4 md:mb-0 md:mr-6">
                <Image
                  src={exp.image}
                  alt={`${exp.title} Image`}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-lg"
                />
              </div>

              {/* Content */}
              <div className="w-full md:w-2/3">
                <h2 className="text-2xl font-semibold text-white mb-1">
                  {exp.title}
                </h2>
                <p className="text-sm text-purple-300 mb-3">{exp.date}</p>
                <p className="text-sm text-gray-300 mb-4">{exp.description}</p>
                <div className="flex flex-wrap gap-2 mt-2">
                  {exp.skills.map((skill, idx) => (
                    <span
                      key={idx}
                      className="text-xs bg-gradient-to-r from-purple-600 to-pink-600 text-white px-3 py-1 rounded-full"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experiences;
