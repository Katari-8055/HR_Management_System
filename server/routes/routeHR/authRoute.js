import express from "express";
import { loginHR, signupHR, verifyOtp } from "../../controllers/HrControllers/HrAuthControllers.js";

const router1 = express.Router();

router1.post("/hrSignup", signupHR);
router1.post("/verifyHrOtp", verifyOtp)
router1.post("/loginHr",loginHR)

export default router1;