import { Text, View } from "react-native";

import { NavigationContainer } from "@react-navigation/native";
import { Routes } from './src/routes';

export default function Index() {
  return (
    <NavigationContainer>
      <Routes/>
    </NavigationContainer>
  );
}