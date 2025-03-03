import React, { useState, useEffect } from "react";
import { addProject, updateProject, deleteProject, getProjects } from "../../utils/services";

const AdminPanel = () => {
  const [projects, setProjects] = useState([]);
  const [newProject, setNewProject] = useState({ title: "", description: "", techStack: "", link: "", image: "" });

  useEffect(() => {
    fetchProjects();
  }, []);

  const fetchProjects = async () => {
    const { data } = await getProjects();
    setProjects(data);
  };

  const handleAdd = async () => {
    await addProject(newProject);
    fetchProjects();
  };

  const handleDelete = async (id) => {
    await deleteProject(id);
    fetchProjects();
  };

  return (
    <div>
      <h1>Admin Panel</h1>
      <input
        placeholder="Title"
        onChange={(e) => setNewProject({ ...newProject, title: e.target.value })}
      />
      <input
        placeholder="Description"
        onChange={(e) => setNewProject({ ...newProject, description: e.target.value })}
      />
      <button onClick={handleAdd}>Add Project</button>
      <ul>
        {projects.map((project) => (
          <li key={project._id}>
            {project.title} <button onClick={() => handleDelete(project._id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AdminPanel;
