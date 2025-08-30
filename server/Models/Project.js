const mongoose = require("mongoose");

const projectSchema = new mongoose.Schema({
  title: { 
    type: String, 
    required: [true, 'Project title is required'],
    trim: true,
    minlength: [3, 'Title must be at least 3 characters long'],
    maxlength: [100, 'Title cannot exceed 100 characters']
  },
  description: { 
    type: String, 
    required: [true, 'Project description is required'],
    trim: true,
    minlength: [10, 'Description must be at least 10 characters long'],
    maxlength: [1000, 'Description cannot exceed 1000 characters']
  },
  techStack: { 
    type: String, 
    required: [true, 'Tech stack is required'],
    trim: true,
    minlength: [3, 'Tech stack must be at least 3 characters long'],
    maxlength: [200, 'Tech stack cannot exceed 200 characters']
  },
  link: { 
    type: String, 
    required: [true, 'Project link is required'],
    trim: true,
    validate: {
      validator: function(v) {
        return /^https?:\/\/.+/.test(v);
      },
      message: 'Please provide a valid URL starting with http:// or https://'
    }
  },
  image: { 
    type: String, 
    required: [true, 'Project image URL is required'],
    trim: true,
    validate: {
      validator: function(v) {
        return /^https?:\/\/.+/.test(v);
      },
      message: 'Please provide a valid image URL starting with http:// or https://'
    }
  },
  imagePublicId: {
    type: String,
    required: false // For Cloudinary image management
  },
  category: {
    type: String,
    enum: ['JavaScript', 'Python', 'Java', 'C#', 'Machine-Learning', 'Full-Stack', 'Frontend', 'Backend'],
    default: 'JavaScript'
  },
  status: {
    type: String,
    enum: ['active', 'archived', 'draft'],
    default: 'active'
  },
  featured: {
    type: Boolean,
    default: false
  },
  githubUrl: {
    type: String,
    trim: true,
    validate: {
      validator: function(v) {
        return !v || /^https?:\/\/.+/.test(v);
      },
      message: 'Please provide a valid GitHub URL'
    }
  },
  liveUrl: {
    type: String,
    trim: true,
    validate: {
      validator: function(v) {
        return !v || /^https?:\/\/.+/.test(v);
      },
      message: 'Please provide a valid live demo URL'
    }
  },
  tags: [{
    type: String,
    trim: true
  }]
}, {
  timestamps: true, // Adds createdAt and updatedAt fields
  toJSON: { virtuals: true },
  toObject: { virtuals: true }
});

// Add indexes for better query performance
projectSchema.index({ createdAt: -1 });
projectSchema.index({ title: 1 });
projectSchema.index({ category: 1 });
projectSchema.index({ status: 1 });
projectSchema.index({ featured: -1 });

// Virtual for formatted creation date
projectSchema.virtual('formattedDate').get(function() {
  return this.createdAt.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
});

module.exports = mongoose.model("Project", projectSchema, "admin-data");
