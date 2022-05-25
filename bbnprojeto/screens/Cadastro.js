import React, { Component } from 'react';
import { View, TextInput, Image, TouchableOpacity, Text } from "react-native";
import estilos from '../styles/estilo.js';
import {Button, Icon} from 'react-native-paper';

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
        <View style={{backgroundColor:'#EEEEEE',
        borderWidth:1, borderColor:'#DDDDDD', borderTopLeftRadius:5,
        borderTopRightRadius:5, width: 302.5}}>
          <Text style={{
        fontWeight: 'bold', 
        fontSize: 28, 
        color:'black',
        alignSelf:'center',
        }}>Cadastro de cliente<Button icon="account-plus"
        color='#000' compact={true} labelStyle={{fontSize:25}}
        ></Button></Text>

        
        </View>
        <View style={{backgroundColor:'#fff', 
        borderWidth:1, borderColor:'#DDDDDD',
        width: 302.5}}>
            <Text style={estilos.placeholder}> Nome completo
            <Text style={{color:'#f00'}}>*</Text></Text>
          <TextInput 
            style={estilos.input} 
            placeholder="Insira seu nome completo" 
            placeholderTextColor={'#77778D'} />
            <Text style={estilos.placeholder}> Email
            <Text style={{color:'#f00'}}>*</Text></Text>
          <TextInput 
            style={estilos.input} 
            placeholder="Insira seu e-mail" 
            placeholderTextColor={'#77778D'} />
          <Text style={estilos.placeholder}> Senha
          <Text style={{color:'#f00'}}>*</Text></Text>
          <TextInput
            style={estilos.input}
            placeholder="Insira sua senha"
            placeholderTextColor={'#77778D'}
            secureTextEntry={true}
          />
          
          <Text style={estilos.placeholder}> Confirmar senha
          <Text style={{color:'#f00'}}>*</Text></Text>
          <TextInput
            style={estilos.input}
            placeholder="Confirme sua senha"
            placeholderTextColor={'#77778D'}
            secureTextEntry={true}
          />
        </View>
        <View style={{backgroundColor:'#fff',
        borderWidth:1, borderColor:'#DDDDDD', 
        borderBottomLeftRadius:5,
        borderBottomRightRadius:5, width: 302.5,
        alignItems:'flex-end', justifyContent:'space-between', 
        flexDirection:'row'
        }}>
          <Button icon="arrow-left-bold" 
          color='#000' 
          onPress={() => this.irLogin()}
          style={{backgroundColor:"#fff", 
          width:130,
          margin:10,
          borderColor:'#000',
          borderWidth:1,
          alignSelf:'auto', color:'#fff'
          
          }}>Voltar</Button>
          <Button icon="content-save" 
          color='#fff'
          onPress={() => this.irLogin()}
          style={{backgroundColor:"#2196F3",
          margin:10,
          borderColor:'#000',
          borderWidth:1,
          width:130,
          alignSelf:'auto'
          }}>Cadastrar</Button>
        </View>
      </View>
    );
  }
}