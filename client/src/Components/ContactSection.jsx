import React from "react";
import { motion } from "framer-motion";
import { FaLinkedin, FaGithub, FaTwitter, FaEnvelope } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function ContactSection({ personal }) {
  return (
    <section id="contact" className="relative py-24 px-4 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 overflow-hidden">
      {/* Animated background grid/gradient/particles placeholder */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="w-full h-full bg-gradient-to-tr from-slate-900 via-purple-900/30 to-slate-900 opacity-40 animate-pulse"></div>
      </div>
      <div className="container mx-auto max-w-2xl relative z-10">
        <motion.h2
          className="text-5xl md:text-6xl font-extrabold mb-10 text-center tracking-tight bg-gradient-to-r from-purple-400 via-blue-400 to-pink-400 bg-clip-text text-transparent"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Get In Touch
        </motion.h2>
        <motion.p
          className="text-lg text-gray-400 mb-8 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          I’m always open to new opportunities, collaborations, or just a friendly chat. Reach out via email or connect on social platforms below.
        </motion.p>
        <div className="flex justify-center gap-8 mb-10">
          <a href={personal.socialLinks.linkedin} target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform">
            <FaLinkedin className="text-blue-400 text-4xl" />
          </a>
          <a href={personal.socialLinks.github} target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform">
            <FaGithub className="text-pink-400 text-4xl" />
          </a>
          <a href={personal.socialLinks.twitter} target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform">
            <FaTwitter className="text-blue-300 text-4xl" />
          </a>
          <a href={`mailto:${personal.email}`} className="hover:scale-110 transition-transform">
            <FaEnvelope className="text-purple-300 text-4xl" />
          </a>
        </div>
        <motion.form
          className="max-w-lg mx-auto text-left bg-slate-800/80 p-8 rounded-xl shadow-lg border border-slate-700"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="grid grid-cols-1 gap-6">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full px-4 py-3 rounded bg-gray-900 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full px-4 py-3 rounded bg-gray-900 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
            <textarea
              placeholder="Your Message"
              rows="4"
              className="w-full px-4 py-3 rounded bg-gray-900 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
            ></textarea>
            <button
              type="submit"
              className="w-full bg-purple-600 hover:bg-purple-700 px-6 py-3 rounded-xl text-lg font-bold shadow-lg"
            >
              Send Message
            </button>
          </div>
        </motion.form>
        {/* Admin Panel Button */}
        <Link
          to="/admin"
          className="absolute bottom-4 right-4 bg-gray-700 hover:bg-gray-800 text-white px-4 py-2 rounded-lg text-sm shadow-lg transition"
        >
          Admin Panel
        </Link>
      </div>
    </section>
  );
}
