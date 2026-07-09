import { Text } from "react-native";
import { PieChart } from "react-native-gifted-charts";

export default function CategoryPieChart({
  data,
}) {
    if (!data.length) {
  return (
    <Text
      style={{
        textAlign: "center",
        paddingVertical: 30,
      }}
    >
      Add some expenses to see analytics.
    </Text>
  );
}
  return (
    <PieChart
    data={data}

    donut

    radius={95}

    innerRadius={60}

    showText

    textSize={13}

    textColor="white"

    focusOnPress

    strokeWidth={3}

    strokeColor="white"

    
/>
  );
}