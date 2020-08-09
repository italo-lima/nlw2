import React from "react";
import { StatusBar } from "expo-status-bar";
import { AppLoading } from "expo";
import {
  Archivo_400Regular,
  Archivo_700Bold,
  Archivo_600SemiBold,
} from "@expo-google-fonts/archivo";
import { Poppins_400Regular, useFonts } from "@expo-google-fonts/poppins";

import AppStack from "./src/routes/AppStack";

export default function App() {
  let [fontsLoaded] = useFonts({
    Archivo_400Regular,
    Archivo_700Bold,
    Archivo_600SemiBold,
    Poppins_400Regular,
  });

  if (!fontsLoaded) {
    <AppLoading />;
  }
  return (
    <>
      <StatusBar style="light" />
      <AppStack />
    </>
  );
}
