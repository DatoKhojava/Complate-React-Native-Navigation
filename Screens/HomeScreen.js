import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { NavigationContainer } from "@react-navigation/native";

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => navigation.navigate("Photo")}
        style={styles.Button}
      >
        <Text>Photo</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.navigate("Video")}
        style={styles.Button}
      >
        <Text>Video</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  },
  Button: {
    padding: 15,
    margin: 15,
    borderWidth: 1,
    borderColor: "#433433",
    borderStyle: "dotted",
    borderRadius: 1
  }
});
