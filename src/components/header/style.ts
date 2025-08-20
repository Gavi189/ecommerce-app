import { StyleSheet } from "react-native";
import colors from "../../styles/colors";

//Style Sheet for Header component
export const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    paddingTop: 50,
    padding: 10,
    backgroundColor: colors.gray[800],
    justifyContent: "space-between",
    borderWidth: 0.6,
    borderBottomColor: colors.gray[400],
  },
  icon: {
    color: colors.white,
    fontSize: 25,
    padding: 5,
    //borderRadius: 50,
    //borderWidth: 1,
    //borderColor: colors.gray[100],
    //backgroundColor: colors.white,
  },
  title: {
    color: colors.white,
    fontSize: 18,
  },
});
