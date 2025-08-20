import { Text, View } from "react-native";
import React from "react";
import { styles } from "./style";

interface TitleProps {
  word: string;
}

const Title: React.FC<TitleProps> = ({ word }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{word}</Text>
    </View>
  );
};

export default Title;
