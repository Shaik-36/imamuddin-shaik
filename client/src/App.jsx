import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import ParticlesBackground from "./Components/ParticlesBackground";
import Navbar from "./Components/Navbar";
import ProfileSection from "./Components/ProfileSection";
import SkillsSection from "./Components/SkillsSection";
import ExperienceSection from "./Components/ExperienceSection";
import ProjectsSection from "./Components/ProjectsSection";
import ContactSection from "./Components/ContactSection";
import Login from "./Components/Login/Login"; // Login component for admin login
import AdminPanel from "./Components/Login/AdminPanel"; // AdminPanel component for project management
import { getAdminData, getAllProjects } from "./utils/services";

// Create React Query client
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 1,
      refetchOnWindowFocus: false,
      staleTime: 5 * 60 * 1000, // 5 minutes
    },
  },
});

export default function App() {
  const [selectedLanguage, setSelectedLanguage] = useState("All");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState(null);
  const [adminData, setAdminData] = useState(null);
  const [projects, setProjects] = useState({});

  useEffect(() => {
    async function fetchData() {
      const res = await getAdminData();
      setAdminData(res.data.data);
      const projectsRes = await getAllProjects();
      // Group projects by category for UI compatibility
      const grouped = {};
      (projectsRes.data.projects || []).forEach((project) => {
        if (!grouped[project.category]) grouped[project.category] = [];
        grouped[project.category].push(project);
      });
      setProjects(grouped);
    }
    fetchData();
  }, []);

  const handleLogin = (userData) => {
    setIsLoggedIn(true);
    setUser(userData);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setUser(null);
  };

  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <Routes>
          {/* Main Portfolio Route */}
          <Route
            path="/"
            element={
              <div className="relative text-gray-100 font-sans min-h-screen overflow-x-hidden">
                {/* <ParticlesBackground /> */}
                <Navbar />
                {adminData && (
                  <>
                    <ProfileSection
                      personal={adminData.personal}
                      summary={adminData.summary}
                      achievements={adminData.achievements}
                      certifications={adminData.certifications}
                      frontEndSkills={adminData.frontEndSkills}
                      backEndSkills={adminData.backEndSkills}
                      toolsSkills={adminData.toolsSkills}
                      otherTechSkills={adminData.otherTechSkills}
                      contact={adminData.contact}
                    />
                    <ExperienceSection experience={adminData.experience} />
                  </>
                )}
                <ProjectsSection
                  projects={projects}
                  selectedLanguage={selectedLanguage}
                  setSelectedLanguage={setSelectedLanguage}
                />
                {adminData && (
                  <SkillsSection
                    frontEndSkills={adminData.frontEndSkills}
                    backEndSkills={adminData.backEndSkills}
                    toolsSkills={adminData.toolsSkills}
                    otherTechSkills={adminData.otherTechSkills}
                  />
                )}
                {adminData && <ContactSection personal={adminData.personal} />}
              </div>
            }
          />

          {/* Admin Login Route */}
          <Route
            path="/admin/login"
            element={
              isLoggedIn ? (
                <Navigate to="/admin" replace={true} />
              ) : (
                <div className="bg-slate-900 w-screen h-screen flex flex-col">
                  <Login onLogin={handleLogin} />
                </div>
              )
            }
          />

          {/* Admin Panel Route (Protected) */}
          <Route
            path="/admin"
            element={
              isLoggedIn ? (
                <AdminPanel user={user} onLogout={handleLogout} />
              ) : (
                <Navigate to="/admin/login" replace={true} />
              )
            }
          />
        </Routes>
      </Router>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}
