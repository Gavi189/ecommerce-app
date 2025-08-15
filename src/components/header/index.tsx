import { Text, View } from "react-native";
import React from "react";
import { Feather } from "@expo/vector-icons";
import { styles } from "./style";

export default function Header() {
  return (
    <View style={styles.container}>
      <Feather name="menu" style={styles.icon} />
      <Text style={styles.title}>Logotipo</Text>
      <Feather name="shopping-cart" style={styles.icon} />
    </View>
  );
}
