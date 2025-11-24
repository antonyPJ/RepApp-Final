import React, { useState } from "react";
import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import { MaterialIcons, FontAwesome } from "@expo/vector-icons";
// 1. Importe o SafeAreaView aqui
import { SafeAreaView } from "react-native-safe-area-context";

export default function Settings() {

  // Estados para cada permissão do MEMBRO
  const [permissions, setPermissions] = useState([
    true,   // Criar/Participar de Eventos
    true,   // Visualizar Tarefas/Despesas
    true,   // Enviar mensagens/comentários
    false,  // Cadastrar/Editar Membros da República
    false,  // Editar/Excluir a República
    false,  // Gerenciar Finanças Gerais
    false,  // Gerenciar Permissões
    false,  // Aprovar/Excluir Eventos Criados por Outros
    false,  // Editar Dados Principais da República
  ]);

  // Alterna o valor da permissão do membro
  const togglePermission = (index) => {
    const updated = [...permissions];
    updated[index] = !updated[index];
    setPermissions(updated);
  };

  const rows = [
    "Criar/Participar de Eventos",
    "Visualizar Tarefas/Despesas",
    "Enviar mensagens/comentários",
    "Cadastrar/Editar Membros da República",
    "Editar/Excluir a República",
    "Gerenciar Finanças Gerais",
    "Gerenciar Permissões",
    "Aprovar/Excluir Eventos Criados por Outros",
    "Editar Dados Principais da República",
  ];

  return (
    // 2. Substitua a View ou envolva o ScrollView com SafeAreaView
    // Defina edges={['top', 'bottom']} para garantir proteção em cima e embaixo
    <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
      
      <ScrollView style={{ flex: 1, backgroundColor: "#F5F7FA" }}>

        {/* Header */}
        <View
          style={{
            backgroundColor: "#fff",
            padding: 16,
            borderBottomWidth: 1,
            borderColor: "#DCE3ED",
          }}
        >
          <Text style={{ color: "#4A90E2", fontSize: 14, marginBottom: 8 }}>
            Configurações de Acesso
          </Text>
          <Text style={{ fontSize: 22, fontWeight: "bold", color: "#2C2C2C" }}>
            Permissões e Funções
          </Text>
          <Text style={{ fontSize: 14, color: "#444", marginTop: 4 }}>
            Defina o que cada tipo de usuário pode visualizar e gerenciar no app
          </Text>
        </View>

        {/* Tabela */}
        <View
          style={{
            backgroundColor: "#fff",
            margin: 16,
            borderRadius: 12,
            padding: 16,
            borderWidth: 1,
            borderColor: "#D3D3D3",
          }}
        >
          {/* Cabeçalho da tabela */}
          <View
            style={{
              flexDirection: "row",
              paddingBottom: 12,
              borderBottomWidth: 1,
              borderColor: "#CCC",
            }}
          >
            <Text style={{ flex: 1, fontWeight: "bold" }}>
              Funções realizáveis no App
            </Text>

            <View style={{ width: 90, alignItems: "center" }}>
              <MaterialIcons name="verified-user" size={22} color="#1A73E8" />
              <Text>Administrador</Text>
            </View>

            <View style={{ width: 90, alignItems: "center" }}>
              <FontAwesome name="user" size={22} color="#000" />
              <Text>Membro</Text>
            </View>
          </View>

          {/* Linhas */}
          {rows.map((item, index) => (
            <View
              key={index}
              style={{
                flexDirection: "row",
                paddingVertical: 12,
                borderBottomWidth: index === rows.length - 1 ? 0 : 1,
                borderColor: "#EEE",
              }}
            >
              {/* Nome da regra */}
              <Text style={{ flex: 1 }}>{item}</Text>

              {/* Admin (sempre verde) */}
              <View style={{ width: 90, alignItems: "center" }}>
                <MaterialIcons
                  name="check-circle"
                  size={22}
                  color="#4CAF50"
                />
              </View>

              {/* Membro (clicável — alterna) */}
              <TouchableOpacity
                onPress={() => togglePermission(index)}
                style={{ width: 90, alignItems: "center" }}
              >
                <MaterialIcons
                  name={permissions[index] ? "check-circle" : "cancel"}
                  size={22}
                  color={permissions[index] ? "#4CAF50" : "#E53935"}
                />
              </TouchableOpacity>
            </View>
          ))}
        </View>

        {/* Botões */}
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            paddingHorizontal: 16,
            marginBottom: 40,
          }}
        >
          <TouchableOpacity
            style={{
              backgroundColor: "#E5E5E5",
              padding: 14,
              flex: 1,
              borderRadius: 8,
              marginRight: 12,
              alignItems: "center",
            }}
          >
            <Text style={{ fontWeight: "600" }}>Cancelar</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={{
              backgroundColor: "#1A73E8",
              padding: 14,
              flex: 1,
              borderRadius: 8,
              alignItems: "center",
            }}
          >
            <Text style={{ fontWeight: "600", color: "#fff" }}>
              Salvar Alterações
            </Text>
          </TouchableOpacity>
        </View>

        {/* Rodapé */}
        <Text
          style={{
            textAlign: "center",
            color: "#888",
            marginBottom: 20,
          }}
        >
          © RepApp - v1.0 {"\n"}2025 - Todos os Direitos Reservados
        </Text>
      </ScrollView>
    </SafeAreaView>
  );
}