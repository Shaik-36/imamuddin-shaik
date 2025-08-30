const express = require("express");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
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
const { validateLogin, validateProject } = require("../middleware/validation");
const { upload } = require("../config/cloudinary");
const router = express.Router();

// Admin login with secure authentication
router.post("/login", validateLogin, async (req, res) => {
  try {
    const { username, password } = req.body;

    // Verify username
    if (username !== process.env.ADMIN_USERNAME) {
      return res.status(401).json({ 
        success: false, 
        message: "Invalid credentials" 
      });
    }

    // Verify password against hashed password in environment
    const isValidPassword = await bcrypt.compare(password, process.env.ADMIN_PASSWORD_HASH);
    
    if (!isValidPassword) {
      return res.status(401).json({ 
        success: false, 
        message: "Invalid credentials" 
      });
    }

    // Generate JWT token
    const token = jwt.sign(
      { 
        id: 1, 
        username: username, 
        role: 'admin' 
      },
      process.env.JWT_SECRET,
      { 
        expiresIn: '24h',
        issuer: 'portfolio-backend',
        audience: 'portfolio-admin'
      }
    );

    // Set secure HTTP-only cookie
    const cookieOptions = {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'strict',
      maxAge: 24 * 60 * 60 * 1000 // 24 hours
    };

    res.cookie('adminToken', token, cookieOptions);

    res.status(200).json({ 
      success: true,
      message: "Login successful",
      user: {
        username: username,
        role: 'admin'
      }
    });

  } catch (error) {
    console.error('Login error:', error);
    res.status(500).json({ 
      success: false, 
      message: "Internal server error" 
    });
  }
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
router.post("/projects", upload.single('image'), validateProject, addProject);
router.put("/projects/:id", upload.single('image'), validateProject, updateProject);
router.delete("/projects/:id", deleteProject);
router.get("/projects", getProjects);

// Additional project management endpoints (no auth for now)
router.get("/projects/filtered", getProjectsWithFilters);
router.get("/projects/:id", getProjectById);
router.patch("/projects/:id/featured", toggleFeatured);
router.patch("/projects/:id/status", updateProjectStatus);

module.exports = router;
