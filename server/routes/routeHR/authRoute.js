import express from "express";
import { loginHR, logoutHR, signupHR, verifyOtp } from "../../controllers/HrControllers/HrAuthControllers.js";
import { hrMiddleware } from "../../Middlewere/HRMiddlewere/hrMiddlewere.js";

const router1 = express.Router();

router1.post("/hrSignup", signupHR);
router1.post("/verifyHrOtp",hrMiddleware, verifyOtp)
router1.post("/loginHr",loginHR);
router1.post("/logoutHr",hrMiddleware,logoutHR);

export default router1;