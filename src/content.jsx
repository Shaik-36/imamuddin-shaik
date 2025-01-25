import avatar from "./assets/website-logo.jpeg";

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
    JavaScript: [
      {
        title: "YouTube - Backend",
        description:
          "Developed a scalable and secure backend system for a YouTube-like platform, supporting 10k+ users with optimized APIs.",
        techStack: "Node.js, Express.js, MongoDB, Mongoose, JWT, bcrypt, dotenv",
        link: "https://github.com/Shaik-36/youtube-backend-app",
        image: "https://img.freepik.com/free-vector/realistic-multimedia-player-template_23-2148130954.jpg?t=st=1737814416~exp=1737818016~hmac=514c3d6647c7b52a42132b0aa8be6958c54f48d2ce868363686baf4d3fe79602&w=740", // Add your project image path here
      },
      {
        title: "Blog Website",
        description:
          "Built a scalable blogging platform supporting 500+ users with 10k+ daily requests, integrated TinyMCE, optimized state with Redux Toolkit.",
        techStack: "Python, BeautifulSoup, Requests, Pandas",
        link: "https://github.com/Shaik-36/react-appwrite-blog-app",
        image: "https://private-user-images.githubusercontent.com/85993981/406667410-7722d6b6-4e2f-4189-b52b-c6d506a41118.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3Mzc4MTU0NDEsIm5iZiI6MTczNzgxNTE0MSwicGF0aCI6Ii84NTk5Mzk4MS80MDY2Njc0MTAtNzcyMmQ2YjYtNGUyZi00MTg5LWI1MmItYzZkNTA2YTQxMTE4LnBuZz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNTAxMjUlMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjUwMTI1VDE0MjU0MVomWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPWVkOTdiMWM3MjBmMjE4YzlhN2M3Y2E3ZTY4NzMwMjUwMDZjMzUyMmU1OTRiNmNjMGYxODI2MjRjYTBkOTU0ZTImWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0In0.7Sj-oYQ3J0xYBf8BWqJLZ2-d67sZOad7W49m1-Wl7Ck", // Add your project image path here
      },
    ],
    Python: [
      {
        title: "YouTube Manager",
        description:
          "A command-line application for managing YouTube video databases with CRUD operations. Built using Python and SQLite, it allows users to add, list, update, and delete video records through a menu-driven interface.",
        techStack: "Python, SQLite",
        link: "https://github.com/YourGitHubUsername/youtube-manager",
        image: "https://private-user-images.githubusercontent.com/85993981/406668202-48ef3618-8cf7-4f43-9d54-594d0d03bd60.jpg?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3Mzc4MTYyOTUsIm5iZiI6MTczNzgxNTk5NSwicGF0aCI6Ii84NTk5Mzk4MS80MDY2NjgyMDItNDhlZjM2MTgtOGNmNy00ZjQzLTlkNTQtNTk0ZDBkMDNiZDYwLmpwZz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNTAxMjUlMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjUwMTI1VDE0Mzk1NVomWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPTMzM2I2MmFjY2YxZWU0NzQ3M2Q4YzAwOGY5NWYwMTk5YTNkNmNlMjgzZWE3MTBhNjg1MjRjNzA1ZjhjNjgxYzQmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0In0._WR7t4VJCO4VoBU93s-A_zrWQGrg16Wm_V2I5EVCMK8", // Replace with your image URL
      },
    ],
    React: [
      {
        title: "Blog Website",
        description:
          "Built a scalable blogging platform supporting 500+ users with 10k+ daily requests, integrated TinyMCE, optimized state with Redux Toolkit.",
        techStack: "React.js, Redux Toolkit, Appwrite, Cloudinary",
        link: "https://blog-appwrite-five.vercel.app/",
        image: "./assets/blog-website.jpeg", // Add your project image path here
      },
    ],
    Default: [
      {
        title: "Sample Project",
        description: "This is a placeholder project for new languages.",
        techStack: "Add relevant tech stack here",
        link: "#",
        image: "./assets/sample-project.jpeg", // Add your project image path here
      },
    ],
  },

};

export default content;
