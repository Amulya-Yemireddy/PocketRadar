import express from "express";

import { authenticate } from "../middleware/authMiddleware.js";

import {
  addBudget,
  fetchBudgets,
  editBudget,
  removeBudget,
    fetchBudgetProgress,
    fetchBudget,
} from "../controllers/BudgetController.js";

const router = express.Router();

router.post("/", authenticate, addBudget);

router.get("/", authenticate, fetchBudgets);
router.get(
  "/progress",
  authenticate,
  fetchBudgetProgress
);
router.get(
  "/:id",
  authenticate,
  fetchBudget
);

router.put("/:id", authenticate, editBudget);

router.delete("/:id", authenticate, removeBudget);



export default router;