import { View, Text, StyleSheet } from "react-native";
import { useAuth } from "../../context/AuthContext";

export default function Dashboard() {
  const { user } = useAuth();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Welcome, {user?.fullName || "User"} 👋
      </Text>

      <Text>
        Authentication Successful 🎉
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  title: {
    fontSize: 28,
    fontWeight: "700",
    marginBottom: 20,
  },
});