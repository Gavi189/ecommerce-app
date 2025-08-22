import { FlatList } from "react-native";
import React from "react";
import ProductCard from "../ProductCard";
import { useRouter } from "expo-router";

type Product = {
  id: string;
  name: string;
  price: number;
  image: string;
};

const products: Product[] = [
  {
    id: "1",
    name: "Tênis Esportivo",
    price: 199.99,
    image:
      "https://m.media-amazon.com/images/I/41Zbbl4P+LL._UF1000,1000_QL80_.jpg",
  },
  {
    id: "2",
    name: "Camisa Polo",
    price: 89.99,
    image:
      "https://m.media-amazon.com/images/I/41Zbbl4P+LL._UF1000,1000_QL80_.jpg",
  },
  {
    id: "3",
    name: "Relógio Digital",
    price: 299.99,
    image:
      "https://m.media-amazon.com/images/I/41Zbbl4P+LL._UF1000,1000_QL80_.jpg",
  },
];

export default function ProductList() {
  const router = useRouter();

  return (
    <FlatList
      data={products}
      horizontal //Para deixar a lista posição horizontal
      showsHorizontalScrollIndicator={false}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <ProductCard
          image={item.image}
          title={item.name}
          price={item.price}
          onPress={() =>
            router.push({
              pathname: "/productDetail/[id]",
              params: { id: item.id },
            })
          }
        />
      )}
    />
  );
}
