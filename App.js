import React from "react";
import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import { StyleSheet, View, Text } from "react-native";

// Screens
import { RestaurantsScreen } from "./src/features/restaurants/screens/Restaurants.screen";

export default function App() {
  return (
    <View style={styles.container}>
      <Text> TEST</Text>

      <RestaurantsScreen />
      <ExpoStatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    //alignItems: "center",
    // justifyContent: "center",
  },
});
