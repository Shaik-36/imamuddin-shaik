import avatar from "./assets/profile.jpeg";

const content = {
  personal: {
    name: "Imamuddin Shaik",
    tagline: "Building intelligent web solutions with MERN and AI.",
    description:
      "I’m a full-stack developer specializing in building scalable web applications using the MERN stack (MongoDB, Express.js, React, Node.js). I also integrate AI/ML models to create intelligent and data-driven solutions. Passionate about solving real-world problems with clean, efficient, and modern technologies.",
    avatar: avatar,
    resumeLink: "#", // or your real link
    contactButtonText: "Contact Me",
    socialLinks: {
      linkedin: "https://www.linkedin.com/in/shaik-imam",
      github: "https://github.com/shaik-36",
      twitter: "https://x.com/Imam_Shaik_",
    },
  },

  frontEndSkills: [
    "JavaScript (ES6+)",
    "TypeScript",
    "React.js",
    "Next.js",
    "Redux",
    "Tailwind CSS",
    "MUI",
    "Bootstrap",
  ],
  backEndSkills: [
    "Node.js",
    "Express.js",
    "MongoDB",
    "MySQL",
    "Firebase",
    "Mongoose",
    "Azure (AZ-900 Certified)",
    "AWS",
    "GCP",
  ],
  toolsSkills: [
    "MERN Stack",
    "Git",
    "Docker",
    "Postman",
    "Vite",
    "Webpack",
    "Agile Methodologies",
  ],
  otherTechSkills: [
    "RESTful APIs",
    "Microservices Architecture",
    "DSA",
    "Performance Optimization",
    "UI/UX Design",
  ],

  experience: {
    work: [
      {
        title: "Full Stack Developer Intern",
        company: "Radical AI, London, UK",
        period: "May 2024 – Present",
        description: [
          "Designed a modular on-boarding Welcome Screen with React.js and MUI, driving a 25% increase in user engagement.",
          "Enhanced application responsiveness by 35% using custom React hooks for efficient state management.",
          "Secured user login with Firebase Authentication, achieving 99.9% uptime while scaling for 10k+ users.",
          "Streamlined performance with memoization and on-demand component loading, cutting load times by 30%.",
          "Collaborated with teams to integrate Next.js for server-side rendering, increasing SEO performance by 40%.",
        ],
      },
      {
        title: "C# Developer Intern",
        company: "Dot Net Technologies, Kadapa, India",
        period: "Sept 2022 – Dec 2022",
        description: [
          "Developed a web application for student registration, enabling 200+ students to register and manage their profiles.",
          "Designed a dynamic registration form ensuring data accuracy with 100% form validation.",
          "Implemented a secure SQL Server database, reducing data retrieval time by 30%.",
          "Decreased development time by 20% through the adoption of the ASP.NET MVC framework for modular and maintainable architecture.",
          "Improved user experience with an intuitive interface, increasing form completion rates by 25%.",
        ],
      },
    ],
    education: [
      {
        degree: "MSc in Computer Science",
        institution: "University of Huddersfield, UK",
        period: "2023 – 2024",
      },
      {
        degree: "Bachelor’s Degree in Engineering",
        institution: "JNTU, Anantapur, India",
        period: "2017 – 2021",
      },
    ],
  },

  projects: [
    {
      title: "YouTube - Backend",
      description:
        "Developed a scalable and secure backend system for a YouTube-like platform, supporting 10k+ users with optimized APIs.",
      techStack:
        "Node.js, Express.js, MongoDB, Mongoose, Cloudinary, Multer, JWT, bcrypt, dotenv",
      link: "https://github.com/yourprofile/ai-ecommerce",
    },
    {
      title: "Blog Website",
      description:
        "Built a scalable blogging platform supporting 500+ users with 10k+ daily requests, integrated TinyMCE, optimized state with Redux Toolkit.",
      techStack: "React.js, Redux Toolkit, Appwrite, Cloudinary",
      link: "https://blog-appwrite-five.vercel.app/",
    },
    {
      title: "Currency Converter",
      description:
        "Engineered a live exchange rate integration for 100+ currencies with 99.9% accuracy, deployed with Vite for fast builds.",
      techStack: "React.js, Redux Toolkit, Vite, Tailwind CSS, REST API",
      link: "https://currency-converter-flame-sigma.vercel.app/",
    },
  ],
};

export default content;
