// In App.js in a new project

import React, { Component } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Entrou from './screens/Entrou';
import Login from './screens/Login';
import Cadastro from './screens/Cadastro';

const Stack = createNativeStackNavigator();

export default class App extends Component{
  render(){
    return (
      <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown: false}}>
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Entrou" component={Entrou} />
          <Stack.Screen name="Cadastro" component={Cadastro} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}