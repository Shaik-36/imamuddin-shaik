const express = require("express");
// Removed bcrypt and jwt for simple login
const { 
  addProject, 
  updateProject, 
  deleteProject, 
  getProjects, 
  getProjectById,
  toggleFeatured,
  updateProjectStatus,
  getProjectsWithFilters,
  uploadImage
} = require("../Controllers/ProjectController");
// const { authenticateToken, requireAdmin } = require("../middleware/auth");
// Removed validation middleware for login
const { upload } = require("../config/cloudinary");
const AdminData = require('../Models/AdminData');
const ProjectsData = require('../Models/ProjectsData');
const router = express.Router();

// Admin login with secure authentication
router.post("/login", (req, res) => {
  const { username, password } = req.body;
  if (username === process.env.ADMIN_USERNAME && password === process.env.ADMIN_PASSWORD) {
    // Set a simple cookie for session (not secure, for dev only)
    res.cookie("admin", "true", { httpOnly: true });
    return res.json({ success: true, user: { username } });
  }
  return res.status(401).json({ success: false, message: "Invalid username or password" });
});

// Admin logout
router.post("/logout", (req, res) => {
  res.clearCookie('adminToken', {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'strict'
  });
  
  res.status(200).json({ 
    success: true, 
    message: "Logged out successfully" 
  });
});

// JWT authentication temporarily disabled for development
// router.get("/verify", authenticateToken, requireAdmin, (req, res) => {
//   res.status(200).json({ 
//     success: true, 
//     user: {
//       username: req.user.username,
//       role: req.user.role
//     }
//   });
// });


// Image upload endpoint (no auth for now)
router.post("/upload", upload.single('image'), uploadImage);

// Project routes (no auth for now)
router.post("/projects", upload.single('image'), addProject);
router.put("/projects/:id", upload.single('image'), updateProject);
router.delete("/projects/:id", deleteProject);
router.get("/projects", getProjects);

// Additional project management endpoints (no auth for now)
router.get("/projects/filtered", getProjectsWithFilters);
router.get("/projects/:id", getProjectById);
router.patch("/projects/:id/featured", toggleFeatured);
router.patch("/projects/:id/status", updateProjectStatus);

// Admin Data CRUD
router.get('/admin-data', async (req, res) => {
  try {
    let data = await AdminData.findOne();
    if (!data) {
      data = new AdminData({});
      await data.save();
    }
    res.json({ success: true, data });
  } catch (err) {
    res.status(500).json({ success: false, message: 'Failed to fetch admin data.' });
  }
});

router.put('/admin-data', async (req, res) => {
  try {
    let data = await AdminData.findOne();
    if (!data) {
      data = new AdminData(req.body);
    } else {
      Object.assign(data, req.body);
    }
      // Support new fields for multi-page content
      await data.save({
        summary: req.body.summary,
        achievements: req.body.achievements,
        experience: req.body.experience,
        frontEndSkills: req.body.frontEndSkills,
        backEndSkills: req.body.backEndSkills,
        toolsSkills: req.body.toolsSkills,
        otherTechSkills: req.body.otherTechSkills,
        contact: req.body.contact,
      });
    res.json({ success: true, data });
  } catch (err) {
    res.status(500).json({ success: false, message: 'Failed to update admin data.' });
  }
});

// Projects CRUD
router.get('/all-projects', async (req, res) => {
  try {
    const projects = await ProjectsData.find();
    res.json({ success: true, projects });
  } catch (err) {
    res.status(500).json({ success: false, message: 'Failed to fetch projects.' });
  }
});

router.post('/all-projects', async (req, res) => {
  try {
    const project = new ProjectsData(req.body);
    await project.save();
    res.json({ success: true, project });
  } catch (err) {
    res.status(500).json({ success: false, message: 'Failed to add project.' });
  }
});

router.put('/all-projects/:id', async (req, res) => {
  try {
    const project = await ProjectsData.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json({ success: true, project });
  } catch (err) {
    res.status(500).json({ success: false, message: 'Failed to update project.' });
  }
});

router.delete('/all-projects/:id', async (req, res) => {
  try {
    await ProjectsData.findByIdAndDelete(req.params.id);
    res.json({ success: true });
  } catch (err) {
    res.status(500).json({ success: false, message: 'Failed to delete project.' });
  }
});

module.exports = router;
