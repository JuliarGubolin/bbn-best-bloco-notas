import React from 'react';
import {Text, View, FlatList, TouchableOpacity} from 'react-native';
import estilos from '../styles/estilo.js';
import {Button, Icon} from 'react-native-paper';

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

const Item = ({ title, description }) => (
    <View style={{margin:4, padding: 4, borderWidth:2, borderRadius:4, backgroundColor:"#fff", borderColor:"#fff"}}>
      <Text style={{color:"#000", fontSize:22, backgroundColor:"#fff", paddingLeft:4, paddingTop:4}} >{title}</Text>
      <Text style={{color:"#000", fontSize:14, backgroundColor:"#fff", paddingLeft:4, paddingBottom:4}} >{description}</Text>
    </View>
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
      <View style={{flex:1}}>
        <View style={{backgroundColor:"#E1E1E1", flex:1}}>
        <FlatList 
          data={componentes}
          renderItem={renderItem}
        />
        </View>
        <TouchableOpacity onPress={() => this.irNovaNota()}>
        <View style={{backgroundColor:"#02a9f7", justifyContent:'flex-end', alignItems:'center'}}>
          
                <Text style={{color:'#fff', fontSize:24, 
                fontWeight:'bold', margin:10}}>+</Text>
          
        </View>
        </TouchableOpacity>
      </View>
    );
  }
}