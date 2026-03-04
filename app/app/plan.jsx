import { View, Text } from "react-native";

export default function Plan() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center", padding: 20 }}>
      <Text style={{ fontSize: 20 }}>
        Your custom escape plan will appear here.
      </Text>
    </View>
  );
}
