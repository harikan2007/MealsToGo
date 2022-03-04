import React from "react";
import styled from "styled-components/native";
import {
  View,
  SafeAreaView,
  StatusBar,
  TouchableOpacity,
  Image,
} from "react-native";
import { Text, Banner } from "react-native-paper";

import { Ionicons } from "@expo/vector-icons";
import Rating from "../components/RatingV2";
export default function ProductScreen({ route, navigation }) {
  const data = route.params;

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
  const TextView = styled(View)`
    flex-direction: column;
    flex: 1;
    align-items: flex-start;
    padding-left: 15;
  `;
  const Title = styled(Text)`
    font-size: ${(prop) => prop.theme.fontSizes.body};
  `;
  const Pic = styled(Image)`
    width: 400;
    height: 238;
    resize-mode: containszDAQa <;
  `;
  const Sub = styled(Text)`
    font-size: ${(prop) => prop.theme.fontSizes.caption};
    font-family: ${(prop) => prop.theme.fonts.monospace};
    font-weight: ${(prop) => prop.theme.fontWeights.bold};
  `;
  const Price = styled(Text)`
    font-size: ${(prop) => prop.theme.fontSizes.caption};
    font-family: ${(prop) => prop.theme.fonts.monospace};
    font-weight: ${(prop) => prop.theme.fontWeights.bold};
  `;
  const CardTitle = styled(View)`
    flex-direction: row;
  `;
  const TitleLink = styled(Text)`
    font-size: ${(props) => props.theme.fontSizes.caption};
    color: blue;
  `;
  const CarTContainer = styled(SafeAreaView)`
    flex: 1;
    flex-direction: column;
    ${StatusBar.currentHeight && `marginTop:${StatusBar.currentHeight}px`};
    justify-content: flex-start;
    align-items: center;
  `;
  return (
    <CarTContainer>
      <Touch>
        <CardTitle>
          <TextView>
            <Title>search the store</Title>
          </TextView>
        </CardTitle>
      </Touch>
      <Touch>
        <CardTitle>
          <TextView>
            <Title>it is about the place to send</Title>
          </TextView>
        </CardTitle>
      </Touch>
      <Touch>
        <CardTitle>
          <TextView>
            <Title>this is fake</Title>
          </TextView>

          <Icon name="arrow-forward" onPress={() => console.log("ascend")} />
          <Icon name="arrow-forward" onPress={() => console.log("descend")} />
        </CardTitle>
      </Touch>

      <View style={{ flexDirection: "row" }}>
        <TouchableOpacity style={{ flex: 0.9 }}>
          <TitleLink>{data.category}</TitleLink>
        </TouchableOpacity>
        <Rating props={data.rating} />
      </View>
      <Pic
        source={{
          uri: data.image,
        }}
      />
      <Price>{data.price}</Price>
      <Title>description:</Title>
      <Sub>{data.description}</Sub>
    </CarTContainer>
  );
}
