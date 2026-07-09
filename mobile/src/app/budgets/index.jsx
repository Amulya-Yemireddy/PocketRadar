import Screen from "../../components/layout/Screen";

import LoadingScreen from "../../components/common/LoadingScreen";

import BudgetProgressCard from "../../features/budget/components/BudgetProgressCard";
import { useState } from "react";
import {
  StyleSheet,
  Pressable,
  Text,
} from "react-native";
import useBudgets from "../../features/budget/hooks/useBudgets";
import EmptyState from "../../components/common/EmptyState";
import { router } from "expo-router";
import { useFocusEffect } from "expo-router";
import { useCallback } from "react";

export default function Budgets() {
useFocusEffect(
  useCallback(() => {
    refresh();
  }, [])
);
  const {
    budgets,
    loading,
    refresh,
  } = useBudgets();

  if (loading) {

    return <LoadingScreen />;

  }

  if (!loading && budgets.length === 0) {
  return (
    <Screen>
      <EmptyState
        title="No Budgets Yet"
        subtitle="Create your first monthly budget."
        buttonTitle="Create Budget"
        onPress={() =>
          router.push("/budgets/add")
        }
      />
      <Pressable
        style={styles.fab}
        onPress={() => router.push("/budgets/add")}
      ><Text style={styles.fabText}>+</Text>
      </Pressable>
    </Screen>
  );
}

  return (

    <Screen scrollable>

      {budgets.map((budget) => (

        <BudgetProgressCard
          key={budget.id}
          budget={budget}
        />

      ))}
      <Pressable
        style={styles.fab}
        onPress={() => router.push("/budgets/add")}
      ><Text style={styles.fabText}>+</Text>
      </Pressable>

    </Screen>

  );

}

const styles = StyleSheet.create({
    fabText: {
  color: "white",
  fontSize: 34,
  fontWeight: "700",
  marginTop: -2,
},
  fab: {
  position: "absolute",

  right: 24,

  bottom: 30,

  width: 64,

  height: 64,

  borderRadius: 32,

  backgroundColor: "#2563EB",

  justifyContent: "center",

  alignItems: "center",

  elevation: 6,
},})