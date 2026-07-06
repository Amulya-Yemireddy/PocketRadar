import { StyleSheet, Text, View, Pressable} from "react-native";
import { router } from "expo-router";
import COLORS from "../../../theme/colors";
import SPACING from "../../../theme/spacing";
import EmptyState from "../../../components/common/EmptyState";
import TransactionItem from "../../transactions/components/TransactionItem";

export default function RecentTransactions({
  transactions,
}) {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
      <Text style={styles.heading}>
        Recent Transactions
      </Text>

      <Pressable
        onPress={() =>
          router.push("/transactions")
        }
      >
        <Text style={styles.viewAll}>
          View All
        </Text>
      </Pressable>
    </View>

      {transactions.length === 0 ? (
        <EmptyState
          title="No transactions yet."
        />
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
    textAlign: "center",

    color: COLORS.textSecondary,

    paddingVertical: SPACING.xl,
  },
  header: {
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center",
},

viewAll: {
  color: "#2563EB",
  fontWeight: "600",
},
});