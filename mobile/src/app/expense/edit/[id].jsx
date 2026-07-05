import { useEffect, useState } from "react";
import { useLocalSearchParams, router } from "expo-router";

import Screen from "../../../components/layout/Screen";
import ExpenseForm from "../../../features/transactions/components/ExpenseForm";

import { useAuth } from "../../../context/AuthContext";

import * as expenseApi from "../../../services/expenseApi";

export default function EditExpense() {
  const { id } = useLocalSearchParams();

  const { token } = useAuth();

  const [loading, setLoading] = useState(false);

  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");

  const [category, setCategory] = useState("Food");
  const [type, setType] = useState("expense");
  const [notes, setNotes] = useState("");

  useEffect(() => {
    loadExpense();
  }, []);

  const loadExpense = async () => {
    try {
      const result = await expenseApi.getExpense(
        token,
        id
      );

      const expense = result.data;

      setTitle(expense.title);
      setAmount(expense.amount.toString());
      setCategory(expense.category);
      setType(expense.type);
      setNotes(expense.notes);
    } catch (error) {
      console.log(error.response?.data || error.message);
    }
  };

  const updateExpense = async () => {
    try {
      setLoading(true);

      await expenseApi.updateExpense(
        token,
        id,
        {
          title,
          amount: Number(amount),
          category,
          type,
          notes,
        }
      );

      router.back();

    } catch (error) {
      console.log(error.response?.data || error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Screen scrollable>
      <ExpenseForm
        title={title}
        setTitle={setTitle}
        amount={amount}
        setAmount={setAmount}
        category={category}
        setCategory={setCategory}
        type={type}
        setType={setType}
        notes={notes}
        setNotes={setNotes}
        loading={loading}
        buttonTitle="Update Expense"
        onSubmit={updateExpense}
      />
    </Screen>
  );
}