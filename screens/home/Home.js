import { View, Text, StyleSheet } from 'react-native';
import Cabecalho from '../../components/Cabecalho';
import ConteudoHome from '../../components/ConteudoHome';
import Banner from '../../components/Banner';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import CuboMagico from '../loja/CuboMagico';
import Oferta from '../loja/Oferta';


const Drawer = createDrawerNavigator();

export default function Home() {
  return (
    <NavigationContainer independent={true}>
      <Drawer.Navigator
        initialRouteName="Home"  useLegacyImplementation>
        <Drawer.Screen name="Home" component={TelaPrincipal} />
        <Drawer.Screen name="Cubos Magicos" component={CuboMagico} />
        <Drawer.Screen name="Ofertas" component= {Oferta} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

function TelaPrincipal() {
  return (
    <View style={editar.telaHome}>
      <Cabecalho />

      <View style={editar.banner}>
        <Banner />
      </View>
      <ConteudoHome />
    </View>
  );
}

const editar = StyleSheet.create({
  telaHome: {
    // backgroundColor: '#556B2F',
    display: 'flex',
    flex: 1,
  },

  banner: {
    backgroundColor: '#FFD700',
    flex: 0.2,
  },
});
