import {
  View,
  Text,
  FlatList,
  Image,
  TouchableOpacity,
  useWindowDimensions,
} from "react-native";
import { useState, useCallback } from "react";
import { useFocusEffect } from "expo-router";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function Home() {
  const [jogos, setJogos] = useState([]);
  const { width } = useWindowDimensions();

  const numColumns = width < 600 ? 1 : width < 900 ? 2 : 3;

  async function carregar() {
    const dados = await AsyncStorage.getItem("jogos");
    setJogos(dados ? JSON.parse(dados) : []);
  }

  async function remover(index) {
    const nova = jogos.filter((_, i) => i !== index);
    setJogos(nova);
    await AsyncStorage.setItem("jogos", JSON.stringify(nova));
  }

  useFocusEffect(
    useCallback(() => {
      carregar();
    }, [])
  );

  return (
    <View style={{ flex: 1, backgroundColor: "#0f0f0f" }}>
      <FlatList
        data={jogos}
        keyExtractor={(_, i) => i.toString()}
        numColumns={numColumns}
        contentContainerStyle={{ padding: 10 }}
        columnWrapperStyle={
          numColumns > 1 ? { justifyContent: "space-between" } : undefined
        }
        ListEmptyComponent={() => (
          <Text style={{ color: "#fff", textAlign: "center", marginTop: 50 }}>
            Nenhum jogo cadastrado 🎮
          </Text>
        )}
        renderItem={({ item, index }) => (
          <View
            style={{
              backgroundColor: "#1c1c1c",
              borderRadius: 15,
              marginBottom: 15,
              flex: 1,
              marginHorizontal: 5,
              overflow: "hidden",
            }}
          >
            <Image
              source={{
                uri:
                  item?.imagem?.startsWith("http")
                    ? item.imagem
                    : "https://via.placeholder.com/300",
              }}
              style={{ width: "100%", aspectRatio: 16 / 9 }}
              resizeMode="cover"
            />

            <View style={{ padding: 12 }}>
              <Text style={{ color: "#fff", fontWeight: "bold" }}>
                {item?.nome}
              </Text>

              <Text style={{ color: "#aaa" }}>🎮 {item?.genero}</Text>

              <Text style={{ color: "#ffd700" }}>
                ⭐ Nota: {item?.nota || "0"}
              </Text>

              <TouchableOpacity
                onPress={() => remover(index)}
                style={{
                  marginTop: 10,
                  backgroundColor: "#ff3b3b",
                  padding: 8,
                  borderRadius: 8,
                  alignItems: "center",
                }}
              >
                <Text style={{ color: "#fff" }}>Remover</Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
      />
    </View>
  );
}