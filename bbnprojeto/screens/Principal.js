import React from "react";
import { View, TextInput, Image, TouchableOpacity, Text } from "react-native";
import estilos from './styles/estilo.js'

export default function App() {
  return (
    <View style={estilos.container}>
      <Image 
        style={estilos.logo} 
        source={require("./source/images/Logo_Teste.jpg")} 
      />
      <View>
        <Text style={estilos.titulo}>Best Bloco de Notas</Text>
        <Text style={estilos.subtitulo}>BBN</Text>
      </View>
      <View style={estilos.containerLogin}>
        <Text style={estilos.placeholder}> E-mail:</Text>
        <TextInput 
          style={estilos.input} 
          placeholder="Insira seu e-mail" 
          placeholderTextColor={'#77778D'} />
        <Text style={estilos.placeholder}> Senha:</Text>
        <TextInput
          style={estilos.input}
          placeholder="Senha"
          placeholderTextColor={'#77778D'}
          secureTextEntry={true}
        />
        <View style={{alignItems:'center'}}>
          <TouchableOpacity>
            <Text style={estilos.botaoEntrar}>
            Entrar</Text>
          </TouchableOpacity>
        </View>
        <View style={estilos.viewEsqueceuSenha}>
          <Text style={estilos.txtEsqueceuSenha}>Esqueceu a senha?</Text>
        </View>
      </View>
      <View style={estilos.botaoLink}>
        <TouchableOpacity>
          <Text style={estilos.underLineText}>Cadastre-se</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}