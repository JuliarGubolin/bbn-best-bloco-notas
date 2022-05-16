import React from "react";
import { View, Button, TextInput, Image, ImageBackground, TouchableOpacity, Text } from "react-native";
import estilos from './styles/estilo.js'

const image = { uri: "https://reactjs.org/logo-og.png" };

export default function App() {
  return (
    <View style={estilos.container}>
      <Image style={estilos.logo} source={require("./source/images/Logo_Teste.jpg")} />
      <View>
        <Text style={{fontWeight: 'bold', fontSize: 30, color:'black', 
        width: 300,
        textAlign:'center'}}>
          Best Bloco de Notas</Text>
        <Text style={{fontWeight: 'bold', fontSize: 20, color:'#77778D', textAlign:'center'}}>BBN</Text>
      </View>
      <View style={{backgroundColor:'#EEEEEE', borderRadius:10, padding:12, margin:8}}>
        <Text style={{fontWeight: 'bold', fontSize: 15, color:'black'}}> E-mail:</Text>
        <TextInput style={estilos.input} placeholder="Insira seu e-mail" />
        <Text style={{fontWeight: 'bold', fontSize: 15, color:'black'}}> Senha:</Text>
        <TextInput
          style={estilos.input}
          placeholder="Senha"
          secureTextEntry={true}
        />
        <View style={{alignItems:'center'}}>
          <TouchableOpacity>
            <Text style={{color:'white', backgroundColor:'#2196F3', textAlign:'center', 
            height:30, width:260, textAlignVertical:'center'}}>
            Entrar</Text>
          </TouchableOpacity>
        </View>
        <View style={{flexDirection:'row', justifyContent:'flex-end', marginTop:10, marginRight:12}}>
          <Text>Esqueceu a senha?</Text>
        </View>
      </View>
      <View style={{width:'100%', flexDirection:'row', justifyContent:'space-evenly'}}>
        <TouchableOpacity>
          <Text style={estilos.underLineText}>Cadastre-se</Text>
        </TouchableOpacity>
      </View>
      
    </View>
  );
}