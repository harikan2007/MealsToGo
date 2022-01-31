import React from "react";
import { Button, Card, Paragraph } from "react-native-paper";
import { View, Image, Dimensions } from "react-native";
import Rating from "./RatingV2";
import { Text } from "../../../components/typography/TextComponent";
import {
  RestaurantCard,
  ButtonContainer,
  Rate,
  RateBar,
  LightStar,
  OpenTitle,
  CloseTitle,
} from "./RestaurantComponentStyle";
import { Spacer } from "../../../components/spacer/SpacerComponent";
const { width } = Dimensions.get("window");

export const RestaurantInfo = (props) => {
  const {
    name = "laptop",
    icon,
    photos = [
      "https://dl.bahalmag.ir/images/%D8%B9%DA%A9%D8%B3_%D8%BA%D8%B0%D8%A7_%D8%A7%DB%8C%D8%B1%D8%A7%D9%86%DB%8C/%D8%B9%DA%A9%D8%B3-%D8%BA%D8%B0%D8%A7-%D8%A7%DB%8C%D8%B1%D8%A7%D9%86%DB%8C-%D8%AE%D9%88%D8%B4%D9%85%D8%B2%D9%87.jpg",
    ],
    address = "100 some random street",
    rating = 4,
    isClosedTemporarily = false,
    isOpenNow = true,
  } = props;

  const ratingArray = Array.from(new Array(Math.floor(rating)));
  return (
    <RestaurantCard style={{ alignItems: "center", justifyContent: "center" }}>
      <Card.Cover
        key={name}
        source={{
          uri: photos[0],
        }}
        resizeMode={"stretch"}
        style={{
          width: width / 2,
          height: 130,
        }}
      />
      <View style={{ justifyContent: "center", alignItems: "center" }}>
        {/*<Card.Title subtitle={name} />*/}
        <Text> {name} </Text>
      </View>
      {/*
      <Card.Title title={name} subtitle={address} />
      <Card.Content>
        <Spacer size="large">
          <Text variant="body"> {address}</Text>
        </Spacer>
        <RateBar>
          <Rate size={isClosedTemporarily}>
            {ratingArray.map(() => (
              <LightStar name="star" />
            ))}
          </Rate>
          {isClosedTemporarily && (
            <CloseTitle name="time"> CLOSED TEMPORARILY!</CloseTitle>
          )}
          {isOpenNow ? (
            <OpenTitle name="restaurant" />
          ) : (
            <OpenTitle name="close" />
          )}
        </RateBar>
      </Card.Content>
      <ButtonContainer>
        <Button>Cancel</Button>
        <Rating rating={rating} />
        <Button>Ok</Button>
      </ButtonContainer>
      */}
    </RestaurantCard>
  );
};
