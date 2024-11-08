const cloudinary = require("../config/cloudinaryConfig");


const uploadOnCloudinary = (buffer) => {
  return new Promise((resolve, reject) => {
    cloudinary.uploader.upload_stream({ resource_type: "auto" }, (error, result) => {
      if (error) {
        console.error("Failed to upload file to Cloudinary:", error);
        reject(error);
      } else {
        resolve(result);
      }
    }).end(buffer);
  });
};

module.exports = { uploadOnCloudinary };