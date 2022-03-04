import React, { useEffect, useState } from "react";
import styled from "styled-components/native";
import { View, SafeAreaView, StatusBar, FlatList } from "react-native";
import { Text } from "react-native-paper";
import axios from "axios";
import { CartCard } from "../components/Card";
export default function CartScreen() {
  const [data, setData] = useState([]);
  const [nums, setNums] = useState([]);
  const [loding, setLoading] = useState(true);
  useEffect(() => {
    axios.get("https://fakestoreapi.com/carts/user/2").then((response) => {
      let results = response.data[0].products;
      let x = [];
      let y = 0;
      let promises = [];
      results.map((item, index) => {
        y = item.quantity + y;
        promises.push(
          axios
            .get(`https://fakestoreapi.com/products/${item.productId}`)
            .then((res) => {
              x.push(res.data);
            })
        );
      });
      Promise.all(promises).then(() => {
        setNums(y);
        setData(x);
        setLoading(false);
      });
    });
  }, []);
  
  const SearchBar = styled(View)`
    padding: ${(props) => props.theme.space[2]};
    border-bottom-width: ${(props) => props.theme.sizesBorder[1]};
    background-color: white;
    flex-direction: row;
    align-items: center;
    justify-content: center;
  `;
  const TextHeader = styled(Text)`
    font-family: ${(props) => props.theme.fonts.heading};
    font-size: ${(props) => props.theme.fontSizes.body};
    color: blue;
  `;
  const NumberView = styled(View)`
    border-radius: ${(props) => props.theme.space[1]};
    padding: ${(props) => props.theme.space[0]};
    background-color: blue;
    justify-content: center;
    align-items: center;
    `;
  const Textnumber = styled(Text)`
    font-family: ${(props) => props.theme.fonts.heading};
    font-size: ${(props) => props.theme.fontSizes.body}
    color: white;
    
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
      {nums && data && (

        <SearchBar>
          <View
            style={{ justifyContent: "center", alignItems: "center", flex: 1 }}
          >
            <TextHeader>
              Your current cart
              <NumberView><Textnumber>{nums}</Textnumber></NumberView>
            </TextHeader>
          </View>
        </SearchBar>
      )}
      {
        <FlatList
          data={data}
          renderItem={({ item }) => <CartCard props={item} />}
          keyExtractor={(items) => items.id}
        />
      }
    </CarTContainer>
  );
}
