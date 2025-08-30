# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

### Frontend (Client)
- `cd client && npm run dev` - Start development server with hot reload
- `cd client && npm run build` - Build for production
- `cd client && npm run lint` - Run ESLint to check code quality
- `cd client && npm run preview` - Preview production build locally

### Backend (Server)
- `cd server && node index.js` - Start the Express server
- `cd server && nodemon index.js` - Start server with auto-restart (if nodemon is available globally)

## Architecture Overview

This is a full-stack portfolio website with a clear separation between frontend and backend:

### Project Structure
- `/client` - React frontend (Vite + Tailwind CSS)
- `/server` - Express.js backend with MongoDB

### Frontend Architecture
- **Main App Component**: `client/src/App.jsx` handles routing between portfolio and admin sections
- **Content Management**: `client/src/content.jsx` contains all portfolio data (personal info, projects, experience)
- **Component Structure**: All UI components in `client/src/Components/`
  - Portfolio sections: ProfileSection, SkillsSection, ExperienceSection, ProjectsSection, ContactSection
  - Admin system: Login component and AdminPanel for project management
- **Routing**: Three main routes:
  - `/` - Main portfolio display
  - `/admin/login` - Admin authentication
  - `/admin` - Protected admin panel for project management
- **API Communication**: `client/src/utils/services.js` handles all backend API calls using axios

### Backend Architecture
- **Entry Point**: `server/index.js` - Express server with CORS and MongoDB connection
- **Admin Authentication**: Simple username/password auth in `server/Routes/admin.js` (hardcoded credentials: admin/password123)
- **Project Management**: Full CRUD operations for projects via `/admin/projects` endpoints
- **Database**: MongoDB with Mongoose ODM, Project model defined in `server/Models/Project.js`

### Key Integration Points
- Admin panel allows real-time project management that could sync with the static content in `content.jsx`
- Backend serves at localhost:5000, frontend at Vite's default port
- Authentication uses simple token-based system (currently using placeholder tokens)

### Environment Requirements
- MongoDB connection string in `server/.env` as `MONGO_URI`
- Frontend expects backend at `http://localhost:5000`

## Development Workflow
1. Start backend: `cd server && node index.js`
2. Start frontend: `cd client && npm run dev`
3. Access portfolio at frontend URL, admin panel at `/admin/login`