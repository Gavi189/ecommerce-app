import { FlatList } from "react-native";
import React, { useEffect, useState } from "react";
import ProductCard from "../ProductCard";
import { useRouter } from "expo-router";
import ProductService from "@/models/services/ProductService";
import { Product } from "@/models/types/Product";

export default function ProductList() {
  const router = useRouter();

  const [data, setData] = useState<Product[]>([]);
  const _service = new ProductService();

  //useEffect para carregar os produtos ao
  // montar o componente
  useEffect(() => {
    _service.getAll().then((response) => {
      setData(response);
      console.log(response);
    });
  }, []);

  return (
    <FlatList
      data={data}
      showsHorizontalScrollIndicator={false}
      keyExtractor={(item) => item.id_produto.toString()}
      renderItem={({ item }) => (
        <ProductCard
          image={item.imagem}
          title={item.produto}
          price={item.id_produto}
          onPress={() =>
            router.push({
              //push = Direciona
              pathname: "/productDetail/[id]", //Para onde? nome da rota
              params: { id: item.id_produto }, //O que levar? id
            })
          }
        />
      )}
    />
  );
}
