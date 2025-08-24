import express from "express";
import dotenv from "dotenv";
import morgan from "morgan";
import router from "./routes/authRoute.js";

// Initialize dotenv 
dotenv.config();


const app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan("dev"));

// Simple test route
app.get("/", (req, res) => {
  res.send("Hello, HR Management System!");
});




app.use("/api/auth", router);



const PORT = process.env.PORT || 3000;
// Start server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});