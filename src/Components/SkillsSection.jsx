import React from "react";
import SkillCircleGroups from "../SkillCircleGroups";

export default function SkillsSection() {
  return (
    <section id="skills" className="bg-[#252c3c] py-16">
      <h2 className="text-4xl font-extrabold mb-10 text-center">I'm Skilled At</h2>
      <div className="container mx-auto px-4">
        <SkillCircleGroups />
      </div>
    </section>
  );
}
