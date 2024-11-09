import { StatusBar } from "expo-status-bar";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import { Home } from "./screens/Home";
import { Details } from "./screens/Details";
import { NavigationContainer } from "@react-navigation/native";
import { Routes } from "./routers";

export default function App() {
  return (
    <NavigationContainer>
      <Routes />
    </NavigationContainer>
  );
}
