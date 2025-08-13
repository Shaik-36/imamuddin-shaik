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
      "I’m a full-stack developer specializing in building scalable web applications using the MERN stack (MongoDB, Express.js, React, Node.js). I also integrate AI/ML models to create intelligent and data-driven solutions. Passionate about solving real-world problems with clean, efficient, and modern technologies.",
    avatar: avatar,
    email: "imamshan369@gmail.com",
    phone: "+44 7342 149330",
    location: "London, England, United Kingdom",
    resumeLink: "./assets/imam_resume.pdf",
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
        title: "Founding Software Engineer",
        company: "ZenithWave Capital, London, England, United Kingdom",
        period: "February 2025 – July 2025",
        description: [
          "Founding team member at a financial technology startup focused on innovative capital solutions.",
          "Architected and developed core platform infrastructure from the ground up.",
          "Collaborated with stakeholders to define technical vision and product roadmap.",
          "Led engineering decisions and technology stack selection for scalable financial applications.",
        ],
      },
      {
        title: "Full Stack Developer Intern",
        company: "Radical AI, London, UK",
        period: "May 2024 – Dec 2024",
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
      {
        title: "Associate Software Engineer",
        company: "DXC Technology, Bangalore",
        period: "Aug 2021 – Dec 2022",
        description: [
          "Identified areas for improvement, designed workflows reducing human effort by 40%, enhancing operational efficiency.",
          "Delivered an average of 8 automated workflows/scripts per month to streamline customer support processes.",
          "Achieved an average resolution time of under 2 hours, ensuring prompt responses to customer inquiries.",
          "Maintained an 85% integration success rate and kept security incidents below 0.5%, ensuring compliance and data protection.",
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
