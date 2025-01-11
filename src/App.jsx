import React, { useState } from "react";
import { motion } from "framer-motion";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import { FaLinkedin, FaGithub, FaTwitter, FaEnvelope, FaPhone } from "react-icons/fa";
import { GiMagicGate } from "react-icons/gi"; // Example “logo” icon
import content from "./content";
import SkillCircleGroups from "./SkillCircleGroups";
import ImamuddinResume from "./assets/Imamuddin_resume.pdf";


// Reusable fade-up animation
const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function App() {
  const { personal, projects, experience } = content;

  // For optional starry background
  const particlesInit = async (engine) => {
    await loadFull(engine);
  };
  const particlesOptions = {
    fpsLimit: 60,
    background: { color: "#0E1217" },
    interactivity: {
      events: { onHover: { enable: true, mode: "repulse" } },
      modes: { repulse: { distance: 100, duration: 0.4 } },
    },
    particles: {
      number: { value: 30, density: { enable: true, area: 800 } },
      color: { value: "#ffffff" },
      shape: { type: "circle" },
      opacity: { value: 0.2 },
      size: { value: 2 },
      move: { enable: true, speed: 1 },
    },
  };

  // State for the "Reach Me" dropdown
  const [reachOpen, setReachOpen] = useState(false);

  return (
    <div className="relative text-gray-100 font-sans min-h-screen overflow-x-hidden">
      {/* Optional Particles Background */}
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={particlesOptions}
        className="absolute inset-0 -z-10"
      />

      {/* NAVIGATION BAR */}
      <nav className="fixed w-full z-50 bg-[#111827] bg-opacity-90 p-4 shadow-md">
        <div className="container mx-auto flex justify-between items-center">
          {/* Logo + Cursive Name */}
          <div className="flex items-center gap-2">
            <GiMagicGate size={28} className="text-purple-300" />
            {/* Example of cursive/italic using Tailwind classes */}
            <span className="font-bold italic text-xl md:text-2xl font-[cursive] tracking-wide">
              Imamuddin Shaik
            </span>
          </div>

          {/* Nav Links (Desktop) */}
          <ul className="hidden md:flex space-x-6 font-medium">
            <li>
              <a href="#profile" className="hover:text-purple-300 transition">
                Profile
              </a>
            </li>
            <li>
              <a href="#skills" className="hover:text-purple-300 transition">
                Skills
              </a>
            </li>
            <li>
              <a href="#experience" className="hover:text-purple-300 transition">
                Experience
              </a>
            </li>
            <li>
              <a href="#projects" className="hover:text-purple-300 transition">
                Projects
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:text-purple-300 transition">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </nav>

      {/* PROFILE SECTION (Hero) */}
      <section
        id="profile"
        className="pt-16 pb-24 bg-gradient-to-b from-gray-900 via-[#1a1f2e] to-gray-900"
      >
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-center gap-12 text-center md:text-left">
          {/* Left: Avatar with neon ring */}
          <motion.div
            className="md:flex-1 flex justify-center"
            variants={fadeUp}
            initial="hidden"
            animate="visible"
          >
            <div className="relative">
              {/* Outer ring for flair */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 blur-sm"></div>
              {/* Actual photo or cartoon image */}
              <img
                src={personal.avatar}
                alt="Profile"
                className="relative w-48 h-48 md:w-56 md:h-56 rounded-full border-4 border-gray-900 object-cover"
              />
            </div>
          </motion.div>

          {/* Right: Headline, bullets, 4 CTA buttons */}
          <motion.div
            className="md:flex-1 space-y-6"
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.1 }}
          >
            <h2 className="text-3xl md:text-5xl font-extrabold">
              Full Stack & AI Developer
            </h2>
            <p className="text-lg text-gray-300 leading-relaxed">
              I specialize in building intelligent, data-driven web solutions
              using modern technologies. With strong expertise in MERN stack,
              AI/ML, and cloud deployments, I can transform your ideas into
              robust, scalable applications.
            </p>
            <ul className="list-none space-y-2 text-left mx-auto md:mx-0">
              <li className="flex items-center gap-2">
                <span className="text-purple-400 text-xl">•</span>
                MERN Stack & GraphQL
              </li>
              <li className="flex items-center gap-2">
                <span className="text-purple-400 text-xl">•</span>
                AI/ML Integrations
              </li>
              <li className="flex items-center gap-2">
                <span className="text-purple-400 text-xl">•</span>
                Cloud Deployments (AWS, Docker)
              </li>
              <li className="flex items-center gap-2">
                <span className="text-purple-400 text-xl">•</span>
                End-to-End Web Solutions
              </li>
            </ul>

            <div className="flex flex-wrap items-center gap-4 mt-4">
              {/* Download Resume */}
              <button
                className="bg-purple-600 hover:bg-purple-700 px-4 py-2 rounded-lg text-sm md:text-base font-semibold shadow"
                onClick={() => {
                  const link = document.createElement("a");
                  link.href = ImamuddinResume;          // Points to the imported PDF
                  link.setAttribute("download", "Imamuddin_resume.pdf");
                  document.body.appendChild(link);
                  link.click();
                  document.body.removeChild(link);
                }}
              >
                Download Resume
              </button>


              {/* Call Me (answered by AI) */}
              <button
                className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg text-sm md:text-base font-semibold shadow flex items-center gap-2"
                onClick={() =>
                  alert(
                    "Initiating AI-based call... (placeholder functionality)."
                  )
                }
              >
                <FaPhone /> Call Me (answered by AI)
              </button>

              {/* Reach Me (dropdown) */}
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
                    {/* LinkedIn */}
                    <a
                      href={personal.socialLinks.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-gray-200 hover:text-blue-400 py-1"
                    >
                      <FaLinkedin /> LinkedIn
                    </a>
                    {/* Email */}
                    <a
                      href={`mailto:someone@example.com`} 
                      className="flex items-center gap-2 text-gray-200 hover:text-blue-400 py-1"
                    >
                      <FaEnvelope /> Email
                    </a>
                    {/* Twitter */}
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

              {/* See My Work (GitHub) */}
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

      {/* SKILLS SECTION */}
      <section id="skills" className="bg-[#252c3c] py-16">
        <motion.h2
          className="text-4xl font-extrabold mb-10 text-center"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          I'm Skilled At
        </motion.h2>
        <div className="container mx-auto px-4">
          <SkillCircleGroups />
        </div>
      </section>

      {/* EXPERIENCE SECTION */}
{/* EXPERIENCE SECTION: side-by-side timeline */}
<section id="experience" className="bg-[#1f2634] py-16 px-4 text-center">
        <motion.h2
          className="text-4xl font-extrabold mb-10"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          Experience/Education
        </motion.h2>
        <div className="container mx-auto max-w-5xl grid grid-cols-1 md:grid-cols-2 gap-12 text-left">
          {/* Left: Work Experience timeline */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-purple-400 mb-6">
              Work Experience
            </h3>
            {experience.work.map((job, idx) => (
              <div key={idx} className="relative pl-8 mb-8">
                <div className="absolute left-1.5 top-0 h-full w-0.5 bg-gray-600"></div>
                <div className="w-3 h-3 rounded-full bg-purple-400 absolute left-0 top-0"></div>
                <h4 className="text-lg font-bold text-gray-200">
                  {job.title}
                </h4>
                <p className="text-sm text-gray-300">
                  {job.company} | {job.period}
                </p>
              </div>
            ))}
          </motion.div>
          {/* Right: Education timeline */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-blue-400 mb-6">
              Education
            </h3>
            {experience.education.map((ed, idx) => (
              <div key={idx} className="relative pl-8 mb-8">
                <div className="absolute left-1.5 top-0 h-full w-0.5 bg-gray-600"></div>
                <div className="w-3 h-3 rounded-full bg-blue-400 absolute left-0 top-0"></div>
                <h4 className="text-lg font-bold text-gray-200">
                  {ed.degree}
                </h4>
                <p className="text-sm text-gray-300">
                  {ed.institution} | {ed.period}
                </p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* PROJECTS SECTION */}
      <section id="projects" className="bg-[#252c3c] py-16">
        <motion.h2
          className="text-4xl font-extrabold mb-10 text-center"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          Projects
        </motion.h2>
        <div className="container mx-auto px-4">
          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {projects.map((project, idx) => (
              <motion.div
                key={idx}
                whileHover={{ scale: 1.03 }}
                className="bg-gray-800 p-6 rounded shadow hover:shadow-lg"
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
      <section id="contact" className="bg-[#1f2634] py-16 px-4 text-center">
        <motion.h2
          className="text-4xl font-extrabold mb-6"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          Contact Me
        </motion.h2>
        <p className="text-gray-400 mb-6">
          Let’s connect—feel free to reach out on LinkedIn, GitHub, or Twitter!
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
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <div className="grid grid-cols-1 gap-6">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full px-4 py-2 rounded bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full px-4 py-2 rounded bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
            <textarea
              placeholder="Your Message"
              rows="4"
              className="w-full px-4 py-2 rounded bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
            ></textarea>
            <button
              type="submit"
              className="w-full bg-purple-600 hover:bg-purple-700 px-6 py-3 rounded text-lg font-semibold shadow"
            >
              Send Message
            </button>
          </div>
        </motion.form>
      </section>
    </div>
  );
}
