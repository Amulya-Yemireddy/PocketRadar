import Expense from "../models/Expense.js";
import ApiResponse from "../utils/ApiResponse.js";

export const getDashboard = async (req, res) => {

  // Fetch all transactions for this user
  const expenses = await Expense.find({
    user: req.user._id,
})
.select("-user -__v")
.sort({ date: -1 })
.lean();

  // Separate income and expenses
  const income = expenses
    .filter((item) => item.type === "income")
    .reduce((sum, item) => sum + item.amount, 0);

  const totalExpenses = expenses
    .filter((item) => item.type === "expense")
    .reduce((sum, item) => sum + item.amount, 0);

  // Available balance
  const balance = income - totalExpenses;

  // Only send latest 5 transactions
  const recentTransactions = expenses.slice(0, 5);

  res.status(200).json(
    new ApiResponse(
      200,
      {
        balance,
        income,
        expenses: totalExpenses,
        recentTransactions,
      },
      "Dashboard loaded successfully"
    )
  );
};