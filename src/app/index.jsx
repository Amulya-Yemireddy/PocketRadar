import { StatusBar, Text, View } from "react-native";
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
      </View>
    </>
  );
}
