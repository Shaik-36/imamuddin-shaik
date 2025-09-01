import React from "react";
import { motion } from "framer-motion";
import { FaBriefcase, FaUniversity } from "react-icons/fa";

const timelineVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

export default function ExperienceSection({ experience }) {
  // Combine work and education into a single timeline, sorted newest first
  const timeline = [
    ...experience.work.map((job) => ({ ...job, type: "work" })),
    ...experience.education.map((ed) => ({ ...ed, type: "education" })),
  ];
  // Sort by start year (descending)
  timeline.sort((a, b) => {
    // Extract start year from period string
    const getYear = (period) => {
      if (!period) return 0;
      const match = period.match(/(\d{4})/);
      return match ? parseInt(match[1], 10) : 0;
    };
    return getYear(b.period) - getYear(a.period);
  });

  return (
    <section id="experience" className="relative py-24 px-4 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="w-full h-full bg-gradient-to-tr from-slate-900 via-purple-900/30 to-slate-900 opacity-40 animate-pulse"></div>
      </div>
      <div className="container mx-auto max-w-4xl relative z-10">
        <motion.h2
          className="text-5xl md:text-6xl font-extrabold mb-16 text-center tracking-tight bg-gradient-to-r from-purple-400 via-blue-400 to-pink-400 bg-clip-text text-transparent"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          My Journey
        </motion.h2>
        <div className="relative flex flex-col items-center">
          {/* Dark timeline vertical line, no glow */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-2 bg-slate-700 border-2 border-slate-800"></div>
          <div className="w-full flex flex-col gap-16 pt-2">
            {timeline.map((item, idx) => {
              const isLeft = idx % 2 === 0;
              return (
                <div key={idx} className="relative w-full flex flex-col md:flex-row items-center justify-center">
                  {/* Only icon perfectly centered on the line */}
                  <div className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 z-20 flex items-center justify-center">
                    <div className="w-14 h-14 rounded-full bg-slate-800 border-2 border-slate-700 flex items-center justify-center">
                      {item.type === "work" ? <FaBriefcase className="text-purple-400 text-3xl" /> : <FaUniversity className="text-blue-400 text-3xl" />}
                    </div>
                  </div>
                  {/* Card alignment left/right */}
                  {isLeft && (
                    <motion.div
                      variants={timelineVariants}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                      className="w-full md:w-1/2 flex justify-end pr-8"
                    >
                      <div className={`flex flex-col px-6 py-8 rounded-xl bg-slate-800/80 shadow-lg border border-slate-700 max-w-xl ml-16 ${item.type === "work" ? "border-purple-500/30" : "border-blue-500/30"}`}>
                        <h3 className="text-2xl font-bold text-gray-100 mb-1">{item.type === "work" ? item.title : item.degree}</h3>
                        <p className="text-lg text-gray-300 mb-2">{item.type === "work" ? item.company : item.institution}</p>
                        <p className="text-sm text-gray-400 mb-2">{item.period}</p>
                        {item.location && <p className="text-sm text-gray-500 mb-2">{item.location}</p>}
                        {item.gpa && <p className="text-sm text-blue-300 mt-2">GPA: {item.gpa}</p>}
                      </div>
                    </motion.div>
                  )}
                  <div className="hidden md:flex w-0 md:w-1/2"></div>
                  {!isLeft && (
                    <motion.div
                      variants={timelineVariants}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                      className="w-full md:w-1/2 flex justify-start pl-8"
                    >
                      <div className={`flex flex-col px-6 py-8 rounded-xl bg-slate-800/80 shadow-lg border border-slate-700 max-w-xl mr-16 ${item.type === "work" ? "border-purple-500/30" : "border-blue-500/30"}`}>
                        <h3 className="text-2xl font-bold text-gray-100 mb-1">{item.type === "work" ? item.title : item.degree}</h3>
                        <p className="text-lg text-gray-300 mb-2">{item.type === "work" ? item.company : item.institution}</p>
                        <p className="text-sm text-gray-400 mb-2">{item.period}</p>
                        {item.location && <p className="text-sm text-gray-500 mb-2">{item.location}</p>}
                        {item.gpa && <p className="text-sm text-blue-300 mt-2">GPA: {item.gpa}</p>}
                      </div>
                    </motion.div>
                  )}
                  {/* Mobile: always full width, only icon centered above card */}
                  <div className="md:hidden w-full flex flex-col items-center">
                    <div className="w-14 h-14 rounded-full bg-slate-800 border-2 border-slate-700 flex items-center justify-center mb-2">
                      {item.type === "work" ? <FaBriefcase className="text-purple-400 text-3xl" /> : <FaUniversity className="text-blue-400 text-3xl" />}
                    </div>
                    <div className={`flex flex-col px-6 py-8 rounded-xl bg-slate-800/80 shadow-lg border border-slate-700 max-w-xl w-full ${item.type === "work" ? "border-purple-500/30" : "border-blue-500/30"}`}>
                      <h3 className="text-2xl font-bold text-gray-100 mb-1">{item.type === "work" ? item.title : item.degree}</h3>
                      <p className="text-lg text-gray-300 mb-2">{item.type === "work" ? item.company : item.institution}</p>
                      <p className="text-sm text-gray-400 mb-2">{item.period}</p>
                      {item.location && <p className="text-sm text-gray-500 mb-2">{item.location}</p>}
                      {item.gpa && <p className="text-sm text-blue-300 mt-2">GPA: {item.gpa}</p>}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
