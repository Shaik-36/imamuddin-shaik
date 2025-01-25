import React from "react";
import { motion } from "framer-motion";
import { FaLinkedin, FaGithub, FaTwitter } from "react-icons/fa";

export default function ContactSection() {
  return (
    <section id="contact" className="bg-[#1f2634] py-16 px-4 text-center">
      <h2 className="text-4xl font-extrabold mb-6">Contact Me</h2>
      <p className="text-gray-400 mb-6">
        Let’s connect—feel free to reach out on LinkedIn, GitHub, or Twitter!
      </p>
      <div className="flex justify-center space-x-6 mb-8">
        <a
          href="#"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-400 hover:text-blue-500"
        >
          <FaLinkedin size={32} />
        </a>
        <a
          href="#"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-400 hover:text-gray-500"
        >
          <FaGithub size={32} />
        </a>
        <a
          href="#"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-400 hover:text-blue-500"
        >
          <FaTwitter size={32} />
        </a>
      </div>
      <motion.form
        className="max-w-lg mx-auto text-left"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
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
  );
}
