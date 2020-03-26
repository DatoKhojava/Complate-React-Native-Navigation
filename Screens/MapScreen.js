import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { MaterialCommunityIcons } from "react-native-vector-icons";

const Tab = createMaterialBottomTabNavigator();

import Homescreen from "../Screens/MapHomeScreen";
import InitialRouteScreen from "../Screens/InitialRouteScreen";

export default function MapScreen() {
  return (
    <Tab.Navigator activeColor="#e91e63" style={{ backgroundColor: "tomato" }}>
      <Tab.Screen
        name="Home"
        component={Homescreen}
        options={{
          tabBarLabel: "Home",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="home" color={color} size={26} />
          )
        }}
      />
      <Tab.Screen
        name="Route"
        component={InitialRouteScreen}
        options={{
          tabBarLabel: "Map",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="map" color={color} size={26} />
          )
        }}
      />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
