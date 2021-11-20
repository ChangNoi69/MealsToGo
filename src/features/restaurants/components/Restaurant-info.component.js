import React from "react";
import { Text, View, StyleSheet } from "react-native";
import styled from "styled-components/native";

// Components --Packages
import { Avatar, Button, Card, Paragraph } from "react-native-paper";

const Title = styled(Text)`
  color: blue;
  font-weight: bold;
  padding: 16px;
`;

const RestaurantCard = styled(Card)`
  background-color: white;
  elevation: 5;
`;

export const RestaurantInfoCardComponent = ({ restaurant = {} }) => {
  const {
    name = "Some Restaurant",
    icon,
    photos = [
      "https://www.foodiesfeed.com/wp-content/uploads/2019/06/top-view-for-box-of-2-burgers-home-made-600x899.jpg",
    ],
    address = "100 some random street",
    isOpenNow = true,
    rating = 4,
    isClosedTemporarily,
  } = restaurant;

  //return <Text>{name}</Text>;
  return (
    <RestaurantCard key={name} elevation={5}>
      <RestaurantCard.Title />
      <RestaurantCard.Cover source={{ uri: photos[0] }} />
      <RestaurantCard.Content>
        <Title>{name}</Title>
      </RestaurantCard.Content>
    </RestaurantCard>
  );
};
