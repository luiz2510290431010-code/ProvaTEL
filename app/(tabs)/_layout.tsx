import { Tabs } from "expo-router";

export default function Layout() {
  return (
    <Tabs>
      <Tabs.Screen name="index" options={{ title: "Home" }} />
      <Tabs.Screen name="cadastro" options={{ title: "Cadastro" }} />
      <Tabs.Screen name="sobre" options={{ title: "Sobre" }} />
    </Tabs>
  );
}