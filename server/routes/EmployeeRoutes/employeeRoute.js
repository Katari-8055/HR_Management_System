import express from "express";
import { addEmployeeDetails, loginEmployee, setPassword } from "../../controllers/EmployeeControllers/EmployeeController.js";
import { employeeMiddleware } from "../../Middlewere/EmployeeMiddlewere/employeeMiddlewere.js";

const router2 = express.Router();

router2.post("/passwordSetup",setPassword);
router2.post("/loginEmployee",loginEmployee);
router2.post("/addEmployeeDetails",employeeMiddleware, addEmployeeDetails)

export default router2;