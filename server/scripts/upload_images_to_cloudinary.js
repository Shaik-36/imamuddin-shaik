// Batch upload local images to Cloudinary and print URLs for seed update
require('dotenv').config({ path: '../.env' });
const cloudinary = require('cloudinary').v2;
const fs = require('fs');
const path = require('path');

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const localImagesDir = path.join(__dirname, '../../client/src/assets/images');

fs.readdir(localImagesDir, async (err, files) => {
  if (err) throw err;
  for (const file of files) {
    const filePath = path.join(localImagesDir, file);
    if (!fs.lstatSync(filePath).isFile()) continue;
    console.log('Uploading:', filePath);
    try {
      const result = await cloudinary.uploader.upload(filePath, {
        folder: 'portfolio-projects',
        use_filename: true,
        unique_filename: false,
        resource_type: 'image',
      });
      console.log(`${file}: ${result.secure_url}`);
    } catch (e) {
      console.error(`Failed to upload ${file}:`, e);
    }
  }
});

// Usage:
// node scripts/upload_images_to_cloudinary.js
// Copy the printed URLs to your seed.js or DB
