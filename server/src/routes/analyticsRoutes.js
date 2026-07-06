import express from "express";

import { authenticate } from "../middleware/authMiddleware.js";

import {
  fetchCategoryAnalytics,
} from "../controllers/AnalyticsController.js";

const router = express.Router();

router.get(
  "/categories",
  authenticate,
  fetchCategoryAnalytics
);

export default router;