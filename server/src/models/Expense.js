import mongoose from "mongoose";

const expenseSchema = new mongoose.Schema(
  {
    // Every expense belongs to one user
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    title: {
      type: String,
      required: true,
      trim: true,
    },

    amount: {
      type: Number,
      required: true,
      min: 0,
    },

    category: {
      type: String,
      required: true,
    },

    /*
      expense
      income

      Later we can support:
      transfer
      investment
      loan
    */
    type: {
      type: String,
      enum: ["expense", "income"],
      default: "expense",
    },

    date: {
      type: Date,
      default: Date.now,
    },

    notes: {
      type: String,
      default: "",
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model(
  "Expense",
  expenseSchema
);