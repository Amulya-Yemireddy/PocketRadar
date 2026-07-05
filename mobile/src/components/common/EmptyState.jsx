import { StyleSheet, Text, View } from "react-native";

import COLORS from "../../theme/colors";

export default function EmptyState({
  title,
}) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        {title}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 40,
    alignItems: "center",
  },

  text: {
    color: COLORS.textSecondary,
    fontSize: 16,
  },
});