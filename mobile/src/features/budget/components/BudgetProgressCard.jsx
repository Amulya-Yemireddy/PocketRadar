import {
  StyleSheet,
  Text,
  View,
} from "react-native";
import { Pressable } from "react-native";
import { router } from "expo-router";

import COLORS from "../../../theme/colors";
import SPACING from "../../../theme/spacing";
import SHADOWS from "../../../theme/shadows";

export default function BudgetProgressCard({
  budget,
  onDelete,
}) {

  const getColor = () => {

    if (budget.percentage >= 90)
      return COLORS.danger;

    if (budget.percentage >= 70)
      return COLORS.warning;

    return COLORS.success;

  };

  return (
    <Pressable style={styles.card}
      onPress={() =>
        router.push(`/budgets/edit/${budget.id}`)
      }
      
    >

      <View style={styles.header}>

        <Text style={styles.category}>
          {budget.category}
        </Text>

        <Text style={styles.percent}>
          {budget.percentage}%
        </Text>

      </View>

      <View style={styles.track}>

        <View
          style={[
            styles.fill,
            {
              width: `${budget.percentage}%`,
              backgroundColor:
                getColor(),
            },
          ]}
        />

      </View>

      <Text style={styles.amount}>
        ₹{budget.spent.toLocaleString()} / ₹{budget.budget.toLocaleString()}
      </Text>

      <Text
        style={[
          styles.remaining,
          {
            color:
              budget.remaining >= 0
                ? COLORS.success
                : COLORS.danger,
          },
        ]}
      >
        {budget.remaining >= 0
          ? `Remaining ₹${budget.remaining.toLocaleString()}`
          : `Over Budget ₹${Math.abs(
              budget.remaining
            ).toLocaleString()}`}
      </Text>

    </Pressable>
  );
}

const styles = StyleSheet.create({
  remaining: {
      marginTop:8,

      fontWeight:"600",
  },
  card: {

    backgroundColor: COLORS.white,

    padding: SPACING.lg,

    borderRadius: 18,

    marginBottom: SPACING.lg,

    ...SHADOWS.small,

  },

  header: {

    flexDirection: "row",

    justifyContent: "space-between",

    marginBottom: SPACING.md,

  },

  category: {

    fontSize: 18,

    fontWeight: "700",

    color: COLORS.text,

  },

  percent: {

    fontWeight: "700",

  },

  track: {

    height: 12,

    borderRadius: 6,

    backgroundColor: "#E5E7EB",

    overflow: "hidden",

  },

  fill: {

    height: "100%",

    borderRadius: 6,

  },

  amount: {

    marginTop: SPACING.md,

    color: COLORS.textSecondary,

  },

});