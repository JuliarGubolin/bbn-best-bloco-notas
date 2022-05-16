import React from "react";
import { View, Button, TextInput, Image, ImageBackground } from "react-native";
import estilos from './styles/estilo.js'

const image = { uri: "https://reactjs.org/logo-og.png" };

export default function App() {
  return (
    <View style={estilos.container}>
      <Image style={estilos.logo} source={require("./source/images/Logo_Teste.jpg")} />
      <TextInput style={estilos.input} placeholder="Email" placeholderTextColor="#000" />
      <TextInput
        style={estilos.input}
        placeholder="Senha"
        secureTextEntry={true}
        placeholderTextColor="#000"
      />
      <View style={{width:'100%', flexDirection:'row', justifyContent:'space-evenly'}}>
        <Button style={estilos.botao} title="Entrar" />
        <Button style={estilos.botao} title="Cadastre-se" />
      </View>
    </View>
  );
}