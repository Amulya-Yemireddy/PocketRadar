import Expense from "../models/Expense.js";

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
  }).sort({
    date: -1,
  });
};