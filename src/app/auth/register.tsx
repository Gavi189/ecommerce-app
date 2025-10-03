import { useState } from "react";
import { View, Text, TextInput, Button, StyleSheet, Alert } from "react-native";
import { useRouter } from "expo-router";
import ClientService from "@/models/services/ClientService";
import { Client } from "@/models/types/Client";

const clientService = new ClientService();

export default function Register() {
  const router = useRouter();
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  const handleRegister = async () => {
    try {
      const novoCliente: Client = {
        nome,
        email,
        senha,
      };

      await clientService.create(novoCliente);
      console.log("Sucesso", "Cadastro realizado com sucesso!");
      router.replace("/auth/login");
    } catch (error) {
      console.log("Erro", "Não foi possível cadastrar");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Cadastro</Text>

      <TextInput
        style={styles.input}
        placeholder="Nome"
        value={nome}
        onChangeText={setNome}
      />

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

      <Button title="Cadastrar" onPress={handleRegister} />

      <Text style={styles.link} onPress={() => router.push("/auth/login")}>
        Já tem conta? Faça login
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
