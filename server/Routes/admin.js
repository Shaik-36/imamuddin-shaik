const express = require("express");
const { addProject, updateProject, deleteProject, getProjects } = require("../Controllers/ProjectController");
const router = express.Router();

// Admin login (placeholder for actual login implementation)
router.post("/login", (req, res) => {
  const { username, password } = req.body;

  // Replace with your actual authentication logic
  if (username === "admin" && password === "password123") {
    return res.status(200).json({ message: "Login successful", token: "fake-jwt-token" });
  }

  res.status(401).json({ message: "Invalid credentials" });
});

// Project routes (protected after login)
router.post("/projects", addProject);
router.put("/projects/:id", updateProject);
router.delete("/projects/:id", deleteProject);
router.get("/projects", getProjects);

module.exports = router;
