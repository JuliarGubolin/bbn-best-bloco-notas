import React from 'react';
import { StyleSheet, Text, View} from 'react-native';
import estilos from '../styles/estilo.js';
import {Button, Icon} from 'react-native-paper';

const componentes = [
  {
    title: 'The Promissed Neverland',
    id:1,
  },
  {
    title: 'The Promissed Neverland2',
    id:2,
  },
  {
    title: 'The Promissed Neverland3',
    id:3,
  },
  {
    title: 'The Promissed Neverland4',
    id:4,
  },
  {
    title: 'The Promissed Neverland5',
    id:5,
  },
];

const Item = ({ title }) => (
  <View>
    <Text>{title}</Text>
  </View>
);


export default class App extends React.Component {
  render() {
    return (
      <View style={estilos.container}>
        
      </View>
    );
  }
}