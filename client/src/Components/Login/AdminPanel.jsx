import React, { useState, useEffect } from "react";
import { addProject, updateProject, deleteProject, getProjects } from "../../utils/services";
import { useNavigate } from "react-router-dom";

const AdminPanel = ({ user, onLogout }) => {
  const [projects, setProjects] = useState([]);
  const [newProject, setNewProject] = useState({ 
    title: "", 
    description: "", 
    techStack: "", 
    link: "", 
    image: "" 
  });
  const [editingProject, setEditingProject] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    fetchProjects();
  }, []);

  const fetchProjects = async () => {
    try {
      setLoading(true);
      setError(null);
      const response = await getProjects();
      setProjects(response.data.data || []);
    } catch (error) {
      setError(error.message || "Failed to fetch projects");
    } finally {
      setLoading(false);
    }
  };

  const handleAdd = async (e) => {
    e.preventDefault();
    
    // Validate required fields
    if (!newProject.title.trim() || !newProject.description.trim()) {
      setError("Title and description are required");
      return;
    }

    try {
      setLoading(true);
      setError(null);
      await addProject(newProject);
      setNewProject({ title: "", description: "", techStack: "", link: "", image: "" });
      setSuccess("Project added successfully!");
      await fetchProjects();
    } catch (error) {
      setError(error.message || "Failed to add project");
    } finally {
      setLoading(false);
    }
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    
    try {
      setLoading(true);
      setError(null);
      await updateProject(editingProject._id, editingProject);
      setEditingProject(null);
      setSuccess("Project updated successfully!");
      await fetchProjects();
    } catch (error) {
      setError(error.message || "Failed to update project");
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id, title) => {
    if (!window.confirm(`Are you sure you want to delete "${title}"?`)) {
      return;
    }

    try {
      setLoading(true);
      setError(null);
      await deleteProject(id);
      setSuccess("Project deleted successfully!");
      await fetchProjects();
    } catch (error) {
      setError(error.message || "Failed to delete project");
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = () => {
    onLogout();
    navigate("/admin/login");
  };

  const clearMessages = () => {
    setError(null);
    setSuccess(null);
  };

  const handleInputChange = (field, value, isEditing = false) => {
    if (isEditing) {
      setEditingProject(prev => ({ ...prev, [field]: value }));
    } else {
      setNewProject(prev => ({ ...prev, [field]: value }));
    }
    clearMessages();
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Header */}
      <header className="bg-gray-800 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <h1 className="text-2xl font-bold text-white">Admin Panel</h1>
            <div className="flex items-center space-x-4">
              <span className="text-gray-300">Welcome, {user?.username}</span>
              <button
                onClick={handleLogout}
                className="bg-red-600 hover:bg-red-500 text-white px-4 py-2 rounded-lg transition duration-200"
              >
                Logout
              </button>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Status Messages */}
        {error && (
          <div className="mb-6 p-4 bg-red-900/50 border border-red-500 rounded-lg">
            <p className="text-red-400">{error}</p>
          </div>
        )}
        
        {success && (
          <div className="mb-6 p-4 bg-green-900/50 border border-green-500 rounded-lg">
            <p className="text-green-400">{success}</p>
          </div>
        )}

        {/* Add New Project Form */}
        <div className="bg-gray-800 rounded-lg p-6 mb-8">
          <h2 className="text-xl font-semibold mb-4">Add New Project</h2>
          <form onSubmit={handleAdd} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-gray-300 text-sm font-medium mb-2">
                  Project Title *
                </label>
                <input
                  type="text"
                  value={newProject.title}
                  onChange={(e) => handleInputChange('title', e.target.value)}
                  className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter project title"
                  required
                />
              </div>
              
              <div>
                <label className="block text-gray-300 text-sm font-medium mb-2">
                  Tech Stack *
                </label>
                <input
                  type="text"
                  value={newProject.techStack}
                  onChange={(e) => handleInputChange('techStack', e.target.value)}
                  className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="React, Node.js, MongoDB..."
                  required
                />
              </div>
            </div>
            
            <div>
              <label className="block text-gray-300 text-sm font-medium mb-2">
                Description *
              </label>
              <textarea
                value={newProject.description}
                onChange={(e) => handleInputChange('description', e.target.value)}
                className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Project description..."
                rows="3"
                required
              />
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-gray-300 text-sm font-medium mb-2">
                  Project Link *
                </label>
                <input
                  type="url"
                  value={newProject.link}
                  onChange={(e) => handleInputChange('link', e.target.value)}
                  className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="https://github.com/..."
                  required
                />
              </div>
              
              <div>
                <label className="block text-gray-300 text-sm font-medium mb-2">
                  Image URL *
                </label>
                <input
                  type="url"
                  value={newProject.image}
                  onChange={(e) => handleInputChange('image', e.target.value)}
                  className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="https://example.com/image.jpg"
                  required
                />
              </div>
            </div>
            
            <button
              type="submit"
              disabled={loading}
              className="bg-blue-600 hover:bg-blue-500 disabled:bg-gray-600 text-white px-6 py-2 rounded-lg transition duration-200 flex items-center"
            >
              {loading ? (
                <>
                  <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Adding...
                </>
              ) : (
                "Add Project"
              )}
            </button>
          </form>
        </div>

        {/* Projects List */}
        <div className="bg-gray-800 rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-4">Manage Projects ({projects.length})</h2>
          
          {loading && projects.length === 0 ? (
            <div className="text-center py-8">
              <div className="text-gray-400">Loading projects...</div>
            </div>
          ) : projects.length === 0 ? (
            <div className="text-center py-8">
              <div className="text-gray-400">No projects found. Add your first project above.</div>
            </div>
          ) : (
            <div className="space-y-4">
              {projects.map((project) => (
                <div key={project._id} className="bg-gray-700 rounded-lg p-4 border border-gray-600">
                  {editingProject && editingProject._id === project._id ? (
                    // Edit Mode
                    <form onSubmit={handleUpdate} className="space-y-4">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <input
                          type="text"
                          value={editingProject.title}
                          onChange={(e) => handleInputChange('title', e.target.value, true)}
                          className="bg-gray-600 border border-gray-500 rounded px-3 py-2 text-white"
                          required
                        />
                        <input
                          type="text"
                          value={editingProject.techStack}
                          onChange={(e) => handleInputChange('techStack', e.target.value, true)}
                          className="bg-gray-600 border border-gray-500 rounded px-3 py-2 text-white"
                          required
                        />
                      </div>
                      <textarea
                        value={editingProject.description}
                        onChange={(e) => handleInputChange('description', e.target.value, true)}
                        className="w-full bg-gray-600 border border-gray-500 rounded px-3 py-2 text-white"
                        rows="2"
                        required
                      />
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <input
                          type="url"
                          value={editingProject.link}
                          onChange={(e) => handleInputChange('link', e.target.value, true)}
                          className="bg-gray-600 border border-gray-500 rounded px-3 py-2 text-white"
                          required
                        />
                        <input
                          type="url"
                          value={editingProject.image}
                          onChange={(e) => handleInputChange('image', e.target.value, true)}
                          className="bg-gray-600 border border-gray-500 rounded px-3 py-2 text-white"
                          required
                        />
                      </div>
                      <div className="flex space-x-2">
                        <button
                          type="submit"
                          disabled={loading}
                          className="bg-green-600 hover:bg-green-500 text-white px-4 py-2 rounded transition duration-200"
                        >
                          Save
                        </button>
                        <button
                          type="button"
                          onClick={() => setEditingProject(null)}
                          className="bg-gray-600 hover:bg-gray-500 text-white px-4 py-2 rounded transition duration-200"
                        >
                          Cancel
                        </button>
                      </div>
                    </form>
                  ) : (
                    // Display Mode
                    <div>
                      <div className="flex justify-between items-start mb-2">
                        <h3 className="text-lg font-semibold text-white">{project.title}</h3>
                        <div className="flex space-x-2">
                          <button
                            onClick={() => setEditingProject({ ...project })}
                            className="bg-blue-600 hover:bg-blue-500 text-white px-3 py-1 rounded text-sm transition duration-200"
                          >
                            Edit
                          </button>
                          <button
                            onClick={() => handleDelete(project._id, project.title)}
                            className="bg-red-600 hover:bg-red-500 text-white px-3 py-1 rounded text-sm transition duration-200"
                          >
                            Delete
                          </button>
                        </div>
                      </div>
                      <p className="text-gray-300 mb-2">{project.description}</p>
                      <div className="flex flex-wrap gap-2 mb-2">
                        <span className="bg-blue-600 text-white px-2 py-1 rounded text-xs">
                          {project.techStack}
                        </span>
                      </div>
                      <div className="flex items-center space-x-4 text-sm">
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-400 hover:text-blue-300 underline"
                        >
                          View Project
                        </a>
                        {project.image && (
                          <a
                            href={project.image}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-green-400 hover:text-green-300 underline"
                          >
                            View Image
                          </a>
                        )}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AdminPanel;
