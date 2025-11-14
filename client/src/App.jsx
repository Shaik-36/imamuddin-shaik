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
import TechCommunitySection from "./Components/TechCommunitySection";
import ContactSection from "./Components/ContactSection";
import Login from "./Components/Login/Login";
import AdminPanel from "./Components/Login/AdminPanel";
import { verifyAuth } from "./utils/services";
import content from "./content";

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
  const [isCheckingAuth, setIsCheckingAuth] = useState(true);
  const [user, setUser] = useState(null);

  // Check authentication status on app load
  useEffect(() => {
    checkAuthStatus();
  }, []);

  const checkAuthStatus = async () => {
    try {
      const response = await verifyAuth();
      if (response.data.success) {
        setIsLoggedIn(true);
        setUser(response.data.user);
      }
    } catch (error) {
      setIsLoggedIn(false);
      setUser(null);
    } finally {
      setIsCheckingAuth(false);
    }
  };

  const handleLogin = (userData) => {
    setIsLoggedIn(true);
    setUser(userData);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setUser(null);
  };

  // Show loading while checking authentication
  if (isCheckingAuth) {
    return (
      <div className="bg-slate-900 w-screen h-screen flex items-center justify-center">
        <div className="text-white text-xl">Loading...</div>
      </div>
    );
  }

  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <Routes>
          {/* Main Portfolio Route */}
          <Route
            path="/"
            element={
              <div className="relative text-gray-100 font-sans min-h-screen overflow-x-hidden bg-slate-900">
                {/* <ParticlesBackground /> */}
                <Navbar />
                <ProfileSection
                  personal={content.personal}
                  frontEndSkills={content.frontEndSkills}
                  backEndSkills={content.backEndSkills}
                  toolsSkills={content.toolsSkills}
                  otherTechSkills={content.otherTechSkills}
                />
                <TechCommunitySection talks={content.talks} />
                <ExperienceSection experience={content.experience} />
                <ProjectsSection
                  projects={content.projects}
                  selectedLanguage={selectedLanguage}
                  setSelectedLanguage={setSelectedLanguage}
                />
                
                <SkillsSection />
                <ContactSection personal={content.personal} />
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
