import avatar from "./assets/website-logo.jpeg";

// Import images explicitly at the top
import stockPriceImg from './images/stock-price.png';
import chatAppImg from './images/chat-app.png';
import blogImg from './images/blog.png';
import currencyImg from './images/currency.png';
import passwordGeneratorImg from './images/password-generate.png';
import keeperImg from './images/keeper.png';
import weatherImg from './images/weather.png';



const content = {
  personal: {
    name: "IMAMUDDIN SHAIK",
    tagline: "Founding Software Engineer | Full-Stack Developer with AI",
    description:
      "Founding Software Engineer with expertise in React.js, Node.js, and AI integration. Based in London, I build scalable web applications and AI-powered solutions for startups and enterprises. Passionate about transforming ideas into production-ready applications with modern tech stacks.",
    avatar: avatar,
    email: "imamshan369@gmail.com",
    phone: "+44 7342 149330",
    location: "London, England, United Kingdom",
    resumeLink: "./assets/imam_resume.pdf",
    contactButtonText: "Contact Me",
    socialLinks: {
      linkedin: "https://linkedin.com/in/shaik-imam",
      github: "https://github.com/shaik-36",
      twitter: "https://x.com/Imam_Shaik_",
      portfolio: "https://imamuddin-shaik.vercel.app/",
    },
  },

  frontEndSkills: [
    "JavaScript",
    "TypeScript", 
    "React.js",
    "React Native",
    "Next.js",
    "Redux Toolkit",
    "Tailwind CSS",
    "MUI",
    "HTML/CSS",
    "Vite",
  ],
  backEndSkills: [
    "Node.js",
    "Express.js",
    "FastAPI",
    "Flask",
    "Django",
    "ASP.NET",
    "MongoDB",
    "MySQL",
    "PostgreSQL",
    "Firebase",
    "GraphQL",
    "REST APIs",
  ],
  toolsSkills: [
    "AWS",
    "Microsoft Azure",
    "Google Cloud Platform",
    "Docker",
    "Git",
    "GitHub Actions",
    "Jest",
    "Playwright",
    "Postman",
    "Vercel",
    "Railway",
  ],
  otherTechSkills: [
    "C#",
    "Python",
    "Java",
    "Machine Learning",
    "LLM",
    "Prompt Engineering",
    "UI/UX Design",
    "Business Analytics",
    "SEO",
    "Pandas",
    "Excel/Numbers/Sheets",
    "MATLAB",
  ],

  experience: {
    work: [
      {
        title: "Founding Software Engineer",
        company: "ZenithWave Capital",
        period: "February 2025 – July 2025",
        location: "London, England, United Kingdom",
        description: [
          "Architected and deployed the company's public-facing site using Next.js 14, React 18 + Redux Toolkit, and Tailwind CSS, optimized for performance and accessibility, now serving 200+ learners.",
          "Used Builder.io and lovable for rapid, no-code landing page prototyping and seamless content updates by non-tech teams.",
          "Developed and maintained backend logic using Firebase Firestore, Rowy for visual data management, and Firebase Cloud Functions for custom workflows and secure form handling.",
          "Integrated Claude, OpenAI GPT-4, and Replit AI to enhance learning journeys, build chatbot interactions, auto-complete inputs, and dynamically populate student dashboards.",
          "Provisioned role-based Firebase Auth, assigning and publishing access to 200+ learners and staff, with admin overrides and audit logs.",
          "Stood up GitHub Actions CI/CD to Vercel with daily deployments along automation testing; integrated ESLint, Prettier, Playwright, Jest—cut release time from 2 days to 30 min.",
        ],
      },
      {
        title: "Front-End Developer (Internship)",
        company: "Reality AI Lab",
        period: "May 2024 – December 2024",
        location: "London, England, United Kingdom",
        description: [
          "Designed a modular onboarding Welcome Screen with React.js and MUI, styled variants prototyped in LESS and Foundation CSS, boosting user engagement by 25%",
          "Added custom React hooks and memoisation, improving render time by 35% (Chrome DevTools INP)",
          "Secured user login with Firebase Authentication, achieving 99.9% uptime while scaling for 10k+ users",
          "Integrated AWS Lambda–backed REST API for profile data; wrote Postman tests and error handling middleware",
          "Collaborated with teams to integrate Next.js for server-side rendering, increasing SEO performance by 40%",
          "Ported the Welcome flow to React Native (Expo) as a proof-of-concept, re-using 70% of existing React code for mobile.",
        ],
      },
      {
        title: "Associate Software Engineer",
        company: "DXC Technology",
        period: "August 2021 – December 2022",
        location: "Bangalore, KA, India",
        description: [
          "Worked primarily with JavaScript, building and maintaining frontend features using React.js and component libraries",
          "Assisted in developing scalable backend services using Node.js and Express.js, handling API requests",
          "Participated in writing and debugging RESTful APIs, ensuring smooth communication between frontend and backend",
          "Contributed to responsive UI development using Tailwind CSS, enhancing user experience across devices",
          "Supported integration of JWT authentication for secure session management and user access control",
          "Collaborated with senior developers to deploy apps on AWS and automate workflows via CI/CD pipelines.",
        ],
      },
    ],
    education: [
      {
        degree: "Master's, Computer Science",
        institution: "University of Huddersfield",
        period: "January 2023 – January 2024",
        gpa: "GPA: 4",
      },
      {
        degree: "Bachelor's, Mechanical Engineering",
        institution: "Jawaharlal Nehru Technological University",
        period: "July 2017 – July 2021",
        gpa: "GPA: 4",
      },
    ],
  },

  projects : {
    "Machine-Learning": [
      {
        title: "Stock Price Prediction using LSTM & Sentiment Analysis",
        description:
          "Predicts future stock prices based on historical data while integrating sentiment analysis from news articles and social media.",
        techStack: "Python, TensorFlow, LSTM, Pandas, NumPy, Scikit-learn, VADER, TextBlob, Yahoo Finance API, React, Tailwind CSS, Appwrite",
        link: "https://github.com/Shaik-36/stock-price-prediction-dissertation",
        image: stockPriceImg,
      }, 
    ],
  
    "JavaScript": [
      {
        title: "Realtime Chat Application",
        description:
          "A real-time chat application with messaging, notifications, and online status tracking, built using React, Node.js, and Socket.io.",
        techStack: "React, Node.js, Express, MongoDB, Socket.io, JWT, Context API, bcrypt, React Bootstrap",
        link: "https://github.com/Shaik-36/chat-app",
        image: chatAppImg,
      },
      {
        title: "Blog Website",
        description:
          "A feature-rich blog website built using React for the frontend and Appwrite for the backend, supporting authentication, rich text editing, and media storage.",
        techStack: "React, Appwrite, Redux Toolkit, TinyMCE, HTML React Parser, React Hook Form, Tailwind CSS",
        link: "https://github.com/Shaik-36/react-appwrite-blog-app",
        image: blogImg,
      },
      {
        title: "Currency Converter",
        description:
          "A real-time currency converter that fetches current exchange rates via an API and displays the conversion using React and Tailwind CSS.",
        techStack: "React, Tailwind CSS, Vite, API Integration",
        link: "https://github.com/Shaik-36/currency-converter",
        image: currencyImg,
      },
      {
        title: "Password Generator",
        description:
          "A secure password generator built using React that allows users to generate random passwords with adjustable length, numbers, and special characters, displaying the password strength dynamically.",
        techStack: "React, Tailwind CSS, React Hooks",
        link: "https://github.com/Shaik-36/password_generator",
        image: passwordGeneratorImg,
      },
      {
        title: "Keeper Notes App",
        description:
          "A simple and elegant note-taking app built using React and Material UI. Users can add and delete notes dynamically, with a clean UI inspired by Google Keep.",
        techStack: "React, Material UI, JavaScript, HTML/CSS3",
        link: "https://github.com/Shaik-36/keeper-app-react",
        image: keeperImg,
      },
      {
        title: "Weather App",
        description:
          "A modern weather application built using React that fetches real-time weather data from an API and displays temperature, humidity, wind speed, and other weather parameters.",
        techStack: "React, API Integration, Tailwind CSS, Vite",
        link: "https://github.com/Shaik-36/Weather_Show",
        image: weatherImg,
      }
    ],
  
    "Python": [],
  
    "Java": [],
  
    "C#": []
  },

};

export default content;
