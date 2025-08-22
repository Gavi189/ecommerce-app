import { Text, View, Image, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";

type ProductCardProps = {
  image: string;
  title: string;
  price: number;
  onPress?: () => void;
};

export default function ProductCard({
  image,
  title,
  price,
  onPress,
}: ProductCardProps) {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Image source={{ uri: image }} style={styles.image} resizeMode="cover" />
      <View style={styles.info}>
        <Text style={styles.title} numberOfLines={2}>
          {title}
        </Text>
        <Text style={styles.price}>R$ {price.toFixed(2)}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    borderRadius: 8,
    elevation: 2,
    margin: 8,
    overflow: "hidden",
  },
  image: {
    width: "100%",
    height: 150,
  },
  info: {
    padding: 12,
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 6,
    color: "#333",
  },
  price: {
    fontSize: 15,
    color: "#009966",
    fontWeight: "600",
  },
});
