import { Text, View } from "react-native";
import React from "react";
import colors from "../styles/colors";
import Header from "@/components/header";

export default function Profile() {
  return (
    <>
      <Header />
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: colors.gray[900],
        }}
      >
        <Text style={{ color: colors.white }}>Profile</Text>
      </View>
    </>
  );
}
