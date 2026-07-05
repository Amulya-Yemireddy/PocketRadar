import { useState } from "react";
import { StyleSheet, View } from "react-native";
import { router } from "expo-router";

import Screen from "../../components/layout/Screen";
import ExpenseForm from "../../features/transactions/components/ExpenseForm";
import { useAuth } from "../../context/AuthContext";
import * as expenseApi from "../../services/expenseApi";

export default function AddExpense() {
  const { token } = useAuth();

  const [loading, setLoading] = useState(false);

  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");

  const [category, setCategory] = useState("Food");
  const [type, setType] = useState("expense");

  const [notes, setNotes] = useState("");

  const saveExpense = async () => {
    try {
      setLoading(true);

      await expenseApi.createExpense(token, {
        title,
        amount: Number(amount),
        category,
        type,
        notes,
      });

      router.back();

    } catch (error) {
      console.log(error.response?.data || error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Screen scrollable>
      <View style={styles.container}>
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
  buttonTitle="Save Expense"
  onSubmit={saveExpense}
/>
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 24,
  },
});