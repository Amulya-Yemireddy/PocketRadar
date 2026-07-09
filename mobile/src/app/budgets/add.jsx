import { useState } from "react";
import { StyleSheet, View } from "react-native";
import { router } from "expo-router";

import Screen from "../../components/layout/Screen";
import Dropdown from "../../components/common/Dropdown";
import AuthInput from "../../features/auth/components/AuthInput";
import PrimaryButton from "../../components/common/PrimaryButton";

import { useAuth } from "../../context/AuthContext";
import * as budgetApi from "../../services/budgetApi";

export default function AddBudget() {

  const { token } = useAuth();

  const [category, setCategory] =
    useState("Food");

  const [amount, setAmount] =
    useState("");

  const [loading, setLoading] =
    useState(false);

  const saveBudget = async () => {

    try {

      setLoading(true);

      await budgetApi.createBudget(
        token,
        {
          category,
          amount: Number(amount),
        }
      );

      router.back();

    } catch (error) {

      console.log(
        error.response?.data ||
        error.message
      );

    } finally {

      setLoading(false);

    }
  };

  return (

    <Screen scrollable>

      <View style={styles.container}>

        <Dropdown
          selectedValue={category}
          onValueChange={setCategory}
          items={[
            {
              label:"Food",
              value:"Food",
            },
            {
              label:"Shopping",
              value:"Shopping",
            },
            {
              label:"Transport",
              value:"Transport",
            },
            {
              label:"Bills",
              value:"Bills",
            },
          ]}
        />

        <AuthInput
          label="Monthly Budget"
          placeholder="5000"
          keyboardType="numeric"
          value={amount}
          onChangeText={setAmount}
        />

        <PrimaryButton
          title="Save Budget"
          loading={loading}
          onPress={saveBudget}
        />

      </View>

    </Screen>

  );

}

const styles = StyleSheet.create({

  container:{
    padding:24,
  },

});