import React, { useState } from "react";
import ParticlesBackground from "./Components/ParticlesBackground";
import Navbar from "./Components/Navbar";
import ProfileSection from "./Components/ProfileSection";
import SkillsSection from "./Components/SkillsSection";
import ExperienceSection from "./Components/ExperienceSection";
import ProjectsSection from "./Components/ProjectsSection";
import ContactSection from "./Components/ContactSection";
import content from "./content";

export default function App() {
  const [selectedLanguage, setSelectedLanguage] = useState("JavaScript");

  return (
    <div className="relative text-gray-100 font-sans min-h-screen overflow-x-hidden">
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
  );
}
