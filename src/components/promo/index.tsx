import { View, Image } from "react-native";
import React from "react";
import { styles } from "./style";

interface PromoProps {
  urlImage: string;
}
const Promo: React.FC<PromoProps> = ({ urlImage }) => {
  return (
    <View style={styles.container}>
      <Image source={{ uri: urlImage }} style={styles.image} />
    </View>
  );
};
export default Promo;
