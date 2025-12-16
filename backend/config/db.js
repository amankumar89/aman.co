import mongoose from "mongoose";

export const connectDB = async () => {
  const uri = process.env.MONGO_URI;
  if(!uri) return;
  try {
    await mongoose.connect(uri);
    console.log("Database connected");
  } catch (error) {
    console.error("DB connection failed:", error.message);
    process.exit(1);
  }
};
