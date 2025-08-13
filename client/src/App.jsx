import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import ParticlesBackground from "./Components/ParticlesBackground";
import Navbar from "./Components/Navbar";
import ProfileSection from "./Components/ProfileSection";
import SkillsSection from "./Components/SkillsSection";
import ExperienceSection from "./Components/ExperienceSection";
import ProjectsSection from "./Components/ProjectsSection";
import ContactSection from "./Components/ContactSection";
import Login from "./Components/Login/Login"; // Login component for admin login
import AdminPanel from "./Components/Login/AdminPanel"; // AdminPanel component for project management
import content from "./content";

export default function App() {
  const [selectedLanguage, setSelectedLanguage] = useState("All");
  const [isLoggedIn, setIsLoggedIn] = useState(false); // State to track admin login status

  const handleLogin = (token) => {
    localStorage.setItem("adminToken", token); // Store token (optional)
    setIsLoggedIn(true); // Update state
  };


  return (
    <Router>
      <Routes>
        {/* Main Portfolio Route */}
        <Route
          path="/"
          element={
            <div className="relative text-gray-100 font-sans min-h-screen overflow-x-hidden bg-slate-900">
              {/* <ParticlesBackground /> */}
              <Navbar />
              <ProfileSection
                personal={content.personal}
                frontEndSkills={content.frontEndSkills}
                backEndSkills={content.backEndSkills}
                toolsSkills={content.toolsSkills}
                otherTechSkills={content.otherTechSkills}
              />
              <ExperienceSection experience={content.experience} />
              <ProjectsSection
                projects={content.projects}
                selectedLanguage={selectedLanguage}
                setSelectedLanguage={setSelectedLanguage}
              />
              <SkillsSection />
              <ContactSection personal={content.personal} />
            </div>
          }
        />

        {/* Admin Login Route */}
        <Route
          path="/admin/login"
          element={
            <div className="bg-slate-900 w-screen h-screen flex flex-col">
              <Login onLogin={handleLogin} />
            </div>
        }
        />

        {/* Admin Panel Route (Protected) */}
        <Route
          path="/admin"
          element={
            
            isLoggedIn ? ( <AdminPanel />) : (
              <div className="bg-slate-900 w-screen h-screen flex flex-col">
              <Navigate to="/admin/login" replace={true} />
              </div>
            )
          }
        />
      </Routes>
    </Router>
  );
}
