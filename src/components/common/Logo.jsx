import { StyleSheet, Text, View } from "react-native";
import COLORS from "../../theme/colors";

export default function Logo({ size = "large" }) {
  const titleSize = size === "small" ? 28 : 44;
  const subtitleSize = size === "small" ? 14 : 18;
  return (
    <View style={styles.container}>
      {/*logo placeholder*/}
      <View style={styles.logoCircle}>
        <Text style={styles.logoEmoji}>📡</Text>
      </View>

      <Text style={[styles.title, { fontSize: titleSize }]}>
        <Text style={styles.pocket}>Pocket</Text>
        <Text style={styles.radar}>Radar</Text>
      </Text>

      <Text style={[styles.subtitle, { fontSize: subtitleSize }]}>
        Spend Smarter. Save Better.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
  },

  logoCircle: {
    width: 90,
    height: 90,
    borderRadius: 45,
    backgroundColor: COLORS.primary,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 24,
  },

  logoEmoji: {
    fontSize: 42,
  },

  title: {
    fontWeight: "800",
  },

  pocket: {
    color: COLORS.text,
  },

  radar: {
    color: COLORS.primary,
  },

  subtitle: {
    color: COLORS.textSecondary,
    marginTop: 8,
  },
});
