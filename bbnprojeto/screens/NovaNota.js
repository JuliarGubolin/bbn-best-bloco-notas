import React, { Component } from 'react';
import { View, TextInput, Image, TouchableOpacity, Text } from "react-native";
import estilos from '../styles/estilo.js'

export default class NovaNota extends Component {

  render(){
    return (
        <View style={{flex:1}}>
            <View style={{flex:1}}>
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
                <View style={{backgroundColor:"#02a9f7", justifyContent:'flex-end', alignItems:'center'}}>
                    <Text style={{color:'#fff', fontSize:24, 
                    fontWeight:'bold', margin:10}}>Salvar</Text>
                </View>
                
            </TouchableOpacity>
        </View>  
    );
  }
}