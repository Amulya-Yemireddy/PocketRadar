import { StyleSheet, Text, View } from "react-native";

import COLORS from "../../../theme/colors";
import SHADOWS from "../../../theme/shadows";
import SPACING from "../../../theme/spacing";
import RADIUS from "../../../theme/radius";

export default function BudgetProgress({
  spent,
  budget,
}) {
  const progress =
  budget > 0
    ? (spent / budget) * 100
    : 0;

  return (
    <View style={styles.card}>
      <Text style={styles.title}>
        Monthly Budget
      </Text>

      <View style={styles.track}>
        <View
          style={[
            styles.fill,
            {
              width: `${Math.min(progress, 100)}%`,
            },
          ]}
        />
      </View>

      <Text style={styles.text}>
        ₹{spent.toLocaleString()} spent of ₹{budget.toLocaleString()}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: COLORS.white,

    borderRadius: RADIUS.xl,

    padding: SPACING.lg,

    ...SHADOWS.medium,
  },

  title: {
    fontWeight: "700",
    fontSize: 18,
    marginBottom: SPACING.md,
  },

  track: {
    height: 10,

    backgroundColor: "#ECECEC",

    borderRadius: 100,

    overflow: "hidden",
  },

  fill: {
    height: "100%",

    backgroundColor: COLORS.primary,

    borderRadius: 100,
  },

  text: {
    marginTop: SPACING.md,

    color: COLORS.textSecondary,
  },
});