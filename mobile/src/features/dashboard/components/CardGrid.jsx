import { StyleSheet, View } from "react-native";

export default function CardGrid({ children }) {
  return (
    <View style={styles.grid}>
      {children}
    </View>
  );
}

const styles = StyleSheet.create({
  grid: {
    flexDirection: "row",
    flexWrap: "wrap",

    justifyContent: "space-between",
  },
});