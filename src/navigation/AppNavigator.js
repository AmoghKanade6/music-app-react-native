import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { DefaultTheme, NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import WelcomeScreen from "../screens/WelcomeScreen";
import Navbar from "../components/Navbar";

const Stack = createNativeStackNavigator();
const Theme = DefaultTheme;
Theme.colors.background = "#eef6f9";

const AppNavigator = () => {
  return (
    <NavigationContainer theme={Theme}>
      <Navbar />
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Welcome" component={WelcomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
