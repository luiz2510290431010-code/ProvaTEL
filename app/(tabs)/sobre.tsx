import { View, Text, Image, ScrollView } from "react-native";

export default function Sobre() {
  return (
    <ScrollView style={{ flex: 1, backgroundColor: "#0f0f0f" }}>
      <Image
        source={{
          uri: "https://cdn.cloudflare.steamstatic.com/steam/apps/220240/header.jpg",
        }}
        style={{ width: "100%", aspectRatio: 16 / 9 }}
      />

      <View style={{ padding: 20 }}>
        <Text style={{ color: "#fff", fontSize: 22, fontWeight: "bold" }}>
          🎮 Catálogo de Jogos
        </Text>

        <Text style={{ color: "#ccc", marginTop: 10 }}>
          Aplicativo para organizar seus jogos favoritos de forma moderna.
        </Text>

        <Text style={{ color: "#fff", marginTop: 20, fontWeight: "bold" }}>
          Funcionalidades:
        </Text>

        <Text style={{ color: "#aaa", marginTop: 10 }}>
          • Cadastro de jogos{"\n"}
          • Catálogo responsivo{"\n"}
          • Imagens{"\n"}
          • Sistema de notas{"\n"}
          • Remoção de jogos
        </Text>

        <Text style={{ color: "#fff", marginTop: 20 }}>
          Desenvolvido por você 🚀
        </Text>
      </View>
    </ScrollView>
  );
}