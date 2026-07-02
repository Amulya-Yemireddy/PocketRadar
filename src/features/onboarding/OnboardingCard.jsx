import { StyleSheet, Text, View } from "react-native";

import COLORS from "../../theme/colors";
import SPACING from "../../theme/spacing";

function renderIllustration(image) {
  switch (image) {
    case "wallet":
      return <Text style={styles.image}>👛</Text>;

    case "analytics":
      return <Text style={styles.image}>📊</Text>;

    case "target":
      return <Text style={styles.image}>🎯</Text>;

    default:
      return <Text style={styles.image}>✨</Text>;
  }
}

export default function OnboardingCard({ title, subtitle, image }) {
  return (
    <View style={styles.container}>
      {/* Placeholder Illustration */}
      <View style={styles.imageContainer}>{renderIllustration(image)}</View>

      <Text style={styles.title}>{title}</Text>

      <Text style={styles.subtitle}>{subtitle}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: SPACING.xl,
  },

  imageContainer: {
    width: 220,
    height: 220,
    borderRadius: 110,
    backgroundColor: "#EEF4FF",

    justifyContent: "center",
    alignItems: "center",

    marginBottom: 50,
  },

  image: {
    fontSize: 70,
  },

  title: {
    fontSize: 30,
    fontWeight: "700",
    color: COLORS.text,
    textAlign: "center",
  },

  subtitle: {
    fontSize: 16,
    color: COLORS.textSecondary,
    textAlign: "center",
    marginTop: 20,
    lineHeight: 26,
  },
});
