import express from "express";
import { loginHR, logoutHR, signupHR, verifyOtp } from "../../controllers/HrControllers/HrAuthControllers.js";
import { hrMiddleware } from "../../Middlewere/HRMiddlewere/hrMiddlewere.js";
import { addDepartment, getAllEmployees, getDepartments, getHRDetails } from "../../controllers/HrControllers/HrDashboardController.js";
import { addEmployee } from "../../controllers/HrControllers/HREmployeeController.js";

const router1 = express.Router();

router1.post("/hrSignup", signupHR);
router1.post("/verifyHrOtp",hrMiddleware, verifyOtp)
router1.post("/loginHr",loginHR);
router1.post("/logoutHr",hrMiddleware,logoutHR);
router1.get("/hrDetails",hrMiddleware,getHRDetails);
router1.get("/getAllEmployees",hrMiddleware,getAllEmployees);

router1.post("/addEmployee",hrMiddleware, addEmployee);
router1.post("/addDepartment",hrMiddleware, addDepartment);
router1.get("/getDepartments", hrMiddleware, getDepartments)

export default router1;