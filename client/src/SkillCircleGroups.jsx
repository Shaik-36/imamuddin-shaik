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
  FaRobot,
  FaGoogle,
  FaMicrosoft,
  FaJava,
  FaCode,
  FaTools,
  FaChartLine,
  FaShieldAlt,
  FaBrain,
  FaFileExcel,
  FaSearch,
} from "react-icons/fa";

import {
  SiTypescript,
  SiNextdotjs,
  SiTailwindcss,
  SiMui,
  SiRedux,
  SiMongodb,
  SiMysql,
  SiPostgresql,
  SiFirebase,
  SiGraphql,
  SiExpress,
  SiFastapi,
  SiFlask,
  SiDjango,
  SiDotnet,
  SiVercel,
  SiPlaywright,
  SiJest,
  SiPostman,
  SiVite,
  SiRailway,
  SiGooglecloud,
  SiCsharp,
  SiTensorflow,
  SiPandas,
  SiMatlab,
} from "react-icons/si";

import content from "./content";

function SkillCircleGroups() {
  const { frontEndSkills, backEndSkills, toolsSkills, otherTechSkills } = content;

  const iconMap = {
    // Frontend Technologies
    "JavaScript": <SiTypescript size={40} className="text-yellow-400" />,
    "TypeScript": <SiTypescript size={40} className="text-blue-500" />,
    "React.js": <FaReact size={40} className="text-cyan-400" />,
    "React Native": <FaReact size={40} className="text-cyan-300" />,
    "Next.js": <SiNextdotjs size={40} className="text-white" />,
    "Redux Toolkit": <SiRedux size={40} className="text-purple-500" />,
    "Tailwind CSS": <SiTailwindcss size={40} className="text-teal-400" />,
    "MUI": <SiMui size={40} className="text-blue-600" />,
    "HTML/CSS": <FaHtml5 size={40} className="text-orange-500" />,
    "Vite": <SiVite size={40} className="text-yellow-500" />,

    // Backend Technologies  
    "Node.js": <FaNodeJs size={40} className="text-green-500" />,
    "Express.js": <SiExpress size={40} className="text-gray-300" />,
    "FastAPI": <SiFastapi size={40} className="text-green-400" />,
    "Flask": <SiFlask size={40} className="text-white" />,
    "Django": <SiDjango size={40} className="text-green-600" />,
    "ASP.NET": <SiDotnet size={40} className="text-purple-600" />,
    "MongoDB": <SiMongodb size={40} className="text-green-500" />,
    "MySQL": <SiMysql size={40} className="text-blue-600" />,
    "PostgreSQL": <SiPostgresql size={40} className="text-blue-700" />,
    "Firebase": <SiFirebase size={40} className="text-orange-500" />,
    "GraphQL": <SiGraphql size={40} className="text-pink-500" />,
    "REST APIs": <FaCode size={40} className="text-blue-400" />,

    // Tools & Cloud
    "AWS": <FaAws size={40} className="text-orange-400" />,
    "Microsoft Azure": <FaMicrosoft size={40} className="text-blue-500" />,
    "Google Cloud Platform": <SiGooglecloud size={40} className="text-red-500" />,
    "Docker": <FaDocker size={40} className="text-blue-400" />,
    "Git": <FaGithub size={40} className="text-orange-500" />,
    "GitHub Actions": <FaGithub size={40} className="text-purple-400" />,
    "Jest": <SiJest size={40} className="text-red-600" />,
    "Playwright": <SiPlaywright size={40} className="text-green-500" />,
    "Postman": <SiPostman size={40} className="text-orange-600" />,
    "Vercel": <SiVercel size={40} className="text-white" />,
    "Railway": <SiRailway size={40} className="text-purple-500" />,

    // Other Technologies
    "C#": <SiCsharp size={40} className="text-purple-600" />,
    "Python": <FaPython size={40} className="text-blue-400" />,
    "Java": <FaJava size={40} className="text-red-500" />,
    "Machine Learning": <FaBrain size={40} className="text-pink-400" />,
    "LLM": <FaRobot size={40} className="text-green-400" />,
    "Prompt Engineering": <FaBrain size={40} className="text-purple-400" />,
    "UI/UX Design": <FaFigma size={40} className="text-pink-500" />,
    "Business Analytics": <FaChartLine size={40} className="text-blue-500" />,
    "SEO": <FaSearch size={40} className="text-yellow-500" />,
    "Pandas": <SiPandas size={40} className="text-blue-600" />,
    "Excel/Numbers/Sheets": <FaFileExcel size={40} className="text-green-600" />,
    "MATLAB": <SiMatlab size={40} className="text-orange-600" />,
  };

  const skillGroups = [
    {
      title: "Frontend Development",
      icon: <FaReact className="text-cyan-400" />,
      skills: frontEndSkills,
      gradient: "from-cyan-500/20 to-blue-500/20",
      borderColor: "border-cyan-500/30",
    },
    {
      title: "Backend Development", 
      icon: <FaNodeJs className="text-green-400" />,
      skills: backEndSkills,
      gradient: "from-green-500/20 to-emerald-500/20",
      borderColor: "border-green-500/30",
    },
    {
      title: "DevOps & Tools",
      icon: <FaTools className="text-orange-400" />,
      skills: toolsSkills,
      gradient: "from-orange-500/20 to-yellow-500/20", 
      borderColor: "border-orange-500/30",
    },
    {
      title: "Specialized Skills",
      icon: <FaBrain className="text-purple-400" />,
      skills: otherTechSkills,
      gradient: "from-purple-500/20 to-pink-500/20",
      borderColor: "border-purple-500/30",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  const skillVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.3,
      },
    },
    hover: {
      scale: 1.05,
      y: -5,
      transition: {
        duration: 0.2,
      },
    },
  };

  function SkillGroup({ title, icon, skills, gradient, borderColor }) {
    return (
      <motion.div
        variants={itemVariants}
        className={`relative overflow-hidden rounded-2xl bg-gradient-to-br ${gradient} 
          backdrop-blur-sm border ${borderColor} p-8 shadow-xl hover:shadow-2xl 
          transition-all duration-300 group`}
      >
        <div className="absolute inset-0 bg-black/5 group-hover:bg-black/10 transition-colors duration-300" />
        
        <div className="relative z-10">
          <div className="flex items-center gap-3 mb-6">
            <div className="text-2xl">{icon}</div>
            <h3 className="text-xl font-bold text-white">{title}</h3>
          </div>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {skills.map((skill, i) => (
              <motion.div
                key={skill}
                variants={skillVariants}
                initial="hidden"
                animate="visible"
                whileHover="hover"
                className="flex flex-col items-center p-3 rounded-xl bg-white/10 
                  backdrop-blur-sm hover:bg-white/20 transition-all duration-300 
                  border border-white/10 hover:border-white/30"
                style={{ animationDelay: `${i * 0.05}s` }}
              >
                <div className="mb-2 flex items-center justify-center h-12">
                  {iconMap[skill] || <FaRobot size={36} className="text-gray-400" />}
                </div>
                <p className="text-xs text-center text-gray-200 font-medium leading-tight">
                  {skill}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    );
  }

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-7xl mx-auto"
    >
      {skillGroups.map((group, index) => (
        <SkillGroup
          key={group.title}
          title={group.title}
          icon={group.icon}
          skills={group.skills}
          gradient={group.gradient}
          borderColor={group.borderColor}
        />
      ))}
    </motion.div>
  );
}

export default SkillCircleGroups;
