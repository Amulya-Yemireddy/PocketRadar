import { View, Text, StyleSheet } from "react-native";
import PrimaryButton from "../../components/common/PrimaryButton";
import AsyncStorage from "@react-native-async-storage/async-storage";
import * as SecureStore from "expo-secure-store";

export default function DevScreen() {
  const clearOnboarding = async () => {
    await AsyncStorage.removeItem("hasSeenOnboarding");
    console.log("✅ Onboarding Cleared");
  };

  const clearAuth = async () => {
    await SecureStore.deleteItemAsync("token");
    await SecureStore.deleteItemAsync("user");
    console.log("✅ Auth Cleared");
  };

  const resetApp = async () => {
    await AsyncStorage.clear();
    await SecureStore.deleteItemAsync("token");
    await SecureStore.deleteItemAsync("user");

    console.log("✅ App Reset");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Developer Tools</Text>

      <PrimaryButton
        title="Reset App"
        onPress={resetApp}
      />

      <View style={{ height: 15 }} />

      <PrimaryButton
        title="Clear Onboarding"
        onPress={clearOnboarding}
      />

      <View style={{ height: 15 }} />

      <PrimaryButton
        title="Clear Auth"
        onPress={clearAuth}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 24,
  },

  title: {
    fontSize: 28,
    fontWeight: "700",
    marginBottom: 40,
    textAlign: "center",
  },
});