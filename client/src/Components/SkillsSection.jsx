import React from "react";
import { motion } from "framer-motion";
import SkillCircleGroups from "../SkillCircleGroups";

const fadeInUp = {
  hidden: { opacity: 0, y: 60 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { 
      duration: 0.8, 
      ease: "easeOut" 
    } 
  },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1,
    },
  },
};

export default function SkillsSection() {
  return (
    <section 
      id="skills" 
      className="relative min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 py-20 overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.3) 1px, transparent 0)`,
          backgroundSize: '32px 32px'
        }} />
      </div>

      {/* Gradient Orbs */}
      <div className="absolute top-20 left-20 w-72 h-72 bg-purple-500/10 rounded-full filter blur-3xl animate-pulse" />
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-blue-500/10 rounded-full filter blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-green-500/10 rounded-full filter blur-3xl animate-pulse" style={{ animationDelay: '4s' }} />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="text-center mb-16"
        >
          <motion.div variants={fadeInUp} className="inline-block">
            <span className="inline-block px-4 py-2 rounded-full bg-gradient-to-r from-purple-500/20 to-blue-500/20 
              border border-purple-500/30 text-purple-300 text-sm font-medium mb-4">
              Technical Expertise
            </span>
          </motion.div>
          
          <motion.h2 
            variants={fadeInUp}
            className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-white via-gray-200 to-gray-400 
              bg-clip-text text-transparent mb-6 leading-tight"
          >
            Skills & Technologies
          </motion.h2>
          
          <motion.p 
            variants={fadeInUp}
            className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed"
          >
            Building modern applications with cutting-edge technologies and industry best practices
          </motion.p>
        </motion.div>

        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          transition={{ delay: 0.3 }}
        >
          <SkillCircleGroups />
        </motion.div>

        {/* Bottom Stats */}
        <motion.div
          variants={staggerContainer}
          initial="hidden" 
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 text-center"
        >
          {[
            { number: "50+", label: "Technologies" },
            { number: "4+", label: "Years Experience" },
            { number: "20+", label: "Projects Built" },
            { number: "100%", label: "Commitment" },
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              variants={fadeInUp}
              className="p-6 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 
                hover:bg-white/10 transition-all duration-300"
            >
              <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 
                bg-clip-text text-transparent mb-2">
                {stat.number}
              </div>
              <div className="text-gray-400 text-sm font-medium">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
