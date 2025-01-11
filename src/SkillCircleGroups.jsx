import React from "react";
import { motion } from "framer-motion";
import {
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaReact,
  FaNodeJs,
  FaAws,
  FaPython,
  FaDocker,
  FaGithub,
  FaNpm,
  FaFigma,
  FaDatabase,
} from "react-icons/fa";

import content from "./content";

function SkillCircleGroups() {
  const { frontEndSkills, backEndSkills, toolsSkills } = content;

  // Map each skill to an icon
  const iconMap = {
    HTML: <FaHtml5 size={36} className="text-orange-500" />,
    CSS: <FaCss3Alt size={36} className="text-blue-500" />,
    JavaScript: <FaJsSquare size={36} className="text-yellow-400" />,
    React: <FaReact size={36} className="text-cyan-400" />,
    Redux: <FaReact size={36} className="text-purple-400" />, // or real Redux icon
    "Next.js": <FaReact size={36} className="text-gray-100" />, // or Next icon

    "Node.js": <FaNodeJs size={36} className="text-green-500" />,
    Express: <FaNodeJs size={36} className="text-gray-400" />,
    MongoDB: <FaDatabase size={36} className="text-green-600" />,
    GraphQL: <FaDatabase size={36} className="text-pink-400" />,
    Python: <FaPython size={36} className="text-blue-300" />,
    AWS: <FaAws size={36} className="text-orange-400" />,

    Docker: <FaDocker size={36} className="text-blue-300" />,
    "VS Code": <FaGithub size={36} className="text-blue-500" />, // or real VS Code icon
    TypeScript: <FaJsSquare size={36} className="text-blue-500" />,
    GitHub: <FaGithub size={36} className="text-gray-200" />,
    Figma: <FaFigma size={36} className="text-pink-500" />,
    Jest: <FaNpm size={36} className="text-red-600" />,
  };

  // Adjust circle radius & container size as you prefer
  const circleRadius = 70;

  // Place each skill at an angle around the circle
  const circularPosition = (index, total) => {
    const angle = (2 * Math.PI * index) / total;
    const x = circleRadius * Math.cos(angle);
    const y = circleRadius * Math.sin(angle);
    return { x, y };
  };

  function SkillGroup({ title, skills }) {
    return (
      <div className="bg-gray-700 rounded-lg p-6 shadow-lg flex flex-col items-center">
        <h3 className="text-xl font-bold mb-4 uppercase tracking-wider text-white">
          {title}
        </h3>
        <div className="relative w-[180px] h-[180px]">
          {skills.map((skill, i) => {
            const { x, y } = circularPosition(i, skills.length);
            return (
              <motion.div
                key={skill}
                className="absolute flex flex-col items-center"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                whileHover={{ scale: 1.1 }}
                style={{
                  left: 90 + x - 18, // half of 36
                  top: 90 + y - 18,
                }}
              >
                {iconMap[skill] || <FaReact size={36} className="text-cyan-400" />}
                <p className="text-xs text-gray-300 mt-1">{skill}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 justify-items-center">
      <SkillGroup title="Front End" skills={frontEndSkills} />
      <SkillGroup title="Back End" skills={backEndSkills} />
      <SkillGroup title="Tools" skills={toolsSkills} />
    </div>
  );
}

export default SkillCircleGroups;
