import { useState } from "react";
import { View, Text, TextInput, Button, StyleSheet, Alert } from "react-native";
import { useRouter } from "expo-router";
import ClientService from "@/models/services/ClientService";
import { createHash } from "crypto";

const clientService = new ClientService();

export default function Login() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  const handleLogin = async () => {
    try {
      const _clientes = await clientService.getAll();

      const _usuario = _clientes.find(
        (c) => c.email === email && c.senha === senha
      );

      if (_usuario) {
        console.log(" Login realizado!", `Bem-vindo, ${_usuario.nome}`);
        router.replace("/(tabs)");
      } else {
        console.log(" Erro", "Email ou senha inválidos");
      }
    } catch (error) {
      console.log("Erro", "Não foi possível fazer login");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>

      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
      />

      <TextInput
        style={styles.input}
        placeholder="Senha"
        secureTextEntry
        value={senha}
        onChangeText={setSenha}
      />

      <Button title="Entrar" onPress={handleLogin} />

      <Text style={styles.link} onPress={() => router.push("/auth/register")}>
        Não tem conta? Cadastre-se
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", padding: 20 },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 10,
    marginBottom: 12,
    borderRadius: 5,
  },
  link: { marginTop: 15, color: "blue", textAlign: "center" },
});
