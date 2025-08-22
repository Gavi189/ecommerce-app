import { ScrollView, View } from "react-native";
import React from "react";
import colors from "@/styles/colors";
import Title from "@/components/title";
import Promo from "@/components/promo";
import CategoryList from "@/components/categoryList";
import ProductList from "@/components/productList";
import ProductItemList from "@/components/productItemList";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: colors.gray[900],
        paddingHorizontal: 20,
      }}
    >
      {/* import react-native */}
      <ScrollView>
        <Title word={"Título"} />
        <Promo urlImage="https://img.freepik.com/vetores-premium/101_54768-455.jpg?semt=ais_hybrid&w=740&q=80" />
        <CategoryList />
        <Title word={"Promoções"} />
        <ProductList />
        <Title word={"Produtos"} />
        <ProductItemList />
      </ScrollView>
    </View>
  );
}
