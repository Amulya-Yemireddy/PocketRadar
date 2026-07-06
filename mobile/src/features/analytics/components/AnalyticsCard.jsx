import { StyleSheet, Text, View } from "react-native";

import COLORS from "../../../theme/colors";
import SPACING from "../../../theme/spacing";
import SHADOWS from "../../../theme/shadows";

export default function AnalyticsCard({
  children,
}) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Spending by Category
      </Text>

      {children}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.white,

    borderRadius: 20,

    padding: SPACING.lg,

    marginVertical: SPACING.lg,

    ...SHADOWS.medium,
  },

  title: {
    fontSize: 20,
    fontWeight: "700",

    color: COLORS.text,

    marginBottom: SPACING.lg,
  },
});