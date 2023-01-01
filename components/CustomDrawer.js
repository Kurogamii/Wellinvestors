import React from "react";
import {
  DrawerContentScrollView,
  DrawerItemList,
} from "@react-navigation/drawer";
import { ImageBackground, View, Text} from "react-native";

const CustomDrawer = (props) => {
  return (
    <DrawerContentScrollView {...props}>
      <View style={{margin: -5, marginBottom: 3, backgroundColor: '#b70c01'}}>
        <ImageBackground
          source={require("../assets/icon.png")}
          style={{ padding: 80 }}
        />
      </View>
      <DrawerItemList {...props} />
      <Text style={{padding: 10, fontSize: 14,color: "#000"}}>
        Version: 1.0.1
      </Text>
    </DrawerContentScrollView>
  );
};
export default CustomDrawer;
