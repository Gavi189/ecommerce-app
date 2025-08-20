import { Text, View } from "react-native";
import React from "react";
import colors from "@/styles/colors";

export default function Wishlist() {
  return (
    <>
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: colors.gray[900],
        }}
      >
        <Text style={{ color: colors.white }}>Wishlist</Text>
      </View>
    </>
  );
}
