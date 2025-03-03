import axios from "axios";

const API = axios.create({ baseURL: "http://localhost:5000" });

// Admin login
export const loginAdmin = async (credentials) => {
  try {
    const response = await API.post("/admin/login", credentials);
    console.log(response);
    return response; // Ensure response is returned
    
  } catch (error) {
    console.error("Login failed:", error.response?.data || error.message);
    throw error; // Rethrow the error for handling in the component
  }
};

// Projects CRUD
export const addProject = (project) => API.post("/projects", project);
export const updateProject = (id, project) => API.put(`/projects/${id}`, project);
export const deleteProject = (id) => API.delete(`/projects/${id}`);
export const getProjects = () => API.get("/projects");
