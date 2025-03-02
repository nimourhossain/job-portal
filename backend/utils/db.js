import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config(); // Load environment variables

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI); // Use MONGO_URI instead of MONGO_URL
        console.log("MongoDB connected successfully");
    } catch (error) {
        console.error("MongoDB connection error:", error);
        
    }
};

export default connectDB;
