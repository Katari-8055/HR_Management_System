import express from "express";
import { signupHR } from "../controllers/authControllers.js";
const router = express.Router();

router.post("/hrSignup", signupHR);

export default router;