import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaLinkedin, FaGithub, FaTwitter, FaEnvelope, FaPhone } from "react-icons/fa";
import ImamuddinResume from "../assets/Imamuddin_resume.pdf";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function ProfileSection({ personal, frontEndSkills, backEndSkills, toolsSkills, otherTechSkills }) {
  const [reachOpen, setReachOpen] = useState(false);

  const combinedSkills = [
    ...frontEndSkills,
    ...backEndSkills,
    ...toolsSkills,
    ...otherTechSkills,
  ];

  return (
    <section
      id="profile"
      className="pt-24 pb-24 bg-gradient-to-b from-gray-900 via-[#1a1f2e] to-gray-900"
    >
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center gap-12">
        {/* Left: Avatar */}
        <motion.div
          className="md:flex-1 flex justify-center"
          variants={fadeUp}
          initial="hidden"
          animate="visible"
        >
          <div className="relative">
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 blur-sm"></div>
            <img
              src={personal.avatar}
              alt="Profile"
              className="relative w-48 h-48 md:w-56 md:h-56 rounded-full border-4 border-gray-900 object-cover"
            />
          </div>
        </motion.div>

        {/* Right: Headline and Skills */}
        <motion.div
          className="md:flex-1 space-y-6"
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.1 }}
        >
          {/* <h2 className="text-3xl md:text-5xl font-extrabold text-center">{personal.name}</h2> */}
          <p className="text-lg text-gray-300 leading-relaxed">{personal.description}</p>

          {/* Display Skills */}
          {/* <h3 className="text-xl font-semibold text-purple-400 mt-4">Skills:</h3>
          <ul className="list-none grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 text-left mx-auto md:mx-0">
            {combinedSkills.map((skill, index) => (
              <li key={index} className="flex items-center gap-2">
                <span className="text-purple-400 text-xl">•</span>
                {skill}
              </li>
            ))}
          </ul> */}

          {/* Buttons */}
          <div className="flex flex-wrap gap-4 mt-4 ">
            <button
              className="bg-purple-600 hover:bg-purple-700 px-4 py-2 rounded-lg text-sm md:text-base font-semibold shadow"
              onClick={() => {
                const link = document.createElement("a");
                link.href = ImamuddinResume;
                link.setAttribute("download", "Imamuddin_resume.pdf");
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
              }}
            >
              Download Resume
            </button>

            {/* Phone Button */}
            {/* <button
              className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg text-sm md:text-base font-semibold shadow flex items-center gap-2"
              onClick={() => alert("This feature is under development.")}
            >
              <FaPhone /> Call Me
            </button> */}
            <div className="relative">
              <button
                className="bg-green-600 hover:bg-green-700 px-4 py-2 rounded-lg text-sm md:text-base font-semibold shadow"
                onClick={() => setReachOpen((prev) => !prev)}
              >
                Reach Me
              </button>
              {reachOpen && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  className="absolute top-12 left-0 bg-gray-800 rounded shadow-lg py-2 px-3 z-10"
                >
                  <a
                    href={personal.socialLinks.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-gray-200 hover:text-blue-400 py-1"
                  >
                    <FaLinkedin /> LinkedIn
                  </a>
                  <a
                    href={`mailto:${personal.email}`}
                    className="flex items-center gap-2 text-gray-200 hover:text-blue-400 py-1"
                  >
                    <FaEnvelope /> Email
                  </a>
                  <a
                    href={personal.socialLinks.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-gray-200 hover:text-blue-400 py-1"
                  >
                    <FaTwitter /> Twitter
                  </a>
                </motion.div>
              )}
            </div>
            <button
              className="bg-pink-600 hover:bg-pink-700 px-4 py-2 rounded-lg text-sm md:text-base font-semibold shadow flex items-center gap-2"
              onClick={() => window.open(personal.socialLinks.github, "_blank")}
            >
              <FaGithub /> See My Work
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
