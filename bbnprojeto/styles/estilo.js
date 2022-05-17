import {StyleSheet} from 'react-native';

export default StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#00f",
      alignItems: "center",
      justifyContent: "center",
      padding: 100,
      backgroundColor: '#fff'
    },
    input: {
      height: 40,
      width: 260,
      margin: 12,
      borderWidth: 2,
      padding: 10,
      borderRadius: 4,
      borderColor: "#02a9f7",
      backgroundColor: "#fff",
      color: "black"
    },
    logo: {
      height: 150,
      width: 150,
      borderRadius: 10,
      marginBottom: 12
    },
    placeholder:{
      color:"#000"
    },
    underLineText: {
      marginTop: 10,
      fontSize: 15,
      color: 'blue',
      fontWeight: 'bold',
      textAlign: 'center',
      color: '#02a9f7'
    },
    titulo:{
      fontWeight: 'bold', 
      fontSize: 28, 
      color:'black', 
      width: 300, 
      textAlign:'center'
    },
    subtitulo:{
      fontWeight: 'bold', 
      fontSize: 20, 
      color:'#77778D', 
      textAlign:'center'
    },
    containerLogin:{
      backgroundColor:'#EEEEEE', 
      borderRadius:8, 
      padding:12, 
      margin:8
    },
    placeholder:{
      fontWeight: 'bold', 
      fontSize: 15, 
      color:'black', 
      marginLeft:12
    },
    botaoLink:{
      width:'100%', 
      flexDirection:'row', 
      justifyContent:'space-evenly'
    },
    viewEsqueceuSenha:{
      flexDirection:'row', 
      justifyContent:'flex-end', 
      marginTop:10, 
      marginRight:12
    },
    txtEsqueceuSenha:{
      color: '#02a9f7'
    },
    botaoEntrar:{
      color:'white', 
      backgroundColor:'#2196F3', 
      textAlign:'center', 
      height:30, 
      width:260, 
      textAlignVertical:'center',
      borderRadius:3
    },
    botaoPrincipal:{
      fontSize: 50,
      color:'white', 
      backgroundColor:'#2196F3', 
      textAlign:'center', 
      height:100, 
      width: 300, 
      textAlignVertical:'center',
      borderRadius: 4,
      margin: 8
    }
  });