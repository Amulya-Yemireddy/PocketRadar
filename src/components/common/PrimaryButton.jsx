import { ActivityIndicator, Pressable, StyleSheet, Text } from "react-native";
import COLORS from "../../theme/colors";
import RADIUS from "../../theme/radius";
import SPACING from "../../theme/spacing";

export default function PrimaryButton({
  title,
  onPress,
  disabled = false,
  loading = false,
}) {
  return (
    <Pressable
      onPress={onPress}
      disabled={disabled || loading}
      style={[styles.button, disabled && styles.disabledButton]}
    >
      {loading ? (
        <ActivityIndicator color={COLORS.white} />
      ) : (
        <Text style={styles.text}>{title}</Text>
      )}
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    width: "100%",
    maxWidth: 320,
    backgroundColor: COLORS.primary,
    paddingVertical: SPACING.md,
    borderRadius: RADIUS.lg,
    alignItems: "center",
    justifyContent: "center",
  },

  disabledButton: {
    opacity: 0.5,
  },

  text: {
    color: COLORS.white,
    fontSize: 16,
    fontWeight: "600",
  },
});
