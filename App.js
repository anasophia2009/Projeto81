import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Cadastro from './screens/cadastro/Cadastro';
import Login from './screens/login/Login';
import Home from './screens/home/Home';
import NavegacaoLateral from './navigation/NavegacaoLateral';

/* Dependencia ultilizadas como um espaço no codigo em que serao guardadas as telas que terao navegaçao entre si */
import { NavigationContainer } from '@react-navigation/native';

/* Dependencia ultilizada para auxiliar na identificacao dos gestos do usuario. (Por exemplo :o deslizar do dedo na tela)*/
import 'react-native-gesture-handler';

/* dependencia ultilizada para a navegacao empilhada, ou seja, se o usuario clicar na tela Home, e em seguida por exemplo, clicar na tela carrinho, ele conseguira retornar a tela Home deslizando o seu dedo*/
import { createStackNavigator } from '@react-navigation/stack';

/* constante criada para exercer a navegacao entre as telas */
const Stack = createStackNavigator();





export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName = "Login"
        screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Home" component={Home} />
      </Stack.Navigator>

      
    </NavigationContainer>
  );
}
