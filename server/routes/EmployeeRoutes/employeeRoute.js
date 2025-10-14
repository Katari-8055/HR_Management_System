import express from "express";
import { addEmployeeDetails, getEmployeeDetails, loginEmployee, loginOutEmployee, setPassword, uploadProfileImage } from "../../controllers/EmployeeControllers/EmployeeController.js";
import { employeeMiddleware } from "../../Middlewere/EmployeeMiddlewere/employeeMiddlewere.js";
import { upload } from "../../config/cloudinary.js";

const router2 = express.Router();

router2.post("/passwordSetup",setPassword);
router2.post("/loginEmployee",loginEmployee);
router2.post("/upload",employeeMiddleware,upload.single("image"),uploadProfileImage);
router2.post("/addEmployeeDetails",employeeMiddleware, addEmployeeDetails);
router2.post("/logoutEmp",employeeMiddleware, loginOutEmployee);
router2.get("/empDetails",employeeMiddleware,getEmployeeDetails)

export default router2;