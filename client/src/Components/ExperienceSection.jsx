import React from "react";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function ExperienceSection({ experience }) {
  return (
    <section id="experience" className="bg-gradient-to-br from-slate-800 via-slate-900 to-slate-800 py-16 px-4 text-center">
      <motion.h2
        className="text-4xl font-extrabold mb-10"
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        Experience & Education
      </motion.h2>
      <div className="container mx-auto max-w-5xl grid grid-cols-1 md:grid-cols-2 gap-12 text-left">
        {/* Work Experience */}
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
              <h4 className="text-lg font-bold text-gray-200">{job.title}</h4>
              <p className="text-sm text-gray-300">{job.company} | {job.period}</p>
            </div>
          ))}
        </motion.div>
        {/* Education */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold text-blue-400 mb-6">Education</h3>
          {experience.education.map((ed, idx) => (
            <div key={idx} className="relative pl-8 mb-8">
              <div className="absolute left-1.5 top-0 h-full w-0.5 bg-gray-600"></div>
              <div className="w-3 h-3 rounded-full bg-blue-400 absolute left-0 top-0"></div>
              <h4 className="text-lg font-bold text-gray-200">{ed.degree}</h4>
              <p className="text-sm text-gray-300">{ed.institution} | {ed.period}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
