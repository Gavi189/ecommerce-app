import { Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { styles } from "./style";
import { useRouter } from "expo-router";
interface CategoryItemProps {
  name: string;
}
const CategoryItem: React.FC<CategoryItemProps> = ({ name }) => {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.categoryItem}
        onPress={() => router.push("/category/index")}
      >
        <Text>{name}</Text>
      </TouchableOpacity>
    </View>
  );
};
export default CategoryItem;
