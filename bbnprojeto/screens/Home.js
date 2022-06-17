import React from 'react';
import {Text, View, FlatList, TouchableOpacity} from 'react-native';
import estilos from '../styles/estilo.js';

const componentes = [
  {
    title: 'Anotação 1',
    description: 'Descrição da anotação 1',
    id:1,
  },
  {
    title: 'Anotação 2',
    description: 'Descrição da anotação 2',
    id:2,
  },
  {
    title: 'Anotação 3',
    description: 'Descrição da anotação 3',
    id:3,
  },
  {
    title: 'Anotação 4',
    description: 'Descrição da anotação 4',
    id:4,
  },
  {
    title: 'Anotação 5',
    description: 'Descrição da anotação 5',
    id:5,
  },
];

function Alerta(){
  alert('Deseja excluir esta nota?');
}

const Item = ({ title, description }) => (
  <TouchableOpacity onPress={() => Alerta()}>
    <View style={estilos.ViewitensAnotacoes}>
      <Text style={estilos.itemSuperior} >{title}</Text>
      <Text style={estilos.itemInferior} >{description}</Text>
    </View>
    </TouchableOpacity>
);

export default class App extends React.Component {
  constructor(props){
    super(props)
    this.irNovaNota = this.irNovaNota.bind(this);
  }
  irNovaNota(){
    this.props.navigation.navigate("NovaNota");
  }
  render() {
    const renderItem = ({ item }) => (
      <Item title={item.title} description={item.description}/>
    );
    return (
      <View style={estilos.viewPrincipalHome}>
        <View style={estilos.viewItensLista}>
        <FlatList 
          data={componentes}
          renderItem={renderItem}
        />
        </View>
        <TouchableOpacity onPress={() => this.irNovaNota()}>
        <View style={estilos.viewBotaoAdicionarNota}>
          <Text style={estilos.textoBotaoAdicionarNota}>+</Text>
        </View>
        </TouchableOpacity>
      </View>
    );
  }
}