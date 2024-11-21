import 'react-native-gesture-handler';

import { NavigationContainer } from "@react-navigation/native";
import { Routes } from './src/routes';

export default function Index() {
  return (
    <NavigationContainer>
      <Routes/>
    </NavigationContainer>
  );
}