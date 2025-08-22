import { Text, View, Image, StyleSheet } from "react-native";
import React from "react";

type ProductItemProps = {
  image: string;
  name: string;
  price: number;
  onPress?: () => void;
};

export default function ProductItem({
  image,
  name,
  price,
  onPress,
}: ProductItemProps) {
  return (
    <View style={styles.item}>
      <Image source={{ uri: image }} style={styles.image} />
      <View style={styles.info}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.price}>R$ {price.toFixed(2)}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  item: {
    flexDirection: "row",
    padding: 12,
    borderBottomWidth: 1,
    borderColor: "#eee",
    alignItems: "center",
  },
  image: {
    width: 64,
    height: 64,
    marginRight: 12,
    borderRadius: 8,
    backgroundColor: "#f0f0f0",
  },
  info: {
    flex: 1,
  },
  name: {
    fontSize: 16,
    color: "#f0f0f0",

    fontWeight: "bold",
  },
  price: {
    marginTop: 4,
    color: "#888",
  },
});
