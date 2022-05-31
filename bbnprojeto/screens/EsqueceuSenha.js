import React, { Component } from 'react';
import { View, TextInput, Image, TouchableOpacity, Text } from "react-native";
import estilos from '../styles/estilo.js';
import {Button, Icon} from 'react-native-paper';

export default class EsqueceuSenha extends Component {
constructor(props){
    super(props)
    this.irEntrar = this.irLogin.bind(this);
    }
    irLogin(){
    this.props.navigation.navigate("Login");
    }
  render(){
    return (
        <View style={estilos.container}>
          <View style={estilos.topoCadastroView}>
            <View style={{flex:1, flexDirection:'row', justifyContent:'center', alignItems:'center'}}>
              <Text style={estilos.topoCadastroViewTitulo}>
                Recuperar sua Senha
              </Text>
            </View>
          </View>
          <View style={estilos.containerEntradasCadastroView}>
              <Text style={estilos.placeholder}> Nome completo
              <Text style={estilos.asteriscoEntradasCadastroView}>*</Text></Text>
            <TextInput 
              style={estilos.input} 
              placeholder="Insira seu nome completo" 
              placeholderTextColor={'#77778D'} />
              <Text style={estilos.placeholder}> Email
              <Text style={estilos.asteriscoEntradasCadastroView}>*</Text></Text>
            <TextInput 
              style={estilos.input} 
              placeholder="Insira seu e-mail" 
              placeholderTextColor={'#77778D'} />
          </View>
          <View style={estilos.botoesCadastroView}>
            <Button icon="arrow-left-bold" 
              color='#000' 
              onPress={() => this.irLogin()}
              style={estilos.botoesCadastro}>Voltar</Button>
            <Button icon="email-check" 
              color='#fff'
              onPress={() => this.irLogin()}
              style={estilos.botoesCadastroSecundario}>Enviar</Button>
          </View>
      </View>
    );
  }
}