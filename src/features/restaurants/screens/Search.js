import React from "react";
import styled from "styled-components/native";
import { View, SafeAreaView, StatusBar } from "react-native";
import {
  Searchbar,
  Button,
  Menu,
  Divider,
  Provider,
  Appbar,
  Text,
} from "react-native-paper";
export default function SearchScreen({ navigation }) {
  const SearchBar = styled(Searchbar)`
  flex-direction:row;
  flex:1;
  alignItems: center;
  borderBottomWidth: ${(props) => props.theme.sizesBorder[0]};
  borderTopWidth: ${(props) => props.theme.sizesBorder[0]};
  backgroundColor: ${(props) => props.theme.colors.bg.primary};
  textShadowOffset: { width:1, height : 1 };
  shadowColor: ${(props) => props.theme.colors.shadow.primary};
  shadowOpacity: 4;
  shadowRadius: ${(props) => props.theme.sizes[0]};
  marginHorizontal: ${(props) => props.theme.sizes[0]};
  borderRadius:${(props) => props.theme.sizes[1]};
    
  `;
  const CardContainer = styled(SafeAreaView)`
    flex: 1;
    ${StatusBar.currentHeight && `marginTop:${StatusBar.currentHeight}px`};

    justify-content: flex-start;
    align-items: flex-start;
  `;
  const TextDefault = styled(Text)`
    justify-content: center;
    align-items: center;
    padding-left: ${(props) => props.theme.sizes[2]};
    padding-top: ${(props) => props.theme.sizes[2]};
    font-family: ${(props) => props.theme.fonts.heading};
    font-size: ${(props) => props.theme.fontSizes.body};
  `;
  const [visible, setVisible] = React.useState(false);
  const [searchTerm, setSearchTerm] = React.useState("");

  const openMenu = () => setVisible(true);

  const closeMenu = () => setVisible(false);
  return (
    <Provider>
      <CardContainer>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
          }}
        >
          <SearchBar placeholder="search" />

          <Menu
            visible={visible}
            onDismiss={closeMenu}
            anchor={
              <Button
                icon="menu"
                labelStyle={{ fontSize: 25 }}
                onPress={openMenu}
              />
            }
          >
            <Menu.Item onPress={() => {}} title="Item 1" />
            <Menu.Item onPress={() => {}} title="Item 2" />
            <Divider />
            <Menu.Item onPress={() => {}} title="Item 3" />
          </Menu>
        </View>
        {searchTerm ? (
          <Text>hi</Text>
        ) : (
          <TextDefault>
            <Text>search by :</Text>
            {"\n"} -model name, like : ThinkPad
            {"\n"} -title, like : clothes
            {"\n"}or any way you like to...{" "}
          </TextDefault>
        )}
      </CardContainer>
    </Provider>
  );
}
