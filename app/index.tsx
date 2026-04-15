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

  // 🔥 RESPONSIVO (define colunas)
  const numColumns = width < 600 ? 1 : width < 900 ? 2 : 3;

  async function carregar() {
    try {
      const dados = await AsyncStorage.getItem("jogos");
      setJogos(dados ? JSON.parse(dados) : []);
    } catch (error) {
      console.log(error);
      setJogos([]);
    }
  }

  async function remover(index: number) {
    const novaLista = jogos.filter((_, i) => i !== index);
    setJogos(novaLista);
    await AsyncStorage.setItem("jogos", JSON.stringify(novaLista));
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
        keyExtractor={(item, index) => index.toString()}
        numColumns={numColumns}
        contentContainerStyle={{ padding: 10 }}
        columnWrapperStyle={
          numColumns > 1
            ? { justifyContent: "space-between" }
            : undefined
        }
        showsVerticalScrollIndicator={false}

        ListEmptyComponent={() => (
          <Text
            style={{
              color: "#fff",
              textAlign: "center",
              marginTop: 50,
            }}
          >
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
            {/* IMAGEM RESPONSIVA */}
            <Image
              source={{
                uri:
                  item?.imagem &&
                  item.imagem.startsWith("http")
                    ? item.imagem
                    : "https://via.placeholder.com/300",
              }}
              style={{
                width: "100%",
                aspectRatio: 16 / 9, // 🔥 mantém proporção perfeita
              }}
              resizeMode="cover"
            />

            {/* INFO */}
            <View style={{ padding: 12 }}>
              <Text
                style={{
                  color: "#fff",
                  fontSize: 16,
                  fontWeight: "bold",
                }}
              >
                {item?.nome || "Sem nome"}
              </Text>

              <Text style={{ color: "#aaa", marginTop: 5 }}>
                🎮 {item?.genero || "Sem gênero"}
              </Text>

              <Text style={{ color: "#ffd700", marginTop: 5 }}>
                ⭐ Nota: {item?.nota || "0"}
              </Text>

              {/* BOTÃO */}
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