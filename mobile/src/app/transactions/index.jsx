import { useEffect, useState } from "react";
import {
  ActivityIndicator,
  FlatList,
  StyleSheet,
  Text,
} from "react-native";

import Screen from "../../components/layout/Screen";

import { useAuth } from "../../context/AuthContext";

import * as expenseApi from "../../services/expenseApi";

import TransactionItem from "../../features/transactions/components/TransactionItem";

export default function Transactions() {
  const { token } = useAuth();

  const [transactions, setTransactions] = useState([]);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadTransactions();
  }, []);

  const loadTransactions = async () => {
    try {
      const result =
        await expenseApi.getExpenses(token);

      setTransactions(result.data);
    } catch (error) {
      console.log(error.response?.data || error.message);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <Screen>
        <ActivityIndicator
          size="large"
          style={{
            marginTop: 100,
          }}
        />
      </Screen>
    );
  }

  return (
    <Screen>
      <FlatList
        data={transactions}
        keyExtractor={(item) => item._id}
        renderItem={({ item }) => (
          <TransactionItem
            transaction={item}
          />
        )}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({});