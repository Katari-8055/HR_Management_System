import express from "express";
import dotenv from "dotenv";
import morgan from "morgan";
import { PrismaClient } from "@prisma/client";

// Initialize dotenv and Prisma
dotenv.config();
const prisma = new PrismaClient();

const app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan("dev"));

// Simple test route
app.get("/", (req, res) => {
  res.send("Hello, HR Management System!");
});



const PORT = process.env.PORT || 3000;
// Start server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});