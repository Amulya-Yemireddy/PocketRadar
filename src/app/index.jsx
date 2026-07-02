// import { StyleSheet, View } from "react-native";
// import Logo from "../components/common/Logo";
// import PrimaryButton from "../components/common/PrimaryButton";
// import Screen from "../components/layout/Screen";

import { Redirect } from "expo-router";

export default function Index() {
  return <Redirect href="/onboarding" />;
}
// export default function Home() {
//   return (
//     <Screen>
//       <View style={styles.container}>
//         <Logo />

//         <View style={styles.buttonContainer}>
//           <PrimaryButton title="Get Started" onPress={() => {}} />
//         </View>
//       </View>
//     </Screen>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: "center",
//     alignItems: "center",
//     padding: 24,
//   },

//   buttonContainer: {
//     width: "100%",
//     marginTop: 60,
//   },
// });
