import React from "react";
import styled from "styled-components/native";
import { Card } from "react-native-paper";
import { Ionicons } from "@expo/vector-icons";
import { View } from "react-native";
export const RestaurantCard = styled(Card)`
elevation: ${(props) => props.theme.sizes[1]};
borderColor: ${(props) => props.theme.colors.shadow.primary};
borderWidth: ${(props) => props.theme.sizesBorder[3]};
borderRadius: ${(props) => props.theme.sizes[0]};
backgroundColor: ${(props) => props.theme.colors.bg.primary};
textShadowOffset: { width:1, height : 1 };
shadowColor: ${(props) => props.theme.colors.shadow.primary};
shadowOpacity: 4;
shadowRadius: ${(props) => props.theme.sizes[0]};
marginHorizontal: ${(props) => props.theme.sizes[0]};
marginVertical: ${(props) => props.theme.sizes[0]};  
`;
export const ButtonContainer = styled(Card.Actions)`
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
`;
const getVariant = (variant) => {
  if (variant) {
    return "flex:0.4";
  }
  return "flex:1";
};

const RateView = styled.View`
  flex-direction: row;
  ${({ variant }) => variant};
`;
export const Rate = ({ size, children }) => {
  const variant = getVariant(size);
  return <RateView variant={variant}>{children}</RateView>;
};
Rate.defaultprops = {
  size: false,
};

export const RateBar = styled(View)`
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;
export const LightStar = styled(Ionicons)`
  font-size: ${(props) => props.theme.fontSizes.title};
  color: orange;
`;
export const OpenTitle = styled(Ionicons)`
  font-size: ${(props) => props.theme.fontSizes.title};
`;
export const CloseTitle = styled(Ionicons)`
  font-size: ${(props) => props.theme.fontSizes.body};
  color: ${(props) => props.theme.colors.text.error};
  flex: 0.7;
`;
