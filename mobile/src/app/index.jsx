import { Redirect } from "expo-router";
import { useEffect, useState } from "react";
import { ActivityIndicator, View } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useAuth } from "../context/AuthContext";

export default function Index() {
  const { loading, token } = useAuth();
  const [hasSeenOnboarding, setHasSeenOnboarding] = useState(null);

  useEffect(()=>{
    checkOnboarding();
  },[]);

  const checkOnboarding = async () => {
    const value = await AsyncStorage.getItem("hasSeenOnboarding");
    setHasSeenOnboarding(value === "true");
  };

  if (loading || hasSeenOnboarding === null) {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <ActivityIndicator size="large" />
      </View>
    );
  }
  if (!hasSeenOnboarding) {
    return <Redirect href="onboarding" />;
  }

  if (token) {
    return <Redirect href="/dev" />;
  }

  return <Redirect href="/auth/login" />;
}