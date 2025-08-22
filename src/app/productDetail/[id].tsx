import { View, Text, Image } from "react-native";
import { useLocalSearchParams } from "expo-router";
import { products } from "@/components/productItemList";

export default function ProductDetail() {
  const { id } = useLocalSearchParams();
  const product = products.find((p) => p.id === id);

  if (!product) {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text style={{ fontSize: 22, fontWeight: "600" }}>
          Produto não encontrado
        </Text>
      </View>
    );
  }

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Image
        source={{ uri: product.image }}
        style={{ width: 200, height: 200, marginBottom: 20 }}
        resizeMode="contain"
      />
      <Text style={{ fontSize: 22, fontWeight: "600" }}>{product.name}</Text>
      <Text style={{ fontSize: 18, marginTop: 10 }}>
        Preço: R$ {product.price.toFixed(2)}
      </Text>
    </View>
  );
}
