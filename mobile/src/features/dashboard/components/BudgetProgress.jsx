import { StyleSheet, Text, View } from "react-native";

import COLORS from "../../../theme/colors";
import SHADOWS from "../../../theme/shadows";
import SPACING from "../../../theme/spacing";
import RADIUS from "../../../theme/radius";

export default function BudgetProgress() {
  const progress = 48;

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
              width: `${progress}%`,
            },
          ]}
        />
      </View>

      <Text style={styles.text}>
        ₹7,150 spent of ₹15,000
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