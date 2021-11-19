import React from "react";

import { StatusBar, StyleSheet, Text, View, SafeAreaView } from "react-native";

// Components --Packages
import { Searchbar } from "react-native-paper";

// Components
import { RestaurantInfoCardComponent } from "../components/Restaurant-info.component";

// Utils
import { spacing } from "../../../utils/sizes";

export const RestaurantsScreen = () => {
  return (
    <SafeAreaView style={styles.safeArea}>
      {/* Search -------------------------------------------------------------*/}
      <View style={styles.searchContainer}>
        <Searchbar />
      </View>

      {/* List -------------------------------------------------------------*/}
      <View style={styles.list}>
        <RestaurantInfoCardComponent />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    marginTop: StatusBar.currentHeight,
  },
  searchContainer: {
    // backgroundColor: "green",
    padding: 16,
  },
  list: {
    backgroundColor: "blue",
    flex: 1,
  },
  searchText: {},
  listText: { padding: spacing.md },
});
