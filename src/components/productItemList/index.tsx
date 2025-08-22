import { FlatList } from "react-native";
import React from "react";
import ProductItem from "../productItem";

type Product = {
  id: string;
  name: string;
  price: number;
  image: string;
};

export const products: Product[] = [
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

export default function ProductItemList() {
  return (
    <FlatList
      data={products}
      showsHorizontalScrollIndicator={false}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <ProductItem image={item.image} name={item.name} price={item.price} />
      )}
    />
  );
}
