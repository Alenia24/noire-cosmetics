import mongoose from "mongoose";
import { config } from "dotenv";
config();

// Connect to mongoDB using mongoose
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI || "");
    // Verify the connection is established
    console.log(`MongoDB connected: ${mongoose.connection.name}`);
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
  }
};

export default connectDB;
