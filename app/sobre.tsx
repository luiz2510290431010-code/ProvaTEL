import {
  View,
  Text,
  Image,
  ScrollView,
  StyleSheet,
  useWindowDimensions,
} from "react-native";

export default function Sobre() {
  const { width } = useWindowDimensions();

  return (
    <ScrollView style={styles.container}>

      {/* HERO (TIPO NETFLIX) */}
      <View style={styles.hero}>
        <Image
          source={{
            uri: "https://cdn.cloudflare.steamstatic.com/steam/apps/1174180/header.jpg",
          }}
          style={styles.heroImage}
        />

        {/* overlay gradiente fake */}
        <View style={styles.overlayTop} />
        <View style={styles.overlayBottom} />

        <View style={styles.heroContent}>
          <Text style={styles.title}>🎮 Game Catalog</Text>
          <Text style={styles.subtitle}>
            Explore, organize e domine sua coleção de jogos
          </Text>
        </View>
      </View>

      {/* CONTEÚDO */}
      <View style={styles.content}>

        {/* SOBRE */}
        <Text style={styles.sectionTitle}>Sobre</Text>
        <Text style={styles.text}>
          Um aplicativo moderno inspirado nas maiores plataformas do mundo,
          projetado para oferecer uma experiência fluida, bonita e eficiente.
        </Text>

        {/* CARDS DE FUNCIONALIDADE */}
        <Text style={styles.sectionTitle}>Funcionalidades</Text>

        <View style={styles.grid}>
          {[
            "🎮 Cadastro",
            "🖼️ Imagens",
            "⭐ Notas",
            "📱 Responsivo",
            "🗑️ Remover",
            "⚡ Rápido",
          ].map((item, i) => (
            <View key={i} style={styles.card}>
              <Text style={styles.cardText}>{item}</Text>
            </View>
          ))}
        </View>

        {/* DESTAQUE */}
        <Text style={styles.sectionTitle}>Experiência</Text>
        <Text style={styles.text}>
          Interface inspirada em Netflix e Steam, com navegação intuitiva,
          design moderno e performance otimizada para qualquer dispositivo.
        </Text>

        {/* FOOTER */}
        <View style={styles.footer}>
          <Text style={styles.footerText}>🚀 Desenvolvido Teles</Text>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0a0a0a",
  },

  hero: {
    position: "relative",
  },

  heroImage: {
    width: "100%",
    height: 250,
  },

  overlayTop: {
    position: "absolute",
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0,0,0,0.3)",
  },

  overlayBottom: {
    position: "absolute",
    bottom: 0,
    width: "100%",
    height: 120,
    backgroundColor: "#0a0a0a",
  },

  heroContent: {
    position: "absolute",
    bottom: 20,
    left: 20,
  },

  title: {
    color: "#fff",
    fontSize: 28,
    fontWeight: "bold",
  },

  subtitle: {
    color: "#ccc",
    marginTop: 5,
  },

  content: {
    padding: 20,
  },

  sectionTitle: {
    color: "#00ff99",
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 25,
    marginBottom: 10,
  },

  text: {
    color: "#bbb",
    lineHeight: 22,
  },

  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },

  card: {
    backgroundColor: "#141414",
    width: "48%",
    padding: 15,
    borderRadius: 12,
    marginBottom: 10,
  },

  cardText: {
    color: "#fff",
    fontWeight: "500",
  },

  footer: {
    marginTop: 40,
    alignItems: "center",
  },

  footerText: {
    color: "#666",
  },
});
