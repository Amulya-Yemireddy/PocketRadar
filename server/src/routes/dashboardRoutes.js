import express from "express";

import { authenticate } from "../middleware/authMiddleware.js";
import { getDashboard } from "../controllers/DashboardController.js";

const router = express.Router();

router.get("/", authenticate, getDashboard);

export default router;