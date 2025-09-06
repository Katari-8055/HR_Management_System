import express from "express";
import { addEmployeeDetails, loginEmployee, setPassword } from "../../controllers/EmployeeControllers/EmployeeController.js";
import { employeeMiddleware } from "../../Middlewere/EmployeeMiddlewere/employeeMiddlewere.js";

const router3 = express.Router();

router3.post("/passwordSetup",setPassword);
router3.post("/loginEmployee",loginEmployee);
router3.post("/addEmployeeDetails",employeeMiddleware, addEmployeeDetails)

export default router3;