import { View } from "react-native";

import AuthInput from "../../auth/components/AuthInput";
import Dropdown from "../../../components/common/Dropdown";
import PrimaryButton from "../../../components/common/PrimaryButton";

export default function ExpenseForm({
  title,
  setTitle,
  amount,
  setAmount,
  category,
  setCategory,
  type,
  setType,
  notes,
  setNotes,
  loading,
  buttonTitle,
  onSubmit,
}) {
  return (
    <View>
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
        title={buttonTitle}
        loading={loading}
        onPress={onSubmit}
      />
    </View>
  );
}