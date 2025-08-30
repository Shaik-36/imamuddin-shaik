const Project = require("../Models/Project");
const mongoose = require("mongoose");
const { deleteImage } = require("../config/cloudinary");

// Add a new project
const addProject = async (req, res) => {
  try {
    // Handle image upload
    let projectData = { ...req.body };
    
    if (req.file) {
      projectData.image = req.file.path; // Cloudinary URL
      projectData.imagePublicId = req.file.filename; // For deletion later
    }
    
    const project = new Project(projectData);
    await project.save();
    
    res.status(201).json({
      success: true,
      message: "Project created successfully",
      data: project
    });
  } catch (error) {
    console.error("Add project error:", error);
    
    // If project creation fails but image was uploaded, delete the image
    if (req.file) {
      try {
        await deleteImage(req.file.path);
      } catch (deleteError) {
        console.error("Failed to delete uploaded image:", deleteError);
      }
    }
    
    if (error.name === 'ValidationError') {
      return res.status(400).json({
        success: false,
        message: "Validation error",
        errors: Object.values(error.errors).map(err => err.message)
      });
    }
    
    res.status(500).json({
      success: false,
      message: "Failed to create project"
    });
  }
};

// Update an existing project
const updateProject = async (req, res) => {
  try {
    const { id } = req.params;
    
    // Validate ObjectId
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({
        success: false,
        message: "Invalid project ID"
      });
    }
    
    // Find existing project
    const existingProject = await Project.findById(id);
    if (!existingProject) {
      return res.status(404).json({
        success: false,
        message: "Project not found"
      });
    }
    
    // Prepare update data
    let updateData = { ...req.body };
    let oldImageUrl = null;
    
    // Handle new image upload
    if (req.file) {
      oldImageUrl = existingProject.image; // Store old image URL for cleanup
      updateData.image = req.file.path; // New Cloudinary URL
      updateData.imagePublicId = req.file.filename;
    }
    
    const updatedProject = await Project.findByIdAndUpdate(
      id, 
      updateData, 
      { 
        new: true, 
        runValidators: true 
      }
    );
    
    // Delete old image if new image was uploaded
    if (oldImageUrl && req.file && oldImageUrl !== updateData.image) {
      try {
        await deleteImage(oldImageUrl);
      } catch (deleteError) {
        console.error("Failed to delete old image:", deleteError);
        // Don't fail the update for image deletion errors
      }
    }
    
    res.status(200).json({
      success: true,
      message: "Project updated successfully",
      data: updatedProject
    });
  } catch (error) {
    console.error("Update project error:", error);
    
    // If update fails but new image was uploaded, delete the new image
    if (req.file) {
      try {
        await deleteImage(req.file.path);
      } catch (deleteError) {
        console.error("Failed to delete uploaded image:", deleteError);
      }
    }
    
    if (error.name === 'ValidationError') {
      return res.status(400).json({
        success: false,
        message: "Validation error",
        errors: Object.values(error.errors).map(err => err.message)
      });
    }
    
    res.status(500).json({
      success: false,
      message: "Failed to update project"
    });
  }
};

// Delete a project
const deleteProject = async (req, res) => {
  try {
    const { id } = req.params;
    
    // Validate ObjectId
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({
        success: false,
        message: "Invalid project ID"
      });
    }
    
    // Find project first to get image URL
    const project = await Project.findById(id);
    if (!project) {
      return res.status(404).json({
        success: false,
        message: "Project not found"
      });
    }
    
    // Delete project from database
    await Project.findByIdAndDelete(id);
    
    // Delete associated image from Cloudinary
    if (project.image) {
      try {
        await deleteImage(project.image);
      } catch (deleteError) {
        console.error("Failed to delete project image:", deleteError);
        // Don't fail the deletion for image deletion errors
      }
    }
    
    res.status(200).json({
      success: true,
      message: "Project deleted successfully"
    });
  } catch (error) {
    console.error("Delete project error:", error);
    res.status(500).json({
      success: false,
      message: "Failed to delete project"
    });
  }
};

// Get all projects
const getProjects = async (req, res) => {
  try {
    const projects = await Project.find().sort({ createdAt: -1 });
    
    res.status(200).json({
      success: true,
      message: "Projects retrieved successfully",
      count: projects.length,
      data: projects
    });
  } catch (error) {
    console.error("Get projects error:", error);
    res.status(500).json({
      success: false,
      message: "Failed to retrieve projects"
    });
  }
};

// Get single project by ID
const getProjectById = async (req, res) => {
  try {
    const { id } = req.params;
    
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({
        success: false,
        message: "Invalid project ID"
      });
    }
    
    const project = await Project.findById(id);
    
    if (!project) {
      return res.status(404).json({
        success: false,
        message: "Project not found"
      });
    }
    
    res.status(200).json({
      success: true,
      message: "Project retrieved successfully",
      data: project
    });
  } catch (error) {
    console.error("Get project by ID error:", error);
    res.status(500).json({
      success: false,
      message: "Failed to retrieve project"
    });
  }
};

// Toggle featured status
const toggleFeatured = async (req, res) => {
  try {
    const { id } = req.params;
    
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({
        success: false,
        message: "Invalid project ID"
      });
    }
    
    const project = await Project.findById(id);
    if (!project) {
      return res.status(404).json({
        success: false,
        message: "Project not found"
      });
    }
    
    project.featured = !project.featured;
    await project.save();
    
    res.status(200).json({
      success: true,
      message: `Project ${project.featured ? 'featured' : 'unfeatured'} successfully`,
      data: project
    });
  } catch (error) {
    console.error("Toggle featured error:", error);
    res.status(500).json({
      success: false,
      message: "Failed to toggle featured status"
    });
  }
};

// Update project status
const updateProjectStatus = async (req, res) => {
  try {
    const { id } = req.params;
    const { status } = req.body;
    
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({
        success: false,
        message: "Invalid project ID"
      });
    }
    
    if (!['active', 'archived', 'draft'].includes(status)) {
      return res.status(400).json({
        success: false,
        message: "Invalid status. Must be 'active', 'archived', or 'draft'"
      });
    }
    
    const project = await Project.findByIdAndUpdate(
      id,
      { status },
      { new: true, runValidators: true }
    );
    
    if (!project) {
      return res.status(404).json({
        success: false,
        message: "Project not found"
      });
    }
    
    res.status(200).json({
      success: true,
      message: "Project status updated successfully",
      data: project
    });
  } catch (error) {
    console.error("Update project status error:", error);
    res.status(500).json({
      success: false,
      message: "Failed to update project status"
    });
  }
};

// Get projects with filtering and pagination
const getProjectsWithFilters = async (req, res) => {
  try {
    const { 
      category, 
      status = 'active', 
      featured, 
      page = 1, 
      limit = 10,
      sortBy = 'createdAt',
      order = 'desc'
    } = req.query;
    
    // Build query
    let query = {};
    
    if (category && category !== 'All') {
      query.category = category;
    }
    
    if (status) {
      query.status = status;
    }
    
    if (featured !== undefined) {
      query.featured = featured === 'true';
    }
    
    // Pagination
    const pageNum = parseInt(page);
    const limitNum = parseInt(limit);
    const skip = (pageNum - 1) * limitNum;
    
    // Sort options
    const sortOrder = order === 'desc' ? -1 : 1;
    const sortOptions = { [sortBy]: sortOrder };
    
    // Execute query
    const [projects, total] = await Promise.all([
      Project.find(query)
        .sort(sortOptions)
        .skip(skip)
        .limit(limitNum)
        .lean(),
      Project.countDocuments(query)
    ]);
    
    const totalPages = Math.ceil(total / limitNum);
    
    res.status(200).json({
      success: true,
      message: "Projects retrieved successfully",
      data: projects,
      pagination: {
        currentPage: pageNum,
        totalPages,
        totalProjects: total,
        hasNext: pageNum < totalPages,
        hasPrev: pageNum > 1
      }
    });
  } catch (error) {
    console.error("Get projects with filters error:", error);
    res.status(500).json({
      success: false,
      message: "Failed to retrieve projects"
    });
  }
};

// Upload image endpoint
const uploadImage = async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({
        success: false,
        message: "No image file uploaded"
      });
    }
    
    res.status(200).json({
      success: true,
      message: "Image uploaded successfully",
      data: {
        url: req.file.path,
        publicId: req.file.filename
      }
    });
  } catch (error) {
    console.error("Upload image error:", error);
    res.status(500).json({
      success: false,
      message: "Failed to upload image"
    });
  }
};

module.exports = { 
  addProject, 
  updateProject, 
  deleteProject, 
  getProjects, 
  getProjectById,
  toggleFeatured,
  updateProjectStatus,
  getProjectsWithFilters,
  uploadImage
};
