import { StatusBar } from "react-native";

import { GluestackUIProvider, Text, View, Center } from "@gluestack-ui/themed";
import { config } from "./config/gluestack-ui.config";

import {
  useFonts,
  Roboto_400Regular,
  Roboto_700Bold,
} from "@expo-google-fonts/roboto";

import Loading from "@components/Loading";
import { Routes } from "@routes/index.routes";

export default function App() {
  /* Carregando as fontes */
  const [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_700Bold,
  });

  return (
    <GluestackUIProvider config={config}>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />

      {fontsLoaded ? <Routes /> : <Loading />}
    </GluestackUIProvider>
  );
}
