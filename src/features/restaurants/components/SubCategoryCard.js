import React from "react";
import { Text } from "react-native-paper";
import { View, TouchableOpacity } from "react-native";
import styled from "styled-components/native";
import { Ionicons } from "@expo/vector-icons";

export const SubCategory = ({ subInfo = {} }) => {
  const { title = "ali", price = "laptop" } = subInfo;

  const Touch = styled(TouchableOpacity)`
  
  flexDirection:row;
  alignItems: center;
  borderBottomWidth: ${(props) => props.theme.sizesBorder[0]};
  borderTopWidth: ${(props) => props.theme.sizesBorder[0]};
  backgroundColor: ${(props) => props.theme.colors.bg.primary};
  textShadowOffset: { width:1, height : 1 };
  shadowColor: ${(props) => props.theme.colors.shadow.primary};
  shadowOpacity: 4;
  shadowRadius: ${(props) => props.theme.sizes[0]};
  marginHorizontal: ${(props) => props.theme.sizes[0]};
    
  `;
  const Icon = styled(Ionicons)`
    font-size: ${(props) => props.theme.fontSizes.title};
    color: grey;
  `;
  const CardTitle = styled(View)`
    flex-direction: row;
    align-items: center;
    margin-left: ${(props) => props.theme.sizes[0]};
  `;
  const TextView = styled(View)`
    flex-direction: column;
    flex: 0.97;
  `;
  const Title = styled(Text)`
    font-size: ${(props) => props.theme.fontSizes.body};
  `;
  const Sub = styled(Text)`
    font-size: ${(props) => props.theme.fontSizes.caption};
  `;
  return (
    <Touch>
      <CardTitle>
        <TextView>
          <Title>{title}</Title>
          <Sub>{price}</Sub>
        </TextView>
        <Icon name="arrow-forward" />
      </CardTitle>
    </Touch>
  );
};
