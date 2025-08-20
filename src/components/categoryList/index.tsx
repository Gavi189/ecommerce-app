import { View, Text, FlatList } from "react-native";
import CategoryItem from "../categoryItem";

const categories = [
  { id: "1", name: "Eletrônicos" },
  { id: "2", name: "Roupas" },
  { id: "3", name: "Esportes" },
];

export default function CategoryList() {
  return (
    <View>
      <Text style={{ fontSize: 20, fontWeight: "bold", marginBottom: 8 }}>
        Categorias
      </Text>
      <FlatList
        data={categories}
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <CategoryItem name={item.name} />}
      />
    </View>
  );
}
