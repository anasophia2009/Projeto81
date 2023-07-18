import { Text, View, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
export default function Cabecalho() {
  return (
    <View style={editar.cabecalho}>
        <Text style={editar.textoLogo}> cubo magico </Text>
        <Ionicons name="cart-outline" size={30} color="white"  style={editar.iconeCarrinho}/>
      </View>
  );
}



const editar = StyleSheet.create({

  cabecalho: {
    backgroundColor: '#000000',
    flex: 0.1,
    flexDirection:"row",
    justifyContent:"center",
    alignItems:"center",
  },

  textoLogo:{
    color:"#FFFFFF",
  },

  
iconeCarrinho: {

right: -90,

}

});