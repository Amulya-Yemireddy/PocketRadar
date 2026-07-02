import { StyleSheet, Text, View } from "react-native";

import COLORS from "../../../theme/colors";
import SPACING from "../../../theme/spacing";

export default function AuthHeader({ greeting, title, subtitle }) {
  return (
    <View style={styles.container}>
      <Text style={styles.greeting}>{greeting}</Text>

      <Text style={styles.title}>{title}</Text>

      <Text style={styles.subtitle}>{subtitle}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: SPACING.xl,
    alignItems: "center",
  },
  greeting: {
    fontSize: 16,
    color: COLORS.textSecondary,
    marginBottom: 12,
    textAlign: "center",
  },

  emoji: {
    fontSize: 42,
    marginBottom: SPACING.md,
  },

  title: {
    fontSize: 32,
    fontWeight: "700",
    color: COLORS.text,
    textAlign: "center",
  },

  subtitle: {
    marginTop: SPACING.sm,
    fontSize: 16,
    color: COLORS.textSecondary,
    lineHeight: 24,
    textAlign: "center",
  },
});
