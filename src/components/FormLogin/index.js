
import React, {useState} from "react"
import {View, Text, TextInput, Button, Alert} from "react-native"

export default function FormLogin(){
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');

    const constLogin = () => {
        const emailValido = 'rafa@email.com';
        const senhaValida = '12345';

        if (email === emailValido && senha === senhaValida) {
            Alert.alert('Login realizado com sucesso');
        }else {
            Alert.alert('E-mail ou senha inválidos.');
        }

    }
    return(
    <View>
        <View>
            <Text>Login</Text>
            <TextInput
                placeholder="Digite seu email"
                keyboardType="email-address"
                autoCapitalize="none"
                autoCorrect={false}
                value={email}
                onChangeText={setEmail}
            />

            <Text>Senha</Text>
            <TextInput
                placeholder="Digite sua senha"
                secureTextEntry={true} //oculta o texto
                autoCapitalize="none"
                autoCorrect={false}
                value={senha}
                onChangeText={setSenha}
            />
            <Button title="Logar" onPress={constLogin}/>     
        </View>
    </View>
    );
}