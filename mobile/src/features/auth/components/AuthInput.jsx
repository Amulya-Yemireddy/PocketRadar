import { StyleSheet, Text, TextInput, View } from "react-native";

import COLORS from "../../../theme/colors";
import SPACING from "../../../theme/spacing";

export default function AuthInput({
  label,
  placeholder,
  value,
  onChangeText,
  keyboardType = "default",
  secureTextEntry = false,
  error,
}) {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        placeholderTextColor="#A0A0A0"
        value={value}
        onChangeText={onChangeText}
        keyboardType={keyboardType}
        secureTextEntry={secureTextEntry}
        autoCapitalize="none"
      />
      {error && <Text style={styles.error}>{error}</Text>}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: SPACING.lg,
  },
  error: {
    color: "#EF4444",
    marginTop: 6,
    fontSize: 13,
  },

  label: {
    fontSize: 15,
    marginBottom: 8,
    color: COLORS.text,
    fontWeight: "600",
  },

  input: {
    height: 56,
    borderWidth: 1,
    borderColor: "#E5E7EB",
    borderRadius: 16,
    paddingHorizontal: 18,
    fontSize: 16,
    color: COLORS.text,
    backgroundColor: "#FFFFFF",
  },
});
