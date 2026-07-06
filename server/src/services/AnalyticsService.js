import Expense from "../models/Expense.js";

export const getCategoryAnalytics = async (userId) => {
  return await Expense.aggregate([
    {
      $match: {
        user: userId,
        type: "expense",
      },
    },

    {
      $group: {
        _id: "$category",

        total: {
          $sum: "$amount",
        },
      },
    },

    {
      $project: {
        _id: 0,

        category: "$_id",

        total: 1,
      },
    },

    {
      $sort: {
        total: -1,
      },
    },
  ]);
};