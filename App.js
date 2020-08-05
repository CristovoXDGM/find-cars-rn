import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import 'react-native-gesture-handler';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './src/Pages/Home';
import EditCar from './src/Pages/EditCar';

const Stack = createStackNavigator();

export default function App() {


  return (
    <NavigationContainer>
      <Stack.Navigator >
        <Stack.Screen component={Home} name="Home" options={{ headerShown: false }} />
        <Stack.Screen component={EditCar} name="Edit" />
      </Stack.Navigator>
    </NavigationContainer>
  );
}


