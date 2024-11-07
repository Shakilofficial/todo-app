// utils/cloudinary.js
const cloudinary = require("../config/cloudinaryConfig");
const fs = require("fs");

const uploadOnCloudinary = async (localFilePath) => {
  try {
    if (!localFilePath) return null;

    // Upload the file to Cloudinary
    const response = await cloudinary.uploader.upload(localFilePath, {
      resource_type: "auto",
    });

    // Remove the locally saved temporary file after successful upload
    fs.unlinkSync(localFilePath);

    return response;
  } catch (error) {
    // Remove the locally saved temporary file if the upload fails
    fs.unlinkSync(localFilePath);
    console.error("Failed to upload file to Cloudinary:", error);
    return null;
  }
};

module.exports = { uploadOnCloudinary };
