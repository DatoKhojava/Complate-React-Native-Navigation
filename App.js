import * as React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";

import HomeStack from "./Stacks/HomeStack";
import NotificationStack from "./Stacks/NotificationStack";
import AboutStack from "./Stacks/AboutStack";
import ContactStack from "./Stacks/ContactStack";
import MapStack from "./Stacks/MapStack";

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={HomeStack} />
        <Drawer.Screen name="Notifications" component={NotificationStack} />
        <Drawer.Screen name="Map" component={MapStack} />
        <Drawer.Screen name="About" component={AboutStack} />
        <Drawer.Screen name="Contact" component={ContactStack} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
