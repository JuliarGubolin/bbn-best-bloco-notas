import React, { Component } from 'react';
import { View, TextInput, Text } from "react-native";
import estilos from '../styles/estilo.js';
import {Button} from 'react-native-paper';

export default class Cadastro extends Component {
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
            <View style={estilos.viewTopoCastroView2}>
              <Text style={estilos.topoCadastroViewTitulo}>
                Cadastro de cliente
                <Button 
                  icon="account-plus"
                  color='#000' 
                  compact={true} 
                  labelStyle={{fontSize:32}}
                ></Button>
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
            <Text style={estilos.placeholder}> Senha
            <Text style={estilos.asteriscoEntradasCadastroView}>*</Text></Text>
            <TextInput
              style={estilos.input}
              placeholder="Insira sua senha"
              placeholderTextColor={'#77778D'}
              secureTextEntry={true}
            />
            <Text style={estilos.placeholder}> Confirmar senha
            <Text style={estilos.asteriscoEntradasCadastroView}>*</Text></Text>
            <TextInput
              style={estilos.input}
              placeholder="Confirme sua senha"
              placeholderTextColor={'#77778D'}
              secureTextEntry={true}
            />
          </View>
          <View style={estilos.botoesCadastroView}>
            <Button icon="arrow-left-bold" 
              color='#000' 
              onPress={() => this.irLogin()}
              style={estilos.botoesCadastro}>Voltar</Button>
            <Button icon="content-save" 
              color='#fff'
              onPress={() => this.irLogin()}
              style={estilos.botoesCadastroSecundario}>Cadastrar</Button>
          </View>
      </View>
    );
  }
}