import express from "express";
import {getDashboardMetrics} from "../controllers/dashboardControllers";

const router = express.Router();

router.get("/", getDashboardMetrics)

export default router;