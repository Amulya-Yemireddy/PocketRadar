import {
  Wallet,
  TrendingUp,
  Receipt,
  PiggyBank,
} from "lucide-react-native";

export const dashboardData = {
  user: {
    fullName: "Amulya",
  },

  summaryCards: [
    {
      id: 1,
      icon: Wallet,
      title: "Balance",
      amount: 24850,
      subtitle: "Available",
      color: "#2563EB",
    },
    {
      id: 2,
      icon: TrendingUp,
      title: "Income",
      amount: 32000,
      subtitle: "This Month",
      color: "#16A34A",
    },
    {
      id: 3,
      icon: Receipt,
      title: "Expenses",
      amount: 7150,
      subtitle: "This Month",
      color: "#DC2626",
    },
    {
      id: 4,
      icon: PiggyBank,
      title: "Savings",
      amount: 7850,
      subtitle: "Goal",
      color: "#9333EA",
    },
  ],
};