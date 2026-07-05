import { StyleSheet, Text, View, Pressable } from "react-native";
import { ArrowDownLeft, ArrowUpRight } from "lucide-react-native";
import { router } from "expo-router";
import { formatDate } from "../../../utils/formatDate";
import COLORS from "../../../theme/colors";
import SPACING from "../../../theme/spacing";

export default function TransactionItem({ transaction }) {
  const isExpense = transaction.type === "expense";

  return (
    <Pressable
  onPress={() =>
    router.push(
      `/transactions/${transaction._id}`
    )
  }
>
    <View style={styles.container}>
      <View style={styles.left}>
        <View
          style={[
            styles.iconContainer,
            {
              backgroundColor: isExpense
                ? "#FEE2E2"
                : "#DCFCE7",
            },
          ]}
        >
          {isExpense ? (
            <ArrowDownLeft
              color="#DC2626"
              size={20}
            />
          ) : (
            <ArrowUpRight
              color="#16A34A"
              size={20}
            />
          )}
        </View>

        <View>
          <Text style={styles.title}>
            {transaction.title}
          </Text>

          <Text style={styles.category}>
            {transaction.category}
          </Text>

            <Text style={styles.date}>
                {formatDate(transaction.date)}
            </Text>
        </View>
      </View>

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
    </Pressable>
  );
}

const styles = StyleSheet.create({
    date: {
        marginTop:2,
        color:COLORS.textSecondary,
        fontSize:12,
    },
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

  iconContainer: {
    width: 44,
    height: 44,
    borderRadius: 22,

    justifyContent: "center",
    alignItems: "center",

    marginRight: SPACING.md,
  },

  title: {
    fontSize: 16,
    fontWeight: "600",
    color: COLORS.text,
  },

  category: {
    color: COLORS.textSecondary,
    marginTop: 2,
  },

  amount: {
    fontSize: 16,
    fontWeight: "700",
  },
});