import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function InitialRouteScreen() {
  return (
    <View style={styles.container}>
      <Text>This is Route Screen</Text>
      <Text>Maps</Text>
    </View>
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
