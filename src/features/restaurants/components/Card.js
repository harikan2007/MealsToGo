import { View, Image, TouchableOpacity } from "react-native";
import * as React from "react";
import { Avatar, Button, Paragraph, Text, Card } from "react-native-paper";
import { Ionicons } from "@expo/vector-icons";
import Rating from "./RatingV2";
//const LeftContent = props => <Avatar.Icon {...props} icon="folder" />
import styled from "styled-components/native";
export function CartCard(props) {
  /* const Title = styled(Text)`
    font-family: ${(prop) => prop.theme.fonts.heading};
    font-size: ${(prop) => prop.theme.fontSizes.caption};
  `;
  const CardContainer = styled(Card)`
    background-color: transparent;
  `;
  return (
    <View style={{ flex:1, flexDirection: "row"}}>

        <CardContainer.Cover
          style={{ width: 140, height: 250, resizeMode: "contain" }}
          source={{ uri: props.props.image }}
        />

        <View style={{ flex:0.7}}>
          <CardContainer.Title titleNumberOfLines={3} title={props.props.title}/>
          <CardContainer.Content>
            <Title>{props.props.title}</Title>
            <Paragraph>{props.props.title}</Paragraph>
          </CardContainer.Content>

          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Rating props={props.props.rating} />

            <Button icon="trash-can" />
            <Button icon="plus" />

        </View>
      </View>
    </View>
  );*/
  const Touch = styled(TouchableOpacity)`
  
  flexDirection:row;
  alignItems: center;
  borderBottomWidth: ${(prop) => prop.theme.sizesBorder[0]};
  borderTopWidth: ${(prop) => prop.theme.sizesBorder[0]};
  backgroundColor: ${(prop) => prop.theme.colors.bg.primary};
  textShadowOffset: { width:1, height : 1 };
  shadowColor: ${(prop) => prop.theme.colors.shadow.primary};
  shadowOpacity: 4;
  shadowRadius: ${(prop) => prop.theme.sizes[0]};
  marginHorizontal: ${(prop) => prop.theme.sizes[0]};
    
  `;
  const Icon = styled(Ionicons)`
    font-size: ${(prop) => prop.theme.fontSizes.title};
  `;
  const CardTitle = styled(View)`
    flex-direction: row;
    align-items: flex-start;
    justify-content: center;
    margin-left: ${(prop) => prop.theme.sizes[0]};
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
  const Sub = styled(Text)`
    font-size: ${(prop) => prop.theme.fontSizes.caption};
    font-family: ${(prop) => prop.theme.fonts.monospace};
    font-weight: ${(prop) => prop.theme.fontWeights.bold};
  `;
  const Pic = styled(Image)`
    width: 130;
    height: 238;
    resize-mode: contain;
  `;
  const Changenum = styled(View)`
    flex-direction: row;
    border-width: ${(prop) => prop.theme.sizesBorder[0]};
  `;
  return (
    <Touch>
      <CardTitle>
        <Pic source={{ uri: props.props.image }} />
        <TextView>
          <Title>{props.props.title}</Title>
          <Rating props={props.props.rating} />
          <Sub>{props.props.price} $</Sub>
          <Changenum>
            <TouchableOpacity>
              <Icon name="remove" />
            </TouchableOpacity>
            <TouchableOpacity>
              <Icon name="add" />
            </TouchableOpacity>
          </Changenum>
        </TextView>
      </CardTitle>
    </Touch>
  );
}

export function NormalCard(props) {
  const Touch = styled(TouchableOpacity)`
  
  flexDirection:row;
  alignItems: center;
  borderBottomWidth: ${(prop) => prop.theme.sizesBorder[0]};
  borderTopWidth: ${(prop) => prop.theme.sizesBorder[0]};
  backgroundColor: ${(prop) => prop.theme.colors.bg.primary};
  textShadowOffset: { width:1, height : 1 };
  shadowColor: ${(prop) => prop.theme.colors.shadow.primary};
  shadowOpacity: 4;
  shadowRadius: ${(prop) => prop.theme.sizes[0]};
  marginHorizontal: ${(prop) => prop.theme.sizes[0]};
    
  `;
  const Icon = styled(Ionicons)`
    font-size: ${(prop) => prop.theme.fontSizes.title};
  `;
  const CardTitle = styled(View)`
    flex-direction: row;
    align-items: flex-start;
    justify-content: center;
    margin-left: ${(prop) => prop.theme.sizes[0]};
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
  const Sub = styled(Text)`
    font-size: ${(prop) => prop.theme.fontSizes.caption};
    font-family: ${(prop) => prop.theme.fonts.monospace};
    font-weight: ${(prop) => prop.theme.fontWeights.bold};
  `;
  const Pic = styled(Image)`
    width: 130;
    height: 238;
    resize-mode: contain;
  `;
  const Changenum = styled(View)`
    flex-direction: row;
    border-width: ${(prop) => prop.theme.sizesBorder[0]};
  `;
  return (
    <Touch>
      <CardTitle>
        <Pic source={{ uri: props.props.image }} />
        <TextView>
          <Title>{props.props.title}</Title>
          <Rating props={props.props.rating} />
          <Sub>{props.props.price} $</Sub>
          <Sub> 10$ Gift Card</Sub>
        </TextView>
      </CardTitle>
    </Touch>
  );
}
