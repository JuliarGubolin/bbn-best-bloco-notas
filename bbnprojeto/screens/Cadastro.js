import React, { Component } from 'react';
import { View, TextInput, Text } from "react-native";
import estilos from '../styles/estilo.js';
import {Button} from 'react-native-paper';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default class Cadastro extends Component {
    constructor(props){
      super(props)
      this.irEntrar = this.irLogin.bind(this);
      this.state = {
        nome: '',
        senha:'',
        email:''
      }
    }
    irLogin(){
      this.props.navigation.navigate("Login");
    }
    armazenarUsuario(){
      var nome = this.nome;
      var email = this.email;
      var senha = this.senha;
      AsyncStorage.setItem('01', email);
      console.log(email);
      //AsyncStorage.setItem(nome, senha);
      this.buscarUsuario('01');
    }
    buscarUsuario = async(chave) =>{
      const valor = await AsyncStorage.getItem(chave);
      console.log(valor);
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
              placeholderTextColor={'#77778D'} 
              onChangeText={(nome) => this.setState({nome})}/>
              <Text style={estilos.placeholder}> Email
              <Text style={estilos.asteriscoEntradasCadastroView}>*</Text></Text>
            <TextInput 
              style={estilos.input} 
              placeholder="Insira seu e-mail" 
              placeholderTextColor={'#77778D'} 
              onChangeText={(email) => this.setState({email})}/>
            <Text style={estilos.placeholder}> Senha
            <Text style={estilos.asteriscoEntradasCadastroView}>*</Text></Text>
            <TextInput
              style={estilos.input}
              placeholder="Insira sua senha"
              placeholderTextColor={'#77778D'}
              secureTextEntry={true}
              onChangeText={(senha) => this.setState({senha})}
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
              onPress={() => this.armazenarUsuario()}
              style={estilos.botoesCadastroSecundario}>Cadastrar</Button>
          </View>
          <View>
            <Text style={{color:"#000"}}>{this.state.nome}</Text>
            <Text style={{color:"#000"}}>{this.state.email}</Text>
            <Text style={{color:"#000"}}>{this.state.senha}</Text>
          </View>
      </View>
    );
  }
}