import React, { useEffect, useState } from "react";
import styled from "styled-components/native";
import {
  View,
  SafeAreaView,
  StatusBar,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { Text, ActivityIndicator } from "react-native-paper";
import axios from "axios";
import { Ionicons } from "@expo/vector-icons";
import { NormalCard } from "../components/Card";
export default function ProductListScreen({ route, navigation }) {
  const [data, setData] = useState([]);
  const [loding, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get(`https://fakestoreapi.com/products/category/${route.params}`)
      .then((response) => {
        
        setData(response.data);
        setLoading(false);
        return;
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

          <Icon
            name="arrow-forward"
            onPress={() => navigation.navigate("Home")}
          />
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

      {loding ? (
        <ActivityIndicator />
      ) : (
        <FlatList
          data={data}
          renderItem={({ item }) => <NormalCard props={item} />}
          keyExtractor={(items) => items.id}
        />
      )}
    </CarTContainer>
  );
}
