import { StyleSheet, Text, View } from "react-native";

import COLORS from "../../../theme/colors";
import SPACING from "../../../theme/spacing";

export default function TransactionItem({ transaction }) {
  const isExpense = transaction.type === "expense";

  return (
    <View style={styles.container}>
      {/* Left Side */}
      <View style={styles.left}>
        <View style={styles.icon}>
          <Text style={styles.iconText}>
            {isExpense ? "💸" : "💰"}
          </Text>
        </View>

        <View>
          <Text style={styles.title}>
            {transaction.title}
          </Text>

          <Text style={styles.category}>
            {transaction.category}
          </Text>
        </View>
      </View>

      {/* Right Side */}
      <Text
        style={[
          styles.amount,
          {
            color: isExpense
              ? "#DC2626"
              : "#16A34A",
          },
        ]}
      >
        {isExpense ? "-" : "+"}₹
        {transaction.amount.toLocaleString()}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",

    paddingVertical: SPACING.md,
  },

  left: {
    flexDirection: "row",
    alignItems: "center",
  },

  icon: {
    width: 44,
    height: 44,
    borderRadius: 22,

    backgroundColor: "#F3F4F6",

    justifyContent: "center",
    alignItems: "center",

    marginRight: SPACING.md,
  },

  iconText: {
    fontSize: 20,
  },

  title: {
    fontWeight: "600",
    fontSize: 16,
    color: COLORS.text,
  },

  category: {
    color: COLORS.textSecondary,
    marginTop: 2,
  },

  amount: {
    fontWeight: "700",
    fontSize: 16,
  },
});