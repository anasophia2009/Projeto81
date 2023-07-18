import { Text, View, StyleSheet } from 'react-native';
export default function ConteudoHome() {
  return (
    <View style={editar.conteudoHome}>
      <Text>cubo magico </Text>

      </View>
  );
}

const editar = StyleSheet.create({

  conteudoHome: {
    display: 'flex',
    flex: 0.6,
    padding: 25,
    backgroundColor: '#00ff00',
  }  
})
