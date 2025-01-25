import React from "react";
import imamLogo from '../assets/logo-main.png';

export default function Navbar() {
  return (
    <nav className="absolute w-full z-60 bg-[#111827] bg-opacity-90 p-4 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        
        <div className="flex justify-center items-center gap-2 sm:justify-center">
          <a href="https://imamuddin-shaik.vercel.app/">
            <img
              src={imamLogo}
              alt="Imamuddin-Logo"
              className="h-11 text-purple-300"
            />
          </a>
        </div>

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
  );
}
