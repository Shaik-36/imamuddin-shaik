import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaLinkedin, FaGithub, FaTwitter, FaEnvelope } from "react-icons/fa";
import ImamuddinResume from "../assets/imam_resume.pdf";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const gradientText = {
  background: "linear-gradient(90deg, #a78bfa, #f472b6, #38bdf8)",
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
  fontWeight: 800,
};

export default function ProfileSection({ personal, summary, achievements, certifications, frontEndSkills, backEndSkills, toolsSkills, otherTechSkills, contact }) {
  const [reachOpen, setReachOpen] = useState(false);

  const combinedSkills = [
    ...frontEndSkills,
    ...backEndSkills,
    ...toolsSkills,
    ...otherTechSkills,
  ];

  // Helper to resolve image URLs (local or remote)
  const resolveImageUrl = (url) => {
    if (!url) return "/assets/imam-logo.svg"; // fallback
    if (url.startsWith("http")) return url;
    if (url.startsWith("/")) return url;
    if (url.includes("assets")) return `/${url.replace(/^\.\//, "")}`;
    return url;
  };

  return (
    <section
      id="profile"
      className="pt-24 pb-24 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden"
    >
      {/* Animated background grid/gradient/particles placeholder */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="w-full h-full bg-gradient-to-tr from-slate-900 via-purple-900/30 to-slate-900 opacity-60 animate-pulse"></div>
      </div>
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center gap-12 relative z-10">
        {/* Left: Avatar with animated border */}
        <motion.div
          className="md:flex-1 flex justify-center"
          variants={fadeUp}
          initial="hidden"
          animate="visible"
        >
          <div className="relative">
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-500 via-blue-500 to-pink-500 blur-xl animate-spin-slow"></div>
            <img
              src={resolveImageUrl(personal.avatar)}
              alt="Profile"
              className="relative w-52 h-52 md:w-64 md:h-64 rounded-full border-4 border-gray-900 object-cover shadow-xl"
              style={{ boxShadow: "0 0 40px 0 #a78bfa, 0 0 80px 0 #f472b6" }}
              onError={e => { e.target.onerror=null; e.target.src="/assets/imam-logo.svg"; }}
            />
          </div>
        </motion.div>

        {/* Right: Headline and Details */}
        <motion.div
          className="md:flex-1 space-y-6"
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.1 }}
        >
          <h2 className="text-5xl md:text-7xl font-extrabold text-center mb-2 tracking-tight" style={gradientText}>{personal.name}</h2>
          <h3 className="text-2xl md:text-3xl font-semibold text-center mb-4 text-purple-400 animate-fade-in">{personal.tagline}</h3>
          <p className="text-lg md:text-xl text-gray-300 leading-relaxed mb-4 max-w-2xl mx-auto animate-fade-in" style={{ fontWeight: 500 }}>{summary || personal.description}</p>

          {/* Contact Icons Row */}
          <div className="flex justify-center gap-6 mb-6">
            <a href={personal.socialLinks.linkedin} target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform">
              <FaLinkedin className="text-blue-400 text-3xl" />
            </a>
            <a href={personal.socialLinks.github} target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform">
              <FaGithub className="text-pink-400 text-3xl" />
            </a>
            <a href={personal.socialLinks.twitter} target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform">
              <FaTwitter className="text-blue-300 text-3xl" />
            </a>
            <a href={`mailto:${personal.email}`} className="hover:scale-110 transition-transform">
              <FaEnvelope className="text-purple-300 text-3xl" />
            </a>
          </div>

          {/* Achievements */}
          {achievements && achievements.length > 0 && (
            <div className="mb-4 animate-fade-in">
              <h4 className="text-lg font-semibold text-pink-400 mb-1">Achievements:</h4>
              <ul className="list-disc ml-6 text-gray-200">
                {achievements.map((ach, idx) => (
                  <li key={idx}>{ach}</li>
                ))}
              </ul>
            </div>
          )}

          {/* Certifications */}
          {certifications && certifications.length > 0 && (
            <div className="mb-4 animate-fade-in">
              <h4 className="text-lg font-semibold text-blue-400 mb-1">Certifications:</h4>
              <ul className="list-disc ml-6 text-gray-200">
                {certifications.map((cert, idx) => (
                  <li key={idx}>
                    <span className="font-bold">{cert.name}</span> - {cert.issuer} ({cert.date})
                    {cert.link && (
                      <a href={cert.link} target="_blank" rel="noopener noreferrer" className="text-blue-300 ml-2 underline">View</a>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Buttons */}
          <div className="flex flex-wrap gap-4 mt-4 justify-center">
            <motion.button
              className="bg-purple-600 hover:bg-purple-700 px-6 py-3 rounded-xl text-base md:text-lg font-bold shadow-lg transition-all duration-200"
              whileHover={{ scale: 1.08 }}
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
            </motion.button>
            <motion.button
              className="bg-pink-600 hover:bg-pink-700 px-6 py-3 rounded-xl text-base md:text-lg font-bold shadow-lg flex items-center gap-2 transition-all duration-200"
              whileHover={{ scale: 1.08 }}
              onClick={() => window.open(personal.socialLinks.github, "_blank")}
            >
              <FaGithub /> See My Work
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
