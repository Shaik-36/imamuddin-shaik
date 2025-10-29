import axios from "axios";

// Create API instance with secure configuration
const API = axios.create({ 
  baseURL: import.meta.env.VITE_API_URL || "http://localhost:5000",
  withCredentials: true, // Enables cookies to be sent with requests
  timeout: 10000, // 10 second timeout
  headers: {
    'Content-Type': 'application/json'
  }
});

// Request interceptor to handle errors globally
API.interceptors.request.use(
  (config) => config,
  (error) => Promise.reject(error)
);

// Response interceptor to handle authentication errors
API.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      // Token expired or invalid - redirect to login
      window.location.href = '/admin/login';
    }
    return Promise.reject(error);
  }
);

// ✅ VERIFY AUTH (added to fix build)
export const verifyAuth = async () => {
  try {
    const response = await API.get("/admin/verify");
    // Expected shape: { success: true, user: {...} }
    return response;
  } catch (error) {
    // Return a consistent shape even if request fails
    return { data: { success: false, user: null } };
  }
};

// Simple login API: returns true if login is successful, false otherwise
export const loginAdmin = async (credentials) => {
  try {
    const response = await API.post("/admin/login", credentials);
    return response.data.success;
  } catch (error) {
    return false;
  }
};

// Projects CRUD APIs
export const addProject = async (projectData) => {
  try {
    const formData = new FormData();

    Object.keys(projectData).forEach(key => {
      if (key === 'tags' && Array.isArray(projectData[key])) {
        projectData[key].forEach(tag => formData.append('tags', tag));
      } else if (key === 'image' && projectData[key] instanceof File) {
        formData.append('image', projectData[key]);
      } else if (key !== 'image') {
        formData.append(key, projectData[key]);
      }
    });

    const response = await API.post("/admin/projects", formData, {
      headers: { 'Content-Type': 'multipart/form-data' },
    });
    return response;
  } catch (error) {
    const errorMessage = error.response?.data?.message || error.message || 'Failed to add project';
    throw new Error(errorMessage);
  }
};

export const updateProject = async (id, projectData) => {
  try {
    const formData = new FormData();

    Object.keys(projectData).forEach(key => {
      if (key === 'tags' && Array.isArray(projectData[key])) {
        projectData[key].forEach(tag => formData.append('tags', tag));
      } else if (key === 'image' && projectData[key] instanceof File) {
        formData.append('image', projectData[key]);
      } else if (key !== 'image' || typeof projectData[key] === 'string') {
        formData.append(key, projectData[key]);
      }
    });

    const response = await API.put(`/admin/projects/${id}`, formData, {
      headers: { 'Content-Type': 'multipart/form-data' },
    });
    return response;
  } catch (error) {
    const errorMessage = error.response?.data?.message || error.message || 'Failed to update project';
    throw new Error(errorMessage);
  }
};

export const deleteProject = async (id) => {
  try {
    const response = await API.delete(`/admin/projects/${id}`);
    return response;
  } catch (error) {
    const errorMessage = error.response?.data?.message || error.message || 'Failed to delete project';
    throw new Error(errorMessage);
  }
};

export const getProjects = async () => {
  try {
    const response = await API.get("/admin/projects");
    return response;
  } catch (error) {
    const errorMessage = error.response?.data?.message || error.message || 'Failed to fetch projects';
    throw new Error(errorMessage);
  }
};

export const getProjectById = async (id) => {
  try {
    const response = await API.get(`/admin/projects/${id}`);
    return response;
  } catch (error) {
    const errorMessage = error.response?.data?.message || error.message || 'Failed to fetch project';
    throw new Error(errorMessage);
  }
};

export const getProjectsWithFilters = async (filters = {}) => {
  try {
    const queryParams = new URLSearchParams(filters).toString();
    const response = await API.get(`/admin/projects/filtered?${queryParams}`);
    return response;
  } catch (error) {
    const errorMessage = error.response?.data?.message || error.message || 'Failed to fetch projects';
    throw new Error(errorMessage);
  }
};

export const toggleProjectFeatured = async (id) => {
  try {
    const response = await API.patch(`/admin/projects/${id}/featured`);
    return response;
  } catch (error) {
    const errorMessage = error.response?.data?.message || error.message || 'Failed to toggle featured status';
    throw new Error(errorMessage);
  }
};

export const updateProjectStatus = async (id, status) => {
  try {
    const response = await API.patch(`/admin/projects/${id}/status`, { status });
    return response;
  } catch (error) {
    const errorMessage = error.response?.data?.message || error.message || 'Failed to update project status';
    throw new Error(errorMessage);
  }
};

export const uploadImage = async (imageFile) => {
  try {
    const formData = new FormData();
    formData.append('image', imageFile);

    const response = await API.post("/admin/upload", formData, {
      headers: { 'Content-Type': 'multipart/form-data' },
    });
    return response;
  } catch (error) {
    const errorMessage = error.response?.data?.message || error.message || 'Failed to upload image';
    throw new Error(errorMessage);
  }
};

// Contact form API (for future implementation)
export const submitContactForm = async (contactData) => {
  try {
    const response = await API.post("/contact", contactData);
    return response;
  } catch (error) {
    const errorMessage = error.response?.data?.message || error.message || 'Failed to send message';
    throw new Error(errorMessage);
  }
};
