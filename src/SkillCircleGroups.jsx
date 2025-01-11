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
  const { frontEndSkills, backEndSkills, toolsSkills, otherTechSkills } = content;

  const iconMap = {
    HTML: <FaHtml5 size={36} className="text-orange-500" />,
    CSS: <FaCss3Alt size={36} className="text-blue-500" />,
    JavaScript: <FaJsSquare size={36} className="text-yellow-400" />,
    React: <FaReact size={36} className="text-cyan-400" />,
    Redux: <FaReact size={36} className="text-purple-400" />,
    "Next.js": <FaReact size={36} className="text-gray-100" />,
    "Node.js": <FaNodeJs size={36} className="text-green-500" />,
    Express: <FaNodeJs size={36} className="text-gray-400" />,
    MongoDB: <FaDatabase size={36} className="text-green-600" />,
    GraphQL: <FaDatabase size={36} className="text-pink-400" />,
    Python: <FaPython size={36} className="text-blue-300" />,
    AWS: <FaAws size={36} className="text-orange-400" />,
    Docker: <FaDocker size={36} className="text-blue-300" />,
    "VS Code": <FaGithub size={36} className="text-blue-500" />,
    TypeScript: <FaJsSquare size={36} className="text-blue-500" />,
    GitHub: <FaGithub size={36} className="text-gray-200" />,
    Figma: <FaFigma size={36} className="text-pink-500" />,
    Jest: <FaNpm size={36} className="text-red-600" />,
  };

  function SkillGroup({ title, skills }) {
    return (
      <div className="bg-gray-700 rounded-lg p-6 shadow-lg flex flex-col items-center">
        <h3 className="text-xl font-bold mb-4 uppercase tracking-wider text-white">
          {title}
        </h3>
        <div className="w-full flex flex-wrap justify-center gap-4">
          {skills.map((skill, i) => (
            <motion.div
              key={skill}
              className="flex flex-col items-center"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              whileHover={{ scale: 1.1 }}
            >
              {iconMap[skill] || <FaReact size={36} className="text-cyan-400" />}
              <p className="text-xs text-gray-300 mt-1">{skill}</p>
            </motion.div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 justify-items-center">
      <SkillGroup title="Front End" skills={frontEndSkills} />
      <SkillGroup title="Back End" skills={backEndSkills} />
      <SkillGroup title="Tools" skills={toolsSkills} />
      <SkillGroup title="Other Tech" skills={otherTechSkills} />
    </div>
  );
}

export default SkillCircleGroups;
