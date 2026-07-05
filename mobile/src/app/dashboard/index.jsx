import { StyleSheet, View } from "react-native";

import Screen from "../../components/layout/Screen";

import WelcomeCard from "../../features/dashboard/components/WelcomeCard";
import SummaryCard from "../../features/dashboard/components/SummaryCard";

import { dashboardData } from "../../features/dashboard/data";
import BudgetProgress from "../../features/dashboard/components/BudgetProgress";

export default function Dashboard() {
  return (
    <Screen scrollable>
      <WelcomeCard
        name={dashboardData.user.fullName}
      />

      

      {/* Responsive 2-column grid */}
      <View style={styles.grid}>
        {dashboardData.summaryCards.map((card) => (
          <SummaryCard
            key={card.id}
            {...card}
          />
        ))}
      </View>

      <BudgetProgress />
    </Screen>
  );
}

const styles = StyleSheet.create({
  grid: {
    flexDirection: "row",

    flexWrap: "wrap",

    justifyContent: "space-between",
  },
});