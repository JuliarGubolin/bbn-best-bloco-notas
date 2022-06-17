import React, { Component } from 'react';
import { View, TextInput, TouchableOpacity, Text } from "react-native";
import estilos from '../styles/estilo.js'

export default class NovaNota extends Component {

  render(){
    return (
        <View style={estilos.viewPrincipalHome}>
            <View style={estilos.viewPrincipalHome}>
                <TextInput 
                placeholder="Título" 
                placeholderTextColor={'#77778D'} 
                backgroundColor={'#e1e1e1'}
                color={"#000"}
                />
                <TextInput 
                placeholder="Descrição" 
                placeholderTextColor={'#77778D'}
                color={"#000"} />
            </View> 
            <TouchableOpacity onPress={() => console.log()}>
                <View style={estilos.viewBotaoSalvarNota}>
                    <Text style={estilos.textoBotaoSalvar}>Salvar</Text>
                </View>
                
            </TouchableOpacity>
        </View>  
    );
  }
}