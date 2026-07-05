import { StyleSheet, Text, View } from "react-native";

import COLORS from "../../../theme/colors";
import SPACING from "../../../theme/spacing";

export default function WelcomeCard({ name }) {
  const hour = new Date().getHours();

  let greeting = "Good Evening";

  if (hour < 12) greeting = "Good Morning";
  else if (hour < 17) greeting = "Good Afternoon";

  return (
    <View style={styles.container}>
      <Text style={styles.greeting}>
        {greeting}
      </Text>

      <Text style={styles.name}>
        {name}
      </Text>

      <Text style={styles.date}>
        Here's your financial summary
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: SPACING.xl,
  },

  greeting: {
    fontSize: 18,
    color: COLORS.textSecondary,
  },

  name: {
    fontSize: 34,
    fontWeight: "700",
    color: COLORS.text,
    marginTop: 4,
  },

  date: {
    marginTop: SPACING.sm,
    color: COLORS.textSecondary,
    fontSize: 15,
  },
});