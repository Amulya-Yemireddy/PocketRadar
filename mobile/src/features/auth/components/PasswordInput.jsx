import { useState } from "react";
import { Pressable, StyleSheet, Text, TextInput, View } from "react-native";

import COLORS from "../../../theme/colors";
import SPACING from "../../../theme/spacing";

export default function PasswordInput({
  label,
  placeholder,
  value,
  onChangeText,
  error,
}) {
  const [hidden, setHidden] = useState(true);

  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder={placeholder}
          placeholderTextColor="#A0A0A0"
          secureTextEntry={hidden}
          value={value}
          onChangeText={onChangeText}
        />

        <Pressable onPress={() => setHidden(!hidden)}>
          <Text style={styles.eye}>{hidden ? "👁️" : "🙈"}</Text>
        </Pressable>
      </View>
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

  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#E5E7EB",
    borderRadius: 16,
    backgroundColor: "#fff",
    paddingHorizontal: 18,
    height: 56,
  },

  input: {
    flex: 1,
    fontSize: 16,
    color: COLORS.text,
  },

  eye: {
    fontSize: 20,
  },
});
