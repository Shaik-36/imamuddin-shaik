import React from "react";
import { motion } from "framer-motion";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import { FaLinkedin, FaGithub, FaTwitter } from "react-icons/fa";

import content from "./content";
import SkillCircleGroups from "./SkillCircleGroups";

function App() {
  const { personal, projects, experience } = content;

  // For background starry effect (optional)
  const particlesInit = async (engine) => {
    await loadFull(engine);
  };

  const particlesOptions = {
    fpsLimit: 60,
    background: {
      color: "#0F172A",
    },
    interactivity: {
      events: {
        onHover: { enable: true, mode: "repulse" },
      },
      modes: {
        repulse: { distance: 120, duration: 0.4 },
      },
    },
    particles: {
      number: { value: 40, density: { enable: true, area: 600 } },
      color: { value: "#ffffff" },
      shape: { type: "circle" },
      opacity: { value: 0.3 },
      size: { value: 2 },
      move: { enable: true, speed: 1.2 },
    },
  };

  // Simple fade-up for section headings
  const headingVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <div className="text-gray-100 font-sans min-h-screen w-full relative">
      {/* Background Particles (optional). Remove if you want a plain background */}
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={particlesOptions}
        className="absolute inset-0 -z-10"
      />

      {/* NAVBAR */}
      <nav className="fixed top-0 w-full z-50 bg-gradient-to-r from-purple-600 to-pink-500 p-4 shadow-lg">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl md:text-3xl font-bold tracking-wider uppercase">
            {personal.name}
          </h1>
          <ul className="hidden md:flex space-x-6 font-medium">
            <li>
              <a href="#about" className="hover:text-gray-200 transition">
                About
              </a>
            </li>
            <li>
              <a href="#skills" className="hover:text-gray-200 transition">
                Skills
              </a>
            </li>
            <li>
              <a href="#experience" className="hover:text-gray-200 transition">
                Experience
              </a>
            </li>
            <li>
              <a href="#projects" className="hover:text-gray-200 transition">
                Projects
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:text-gray-200 transition">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </nav>

      {/* HERO SECTION */}
      <header className="pt-16 pb-24 bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900">
        <div className="container mx-auto px-4 text-center">
          <motion.h2
            className="text-5xl md:text-7xl font-extrabold mb-4"
            variants={headingVariants}
            initial="hidden"
            animate="visible"
          >
            {personal.name}
          </motion.h2>
          <motion.p
            className="text-2xl md:text-3xl mb-8"
            variants={headingVariants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.2 }}
          >
            {personal.tagline}
          </motion.p>
          <motion.button
            variants={headingVariants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.4 }}
            whileHover={{ scale: 1.05 }}
            className="bg-purple-600 hover:bg-purple-700 px-6 py-3 rounded-lg text-lg font-semibold shadow-lg"
            onClick={() => window.open(personal.resumeLink, "_blank")}
          >
            {personal.contactButtonText}
          </motion.button>
        </div>
      </header>

      {/* ABOUT SECTION */}
      <section
        id="about"
        className="bg-gray-900 pb-16 pt-12 relative overflow-hidden"
      >
        <div className="container mx-auto px-4 text-center">
          <motion.h2
            className="text-4xl font-extrabold mb-8"
            variants={headingVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            About Me
          </motion.h2>

          <div className="flex flex-col md:flex-row md:items-center md:justify-center gap-8">
            <motion.img
              src={personal.avatar}
              alt="Avatar"
              className="w-40 h-40 md:w-48 md:h-48 rounded-full border-4 border-purple-600 mx-auto"
              variants={headingVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            />

            <motion.div
              className="max-w-2xl text-left mx-auto"
              variants={headingVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <p className="leading-relaxed text-gray-200 mb-4">
                {personal.description}
              </p>
              <button
                className="mt-4 bg-blue-600 hover:bg-blue-700 px-6 py-2 rounded-lg font-semibold shadow-md"
                onClick={() => window.open(personal.resumeLink, "_blank")}
              >
                Download Resume
              </button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* SKILLS SECTION */}
      <section id="skills" className="bg-gray-800 py-16 relative overflow-hidden">
        <div className="container mx-auto px-4 text-center">
          <motion.h2
            className="text-4xl font-extrabold mb-8"
            variants={headingVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            Skills
          </motion.h2>
          <SkillCircleGroups />
        </div>
      </section>

      {/* EXPERIENCE SECTION */}
      <section
        id="experience"
        className="bg-gray-900 py-16 relative overflow-hidden"
      >
        <div className="container mx-auto px-4 text-center">
          <motion.h2
            className="text-4xl font-extrabold mb-8"
            variants={headingVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            Experience
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto text-left">
            <motion.div
              variants={headingVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold mb-4 text-purple-400">Work</h3>
              {experience.work.map((item, i) => (
                <p key={i} className="mb-2 text-gray-200">
                  {item}
                </p>
              ))}
            </motion.div>
            <motion.div
              variants={headingVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold mb-4 text-blue-400">
                Education
              </h3>
              {experience.education.map((item, i) => (
                <p key={i} className="mb-2 text-gray-200">
                  {item}
                </p>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* PROJECTS SECTION */}
      <section id="projects" className="bg-gray-800 py-16 relative overflow-hidden">
        <div className="container mx-auto px-4 text-center">
          <motion.h2
            className="text-4xl font-extrabold mb-8"
            variants={headingVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            Projects
          </motion.h2>
          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
            variants={headingVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {projects.map((project, idx) => (
              <motion.div
                key={idx}
                whileHover={{ scale: 1.05 }}
                className="bg-gray-700 p-6 rounded shadow-md hover:shadow-lg"
              >
                <h3 className="text-xl font-bold text-purple-300">
                  {project.title}
                </h3>
                <p className="text-gray-300 mt-2">{project.description}</p>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:text-blue-500 mt-4 block font-semibold"
                >
                  View Details
                </a>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section id="contact" className="bg-gray-900 py-16 relative overflow-hidden">
        <div className="container mx-auto px-4 text-center">
          <motion.h2
            className="text-4xl font-extrabold mb-8"
            variants={headingVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            Contact Me
          </motion.h2>
          <p className="text-gray-400 mb-6">
            Feel free to reach out via LinkedIn, GitHub, or Twitter!
          </p>
          <div className="flex justify-center space-x-6 mb-8">
            <a
              href={personal.socialLinks.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:text-blue-500"
            >
              <FaLinkedin size={32} />
            </a>
            <a
              href={personal.socialLinks.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-gray-500"
            >
              <FaGithub size={32} />
            </a>
            <a
              href={personal.socialLinks.twitter}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:text-blue-500"
            >
              <FaTwitter size={32} />
            </a>
          </div>

          <motion.form
            className="max-w-lg mx-auto text-left"
            variants={headingVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <div className="grid grid-cols-1 gap-6">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full px-4 py-2 rounded-lg bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="w-full px-4 py-2 rounded-lg bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
              <textarea
                placeholder="Your Message"
                rows="4"
                className="w-full px-4 py-2 rounded-lg bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
              ></textarea>
              <button
                type="submit"
                className="w-full bg-purple-600 hover:bg-purple-700 px-6 py-3 rounded-lg text-lg font-semibold shadow-md"
              >
                Send Message
              </button>
            </div>
          </motion.form>
        </div>
      </section>
    </div>
  );
}

export default App;
