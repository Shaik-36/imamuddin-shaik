import avatar from "./assets/profile.jpeg";

const content = {
  personal: {
    name: "Imamuddin Shaik",
    tagline: "Building intelligent web solutions with MERN and AI.",
    description:
      "I’m a full-stack developer specializing in building scalable web applications using the MERN stack (MongoDB, Express.js, React, Node.js). I also integrate AI/ML models to create intelligent and data-driven solutions. Passionate about solving real-world problems with clean, efficient, and modern technologies.",
    avatar: avatar,
    resumeLink: "#", // or your resume link
    contactButtonText: "Contact Me",
    socialLinks: {
      linkedin: "https://linkedin.com/in/yourprofile",
      github: "https://github.com/yourprofile",
      twitter: "https://twitter.com/yourprofile",
    },
  },

  frontEndSkills: ["HTML", "CSS", "JavaScript", "React", "Redux", "Next.js"],
  backEndSkills: ["Node.js", "Express", "MongoDB", "GraphQL", "Python", "AWS"],
  toolsSkills: ["Docker", "VS Code", "TypeScript", "GitHub", "Figma", "Jest"],

  projects: [
    {
      title: "AI-Powered E-Commerce Platform",
      description:
        "A full-stack e-commerce platform with AI-driven product recommendations and personalized experiences. Built with React, Node.js, and TensorFlow.",
      link: "https://github.com/yourprofile/ai-ecommerce",
    },
    {
      title: "Chatbot with NLP",
      description:
        "A conversational AI chatbot using NLP, integrated into a React frontend with a Node.js backend.",
      link: "https://github.com/yourprofile/chatbot-nlp",
    },
    {
      title: "Real-Time Analytics Dashboard",
      description:
        "A real-time analytics dashboard for monitoring user activity and system performance. Built with React, Express.js, and MongoDB.",
      link: "https://github.com/yourprofile/analytics-dashboard",
    },
  ],

  experience: {
    work: [
      "🛠 Full-Stack Developer at Tech Innovators (2022 - Present)",
      "💻 AI Developer Intern at AI Solutions (2021 - 2022)",
      "🌐 Freelance Web Developer (2020 - 2021)",
    ],
    education: [
      "🎓 B.Tech in Computer Science and Engineering",
      "🎓 Certified Full-Stack Web Development Bootcamp",
      "🎓 Machine Learning Specialization (Coursera)",
    ],
  },
};

export default content;
