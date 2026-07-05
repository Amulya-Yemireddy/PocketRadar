import { useEffect, useState } from "react";
import {
  ActivityIndicator,
  StyleSheet,
  View,
} from "react-native";

import Screen from "../../components/layout/Screen";

import WelcomeCard from "../../features/dashboard/components/WelcomeCard";
import SummaryCard from "../../features/dashboard/components/SummaryCard";
import BudgetProgress from "../../features/dashboard/components/BudgetProgress";

import { useAuth } from "../../context/AuthContext";
import * as dashboardApi from "../../services/dashboardApi";

import {
  Wallet,
  TrendingUp,
  Receipt,
} from "lucide-react-native";

export default function Dashboard() {
  const { token, user } = useAuth();

  const [summary, setSummary] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadDashboard();
  }, []);

  const loadDashboard = async () => {
    try {
      const result = await dashboardApi.getDashboard(token);

      setSummary(result.data);
    } catch (error) {
      console.log(error.response?.data || error.message);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <Screen>
        <View style={styles.loading}>
          <ActivityIndicator size="large" />
        </View>
      </Screen>
    );
  }

  return (
    <Screen scrollable>
      <WelcomeCard
        name={user.fullName}
      />

      <View style={styles.grid}>
        <SummaryCard
          icon={Wallet}
          title="Balance"
          amount={summary?.balance ?? 0}
          subtitle="Available"
          color="#2563EB"
        />

        <SummaryCard
          icon={TrendingUp}
          title="Income"
          amount={summary?.income ?? 0}
          subtitle="This Month"
          color="#16A34A"
        />

        <SummaryCard
          icon={Receipt}
          title="Expenses"
          amount={summary?.expenses ?? 0}
          subtitle="This Month"
          color="#DC2626"
        />
      </View>

      <BudgetProgress />
    </Screen>
  );
}

const styles = StyleSheet.create({
  loading: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
});