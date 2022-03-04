import React, { useState } from "react";
import { View, TouchableWithoutFeedback, Text } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import styled from "styled-components/native";
export default function Rating(props) {
  const [rating, setRating] = useState(props.props.rate);
  const RatingView = styled(View)`
    flex-direction: row;
  `;
  const LightStar = styled(Ionicons)`
    font-size: 20;
    color: orange;
  `;
  const DarkStar = styled(Ionicons)`
    font-size: 20;
    color: black;
  `;
  const Numtext = styled(Text)`
    font-family: ${(prop) => prop.theme.fonts.body};
    font-size: ${(prop) => prop.theme.fontSizes.caption};
    color: grey;
  `;
  return (
    <RatingView>
      {rating >= 1 ? (
        <TouchableWithoutFeedback onPress={() => setRating(1)}>
          <LightStar name="star" />
        </TouchableWithoutFeedback>
      ) : (
        <TouchableWithoutFeedback onPress={() => setRating(1)}>
          <DarkStar name="star" />
        </TouchableWithoutFeedback>
      )}
      {rating >= 2 ? (
        <TouchableWithoutFeedback onPress={() => setRating(2)}>
          <LightStar name="star" />
        </TouchableWithoutFeedback>
      ) : (
        <TouchableWithoutFeedback onPress={() => setRating(2)}>
          <DarkStar name="star" />
        </TouchableWithoutFeedback>
      )}
      {rating >= 3 ? (
        <TouchableWithoutFeedback onPress={() => setRating(3)}>
          <LightStar name="star" />
        </TouchableWithoutFeedback>
      ) : (
        <TouchableWithoutFeedback onPress={() => setRating(3)}>
          <DarkStar name="star" />
        </TouchableWithoutFeedback>
      )}
      {rating >= 4 ? (
        <TouchableWithoutFeedback onPress={() => setRating(4)}>
          <LightStar name="star" />
        </TouchableWithoutFeedback>
      ) : (
        <TouchableWithoutFeedback onPress={() => setRating(4)}>
          <DarkStar name="star" />
        </TouchableWithoutFeedback>
      )}
      {rating >= 5 ? (
        <TouchableWithoutFeedback onPress={() => setRating(5)}>
          <LightStar name="star" />
        </TouchableWithoutFeedback>
      ) : (
        <TouchableWithoutFeedback onPress={() => setRating(5)}>
          <DarkStar name="star" />
        </TouchableWithoutFeedback>
      )}
      <Numtext>({props.props.count})</Numtext>
    </RatingView>
  );
}
