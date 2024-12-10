import { View, Text } from "react-native";
import React from "react";
import { Image } from "react-native";
import { s } from "./styles";

export default function Welcome() {
  return (
    <View>
      <Image source={require("@/assets/logo.png")} style={s.logo} />
      <Text style={s.title}>Boas Vindas ao Nearby!</Text>
      <Text style={s.subtitle}>
        Tenha cupons de vantagem para usar em {"\n"}
        seus estabelecimentos favoritos.
      </Text>
    </View>
  );
}
