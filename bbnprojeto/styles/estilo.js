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
      backgroundColor: "#fff"
    },
    logo: {
      height: 150,
      width: 150,
      borderRadius: 10
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
    }
  });