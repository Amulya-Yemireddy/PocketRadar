import { View } from "react-native";

import BudgetProgressCard from "./BudgetProgressCard";

export default function BudgetPreview({
  budgets,
}) {

  return (

    <View>

      {budgets
        .slice(0, 2)
        .map((budget) => (

          <BudgetProgressCard
            key={budget.id}
            budget={budget}
          />

      ))}

    </View>

  );

}