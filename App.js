import * as React from "react";
import { StatusBar } from "expo-status-bar";
import {
  MaterialCommunityIcons,
  FontAwesome,
  MaterialIcons,
} from "@expo/vector-icons";
import { usePreventScreenCapture } from "expo-screen-capture";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import CustomDrawer from "./components/CustomDrawer";
import HomePage from "./components/HomePage";
import Cbt from "./components/Cbt";
import News from "./components/News";
import Classroom from "./components/Classroom";
import Tools from "./components/Tools";
import About from "./components/About";
import Contact from "./components/Contact";
import Tos from "./components/Tos";
import Privacy from "./components/Privacy";
import Meet from "./components/devMeet";

const Drawer = createDrawerNavigator();

export default function App() {
  usePreventScreenCapture();

  return (
    <NavigationContainer>
      <Drawer.Navigator
        drawerContent={(props) => <CustomDrawer {...props} />}
        screenOptions={{
          headerShown: false,
          drawerActiveTintColor: "#b70c01",
        }}
        initialRouteName="Home"
      >
        <Drawer.Screen
          options={{
            drawerIcon: () => (
              <MaterialIcons name="home" size={24} color="black" />
            ),
          }}
          initialRouteName="Home"
          name="Home"
          component={HomePage}
        />
        <Drawer.Screen
          options={{
            drawerIcon: () => (
              <MaterialIcons name="computer" size={24} color="black" />
            ),
          }}
          name="Cbt"
          component={Cbt}
        />
        <Drawer.Screen
          options={{
            drawerIcon: () => (
              <MaterialCommunityIcons
                name="chair-school"
                size={24}
                color="black"
              />
            ),
          }}
          name="Classroom"
          component={Classroom}
        />
        <Drawer.Screen
          options={{
            drawerIcon: () => (
              <MaterialCommunityIcons
                name="newspaper-variant-outline"
                size={24}
                color="black"
              />
            ),
          }}
          name="News"
          component={News}
        />
        <Drawer.Screen
          options={{
            drawerIcon: () => (
              <MaterialCommunityIcons name="tools" size={24} color="black" />
            ),
          }}
          name="Tools"
          component={Tools}
        />
        <Drawer.Screen
          options={{
            drawerIcon: () => (
              <MaterialCommunityIcons
                name="information-variant"
                size={24}
                color="black"
              />
            ),
          }}
          name="About"
          component={About}
        />
        <Drawer.Screen
          options={{
            drawerIcon: () => (
              <MaterialCommunityIcons name="contacts" size={24} color="black" />
            ),
          }}
          name="Contact"
          component={Contact}
        />
        <Drawer.Screen
          options={{
            drawerIcon: () => (
              <FontAwesome name="handshake-o" size={20} color="black" />
            ),
          }}
          name="Term of Service"
          component={Tos}
        />
        <Drawer.Screen
          options={{
            drawerIcon: () => (
              <MaterialIcons name="privacy-tip" size={24} color="black" />
            ),
          }}
          name="Privacy"
          component={Privacy}
        />
        <Drawer.Screen
          options={{
            drawerIcon: () => (
              <MaterialCommunityIcons
                name="face-man-profile"
                size={24}
                color="black"
              />
            ),
          }}
          name="Developer"
          component={Meet}
        />
      </Drawer.Navigator>
      <StatusBar hidden={true} />
    </NavigationContainer>
  );
}
