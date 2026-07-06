import { Pressable, StyleSheet, Text } from "react-native";
import COLORS from "../../theme/colors";
import RADIUS from "../../theme/radius";
import SPACING from "../../theme/spacing";
import LoadingScreen from "./LoadingScreen";

export default function PrimaryButton({
  title,
  onPress,
  disabled = false,
  loading = false,
  variant = "primary",
}) {
  return (
    <Pressable
      onPress={onPress}
      disabled={disabled || loading}
      style={[styles.button, styles[variant], disabled && styles.disabledButton,]}
    >
      {loading ? (
         <LoadingScreen />
      ) : (
        <Text style={[styles.text,variant === "secondary" && styles.secondaryText,]}>{title}</Text>
      )}
    </Pressable>
  );
}

const styles = StyleSheet.create({
  secondaryText: {
    color: COLORS.text,
},
  primary: {
      backgroundColor: COLORS.primary,
  },

  danger: {
      backgroundColor: COLORS.danger,
  },

  secondary: {
      backgroundColor: COLORS.white,
      borderWidth: 1,
      borderColor: COLORS.border,
  },
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
