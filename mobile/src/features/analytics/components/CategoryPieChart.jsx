import { PieChart } from "react-native-gifted-charts";

export default function CategoryPieChart({
  data,
}) {
  return (
    <PieChart
      data={data}
      donut
      radius={90}
      innerRadius={55}
      showText
      textColor="black"
      focusOnPress
    />
  );
}