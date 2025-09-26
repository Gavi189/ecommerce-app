import { View, Text, Image } from "react-native";
import { useLocalSearchParams } from "expo-router";
import { products } from "@/components/productItemList";

export default function ProductDetail() {
  const { id } = useLocalSearchParams();
  const product = products.find((p) => p.id === id);

  if (!product) {
    return (
      <View style={styles.centered}>
        <Text style={styles.notFoundText}>Produto não encontrado</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Image
        source={{ uri: product.image }}
        style={styles.image}
        resizeMode="contain"
      />
      <Text style={styles.name}>{product.name}</Text>
      <Text style={styles.price}>
        Preço:{" "}
        <Text style={styles.priceValue}>R$ {product.price.toFixed(2)}</Text>
      </Text>
    </View>
  );
}

const styles = {
  container: {
    flex: 1,
    alignItems: "center" as "center",
    justifyContent: "flex-start" as "flex-start",
    padding: 24,
    backgroundColor: "#f9f9f9",
  },
  centered: {
    flex: 1,
    alignItems: "center" as "center",
    justifyContent: "center" as "center",
    backgroundColor: "#f9f9f9",
  },
  image: {
    width: 260,
    height: 260,
    marginBottom: 28,
    borderRadius: 16,
    backgroundColor: "#fff",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.12,
    shadowRadius: 8,
    elevation: 4,
  },
  name: {
    fontSize: 26,
    fontWeight: "700" as "700",
    color: "#222",
    marginBottom: 12,
    textAlign: "center" as "center",
  },
  price: {
    fontSize: 20,
    color: "#555",
    marginTop: 8,
    marginBottom: 4,
  },
  priceValue: {
    fontWeight: "bold" as "bold",
    color: "#1e88e5",
  },
  notFoundText: {
    fontSize: 22,
    fontWeight: "600" as "600",
    color: "#d32f2f",
  },
};
