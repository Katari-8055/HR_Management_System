import express from "express";
import { loginEmployee, setPassword } from "../../controllers/EmployeeControllers/EmployeeController.js";

const router3 = express.Router();

router3.post("/passwordSetup",setPassword);
router3.post("/loginEmployee",loginEmployee);

export default router3;