import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { MaterialCommunityIcons } from "react-native-vector-icons";
import HomeScreen from "../Screens/HomeScreen";
import PhotoScreen from "../Screens/PhotoScreen";
import VideoScreen from "../Screens/VideoScreen";

const Stack = createStackNavigator();

export default function HomeStack({ navigation }) {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{
          title: "Home",
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
      <Stack.Screen name="Photo" component={PhotoScreen} />
      <Stack.Screen name="Video" component={VideoScreen} />
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
