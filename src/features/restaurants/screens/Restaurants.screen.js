import React from "react";
import { StatusBar, StyleSheet, Text, View, SafeAreaView } from "react-native";
import styled from "styled-components/native";

const SearchContainer = styled(View)`
  padding: ${spacing.md}px;
`;
const ListContainer = styled(View)`
  background-color: blue;
  flex: 1;
`;

const SafeArea = styled(SafeAreaView)`
  flex: 1;
  margin-top: ${StatusBar.currentHeight}px;
`;

// Components --Packages
import { Searchbar } from "react-native-paper";

// Components
import { RestaurantInfoCardComponent } from "../components/Restaurant-info.component";

// Utils
import { spacing } from "../../../utils/sizes";

export const RestaurantsScreen = () => {
  return (
    <SafeArea>
      {/* Search -------------------------------------------------------------*/}
      <SearchContainer>
        <Searchbar />
      </SearchContainer>

      {/* List -------------------------------------------------------------*/}
      <ListContainer>
        <RestaurantInfoCardComponent />
      </ListContainer>
    </SafeArea>
  );
};
