import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";

import ContactScreen from "../Screens/ContactScreen";

const Stack = createStackNavigator();

export default function ContactStack({ navigation }) {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Contact"
        component={ContactScreen}
        options={{
          headerStyle: {
            backgroundColor: "#f4511e"
          },
          headerTintColor: "#fff",
          headerTitleStyle: {
            fontWeight: "bold"
          },
          headerRight: () => (
            <Button
              onPress={() => navigation.openDrawer()}
              title="Info"
              Backgroundcolor="#fff"
              color="#000"
            />
          )
        }}
      />
    </Stack.Navigator>
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
