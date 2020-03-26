import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function FAXScreen() {
  return (
    <View style={styles.container}>
      <Text>This is FAX Screen</Text>
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
