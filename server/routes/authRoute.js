import express from "express";
import { loginHR, signupHR, verifyOtp } from "../controllers/HrControllers/HrAuthControllers.js";

const router = express.Router();

router.post("/hrSignup", signupHR);
router.post("/verifyHrOtp", verifyOtp)
router.post("/loginHr",loginHR)

export default router;