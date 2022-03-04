import React, { useEffect, useState } from "react";
import styled from "styled-components/native";
import {
  View,
  SafeAreaView,
  StatusBar,
  TouchableOpacity,
  Image,
} from "react-native";
import { Text, ActivityIndicator } from "react-native-paper";
import { Ionicons } from "@expo/vector-icons";
import axios from "axios";
export default function ProfileScreen() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get("https://fakestoreapi.com/users/1").then((response) => {
      setData(response.data);
      setLoading(false);
    });
  }, []);
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
  const AddressCard = styled(View)`
    flex: 0.4;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    padding-left: 15;
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
    
  `;
  const Naming = styled(View)`
    flex: 0.4;
    justify-content: center;
    align-items: center;
  `;
  return (
    <View style={{flex:1}}>
      {loading ? (
        <View style={{flex:1, alignItems:"center", justifyContent:"center"}}>
          <ActivityIndicator />
        
        </View>
      ) : (
        <CarTContainer>
          <Touch>
            <CardTitle>
              <TextView>
                <Title>search the store</Title>
              </TextView>
            </CardTitle>
          </Touch>
          <Naming>
            <Title>
              {data.name.firstname} {data.name.lastname}
            </Title>
            <Sub>{data.phone}</Sub>
          </Naming>
          <AddressCard>
            <Title> Address: </Title>
            <Sub>
              <Icon name="globe" />
              {data.address.city}
            </Sub>
            <Sub>
              <Icon name="home" />
              {data.address.street}
            </Sub>
            <Sub>
              <Icon name="mail" />
              {data.address.zipcode}
            </Sub>
            <Sub>
              <Icon name="call" />
              {data.phone}
            </Sub>
          </AddressCard>
        </CarTContainer>
      )}
    </View>
  );
}
