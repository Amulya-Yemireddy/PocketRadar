import { useEffect, useState } from "react";
import {
  StyleSheet,
  View,
} from "react-native";

import Screen from "../../components/layout/Screen";
import { Pressable } from "react-native";
import { Plus,Wallet,TrendingUp,Receipt,PiggyBank } from "lucide-react-native";
import { router } from "expo-router";
import WelcomeCard from "../../features/dashboard/components/WelcomeCard";
import SummaryCard from "../../features/dashboard/components/SummaryCard";

import { useFocusEffect } from "expo-router";
import { useCallback } from "react";
import { useAuth } from "../../context/AuthContext";
import * as dashboardApi from "../../services/dashboardApi";
import RecentTransactions from "../../features/dashboard/components/RecentTransactions";
import LoadingScreen from "../../components/common/LoadingScreen";
import AnalyticsCard from "../../features/analytics/components/AnalyticsCard";
import CategoryPieChart from "../../features/analytics/components/CategoryPieChart";
import useAnalytics from "../../features/analytics/hooks/useAnalytics"; 
import AnalyticsLegend from "../../features/analytics/components/AnalyticsLegend";
import PrimaryButton from "../../components/common/PrimaryButton";
import BudgetPreview from "../../features/budget/components/BudgetPreview";

import useBudgets from "../../features/budget/hooks/useBudgets";

export default function Dashboard() {
  const { token, user } = useAuth();
  const {
    budgets,
    loading: budgetsLoading,
  } = useBudgets();
  const [summary, setSummary] = useState(null);
  const [loading, setLoading] = useState(true);
  const { analytics } = useAnalytics();

  useFocusEffect(
    useCallback(() => {
      if (token) {
        loadDashboard();
      }
    }, [token])
  );

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
           <LoadingScreen />
        </View>
      </Screen>
    );
  }

  return (
    <Screen scrollable>
      <WelcomeCard
        name={user?.fullName || "User"}
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

        <SummaryCard
          icon={PiggyBank}
          title="Savings"
          amount={summary?.savings ?? 0}
          subtitle="Available"
          color="#9333EA"
        />
      </View>
       <AnalyticsCard>

        <CategoryPieChart
            data={analytics}
        />

        <AnalyticsLegend
            data={analytics}
        />

    </AnalyticsCard> 

    <BudgetPreview
    budgets={budgets}
/>

<PrimaryButton
    title="View All Budgets"
    onPress={() =>
        router.push("/budgets")
    }
/>

      
      <RecentTransactions
        transactions={summary?.recentTransactions ?? []}
      />
      <Pressable
  style={styles.fab}
  onPress={() => router.push("/expense/add")}
>
  <Plus
    color="white"
    size={28}
  />
</Pressable>

    </Screen>
  );
}

const styles = StyleSheet.create({
  fab: {
  position: "absolute",

  right: 24,

  bottom: 30,

  width: 64,

  height: 64,

  borderRadius: 32,

  backgroundColor: "#2563EB",

  justifyContent: "center",

  alignItems: "center",

  elevation: 6,
},
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