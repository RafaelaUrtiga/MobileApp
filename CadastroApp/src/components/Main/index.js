import React, { useState } from "react";
import { View, Button, Alert, StyleSheet } from "react-native";
import FormLogin from "../FormLogin";
import FormCadastro from "../FormCadastro";

export default function Main() {
  const [tela, setTela] = useState("login");
  const [usuarios, setUsuarios] = useState([]);
  const [usuarioLogado, setUsuarioLogado] = useState(null);

  // Função para logar usuário
  const logarUsuario = (email, senha) => {
    const found = usuarios.find(u => u.email === email && u.senha === senha);
    console.log("Tentativa de login com:", { email, senha }, "Encontrado:", found);
    if (found) {
      setUsuarioLogado(found);
      Alert.alert("Login realizado", `Bem-vindo, ${found.nome} (${found.tipo})`);
    } else {
      Alert.alert("Erro", "E-mail ou senha incorretos.");
    }
  };

  // Função para cadastrar usuário
  const cadastrarUsuario = novoUsuario => {
    console.log("Tentativa de cadastro:", novoUsuario, "Usuário logado:", usuarioLogado);
    const existe = usuarios.some(u => u.email === novoUsuario.email);
    if (existe) {
      Alert.alert("Erro", "Este e-mail já está cadastrado.");
      return;
    }
    if (
      novoUsuario.tipo === "jurado" &&
      usuarioLogado?.tipo !== "administrador"
    ) {
      Alert.alert(
        "Restrição",
        "Apenas administradores podem cadastrar jurados."
      );
      return;
    }
    setUsuarios([...usuarios, novoUsuario]);
    Alert.alert("Sucesso", "Cadastro realizado!");
    setTela("login");
  };

  // Usando variável para renderização condicional
  let conteudoTela;
  if (tela === "login") {
    conteudoTela = <FormLogin onLogin={logarUsuario} />;
  } else {
    conteudoTela = (
      <FormCadastro onCadastro={cadastrarUsuario} usuarioLogado={usuarioLogado} />
    );
  }

  console.log("Estado da tela:", tela);

  return (
    <View style={styles.container}>
      {conteudoTela}

      <View style={styles.botaoSwitch}>
        {tela === "login" ? (
          <Button
            title="Não tem conta? Cadastre-se"
            onPress={() => setTela("cadastro")}
          />
        ) : (
          <Button
            title="Já tem conta? Faça login"
            onPress={() => setTela("login")}
          />
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, paddingVertical: 20 },
  botaoSwitch: { marginTop: 20, paddingHorizontal: 20 },
});