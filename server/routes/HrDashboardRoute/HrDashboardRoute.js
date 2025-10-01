import express from "express";
import { hrMiddleware } from "../../Middlewere/HRMiddlewere/hrMiddlewere.js";
import { getHRDetails } from "../../controllers/HrDashboardController/HrDashboardController.js";

const router4 = express.Router();

router4.get("/hrDetails",hrMiddleware,getHRDetails);

export default router4;