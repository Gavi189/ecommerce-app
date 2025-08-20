import colors from "@/styles/colors";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginBottom: 375,
  },
  image: {
    width: 350,
    height: 150,
    resizeMode: "cover",
    borderRadius: 8,
    borderWidth: 1,
    borderColor: colors.gray[700],
  },
});
