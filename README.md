# Imamuddin Shaik - Portfolio Website

A modern, full-stack portfolio website built with the MERN stack, showcasing projects, experience, and skills with an integrated admin panel for content management.

## 🌟 Features

- **Responsive Portfolio Design** - Modern dark theme with smooth animations
- **Project Showcase** - Categorized projects with filtering by programming language
- **Admin Panel** - Content management system for dynamic project updates
- **Interactive UI** - Particle backgrounds and smooth transitions using Framer Motion
- **Professional Sections** - Profile, experience, skills, projects, and contact information

## 🛠️ Tech Stack

### Frontend
- **React 18** - Modern React with hooks and functional components
- **Vite** - Fast build tool and development server
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Animation library for smooth interactions
- **React Router DOM** - Client-side routing
- **Axios** - HTTP client for API communication

### Backend
- **Node.js** - JavaScript runtime
- **Express.js** - Web application framework
- **MongoDB** - NoSQL database
- **Mongoose** - MongoDB object modeling
- **CORS** - Cross-origin resource sharing

## 🚀 Quick Start

### Prerequisites
- Node.js (v16 or higher)
- MongoDB (local installation or MongoDB Atlas)
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/imamuddin-shaik/portfolio-website.git
   cd portfolio-website
   ```

2. **Install dependencies for both client and server**
   ```bash
   # Install client dependencies
   cd client
   npm install
   
   # Install server dependencies
   cd ../server
   npm install
   ```

3. **Set up environment variables**
   Create a `.env` file in the `server` directory:
   ```env
   MONGO_URI=your_mongodb_connection_string
   PORT=5000
   ```

4. **Start the development servers**
   
   **Terminal 1 - Backend:**
   ```bash
   cd server
   node index.js
   ```
   
   **Terminal 2 - Frontend:**
   ```bash
   cd client
   npm run dev
   ```

5. **Access the application**
   - Portfolio: `http://localhost:5173` (or Vite's assigned port)
   - Admin Panel: `http://localhost:5173/admin/login`

## 📁 Project Structure

```
├── client/                 # React frontend
│   ├── src/
│   │   ├── Components/     # React components
│   │   │   ├── Login/      # Admin authentication
│   │   │   └── ...         # Portfolio sections
│   │   ├── assets/         # Static assets (images, PDFs)
│   │   ├── images/         # Project images
│   │   ├── utils/          # API services
│   │   ├── content.jsx     # Portfolio content configuration
│   │   └── App.jsx         # Main application component
│   ├── public/
│   └── package.json
├── server/                 # Express backend
│   ├── Controllers/        # Route controllers
│   ├── Models/            # MongoDB models
│   ├── Routes/            # API routes
│   ├── index.js           # Server entry point
│   └── package.json
└── README.md
```

## 🔧 Available Scripts

### Frontend (Client)
```bash
cd client
npm run dev      # Start development server
npm run build    # Build for production
npm run lint     # Run ESLint
npm run preview  # Preview production build
```

### Backend (Server)
```bash
cd server
node index.js           # Start server
nodemon index.js        # Start with auto-restart (if nodemon installed globally)
```

## 🔐 Admin Panel

The admin panel allows you to manage projects dynamically:

1. **Access**: Navigate to `/admin/login`
2. **Default Credentials**: 
   - Username: `admin`
   - Password: `password123`
3. **Features**: Add, edit, and delete projects

> ⚠️ **Security Note**: The current authentication system uses hardcoded credentials for demonstration purposes. For production use, implement proper authentication with password hashing and secure JWT tokens.

## 🎨 Customization

### Updating Portfolio Content
Edit `client/src/content.jsx` to update:
- Personal information
- Skills and technologies
- Work experience
- Project details
- Social media links

### Styling
The project uses Tailwind CSS for styling. Custom styles can be found in:
- `client/src/index.css` - Global styles
- `client/src/App.css` - Component-specific styles
- `client/tailwind.config.js` - Tailwind configuration

## 📱 Responsive Design

The portfolio is fully responsive and optimized for:
- Desktop (1920px+)
- Laptop (1024px - 1919px)
- Tablet (768px - 1023px)
- Mobile (320px - 767px)

## 🚀 Deployment

### Frontend Deployment (Vercel/Netlify)
1. Build the client:
   ```bash
   cd client
   npm run build
   ```
2. Deploy the `dist` folder to your hosting platform

### Backend Deployment (Heroku/Railway/DigitalOcean)
1. Ensure environment variables are configured
2. Deploy the `server` directory
3. Update the API base URL in `client/src/utils/services.js`

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

**Imamuddin Shaik**
- LinkedIn: [shaik-imam](https://www.linkedin.com/in/shaik-imam)
- GitHub: [shaik-36](https://github.com/shaik-36)
- Twitter: [@Imam_Shaik_](https://x.com/Imam_Shaik_)

## 🙏 Acknowledgments

- React community for excellent documentation
- Tailwind CSS for the utility-first approach
- Framer Motion for smooth animations
- MongoDB for flexible data storage

---

⭐ If you found this project helpful, please consider giving it a star on GitHub!