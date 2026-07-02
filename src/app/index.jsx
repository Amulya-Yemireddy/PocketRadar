import { StatusBar, Text, View } from "react-native";
import PrimaryButton from "../components/common/PrimaryButton";
import COLORS from "../theme/colors";

export default function Home() {
  return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor={COLORS.background} />

      <View
        style={{
          flex: 1,
          backgroundColor: COLORS.background,
          alignItems: "center",
          justifyContent: "center",
          padding: 24,
        }}
      >
        <Text
          style={{
            color: COLORS.prmary,
            fontSize: 40,
            fontWeight: "bold",
          }}
        >
          PocketRadar
        </Text>

        <Text
          style={{
            marginTop: 12,
            fontSize: 18,
            color: COLORS.text,
            textAlign: "center",
          }}
        >
          Spend Smarter
        </Text>

        <Text
          style={{
            fontSize: 18,
            color: COLORS.text,
            textAlign: "center",
          }}
        >
          Save Better.
        </Text>

        <View
          style={{
            width: "100%",
            marginTop: 32,
            alignItems: "center",
          }}
        >
          <PrimaryButton
            title="Get Started"
            onPress={() => {
              console.log("Get Started");
            }}
          />
        </View>
      </View>
    </>
  );
}
