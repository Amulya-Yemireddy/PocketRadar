import { StyleSheet, Text, View } from "react-native";

import COLORS from "../../../theme/colors";
import SPACING from "../../../theme/spacing";
import RADIUS from "../../../theme/radius";
import SHADOWS from "../../../theme/shadows";

export default function SummaryCard({
  icon: Icon,
  title,
  amount,
  subtitle,
  color,
}) {
  return (
    <View style={styles.card}>
      {/* Top */}
      <View style={styles.header}>
        <View
          style={[
            styles.iconContainer,
            { backgroundColor: `${color}15` },
          ]}
        >
          <Icon
            size={24}
            color={color}
          />
        </View>

        <Text style={styles.title}>
          {title}
        </Text>
      </View>

      {/* Bottom */}
      <View>
        <Text style={styles.amount}>
          ₹ {amount.toLocaleString()}
        </Text>

        <Text style={styles.subtitle}>
          {subtitle}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    width: "48%",

    minHeight: 180,

    padding: SPACING.lg,

    backgroundColor: COLORS.white,

    borderRadius: RADIUS.xl,

    marginBottom: SPACING.md,

    justifyContent: "space-between",

    ...SHADOWS.medium,
  },

  header: {
    gap: SPACING.sm,
  },

  iconContainer: {
    width: 46,
    height: 46,

    borderRadius: 23,

    justifyContent: "center",
    alignItems: "center",
  },

  title: {
    fontSize: 14,
    color: COLORS.textSecondary,
  },

  amount: {
    fontSize: 20,
    fontWeight: "700",
    color: COLORS.text,
  },

  subtitle: {
    marginTop: 6,
    color: COLORS.textSecondary,
    fontSize: 13,
  },
});