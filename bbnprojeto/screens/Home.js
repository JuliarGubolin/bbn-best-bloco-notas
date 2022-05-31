import React from 'react';
import { StyleSheet, Text, View} from 'react-native';
import estilos from '../styles/estilo.js';
import {Button, Icon} from 'react-native-paper';

export default class App extends React.Component {
  render() {
    return (
      <View style={estilos.container}>
        <View style={estilos.botaoHome}>
            <View style={{flex:1, flexDirection:"row", alignItems:'center'}} >
                <Text style={{color:'#000'}}>Best Bloco de Notas</Text>
            </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  statusBar: {
    backgroundColor: '#2196F3',
    height: 50
  },
  container: {
    flex: 1
  }
});

