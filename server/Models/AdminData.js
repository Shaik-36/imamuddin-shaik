const mongoose = require('mongoose');

const AdminDataSchema = new mongoose.Schema({
  personal: {
    name: String,
    tagline: String,
    description: String,
    avatar: String,
    email: String,
    phone: String,
    location: String,
    resumeLink: String,
    contactButtonText: String,
    socialLinks: {
      linkedin: String,
      github: String,
      twitter: String,
      portfolio: String,
    },
  },
  summary: String,
  achievements: [String],
  frontEndSkills: [String],
  backEndSkills: [String],
  toolsSkills: [String],
  otherTechSkills: [String],
  experience: {
    work: [
      {
        title: String,
        company: String,
        period: String,
        location: String,
        description: [String],
        impact: [String],
        links: [String],
      }
    ],
    education: [
      {
        degree: String,
        institution: String,
        period: String,
        gpa: String,
        details: [String],
        achievements: [String],
      }
    ],
    certifications: [
      {
        name: String,
        issuer: String,
        date: String,
        link: String,
      }
    ],
  },
  contact: {
    email: String,
    phone: String,
    linkedin: String,
    github: String,
    twitter: String,
    portfolio: String,
    other: [String],
  },
}, { timestamps: true });

module.exports = mongoose.model('AdminData', AdminDataSchema);