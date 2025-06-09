import cloudinary from "cloudinary";
import { CloudinaryStorage } from "multer-storage-cloudinary";
import { Request } from "express";
import { config } from "dotenv";
config();

// Cloudinary Configuration
cloudinary.v2.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

// Set up path in cloudinary to stroe images
const storage = new CloudinaryStorage({
  cloudinary: cloudinary.v2,
  params: async (req:Request, file) => {
    // Folder matches none
    let folder = "misc";

    // Folder for product images
    if (req.baseUrl.includes("products")) {
      folder = "product-images";
    }

    // Folder for user avatars
    if (req.baseUrl.includes("users")) {
      folder = "user-avatars";
    }

    return {
      folder,
      allowed_formats: ["jpg", "png", "jpeg"],
      // Unique filename with timestamp (avoids overwrite)
      public_id: `${Date.now()}-${file.originalname}`
    };
  },
});

export { cloudinary, storage };
