import Expense from "../models/Expense.js";
import ApiError from "../utils/ApiError.js";
/*
  Creates a new expense/income for the logged-in user.

  Notice we don't accept "user" from the frontend.
  The authenticated user comes from req.user
  (our auth middleware).
*/
export const createExpense = async (userId, expenseData) => {
  const expense = await Expense.create({
    user: userId,
    ...expenseData,
  });

  return expense;
};

/*
  Returns all expenses belonging to the
  currently logged-in user.

  Newest expenses appear first.
*/
export const getExpenses = async (userId) => {
  return await Expense.find({
    user: userId,
  })
    .select("-user -__v")
    .sort({
      date: -1,
    })
    .lean();
};

export const getExpenseById = async (expenseId, userId) => {
  const expense = await Expense.findOne({
    _id: expenseId,
    user: userId,
  })
    .select("-user -__v")
    .lean();

  if (!expense) {
    throw new ApiError(404, "Expense not found");
  }

  return expense;
};

export const updateExpense = async (
  expenseId,
  userId,
  expenseData
) => {
  const expense = await Expense.findOneAndUpdate(
    {
      _id: expenseId,
      user: userId,
    },
    expenseData,
    {
      new: true,
      runValidators: true,
    }
  )
    .select("-user -__v")
    .lean();

  if (!expense) {
    throw new ApiError(404, "Expense not found");
  }

  return expense;
};

export const deleteExpense = async (
  expenseId,
  userId
) => {
  const expense = await Expense.findOneAndDelete({
    _id: expenseId,
    user: userId,
  });

  if (!expense) {
    throw new ApiError(
      404,
      "Expense not found"
    );
  }

  return expense;
};