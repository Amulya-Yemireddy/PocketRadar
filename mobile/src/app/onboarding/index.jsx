import { useState } from "react";
import { StyleSheet, View } from "react-native";
import PrimaryButton from "../../components/common/PrimaryButton";
import Screen from "../../components/layout/Screen";

import onboardingData from "../../features/onboarding/data";
import OnboardingCard from "../../features/onboarding/OnboardingCard";
import Pagination from "../../features/onboarding/Pagination";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { router } from "expo-router";
import { Pressable, Text } from "react-native";
export default function Onboarding() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const finishOnboarding = async () => {
  await AsyncStorage.setItem("hasSeenOnboarding", "true");
  router.replace("auth/login");
};

const handleNext = async () => {
  if (currentIndex < onboardingData.length - 1) {
    setCurrentIndex((prev) => prev + 1);
  } else {
    await finishOnboarding();
  }
};

  return (
    <Screen>
      <View style={styles.container}>
        <Pressable
  style={styles.skipButton}
  onPress={finishOnboarding}
>
  <Text style={styles.skipText}>Skip</Text>
</Pressable>
        <OnboardingCard {...onboardingData[currentIndex]} />

        <Pagination total={onboardingData.length} currentIndex={currentIndex} />

        <PrimaryButton
          title={
            currentIndex === onboardingData.length - 1 ? "Get Started" : "Next"
          }
          onPress={handleNext}
        />
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  skipButton: {
  alignSelf: "flex-end",
},

skipText: {
  fontSize: 16,
  color: "#666",
  fontWeight: "600",
},

  container: {
    flex: 1,
    justifyContent: "space-between",
    paddingVertical: 50,
    paddingHorizontal: 24,
  },
});
