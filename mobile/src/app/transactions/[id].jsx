import { useEffect, useState } from "react";
import { useLocalSearchParams } from "expo-router";
import {
  StyleSheet,
  Text,
  View,Alert, 
} from "react-native";
import PrimaryButton from "../../components/common/PrimaryButton";
import { router } from "expo-router";
import Screen from "../../components/layout/Screen";
import { useAuth } from "../../context/AuthContext";
import * as expenseApi from "../../services/expenseApi";
import { formatDate } from "../../utils/formatDate";
import LoadingScreen from "../../components/common/LoadingScreen";
export default function TransactionDetails() {
  const { id } = useLocalSearchParams();

  const { token } = useAuth();

  const [expense, setExpense] = useState(null);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadExpense();
  }, []);

  const confirmDelete = () => {
    Alert.alert(
        "Delete Expense",
        "Are you sure you want to delete this expense?",
        [
        {
            text: "Cancel",
            style: "cancel",
        },
        {
            text: "Delete",
            style: "destructive",
            onPress: deleteCurrentExpense,
        },
        ]
    );
    };

    const deleteCurrentExpense = async () => {
    try {
        await expenseApi.deleteExpense(
        token,
        expense._id
        );

        router.replace("/(tabs)/transactions");

    } catch (error) {
        console.log(
        error.response?.data ||
        error.message
        );
    }
    };


  const loadExpense = async () => {
    try {
      const result =
        await expenseApi.getExpense(
          token,
          id
        );

      setExpense(result.data);
    } catch (error) {
      console.log(
        error.response?.data ||
          error.message
      );
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <Screen>
        <View style={styles.loading}>
           <LoadingScreen />
        </View>
      </Screen>
    );
  }
if (!expense) {
  return (
    <Screen>
      <LoadingScreen />
    </Screen>
  );
}
  return (
    <Screen scrollable>
      <View style={styles.container}>
        <Text style={styles.title}>
          {expense.title}
        </Text>

        <Text style={styles.amount}>
          ₹{expense.amount.toLocaleString()}
        </Text>

        <InfoRow
          label="Category"
          value={expense.category}
        />

        <InfoRow
          label="Type"
          value={expense.type}
        />

        <InfoRow
          label="Date"
          value={formatDate(expense.date)}
        />

        <InfoRow
          label="Notes"
          value={
            expense.notes || "None"
          }
        />

        <PrimaryButton
        title="Edit Expense"
        onPress={() =>
            router.push(`/expense/edit/${expense._id}`)
        }
        />

        <PrimaryButton
        title="Delete Expense"
        onPress={confirmDelete}
        variant="danger"
        />
      </View>
    </Screen>
  );
}

function InfoRow({
  label,
  value,
}) {
  return (
    <View style={styles.row}>
      <Text style={styles.label}>
        {label}
      </Text>

      <Text style={styles.value}>
        {value}
      </Text>
    </View>
  );
}


const styles = StyleSheet.create({
  loading: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  container: {
    padding: 24,
  },

  title: {
    fontSize: 30,
    fontWeight: "700",
  },

  amount: {
    marginTop: 10,

    fontSize: 38,

    fontWeight: "700",

    color: "#2563EB",

    marginBottom: 40,
  },

  row: {
    flexDirection: "row",

    justifyContent:
      "space-between",

    paddingVertical: 18,

    borderBottomWidth: 1,

    borderColor: "#F1F5F9",
  },

  label: {
    color: "#64748B",

    fontSize: 16,
  },

  value: {
    fontWeight: "600",

    fontSize: 16,
  },
});