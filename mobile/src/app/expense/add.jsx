import { useState } from "react";
import { StyleSheet, View } from "react-native";
import { router } from "expo-router";

import Screen from "../../components/layout/Screen";
import AuthInput from "../../features/auth/components/AuthInput";
import PrimaryButton from "../../components/common/PrimaryButton";
import Dropdown from "../../components/common/Dropdown";

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

        <AuthInput
          label="Title"
          placeholder="Coffee"
          value={title}
          onChangeText={setTitle}
        />

        <AuthInput
          label="Amount"
          placeholder="320"
          keyboardType="numeric"
          value={amount}
          onChangeText={setAmount}
        />

        <Dropdown
          selectedValue={category}
          onValueChange={setCategory}
          items={[
            { label: "Food", value: "Food" },
            { label: "Transport", value: "Transport" },
            { label: "Shopping", value: "Shopping" },
            { label: "Bills", value: "Bills" },
          ]}
        />

        <Dropdown
          selectedValue={type}
          onValueChange={setType}
          items={[
            { label: "Expense", value: "expense" },
            { label: "Income", value: "income" },
          ]}
        />

        <AuthInput
          label="Notes"
          placeholder="Optional"
          value={notes}
          onChangeText={setNotes}
        />

        <PrimaryButton
          title="Save Expense"
          loading={loading}
          onPress={saveExpense}
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