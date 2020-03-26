import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";

import MessageScreen from "../Screens/MessageScreen";
import FAXScreen from "../Screens/FAXScreen";
import GmailScreen from "../Screens/GmailScreen";

const Tab = createMaterialTopTabNavigator();

export default function NotificationsScreen() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Gmail" component={GmailScreen} />
      <Tab.Screen name="Message" component={MessageScreen} />
      <Tab.Screen name="FAX" component={FAXScreen} />
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
