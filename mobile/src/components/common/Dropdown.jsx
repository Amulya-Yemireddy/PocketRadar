import { StyleSheet, View } from "react-native";
import { Picker } from "@react-native-picker/picker";

import COLORS from "../../theme/colors";
import RADIUS from "../../theme/radius";

export default function Dropdown({
  selectedValue,
  onValueChange,
  items,
}) {
  return (
    <View style={styles.container}>
      <Picker
        selectedValue={selectedValue}
        onValueChange={onValueChange}
      >
        {items.map((item) => (
          <Picker.Item
            key={item.value}
            label={item.label}
            value={item.value}
          />
        ))}
      </Picker>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: "#E5E7EB",
    borderRadius: RADIUS.lg,
    marginBottom: 20,
    overflow: "hidden",
    backgroundColor: COLORS.white,
  },
});