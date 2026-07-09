import { StyleSheet, Text, View } from "react-native";

import COLORS from "../../../theme/colors";
import SPACING from "../../../theme/spacing";

export default function AnalyticsLegend({ data }) {
  return (
    <View style={styles.container}>
      {data.map((item) => (
        <View
          key={item.label}
          style={styles.row}
        >
          <View style={styles.left}>
            <View
              style={[
                styles.dot,
                {
                  backgroundColor: item.color,
                },
              ]}
            />

            <Text style={styles.category}>
              {item.label}
            </Text>
          </View>

          <Text style={styles.amount}>
            ₹{item.value.toLocaleString()}
          </Text>
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: SPACING.lg,
  },

  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",

    paddingVertical: SPACING.sm,
  },

  left: {
    flexDirection: "row",
    alignItems: "center",
  },

  dot: {
    width: 12,
    height: 12,
    borderRadius: 6,

    marginRight: SPACING.md,
  },

  category: {
    color: COLORS.text,
    fontSize: 15,
  },

  amount: {
    fontWeight: "700",
    color: COLORS.text,
  },
});