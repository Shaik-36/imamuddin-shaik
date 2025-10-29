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
    tagline: "Full Stack Engineer | AI-Driven Web Developer | React & FastAPI Expert",
    description:
      "Accomplished Software Engineer currently building AI-driven full-stack web applications with React, Next.js, and FastAPI. Experienced in end-to-end product delivery from architecture to CI/CD deployment, integrating LLMs (OpenAI GPT-4, Anthropic Claude, Google Vertex AI) using LangChain and Retrieval-Augmented Generation (RAG). Passionate about transforming business ideas into scalable, production-ready applications.",
    avatar: avatar,
    email: "imamuddin.dev@gmail.com",
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
    "Next.js",
    "Redux Toolkit",
    "Tailwind CSS",
    "Material-UI",
    "React Native",
    "Vite",
    "HTML/CSS",
  ],
  backEndSkills: [
    "FastAPI",
    "Node.js",
    "Express.js",
    "RESTful APIs",
    "GraphQL",
    "Microservices",
    "Django",
    "Flask",
  ],
  toolsSkills: [
    "AWS",
    "Firebase",
    "Vercel",
    "Docker",
    "Kubernetes",
    "GitHub Actions",
    "Jenkins",
    "CI/CD Pipelines",
    "Playwright",
    "Jest",
    "ESLint",
    "Prettier",
    "Postman",
  ],
  otherTechSkills: [
    "LangChain",
    "RAG",
    "OpenAI GPT-4",
    "Anthropic Claude",
    "Google Vertex AI",
    "Vector Databases",
    "MongoDB",
    "PostgreSQL",
    "Firebase Firestore/Auth",
    "LLM Integration",
    "Prompt Engineering",
    "Machine Learning",
    "Python",
    "C#",
    "Java",
    "Business Analytics",
    "UI/UX Design",
  ],

  experience: {
    work: [
      {
        title: "Software Engineer",
        company: "Alankrita Group of Companies",
        period: "July 2025 – Present",
        location: "London, England, United Kingdom",
        description: [
          "Architecting and deploying AI-driven web platforms using Next.js 14, React 18, and TypeScript with scalable FastAPI/Node.js backends.",
          "Integrating LLMs (OpenAI GPT-4, Anthropic Claude, Google Vertex AI) via LangChain and RAG architectures for intelligent automation.",
          "Developing microservices and RESTful APIs across MongoDB, PostgreSQL, and Firebase with observability-first practices—structured logging, distributed tracing, and performance monitoring.",
          "Implementing automated testing with Playwright (E2E) and Jest (unit), reducing production incidents through proactive QA coverage.",
          "Managing CI/CD pipelines using GitHub Actions, Docker, and multi-cloud deployment (AWS, Firebase, Vercel) to achieve minute-level rollouts.",
          "Collaborating cross-functionally with AI, UX, and product teams to prototype, test, and deploy high-impact AI features at scale.",
        ],
      },
      {
        title: "Founding Software Engineer",
        company: "ZenithWave Capital",
        period: "February 2025 – July 2025",
        location: "London, England, United Kingdom",
        description: [
          "Led the design and deployment of fintech and learning platforms, delivering trading tools, courses, and AI-powered insights.",
          "Architected zenithwavecapital.com using Next.js, React, Tailwind CSS, and Firebase with modular, SEO-optimized pages and animation effects.",
          "Developed LMS (learn.zenithwavecapital.com) integrating Zoom, Stripe, webinars, coupons, and analytics dashboards using LearnWorlds Pro and Firebase backend.",
          "Built backend workflows with Firebase Cloud Functions, Auth, and Firestore, with Rowy for visual management and admin dashboards.",
          "Implemented CI/CD using GitHub Actions with automated testing (Playwright + Jest) and enforced linting (ESLint, Prettier) for consistent code quality.",
          "Maintained agile workflows with ClickUp and observability tools for proactive issue detection and performance tracking.",
        ],
      },
      {
        title: "Software Engineer",
        company: "Reality AI Lab",
        period: "April 2024 – January 2025",
        location: "London, England, United Kingdom",
        description: [
          "Built a modular onboarding UI with React.js and MUI, boosting engagement by 25%.",
          "Optimized app performance by 35% through custom hooks and memoization.",
          "Developed RESTful and GraphQL APIs for real-time data synchronization.",
          "Implemented secure Firebase Authentication and OAuth for 10k+ active users.",
          "Automated deployments via CI/CD (Jenkins, Docker, Kubernetes) with AWS hosting, cutting downtime by 30%.",
          "Worked with UX teams to improve accessibility, responsiveness, and SEO visibility (+40% traffic).",
        ],
      },
      {
        title: "Associate Software Engineer",
        company: "DXC Technology",
        period: "August 2021 – December 2022",
        location: "Bangalore, India",
        description: [
          "Developed responsive web interfaces using React.js and JavaScript frameworks.",
          "Collaborated with design teams to enhance UI/UX and improve engagement.",
          "Integrated RESTful APIs for seamless frontend–backend communication.",
          "Optimized performance, reducing page load times by 20%.",
          "Participated in Agile sprints, code reviews, and assisted system migration from legacy apps.",
        ],
      },
    ],
    education: [
      {
        degree: "Master of Science, Computer Science",
        institution: "University of Huddersfield",
        period: "January 2023 – January 2024",
        gpa: "GPA: 4",
      },
      {
        degree: "Bachelor of Engineering, Mechanical Engineering",
        institution: "Jawaharlal Nehru Technological University",
        period: "August 2017 – August 2021",
        gpa: "GPA: 4",
      },
    ],
  },

  projects: {
    "Machine-Learning": [
      {
        title: "FlexyWork AI – AI Workforce Agent",
        description:
          "Enterprise-grade AI-powered workforce automation platform for shift confirmations and staff coordination. Built MVP now rolling out to security and healthcare clients. Integrates AI, voice, SMS, and real-time dashboards to cut manual scheduling by 60%.",
        techStack:
          "FastAPI, React + Vite, Tailwind CSS, MongoDB, Twilio Voice/SMS, Builder.io, Lovable, Claude AI, Replit AI, OpenAI GPT-4, JWT, CORS, Excel Upload, RAG Pipeline",
        link: "https://www.flexyworkai.com/", // (replace with actual repo or demo URL)
        image: FlexyWork-AI-Image, // or use a new image: e.g., flexyworkImg
      },
      {
        title: "Stock Price Prediction using LSTM & Sentiment Analysis",
        description:
          "Predicts stock price trends by combining LSTM models with sentiment data from financial news and social media for better forecasting accuracy.",
        techStack:
          "Python, TensorFlow, LSTM, Pandas, NumPy, Scikit-learn, VADER, TextBlob, Yahoo Finance API, React, Tailwind CSS, Appwrite",
        link: "https://github.com/Shaik-36/stock-price-prediction-dissertation",
        image: stockPriceImg,
      },
    ],

    "JavaScript": [
      {
        title: "Realtime Chat Application",
        description:
          "A modern chat application with instant messaging, notifications, and status tracking using React, Node.js, and Socket.io.",
        techStack:
          "React, Node.js, Express, MongoDB, Socket.io, JWT, Context API, bcrypt, React Bootstrap",
        link: "https://github.com/Shaik-36/chat-app",
        image: chatAppImg,
      },
      {
        title: "Blog Website",
        description:
          "A feature-rich blog app with authentication, post management, and media uploads using Appwrite and React.",
        techStack:
          "React, Appwrite, Redux Toolkit, TinyMCE, HTML React Parser, React Hook Form, Tailwind CSS",
        link: "https://github.com/Shaik-36/react-appwrite-blog-app",
        image: blogImg,
      },
      {
        title: "Currency Converter",
        description:
          "Real-time exchange rate converter fetching live API data using React and Tailwind CSS.",
        techStack: "React, Tailwind CSS, Vite, API Integration",
        link: "https://github.com/Shaik-36/currency-converter",
        image: currencyImg,
      },
      {
        title: "Password Generator",
        description:
          "Customizable password generator displaying real-time strength indicators.",
        techStack: "React, Tailwind CSS, React Hooks",
        link: "https://github.com/Shaik-36/password_generator",
        image: passwordGeneratorImg,
      },
      {
        title: "Keeper Notes App",
        description:
          "A simple note-taking app inspired by Google Keep, built with React and MUI.",
        techStack: "React, Material UI, JavaScript, HTML/CSS3",
        link: "https://github.com/Shaik-36/keeper-app-react",
        image: keeperImg,
      },
      {
        title: "Weather App",
        description:
          "A responsive weather dashboard displaying real-time climate parameters using public APIs.",
        techStack: "React, API Integration, Tailwind CSS, Vite",
        link: "https://github.com/Shaik-36/Weather_Show",
        image: weatherImg,
      },
    ],

    "Python": [],
    "Java": [],
    "C#": [],
  },
};

export default content;
