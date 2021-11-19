import React from "react";
import { Text, View, StyleSheet } from "react-native";

// Components --Packages
import { Avatar, Button, Card, Title, Paragraph } from "react-native-paper";

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
    <Card key={name} elevation={5} style={styles.card}>
      <Card.Title />
      <Card.Cover source={{ uri: photos[0] }} />
      <Card.Content>
        <Title>{name}</Title>
        <Paragraph>{"other Info  - Comming soon"}</Paragraph>
      </Card.Content>
    </Card>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: "white",
    elevation: 5, //seems to work only if we use it here (look at <Card /> )
  },
});
