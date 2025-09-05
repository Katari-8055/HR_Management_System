import express from "express";
import { addEmployee } from "../../controllers/HrControllers/HREmployeeController.js";

const router2 = express.Router();

router2.post("/addEmployee", addEmployee);

export default router2;