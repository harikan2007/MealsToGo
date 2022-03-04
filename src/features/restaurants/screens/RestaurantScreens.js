import React, { useEffect, useState } from "react";
import {
  FlatList,
  StyleSheet,
  View,
  Text,
  SafeAreaView,
  StatusBar,
  ScrollView,
  Dimensions,
} from "react-native";

import { LinearGradient } from "expo-linear-gradient";
import styled from "styled-components/native";
import {
  Appbar,
  ActivityIndicator,
  Menu,
  Divider,
  Provider,
  Button,
} from "react-native-paper";
import { RestaurantInfo } from "../components/RestaurantInfoComponent";
import axios from "axios";
import { SubCategory } from "../components/SubCategoryCard";
import { TouchableOpacity } from "react-native-gesture-handler";
const { width } = Dimensions.get("window");

export default function RestaurantScreens({ navigation }) {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const [Names2, setNames2] = useState([]);
  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products/categories")
      .then((response) => {
        setData(response.data);
        let x = [];
        let promises = [];
        let results = response.data;
        results.map((item, index) => {
          promises.push(
            axios
              .get(`https://fakestoreapi.com/products/category/${item}`)
              .then((res) => {
                x.push(res.data);
                // setNames2([...Names2, res.data]);
                //console.log(x);
              })
          );
        });
        Promise.all(promises).then(() => {
          setNames2(x);
          setLoading(false);
        });
      });
  }, []);
  //digikala
  /*useEffect(() => {
    axios.get("https://vakil-net.ir/api-digikala").then((response) => {
      setData([...data, response.data.data]);
    });
  }, []);*/
  /* useEffect(() => {
    async function fetchMyApi() {
      let response = await fetch(
        "https://www.digikala.com/recommendation/v1/"
      );
      response = await response.json();
      setData(response);
      console.log(response);


    }
    fetchMyApi();
    //setData(json.items);
  }, []);*/
  /*  useEffect(() => {
    async function fetchMyApi() {
      let response = await fetch(
        "https://fakestoreapi.com/products/categories"
      );
      response = await response.json();
      setData(response);

      response.map((item, index) => {
        axios
          .get(`https://fakestoreapi.com/products/category/${item}`)
          .then((res) => {
            setNames([...Names2[index], res.data]);
            console.log(index);
            console.log(item);
          });
      });
    }
    fetchMyApi();
    //setData(json.items);
  }, []);*/
  /*const getSub = async () => {
    try {
      const response = await fetch(
        `https://fakestoreapi.com/products/category/${searchTerm}`
      );
      const json = await response.json();
      setNames(json);
      //setData(json.items);
    } catch (error) {
      console.error(error);
    }
  };*/

  const CardContainer = styled(SafeAreaView)`
    flex: 1;
    ${StatusBar.currentHeight && `marginTop:${StatusBar.currentHeight}px`};
    flex-direction: column;
  `;
  const ScrollHorizontal = styled.View`
    flex: 0.8;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  `;
  const ScrollVertical = styled.View`
    background-color: #fff;
    margin-right: 20;
    margin-left: 20;
    flex: 1;
    justify-content: center;
    align-items: center;
    border-top-start-radius: ${(props) => props.theme.sizes[1]};
    border-top-end-radius: ${(props) => props.theme.sizes[1]};
  `;
  const Space = styled(View)`
    flex: 0.1;
  `;
  const SearchBar = styled(Appbar)`
    padding: ${(props) => props.theme.space[2]};
    background-color: transparent;
  `;
  /* useEffect(() => {
    axios.get("https://fakestoreapi.com/products/categories").then((res) => {
      setData(res.data);

      setLoading(false);
    });
    console.log(data);
    data.map((item, index) => {
      setSearchTerm(item);

      axios
        .get(`https://fakestoreapi.com/products/category/${searchTerm}`)
        .then((res) => {
          setNames([...Names2, res.data]);

          setLoading(false);
        });
    });
  }, []);*/
  /* useEffect(() => {
    data.map((item, index) => {
      setSearchTerm(item);
      axios
        .get(`https://fakestoreapi.com/products/category/${searchTerm}`)
        .then((res) => {
          setNames([...Names2, res.data]);
          console.log(Names2);
          setLoading(false);
        });
    });
  }, [data]);*/
  function Arr(itemi) {
    let x = [];
    Names2.map((item) => {
      item.map((items) => {
        items.category === itemi && x.push(items);
      });
    });
    return x;
  }
  async function getCategory(itemi) {
    try {
      let response = await fetch(
        `https://fakestoreapi.com/products/category/${itemi}`
      );
      let json = await response.json();
      return json;
    } catch (error) {
      console.error(error);
    }
  }
  const [visible, setVisible] = React.useState(false);

  const openMenu = () => setVisible(true);

  const closeMenu = () => setVisible(false);

  return (
    <LinearGradient
      start={{ x: 0, y: 0 }}
      end={{ x: 0, y: 0.6 }}
      colors={["#7df3ff", "#7df3ff", "#FFFFFF"]}
      style={{
        flex: 1,
      }}
    >
      <CardContainer>
        <SearchBar>
          <Appbar.Content title="Title" subtitle={"Subtitle"} />
          <Appbar.Action
            icon="magnify"
            onPress={() => navigation.navigate("Search")}
          />
          <Appbar.Action icon="dots-vertical" onPress={openMenu} />
        </SearchBar>

        {/* <ScrollView
        data={[{ name: 1 }, { name: 2 }, { last: 3 }]}
        renderItem={() => <RestaurantInfo />}
        keyExtractor={(item) => item.name}
        contentContainerStyle={{ padding: 16 }}
      />
      */}
        <Space />
        {loading ? (
          <ActivityIndicator />
        ) : (
          <ScrollHorizontal>
            {/*data[0] && (
            <ScrollVertical>
              <Text>hello</Text>

              <ScrollView
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                contentOffset={{ x: 0, y: 0 }}
                decelerationRate="normal"

                pagingEnabled
              >
       {        axios
    .get(`https://fakestoreapi.com/products/category/${itemi}`)
    .then((response) => {
      console.log("SSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSS");
      setNames(response.data);
      console.log("XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX");
    });}
                {data[0].map((itemi, index) => {
                  return (
                    <View key={itemi} style={{ width: width - 40 }}>
                      <View
                        style={{
                          flexDirection: "row",
                          justifyContent: "center",
                        }}
                      >

                        <RestaurantInfo name={itemi.title} />
                      </View>
                      {
                        //console.log(JSON.parse(data[0][index].data_layer).ecommerce.impressions)
                      }
                      <FlatList
                        data={
                          JSON.parse(data[0][index].data_layer).ecommerce
                            .impressions
                        }
                        renderItem={({ item }) => (
                          <SubCategory subInfo={item} />
                        )}
                        keyExtractor={(items) => items.id}
                      />
                    </View>
                  );
                })}
              </ScrollView>
            </ScrollVertical>
              )*/}
            {data && Names2 && (
              <ScrollVertical>
                <Text>hello</Text>

                <ScrollView
                  horizontal={true}
                  showsHorizontalScrollIndicator={false}
                  contentOffset={{ x: 0, y: 0 }}
                  decelerationRate="normal"
                  /*onScrollEndDrag={() => console.log(`${DATA2.name}`)}*/
                  pagingEnabled
                >
                  {data.map((itemi, index) => {
                    return (
                      <View key={itemi} style={{ width: width - 40 }}>
                        <View
                          style={{
                            flexDirection: "row",
                            justifyContent: "center",
                          }}
                        >
                          <TouchableOpacity
                            onPress={() =>
                              navigation.navigate("ProductList", itemi)
                            }
                          >
                            <RestaurantInfo name={itemi} />
                          </TouchableOpacity>
                        </View>
                        {
                          //console.log(Names2)
                          //console.log(JSON.parse(data[0][index].data_layer).ecommerce.impressions)
                        }
                        <FlatList
                          data={Arr(itemi)}
                          renderItem={({ item }) => (
                            <TouchableOpacity
                              onPress={() =>
                                navigation.navigate("ProductScreen", item)
                              }
                            >
                              <SubCategory subInfo={item} />
                            </TouchableOpacity>
                          )}
                          keyExtractor={(items) => items.title}
                        />
                      </View>
                    );
                  })}
                </ScrollView>
              </ScrollVertical>
            )}
          </ScrollHorizontal>
        )}
      </CardContainer>
    </LinearGradient>
  );
}
