import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDb from "./config/dbConfig";
import shortUrl from "./routes/shortUrl";

// Load environment variables
dotenv.config();

// Connect to MongoDB
connectDb();

// Create Express app
const app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
  cors({
    origin: "https://snappy-chat-app-frontend.vercel.app/", // Change to your frontend's production URL when deploying
    credentials: true,
  })
);

// Routes
app.use("/api/", shortUrl);

// Export the app for Vercel's serverless environment
export default app;
