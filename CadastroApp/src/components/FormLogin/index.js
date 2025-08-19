
import React, {useState} from "react"
import {View, Text, TextInput, Button, Alert, StyleSheet,} from "react-native"

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
    <View style={StyleSheet.container}>
        <View>
            <Text style={styles.label}>Login</Text>
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
                secureTextEntry={true} //oculta o texto
                autoCapitalize="none"
                autoCorrect={false}
                value={senha}
                onChangeText={setSenha}
            />
            <View style={styles.buttonContainer}>
                <Button title="Logar" onPress={constLogin} color="#277564ff" />
            </View>     
        </View>
    </View>
    );
}

const styles = StyleSheet.create({
    container:{
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
