import { StyleSheet, Text, View } from "react-native";

import TransactionItem from "./TransactionItem";

import COLORS from "../../../theme/colors";
import SPACING from "../../../theme/spacing";

export default function RecentTransactions({
  transactions,
}) {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>
        Recent Transactions
      </Text>

      {transactions.length === 0 ? (
        <Text style={styles.empty}>
          No transactions yet.
        </Text>
      ) : (
        transactions.map((transaction) => (
          <TransactionItem
            key={transaction._id}
            transaction={transaction}
          />
        ))
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: SPACING.xl,
  },

  heading: {
    fontSize: 22,
    fontWeight: "700",

    marginBottom: SPACING.md,

    color: COLORS.text,
  },

  empty: {
    color: COLORS.textSecondary,
    textAlign: "center",

    marginVertical: SPACING.lg,
  },
});