import React, { useReducer, useMemo } from "react";
import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import { ThemeProvider } from "styled-components/native";
import { theme } from "./src/infrastructure/theme";
import RestaurantScreens from "./src/features/restaurants/screens/RestaurantScreens";
import {
  useFonts as useOswald,
  Oswald_400Regular,
} from "@expo-google-fonts/oswald";
import { useFonts as useLato, Lato_400Regular } from "@expo-google-fonts/lato";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "react-native-vector-icons/Ionicons";
import { createStackNavigator } from "@react-navigation/stack";
import SearchScreen from "./src/features/restaurants/screens/Search";
import CartScreen from "./src/features/restaurants/screens/Cart";
import ProfileScreen from "./src/features/restaurants/screens/Profile";
import RegisterScreen from "./src/features/restaurants/screens/RegisterScreen";
import LoginScreen from "./src/features/restaurants/screens/LoginScreen";
import ForgotPasswordScreen from "./src/features/restaurants/screens/ForgotPasswordScreen";
import ProductListScreen from "./src/features/restaurants/screens/ProductList";
import ProductScreen from "./src/features/restaurants/screens/Product";
import axios from "axios";

export const AuthContext = React.createContext();
const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

export default function App() {
  const [state, dispatch] = useReducer(
    (prevState, action) => {
      switch (action.type) {
        case "RESTORE_TOKEN":
          return {
            ...prevState,
            userToken: action.token,
            isLoading: false,
          };
        case "SIGN_IN":
          return {
            ...prevState,
            isSignout: false,
            userToken: action.token,
          };
        case "SIGN_OUT":
          return {
            ...prevState,
            isSignout: true,
            userToken: null,
          };
      }
    },
    {
      isLoading: true,
      isSignout: false,
      userToken: null,
    }
  );
  const authContext = useMemo(
    () => ({
      signIn: async (data) => {
        console.log(data.x);
        await axios
          .post("https://fakestoreapi.com/auth/login", {
            username: data.x,
            password: data.y,
          })
          .then((res) => {
            console.log(res.data);
            dispatch({ type: "SIGN_IN", token: res.data.token });
          });
        // In a production app, we need to send some data (usually username, password) to server and get a token
        // We will also need to handle errors if sign in failed
        // After getting token, we need to persist the token using `SecureStore`
        // In the example, we'll use a dummy token
      },
      signOut: () => dispatch({ type: "SIGN_OUT" }),
      signUp: async (data) => {
        // In a production app, we need to send user data to server and get a token
        // We will also need to handle errors if sign up failed
        // After getting token, we need to persist the token using `SecureStore`
        // In the example, we'll use a dummy token

        dispatch({ type: "SIGN_IN", token: "dummy-auth-token" });
      },
    }),
    []
  );
  const [oswaldLoaded] = useOswald({
    Oswald_400Regular,
  });
  const [LatoLoaded] = useLato({
    Lato_400Regular,
  });
  if (!oswaldLoaded || !LatoLoaded) {
    return null;
  }
  const HomeStack = () => {
    return (
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={({ route }) => ({
          headerShown: false,
        })}
      >
        <Stack.Screen name="Home" component={RestaurantScreens} />
        <Stack.Screen name="Search" component={SearchScreen} />
        <Stack.Screen name="ProductList" component={ProductListScreen} />
        <Stack.Screen name="ProductScreen" component={ProductScreen} />
      </Stack.Navigator>
    );
  };
  return (
    <AuthContext.Provider value={authContext}>
      <NavigationContainer>
        <ThemeProvider theme={theme}>
          {state.userToken === null ? (
            <Stack.Navigator
              initialRouteName="signIn"
              screenOptions={({ route }) => ({
                headerShown: false,
              })}
            >
              <Stack.Screen name="signIn" component={LoginScreen} />
              <Stack.Screen name="signUp" component={RegisterScreen} />
              <Stack.Screen
                name="ForgotPass"
                component={ForgotPasswordScreen}
              />
            </Stack.Navigator>
          ) : (
            <Tab.Navigator
              screenOptions={({ route }) => ({
                headerShown: false,
                tabBarIcon: ({ focused, color, size }) => {
                  let iconName;

                  if (route.name === "Home") {
                    iconName = focused ? "home" : "home-outline";
                  } else if (route.name === "Search") {
                    iconName = focused ? "search" : "ios-search-outline";
                  } else if (route.name === "Cart") {
                    iconName = focused ? "cart" : "ios-cart-outline";
                  } else if (route.name === "Profile") {
                    iconName = focused ? "person" : "ios-person-outline";
                  }

                  // You can return any component that you like here!
                  return <Ionicons name={iconName} size={size} color={color} />;
                },
                tabBarActiveTintColor: "blue",
                tabBarInactiveTintColor: "gray",
              })}
            >
              <Tab.Screen name="Home" component={HomeStack} />
              <Tab.Screen name="Search" component={SearchScreen} />
              <Tab.Screen name="Cart" component={CartScreen} />
              <Tab.Screen name="Profile" component={ProfileScreen} />
            </Tab.Navigator>
          )}
        </ThemeProvider>
        <ExpoStatusBar style="auto" />
      </NavigationContainer>
    </AuthContext.Provider>
  );
}
