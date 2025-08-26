import express from "express";
import { signupHR } from "../controllers/HrControllers/HrAuthControllers.js";

const router = express.Router();

router.post("/hrSignup", signupHR);

export default router;