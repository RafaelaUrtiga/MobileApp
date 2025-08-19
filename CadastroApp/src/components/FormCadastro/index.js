
import React, {useState} from "react"
import {View, Text, TextInput, Button, Alert, StyleSheet,} from "react-native"
import { Picker } from '@react-native-picker/picker';

export default function FormCadastro(){
    const [tipo, setTipo] = useState('aluno');
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');

    const constCadastro = () => {
        // Simulação de cadastro
        Alert.alert(
        "Cadastro realizado com sucesso!",
        `Usuário: ${nome}\nTipo: ${tipo.toUpperCase()}`
        );

    }
    return(
    <View style={styles.container}>
      <Text style={styles.label}>Tipo de Usuário</Text>
      <Picker
        selectedValue={tipo}
        onValueChange={(itemValue) => setTipo(itemValue)}
        style={styles.input}
      >
        <Picker.Item label="Aluno" value="aluno" />
        <Picker.Item label="Jurado" value="jurado" />
        <Picker.Item label="Administrador" value="administrador" />
      </Picker>

      <Text style={styles.label}>Nome</Text>
      <TextInput
        style={styles.input}
        placeholder="Digite seu nome"
        value={nome}
        onChangeText={setNome}
      />

      <Text style={styles.label}>Email</Text>
      <TextInput
        style={styles.input}
        placeholder="Digite seu email"
        keyboardType="email-address"
        autoCapitalize="none"
        autoCorrect={false}
        value={email}
        onChangeText={setEmail}
      />

      <Text style={styles.label}>Senha</Text>
      <TextInput
        style={styles.input}
        placeholder="Digite sua senha"
        secureTextEntry
        autoCapitalize="none"
        autoCorrect={false}
        value={senha}
        onChangeText={setSenha}
      />

      <View style={styles.buttonContainer}>
        <Button title="Cadastrar" onPress={handleCadastro} color="#28a745" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  label: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 5,
    marginTop: 15,
  },
  input: {
    height: 45,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 10,
    backgroundColor: '#f9f9f9',
  },
  buttonContainer: {
    marginTop: 30,
  },
});