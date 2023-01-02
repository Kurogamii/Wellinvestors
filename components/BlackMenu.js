import * as React from "react";
import { MaterialIcons } from "@expo/vector-icons";
import { Text, TouchableOpacity, View } from "react-native";

function SmallMenuModal({ label, action, icon }) {
  return (
    <View style={{ flex: 1 }}>
      <TouchableOpacity
        onPress={action}
        style={{
          height: 50,
          flexDirection: "row",
          alignItems: "center",
          borderRadius: 4,
        }}
      >
        {icon}
        <Text style={{ color: "white", fontSize: 16, marginLeft: 10 }}>
          {label}
        </Text>
      </TouchableOpacity>
    </View>
  );
}
export default SmallMenuModal;
