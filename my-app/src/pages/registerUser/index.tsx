import React, { useState } from "react";
import {
  Text,
  View,
  Alert,
  TextInput,
  TouchableOpacity,
  ActivityIndicator,
  ScrollView,
} from "react-native";
import { useNavigation, NavigationProp } from "@react-navigation/native";
import { MaterialIcons } from "@expo/vector-icons";
import { style } from "./styles";

export default function RegisterUser() {
  const navigation = useNavigation<NavigationProp<any>>();

  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [confirmarSenha, setConfirmarSenha] = useState("");
  const [telefone, setTelefone] = useState("");
  const [universidade, setUniversidade] = useState("");
  const [anoIngresso, setAnoIngresso] = useState("");
  const [loading, setLoading] = useState(false);

  // -------- Validações --------
  const validateEmail = (email: string) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const formatTelefone = (value: string) => {
    const numbers = value.replace(/\D/g, "");
    if (numbers.length <= 10) {
      return numbers.replace(/(\d{2})(\d{4})(\d{0,4})/, "($1) $2-$3");
    }
    return numbers.replace(/(\d{2})(\d{5})(\d{0,4})/, "($1) $2-$3");
  };

  async function handleRegister() {
  if (!nome || !email || !senha || !confirmarSenha || !telefone || !universidade || !anoIngresso) {
    return Alert.alert("Atenção", "Preencha todos os campos obrigatórios!");
  }

  if (!validateEmail(email)) {
    return Alert.alert("Atenção", "Por favor, insira um email válido!");
  }

  if (senha !== confirmarSenha) {
    return Alert.alert("Atenção", "As senhas não coincidem!");
  }

  try {
    setLoading(true);

    // Aqui vai futuramente a chamada da API
    // await api.post("/auth/register", { ... })

    Alert.alert(
      "Sucesso",
      "Usuário cadastrado com sucesso!",
      [
        {
          text: "OK",
          onPress: () => navigation.navigate("Register"), 
        },
      ]
    );

  } catch (error) {
    Alert.alert("Erro", "Falha ao cadastrar usuário!");
  } finally {
    setLoading(false);
  }
}

  return (
    <ScrollView contentContainerStyle={style.container}>
      <Text style={style.subtitle}>Primeiros passos</Text>
      <Text style={style.titleScreen}>Crie sua conta</Text>

      <Text style={style.sectionTitle}>Escolha uma foto:</Text>

      <View style={style.iconContainer}>
        <MaterialIcons name="person" size={42} color="#ffffff" />
      </View>

      <Text style={style.sectionTitle}>Informe os dados necessários:</Text>

      <View style={style.card}>

        <View style={style.inputContainer}>
          <TextInput
            style={style.input}
            placeholder="Nome completo"
            value={nome}
            onChangeText={setNome}
          />
        </View>

        <View style={style.inputContainer}>
          <TextInput
            style={style.input}
            placeholder="Email"
            value={email}
            onChangeText={setEmail}
            autoCapitalize="none"
          />
        </View>

        <View style={style.inputContainer}>
          <TextInput
            style={style.input}
            placeholder="Telefone"
            value={formatTelefone(telefone)}
            onChangeText={(text) => setTelefone(text.replace(/\D/g, ""))}
            keyboardType="numeric"
            maxLength={15}
          />
        </View>

        <View style={style.inputContainer}>
          <TextInput
            style={style.input}
            placeholder="Universidade"
            value={universidade}
            onChangeText={setUniversidade}
          />
        </View>

        <View style={style.inputContainer}>
          <TextInput
            style={style.input}
            placeholder="Ano de ingresso"
            value={anoIngresso}
            onChangeText={setAnoIngresso}
            keyboardType="numeric"
          />
        </View>

        <View style={style.inputContainer}>
          <TextInput
            style={style.input}
            placeholder="Senha"
            value={senha}
            onChangeText={setSenha}
            secureTextEntry
          />
        </View>

        <View style={style.inputContainer}>
          <TextInput
            style={style.input}
            placeholder="Confirmar senha"
            value={confirmarSenha}
            onChangeText={setConfirmarSenha}
            secureTextEntry
          />
        </View>

        <TouchableOpacity style={style.button} onPress={handleRegister}>
          {loading ? (
            <ActivityIndicator color="#FFF" />
          ) : (
            <Text style={style.buttonText}>Cadastrar</Text>
          )}
        </TouchableOpacity>
      </View>

      <Text style={style.footerText}>
        Já tem conta?{" "}
        <Text
          style={style.link}
          onPress={() => navigation.navigate("Login")}
        >
          Faça login
        </Text>
      </Text>
    </ScrollView>
  );
}
