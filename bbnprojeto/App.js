// In App.js in a new project

import React, { Component } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './screens/Home';
import Login from './screens/Login';
import Cadastro from './screens/Cadastro';
import EsqueceuSenha from './screens/EsqueceuSenha';
import NovaNota from './screens/NovaNota';


const Stack = createNativeStackNavigator();

export default class App extends Component{

  render(){
    return (
      <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown: false}}>
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Home" component={Home} options={{
            headerShown: true, //Colocar a barra de cima
            headerTintColor:"#fff", //Cor para o Texto
            headerStyle:{backgroundColor:"#02a9f7"}, //Cor do fundo do header
            headerBackVisible:false, //Seta pra voltar pra trás
            headerTitle: "Anotações", //Muda a frase do título
            }}/>
          <Stack.Screen name="Cadastro" component={Cadastro} />
          <Stack.Screen name="EsqueceuSenha" component={EsqueceuSenha} />
          <Stack.Screen name="NovaNota" component={NovaNota}options={{
            headerShown: true, //Colocar a barra de cima
            headerTintColor:"#fff", //Cor para o Texto
            headerStyle:{backgroundColor:"#02a9f7"}, //Cor do fundo do header
            headerBackVisible:false, //Seta pra voltar pra trás
            headerTitle: "Nova Nota", //Muda a frase do título
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}