import { useEffect, useState } from "react";
import { StyleSheet, View, Alert } from "react-native";
import { router, useLocalSearchParams } from "expo-router";

import Screen from "../../../components/layout/Screen";
import LoadingScreen from "../../../components/common/LoadingScreen";
import AuthInput from "../../../features/auth/components/AuthInput";
import PrimaryButton from "../../../components/common/PrimaryButton";

import { useAuth } from "../../../context/AuthContext";
import * as budgetApi from "../../../services/budgetApi";

export default function EditBudget() {
  const { id } = useLocalSearchParams();
  const { token } = useAuth();

  const [budget, setBudget] = useState(null);
  const [amount, setAmount] = useState("");
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    loadBudget();
  }, []);

  const loadBudget = async () => {
    try {
      const result = await budgetApi.getBudget(
        token,
        id
      );

      setBudget(result.data);
      setAmount(result.data.amount.toString());

    } catch (error) {
      console.log(
        error.response?.data ||
        error.message
      );
    } finally {
      setLoading(false);
    }
  };

  const saveBudget = async () => {
    try {
      setSaving(true);

      await budgetApi.updateBudget(
        token,
        id,
        Number(amount)
      );

      router.back();

    } catch (error) {
      console.log(
        error.response?.data ||
        error.message
      );
    } finally {
      setSaving(false);
    }
  };

  const confirmDelete = () => {
  Alert.alert(
    "Delete Budget",
    "Are you sure you want to delete this budget?",
    [
      {
        text: "Cancel",
        style: "cancel",
      },
      {
        text: "Delete",
        style: "destructive",
        onPress: deleteBudget,
      },
    ]
  );
};

const deleteBudget = async () => {
    try {

        setSaving(true);

        await budgetApi.deleteBudget(
        token,
        id
        );

        router.replace("/budgets");

    } catch (error) {

        console.log(
        error.response?.data ||
        error.message
        );

    } finally {

        setSaving(false);

    }
    };

  if (loading) {
    return <LoadingScreen />;
  }

  return (
    <Screen scrollable>
      <View style={styles.container}>

        <AuthInput
          label="Category"
          value={budget.category}
          editable={false}
        />

        <AuthInput
          label="Monthly Budget"
          keyboardType="numeric"
          value={amount}
          onChangeText={setAmount}
        />

        <PrimaryButton
          title="Save Changes"
          loading={saving}
          onPress={saveBudget}
        />

        <PrimaryButton
            title="Delete Budget"
            variant="danger"
            onPress={confirmDelete}
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