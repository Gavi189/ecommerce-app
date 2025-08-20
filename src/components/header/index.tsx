import { Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { Feather } from "@expo/vector-icons";
import { styles } from "./style";
import { DrawerActions, useNavigation } from "@react-navigation/native";

export default function Header() {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => {
          navigation.dispatch(DrawerActions.toggleDrawer());
        }}
      >
        <Feather name="menu" style={styles.icon} />
      </TouchableOpacity>
      <Text style={styles.title}>Logotipo</Text>
      <Feather name="shopping-cart" style={styles.icon} />
    </View>
  );
}
