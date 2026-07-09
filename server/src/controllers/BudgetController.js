import ApiResponse from "../utils/ApiResponse.js";


import {
  createBudget,
  getBudgets,
  updateBudget,
  deleteBudget,
  getBudgetProgress,
  getBudgetById,
} from "../services/BudgetService.js";

export const fetchBudgetProgress = async (
  req,
  res
) => {
  const progress =
    await getBudgetProgress(
      req.user._id
    );

  res.status(200).json(
    new ApiResponse(
      200,
      progress,
      "Budget progress loaded successfully"
    )
  );
};

export const addBudget = async (
  req,
  res
) => {

  const budget =
    await createBudget(
      req.user._id,
      req.body
    );

  res.status(201).json(
    new ApiResponse(
      201,
      budget,
      "Budget created successfully"
    )
  );
};

export const fetchBudgets = async (req, res) => {
  const budgets = await getBudgets(req.user._id);

  res.status(200).json(
    new ApiResponse(
      200,
      budgets,
      "Budgets loaded successfully"
    )
  );
};

export const editBudget = async (req, res) => {
  const budget = await updateBudget(
    req.params.id,
    req.user._id,
    req.body.amount
  );

  res.status(200).json(
    new ApiResponse(
      200,
      budget,
      "Budget updated successfully"
    )
  );
};

export const removeBudget = async (req, res) => {
  await deleteBudget(
    req.params.id,
    req.user._id
  );

  res.status(200).json(
    new ApiResponse(
      200,
      null,
      "Budget deleted successfully"
    )
  );
};

export const fetchBudget = async (
  req,
  res
) => {
  const budget = await getBudgetById(
    req.params.id,
    req.user._id
  );

  res.status(200).json(
    new ApiResponse(
      200,
      budget,
      "Budget loaded successfully"
    )
  );
};