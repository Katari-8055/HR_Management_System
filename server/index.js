import express from "express";
import dotenv from "dotenv";
import morgan from "morgan";
import cookieParser from "cookie-parser";
import cors from "cors";
import router1 from "./routes/HrRoutes/HrRoute.js";
import router2 from "./routes/EmployeeRoutes/EmployeeRoute.js";


// Initialize dotenv 
dotenv.config();


const app = express();

// Middleware
app.use(cors({
  origin: "http://localhost:5173", // Replace with your frontend URL
  credentials: true, // Allow cookies to be sent
}));
app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));
app.use(morgan("dev"));

// Simple test route
app.get("/", (req, res) => {
  res.send("Hello, HR Management System!");
});




app.use("/api/hr", router1);
app.use("/api/employee",router2)



const PORT = process.env.PORT || 3000;
// Start server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});