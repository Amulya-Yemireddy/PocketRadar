import { useState } from "react";
import { StyleSheet, View } from "react-native";
import PrimaryButton from "../../components/common/PrimaryButton";
import Screen from "../../components/layout/Screen";

import onboardingData from "../../features/onboarding/data";
import OnboardingCard from "../../features/onboarding/OnboardingCard";
import Pagination from "../../features/onboarding/Pagination";

export default function Onboarding() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    if (currentIndex < onboardingData.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else {
      console.log("Navigate to Login");
    }
  };

  return (
    <Screen>
      <View style={styles.container}>
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
  container: {
    flex: 1,
    justifyContent: "space-between",
    paddingVertical: 50,
    paddingHorizontal: 24,
  },
});
