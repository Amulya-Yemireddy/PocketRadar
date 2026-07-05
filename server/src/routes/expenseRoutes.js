import express from "express";

import { authenticate } from "../middleware/authMiddleware.js";
import { addExpense, fetchExpenses, fetchExpense, editExpense, removeExpense, } from "../controllers/ExpenseController.js";

const router = express.Router();

/*
  Every expense route requires login.

  If authentication fails,
  addExpense() is never called.
*/
router.post("/", authenticate, addExpense);
router.get("/", authenticate, fetchExpenses);
router.get("/:id", authenticate, fetchExpense);
router.put("/:id", authenticate, editExpense);
router.delete("/:id", authenticate, removeExpense);

export default router;