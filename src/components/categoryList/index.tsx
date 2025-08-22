import { View, Text, FlatList } from "react-native";
import CategoryItem from "../categoryItem";

//Dados simulados das categorias "data.ts ou data.json"
const categories = [
  { id: "1", name: "Eletrônicos" },
  { id: "2", name: "Roupas" },
  { id: "3", name: "Esportes" },
  { id: "4", name: "Livros" },
  { id: "5", name: "Beleza" },
  { id: "6", name: "Casa" },
];

export default function CategoryList() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <FlatList
        data={categories} //Onde os dados são passados como array na props data
        horizontal //Para deixar a lista posição horizontal
        showsHorizontalScrollIndicator={false} //Para esconder a barra de rolagem horizontal
        keyExtractor={(item) => item.id} //Para definir uma chave única para cada item
        renderItem={({ item }) => <CategoryItem name={item.name} />} //Para renderizar cada item da lista,
        // passando o nome da categoria como prop para o componente CategoryItem
      />
    </View>
  );
}
