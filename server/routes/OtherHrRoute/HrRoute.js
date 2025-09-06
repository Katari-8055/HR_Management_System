import express from "express";
import { addEmployee } from "../../controllers/HrControllers/HREmployeeController.js";
import { hrMiddleware } from "../../Middlewere/HRMiddlewere/hrMiddlewere.js";

const router2 = express.Router();

router2.post("/addEmployee",hrMiddleware, addEmployee);

export default router2;