import { View, TextInput, Button, Alert } from "react-native";
import { useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function Cadastro() {
  const [nome, setNome] = useState("");
  const [genero, setGenero] = useState("");
  const [imagem, setImagem] = useState("");
  const [nota, setNota] = useState("");

  async function salvar() {
    if (!nome || !genero) {
      Alert.alert("Preencha nome e gênero");
      return;
    }

    const novo = { nome, genero, imagem, nota };

    try {
      const dados = await AsyncStorage.getItem("jogos");
      const lista = dados ? JSON.parse(dados) : [];

      lista.push(novo);

      await AsyncStorage.setItem("jogos", JSON.stringify(lista));

      Alert.alert("Jogo salvo!");

      setNome("");
      setGenero("");
      setImagem("");
      setNota("");
    } catch {
      Alert.alert("Erro ao salvar");
    }
  }

  return (
    <View style={{ flex: 1, padding: 20 }}>
      <TextInput
        placeholder="Nome"
        value={nome}
        onChangeText={setNome}
        style={{ borderWidth: 1, marginBottom: 10, padding: 10 }}
      />

      <TextInput
        placeholder="Gênero"
        value={genero}
        onChangeText={setGenero}
        style={{ borderWidth: 1, marginBottom: 10, padding: 10 }}
      />

      <TextInput
        placeholder="URL da imagem"
        value={imagem}
        onChangeText={setImagem}
        style={{ borderWidth: 1, marginBottom: 10, padding: 10 }}
      />

      <TextInput
        placeholder="Nota"
        value={nota}
        onChangeText={setNota}
        keyboardType="numeric"
        style={{ borderWidth: 1, marginBottom: 10, padding: 10 }}
      />

      <Button title="Salvar" onPress={salvar} />
    </View>
  );
}