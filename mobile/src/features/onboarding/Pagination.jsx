import { StyleSheet, View } from "react-native";

import COLORS from "../../theme/colors";
import SPACING from "../../theme/spacing";

export default function Pagination({ total, currentIndex }) {
  return (
    <View style={styles.container}>
      {Array.from({ length: total }).map((_, index) => (
        <View
          key={index}
          style={[styles.dot, currentIndex === index && styles.activeDot]}
        />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginVertical: SPACING.lg,
  },

  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: "#D1D5DB",
    marginHorizontal: 5,
  },

  activeDot: {
    width: 24,
    backgroundColor: COLORS.primary,
  },
});
