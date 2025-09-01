const mongoose = require('mongoose');

const ProjectSchema = new mongoose.Schema({
  title: String,
  description: String,
  techStack: String,
  link: String,
  image: String,
  category: String, // e.g. Machine-Learning, JavaScript, Python, etc.
}, { timestamps: true });

module.exports = mongoose.model('ProjectsData', ProjectSchema);
