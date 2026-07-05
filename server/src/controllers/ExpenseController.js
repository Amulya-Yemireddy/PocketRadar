import ApiResponse from "../utils/ApiResponse.js";
import { createExpense, getExpenses, getExpenseById, updateExpense, deleteExpense, } from "../services/ExpenseService.js";

export const addExpense = async (req, res) => {
  const expense = await createExpense(
    req.user._id,
    req.body
  );

  res.status(201).json(
    new ApiResponse(
      201,
      expense,
      "Expense created successfully"
    )
  );
};

export const fetchExpenses = async (req, res) => {
  const expenses = await getExpenses(req.user._id);

  res.status(200).json(
    new ApiResponse(
      200,
      expenses,
      "Expenses fetched successfully"
    )
  );
};

export const fetchExpense = async (req, res) => {
  const expense = await getExpenseById(
    req.params.id,
    req.user._id
  );

  res.status(200).json(
    new ApiResponse(
      200,
      expense,
      "Expense fetched successfully"
    )
  );
};

export const editExpense = async (
    req,
    res
) => {

    const expense =
        await updateExpense(
            req.params.id,
            req.user._id,
            req.body
        );

    res.status(200).json(
        new ApiResponse(
            200,
            expense,
            "Expense updated successfully"
        )
    );
};

export const removeExpense = async (
  req,
  res
) => {
  await deleteExpense(
    req.params.id,
    req.user._id
  );

  res.status(200).json(
    new ApiResponse(
      200,
      null,
      "Expense deleted successfully"
    )
  );
};