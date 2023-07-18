import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';

export default function Botoes(props) {
  return (
    <View style={editar.botao}>
      <TouchableOpacity
        onPress={() => props.navegacaoBotao.navigate('Home')}
        style={editar.btn}>
        <Text style={editar.textoBotao}>Login</Text>
        <MaterialCommunityIcons name="login" size={24} color="#0000FF" />
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => props.navegacaoBotao.navigate('Cadastro')}
        style={editar.btn2}>
        <Text style={editar.textoBotao2}>Cadastrar</Text>
        <Feather name="user-plus" size={24} color="#228B22" />
      </TouchableOpacity>
    </View>
  );
}

const editar = StyleSheet.create({
  textoBotao: {
    color: '#0000FF',
    fontSize: 23,
    paddingRight: 7,
  },

  textoBotao2: {
    color: '#228B22',
    fontSize: 23,
    paddingRight: 5,
  },

  botao: {
    marginRight: 'auto',
    marginLeft: 'auto',
    flexDirection: 'row',
  },

  btn: {
    borderColor: '#0000FF',
    borderWidth: 3.5,
    margin: 20,
    padding: 15,
    borderRadius: 30,
    width: 160,
    flexDirection: 'row',
    justifyContent: 'center',
  },

  btn2: {
    borderColor: '#228B22',
    borderWidth: 3.5,
    margin: 20,
    padding: 15,
    borderRadius: 30,
    width: 160,
    flexDirection: 'row',
    justifyContent: 'center',
  },
});
