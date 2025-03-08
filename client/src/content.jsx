import avatar from "./assets/website-logo.jpeg";

const content = {
  personal: {
    name: "Imamuddin Shaik",
    tagline: "Building intelligent web solutions with MERN and AI.",
    description:
      "I’m a full-stack developer specializing in building scalable web applications using the MERN stack (MongoDB, Express.js, React, Node.js). I also integrate AI/ML models to create intelligent and data-driven solutions. Passionate about solving real-world problems with clean, efficient, and modern technologies.",
    avatar: avatar,
    resumeLink: "./assets/imam_resume.pdf", // or your real link
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


  

  projects: {

    "Machine-Learning": [
      {
        title: "Stock Price Prediction using LSTM & Sentiment Analysis",
        description:
          "Predicts future stock prices based on historical data while integrating sentiment analysis from news articles and social media.",
        techStack: "Python, TensorFlow, LSTM, Pandas, NumPy, Scikit-learn, VADER, TextBlob, Yahoo Finance API, React, Tailwind CSS, Appwrite",
        link: "https://github.com/Shaik-36/stock-price-prediction-dissertation",
        image: "https://private-user-images.githubusercontent.com/85993981/419914775-0488be30-2d78-4a74-b596-529e22f99841.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NDEzOTQ5MTMsIm5iZiI6MTc0MTM5NDYxMywicGF0aCI6Ii84NTk5Mzk4MS80MTk5MTQ3NzUtMDQ4OGJlMzAtMmQ3OC00YTc0LWI1OTYtNTI5ZTIyZjk5ODQxLnBuZz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNTAzMDglMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjUwMzA4VDAwNDMzM1omWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPTUzZDA4NmEzNTVmMGU0ZTVjNDhiZjc4NDUwYjkzM2E0NGFiNzQ3N2FlMmJkNzNkYmNmNzEzNDhjZjJkMDNmZWUmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0In0.dY22__E4EDw8T9ISbl7rHqT7hu_L8rGWoQhB6W7wf-A",
      }, 
    ],


    "JavaScript": [
      {
        title: "Realtime Chat Application",
        description:
          "A real-time chat application with messaging, notifications, and online status tracking, built using React, Node.js, and Socket.io.",
        techStack: "React, Node.js, Express, MongoDB, Socket.io, JWT, Context API, bcrypt, React Bootstrap",
        link: "https://github.com/Shaik-36/chat-app",
        image: "https://private-user-images.githubusercontent.com/85993981/420544559-ac8f3c57-460e-4255-970f-cb04553373ea.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NDEzOTUwNjEsIm5iZiI6MTc0MTM5NDc2MSwicGF0aCI6Ii84NTk5Mzk4MS80MjA1NDQ1NTktYWM4ZjNjNTctNDYwZS00MjU1LTk3MGYtY2IwNDU1MzM3M2VhLnBuZz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNTAzMDglMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjUwMzA4VDAwNDYwMVomWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPTNjYzdmMzU5MDE1MGFjNTE5NTI0NTkzMjgwYjgzOWMwYjdmM2Q3YTljM2U0N2VmZTFkN2FlMzYzYmFiZGY1MDkmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0In0.nMOIgnevM7vK51hy26oNtkggDLMh3zNTgmrdSQ8sxDg",
      },
      {
        title: "Blog Website",
        description:
          "A feature-rich blog website built using React for the frontend and Appwrite for the backend, supporting authentication, rich text editing, and media storage.",
        techStack: "React, Appwrite, Redux Toolkit, TinyMCE, HTML React Parser, React Hook Form, Tailwind CSS",
        link: "https://github.com/Shaik-36/react-appwrite-blog-app",
        image: "https://private-user-images.githubusercontent.com/85993981/406667410-7722d6b6-4e2f-4189-b52b-c6d506a41118.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NDEzOTUxNzAsIm5iZiI6MTc0MTM5NDg3MCwicGF0aCI6Ii84NTk5Mzk4MS80MDY2Njc0MTAtNzcyMmQ2YjYtNGUyZi00MTg5LWI1MmItYzZkNTA2YTQxMTE4LnBuZz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNTAzMDglMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjUwMzA4VDAwNDc1MFomWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPWE5ZGM4NTAzMzc0ODE5MDI0MDM0MjQ0MzlhZTY1NmE5NjkwOTgwNDgxMDY5NTNlNTYyZGQyNTk4NWVmOGI2NjQmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0In0.DYEBRz7AnGczSp-iBhTjRR95hsI_jiivhd73MV7ZyNE",
      },
      {
        title: "Currency Converter",
        description:
          "A real-time currency converter that fetches current exchange rates via an API and displays the conversion using React and Tailwind CSS.",
        techStack: "React, Tailwind CSS, Vite, API Integration",
        link: "https://github.com/Shaik-36/currency-converter",
        image: "https://private-user-images.githubusercontent.com/85993981/378786043-a36abe7f-d4b9-4012-97ec-97e02f25dbcb.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NDEzOTUyMDksIm5iZiI6MTc0MTM5NDkwOSwicGF0aCI6Ii84NTk5Mzk4MS8zNzg3ODYwNDMtYTM2YWJlN2YtZDRiOS00MDEyLTk3ZWMtOTdlMDJmMjVkYmNiLnBuZz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNTAzMDglMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjUwMzA4VDAwNDgyOVomWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPTNmMTUzMGM5ZGRkOWNmZTJjMWNlNjA1MGFlZjgwYzlhNTBkYmE0OWY5N2VjMmI5YzFjOTY1ODIxNDc3NTU2ODgmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0In0.zzZkPoxQAAtQ-IcUG2gK_8-W9PnMixiseI2sV7Ba0K0",
      },
      {
        title: "Password Generator",
        description:
          "A secure password generator built using React that allows users to generate random passwords with adjustable length, numbers, and special characters, displaying the password strength dynamically.",
        techStack: "React, Tailwind CSS, React Hooks",
        link: "https://github.com/Shaik-36/password_generator",
        image: "https://private-user-images.githubusercontent.com/85993981/378415869-4dc9e2b0-2e18-42a4-b9dd-dc76942b3837.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NDEzOTUyNzUsIm5iZiI6MTc0MTM5NDk3NSwicGF0aCI6Ii84NTk5Mzk4MS8zNzg0MTU4NjktNGRjOWUyYjAtMmUxOC00MmE0LWI5ZGQtZGM3Njk0MmIzODM3LnBuZz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNTAzMDglMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjUwMzA4VDAwNDkzNVomWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPTkzYzkyOGMxOTBkNzdhODdjYjM5MTg4YzZiMzBjM2E2ZWM0MDBjOTBhODJmZWEyOWFkNjBlOTMyYjEyZjEzNDQmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0In0.R9wAj2ma_K0xwtfDrg5Lhm1SF2dvlyasBu0z9xlFYb4",
      },
      {
        title: "Keeper Notes App",
        description:
          "A simple and elegant note-taking app built using React and Material UI. Users can add and delete notes dynamically, with a clean UI inspired by Google Keep.",
        techStack: "React, Material UI, JavaScript, HTML/CSS3",
        link: "https://github.com/Shaik-36/keeper-app-react",
        image: "https://private-user-images.githubusercontent.com/85993981/420545298-b1b0e1cb-6578-49cf-a46c-8d45b77e9492.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NDEzOTU2MTEsIm5iZiI6MTc0MTM5NTMxMSwicGF0aCI6Ii84NTk5Mzk4MS80MjA1NDUyOTgtYjFiMGUxY2ItNjU3OC00OWNmLWE0NmMtOGQ0NWI3N2U5NDkyLnBuZz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNTAzMDglMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjUwMzA4VDAwNTUxMVomWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPTYwZGQxNzI0ODIxOTZlMzExYThlZGYxZWFjMGYxNDE2ZDU3NjNiZDQyZTJjZDY1YzE3NjMwMjNkYTQyYjI2NmMmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0In0.XrEZEzRLeufxRhgHCdQtbJlxrMdZTPl0_aaLFONdUys",
      },
      {
        title: "Weather App",
        description:
          "A modern weather application built using React that fetches real-time weather data from an API and displays temperature, humidity, wind speed, and other weather parameters.",
        techStack: "React, API Integration, Tailwind CSS, Vite",
        link: "https://github.com/Shaik-36/Weather_App",
        image: "https://private-user-images.githubusercontent.com/85993981/420545790-fec71dcf-f106-4c10-9caa-74cc3426093a.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NDEzOTU5MzcsIm5iZiI6MTc0MTM5NTYzNywicGF0aCI6Ii84NTk5Mzk4MS80MjA1NDU3OTAtZmVjNzFkY2YtZjEwNi00YzEwLTljYWEtNzRjYzM0MjYwOTNhLnBuZz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNTAzMDglMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjUwMzA4VDAxMDAzN1omWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPTBkZWZhMGE3MGNhN2IzZGUxNjVkMWNhZWFlNzdkYmE1YjRiMmMzM2RlNTI5YmE2YTVmM2RhZTQ4ZTVmYzBmZTkmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0In0.ok5ZbHtYlGOTGfHMcCpanAx7cMl-0pLatURFKYELh8o",
      }
    ],


    "Python": [

    ],

    "Java": [

    ],

    "C#": [

    ]

    
  },

};

export default content;
