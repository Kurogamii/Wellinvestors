import * as React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { Foundation, FontAwesome } from "@expo/vector-icons";

export default function Header({ navigation, reload }) {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => {
          navigation.openDrawer();
        }}
      >
        <View style={styles.button}>
          <FontAwesome name="bars" size={24} color="#fff" />
        </View>
      </TouchableOpacity>
      <Text style={styles.title}>SCHOOLNGR</Text>
      <TouchableOpacity onPress={reload}>
        <View style={styles.iconContainer}>
          <Foundation name="refresh" size={30} color="#fff" />
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = {
  container: {
    height: 56,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "black",
  },
  button: {
    padding: 15,
    paddingRight: 50,
  },
  buttonText: {
    color: "#fff",
  },
  title: {
    flex: 3, // set the proportion of the title element to 3
    color: "#fff",
    fontSize: 17,
    fontWeight: "bold",
  },
  iconContainer: {
    padding: 10,
    paddingRight: 15,
  },
};
