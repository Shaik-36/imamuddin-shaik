import React from "react";
import { motion } from "framer-motion";

export default function ProjectsSection({ projects, selectedLanguage, setSelectedLanguage }) {
  const availableLanguages = Object.keys(projects);
  const filteredProjects = projects[selectedLanguage] || projects.Default;

  return (
    <section id="projects" className="bg-[#252c3c] py-16">
      {/* Section Title */}
      <motion.h2
        className="text-4xl font-extrabold mb-10 text-center text-white"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Projects
      </motion.h2>

      {/* Language Filter */}
      <div className="container mx-auto px-4 mb-8 text-center">
        <div className="flex justify-center flex-wrap gap-4">
          {availableLanguages.map((language) => (
            <button
              key={language}
              className={`px-4 py-2 rounded-lg text-sm md:text-base font-semibold shadow transition-all ${
                selectedLanguage === language
                  ? "bg-purple-600 text-white"
                  : "bg-gray-800 text-gray-300 hover:bg-gray-700 hover:text-white"
              }`}
              onClick={() => setSelectedLanguage(language)}
            >
              {language}
            </button>
          ))}
        </div>
      </div>

      {/* Display Projects */}
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, idx) => (
            <motion.div
              key={idx}
              className="bg-gray-800 rounded-lg shadow-lg hover:shadow-xl overflow-hidden transition-all"
              whileHover={{ scale: 1.03 }}
            >
              {/* Project Image */}
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              {/* Project Details */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-purple-300">{project.title}</h3>
                <p className="text-gray-300 mt-2">{project.description}</p>
                <p className="text-sm text-gray-400 mt-2">
                  <span className="font-semibold">Tech Stack:</span> {project.techStack}
                </p>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:text-blue-500 mt-4 inline-block font-semibold"
                >
                  View Details
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
