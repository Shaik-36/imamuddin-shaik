import React from "react";
import { motion } from "framer-motion";

export default function ProjectsSection({ projects, selectedLanguage, setSelectedLanguage }) {
  const availableLanguages = ["All", ...Object.keys(projects)];
  const filteredProjects =
    selectedLanguage === "All"
      ? Object.values(projects).flat()
      : projects[selectedLanguage] || [];

  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
  };

  // Helper to resolve image URLs (local or remote)
  const resolveImageUrl = (url) => {
    if (!url) return "/images/blog.png"; // fallback
    if (url.startsWith("http")) return url;
    if (url.startsWith("/")) return url;
    if (url.includes("images")) return `/${url.replace(/^\.\//, "")}`;
    return url;
  };

  return (
    <section id="projects" className="relative py-24 px-4 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="w-full h-full bg-gradient-to-tr from-slate-900 via-purple-900/30 to-slate-900 opacity-40 animate-pulse"></div>
      </div>
      <div className="container mx-auto max-w-6xl relative z-10">
        <motion.h2
          className="text-5xl md:text-6xl font-extrabold mb-16 text-center tracking-tight bg-gradient-to-r from-purple-400 via-blue-400 to-pink-400 bg-clip-text text-transparent"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          Projects
        </motion.h2>

        <div className="mb-12 flex justify-center flex-wrap gap-4">
          {availableLanguages.map((language) => (
            <button
              key={language}
              className={`px-5 py-2 rounded-xl text-base font-semibold shadow transition-all duration-200 border border-purple-600/40 backdrop-blur-lg ${
                selectedLanguage === language
                  ? "bg-purple-600 text-white scale-105 shadow-lg"
                  : "bg-slate-800 text-purple-300 hover:bg-purple-700 hover:text-white"
              }`}
              onClick={() => setSelectedLanguage(language)}
            >
              {language}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {filteredProjects.map((project, idx) => (
            <motion.div
              key={idx}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="bg-slate-800/80 rounded-2xl shadow-xl p-0 mb-8 border border-slate-700 text-left hover:scale-[1.03] transition-transform duration-200 group overflow-hidden flex flex-col"
            >
              {/* Project Image */}
              {project.image && (
                <img
                  src={resolveImageUrl(project.image)}
                  alt={project.title}
                  className="w-full h-48 object-cover object-top group-hover:scale-105 transition-transform duration-300"
                  onError={e => { e.target.onerror=null; e.target.src="/images/blog.png"; }}
                />
              )}
              <div className="p-7 flex-1 flex flex-col justify-between">
                <h3 className="text-2xl font-bold text-purple-300 mb-2 group-hover:text-purple-400 transition-colors duration-200">{project.title}</h3>
                <p className="text-gray-300 mb-4 text-base">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="bg-blue-600/80 text-white px-3 py-1 rounded text-xs font-semibold">
                    {project.techStack}
                  </span>
                </div>
                <div className="flex items-center space-x-6 text-sm mt-auto">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:text-blue-300 underline font-semibold"
                  >
                    View Project
                  </a>
                  {project.image && (
                    <a
                      href={resolveImageUrl(project.image)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-green-400 hover:text-green-300 underline font-semibold"
                    >
                      View Image
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
