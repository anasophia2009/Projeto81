import { Text, View, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import { useState } from 'react';

export default function Cadastro() {
  const [usuario, setUsuario] = useState('');
  const [senha, setSenha] = useState('');
  const [email, setEmail] = useState('');
  const [nome, setNome] = useState('');
  const [cpf, setCPF] = useState('');
  const [celular, setCelular] = useState('');

  return (
    <View style={editar.telaCadastro}>
      <View style={editar.campo}>
        <TextInput
          placeholder="Digite seu usuário" 
          keyboardType="default"
          value={usuario}
          onChangText={(value) => setUsuario(value)}
          style = {editar.textoCampo}
          placeholderTextColor="#FFFFFF"
        />
      </View>

      <View style={editar.campo}>
        <TextInput
          secureTextEntry //transforma as letras em bolinhas.
          placeholder="Digite sua senha"
          keyboardType="default"
          value={senha}
          onChangeText={(value) => setSenha(value)}
          style = {editar.textoCampo}
          placeholderTextColor="#FFFFFF"
        />
      </View>
      <View style={editar.campo}>
        <TextInput
          placeholder="Digite seu email"
          keyboardType="email-address"
          value={email}
          onChangeText={(value) => setEmail(value)}
          style = {editar.textoCampo}
          placeholderTextColor="#FFFFFF"
        />
      </View>
      <View style={editar.campo}>
        <TextInput
          placeholder="Digite seu nome"
          keyboardType="default"
          value={nome}
          onChangeText={(value) => setNome(value)}
          style = {editar.textoCampo}
          placeholderTextColor="#FFFFFF"
        />
      </View>

      <View style={editar.campo}>
        <TextInput
          placeholder="Digite seu CPF"
          keyboardType="number-pad"
          value={cpf}
          onChangeText={(value) => setCPF(value)}
          style = {editar.textoCampo}
          placeholderTextColor="#FFFFFF"
        />
      </View>

      <View style={editar.campo}>
        <TextInput
          placeholder="Digite seu celular"
          keyboardType="number-pad"
          value={celular}
          onChangeText={(value) => setCelular(value)}
          style = {editar.textoCampo}
          placeholderTextColor="#FFFFFF"
        />
      </View>

  <View style={editar.botao}>
    <TouchableOpacity onPress={alert}><Text style={editar.textoBotao}>Cadastrar usuário</Text></TouchableOpacity>
  </View>

    </View>
  );
}

const editar = StyleSheet.create({
  telaCadastro: {
    display: 'flex',
    flex: 1,
    backgroundColor: '#000000',
    paddingTop: 60,
  },

  campo: {
    borderColor: '#FFFFFF',
    borderWidth: 3.5,
    margin: 15,
    padding: 15,
    borderRadius: 30,
  },

  textoCampo: {
    color: '#FFFFFF',
    fontSize: 18,
    textAlign: 'left',
  },

  textoBotao: {
    color: '#FF1493',
    fontSize: 18,
    textAlign: 'center',
  },

  botao: {
    borderColor: '#FF1493',
    borderWidth: 3.5,
    margin: 20,
    padding: 15,
    borderRadius: 30,
    width: 200,
    marginRight: 'auto',
    marginLeft: 'auto',
  },



});