import Budget from "../models/Budget.js";
import ApiError from "../utils/ApiError.js";
import Expense from "../models/Expense.js";

export const getBudgetProgress = async (userId) => {
  const budgets = await Budget.find({ user: userId }).lean();

  const result = [];

  for (const budget of budgets) {
    const expenses = await Expense.aggregate([
      {
        $match: {
          user: userId,
          category: budget.category,
          type: "expense",
        },
      },
      {
        $group: {
          _id: null,
          spent: {
            $sum: "$amount",
          },
        },
      },
    ]);

    const spent =
      expenses.length > 0
        ? expenses[0].spent
        : 0;

    result.push({
      id: budget._id,

      category: budget.category,

      budget: budget.amount,

      spent,

      remaining:
        budget.amount - spent,

      percentage:
        budget.amount === 0
          ? 0
          : Math.min(
              Math.round(
                (spent / budget.amount) *
                  100
              ),
              100
            ),
    });
  }

  return result;
};
export const createBudget = async (
  userId,
  budgetData
) => {

  const existingBudget =
    await Budget.findOne({
      user: userId,
      category: budgetData.category,
    });

  if (existingBudget) {
    throw new ApiError(
      409,
      "Budget already exists for this category"
    );
  }

  return await Budget.create({
    ...budgetData,
    user: userId,
  });
};

// Get all budgets for the logged-in user
export const getBudgets = async (userId) => {
  return await Budget.find({ user: userId })
    .sort({ category: 1 })
    .lean();
};

// Update an existing budget
export const updateBudget = async (
  budgetId,
  userId,
  amount
) => {
  const budget = await Budget.findOneAndUpdate(
    {
      _id: budgetId,
      user: userId,
    },
    {
      amount,
    },
    {
      new: true,
      runValidators: true,
    }
  );

  if (!budget) {
    throw new ApiError(404, "Budget not found");
  }

  return budget;
};

// Delete a budget
export const deleteBudget = async (
  budgetId,
  userId
) => {
  const budget = await Budget.findOneAndDelete({
    _id: budgetId,
    user: userId,
  });

  if (!budget) {
    throw new ApiError(404, "Budget not found");
  }

  return budget;
};

export const getBudgetById = async (
  budgetId,
  userId
) => {
  const budget = await Budget.findOne({
    _id: budgetId,
    user: userId,
  });

  if (!budget) {
    throw new ApiError(404, "Budget not found");
  }

  return budget;
};