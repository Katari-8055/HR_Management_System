import express from "express";
import dotenv from "dotenv";
import morgan from "morgan";
import router1 from "./routes/routeHR/authRoute.js";
import router2 from "./routes/OtherHrRoute/HrRoute.js";
import router3 from "./routes/EmployeeRoutes/employeeRoute.js";

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




app.use("/api/auth", router1);
app.use("/api/employee", router2)
app.use("/api/employee",router3)



const PORT = process.env.PORT || 3000;
// Start server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});