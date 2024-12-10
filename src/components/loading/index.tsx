import { ActivityIndicator } from "react-native";
import { s } from "./styles";
import { colors } from "@/styles/theme";

const Loading = () => {
  return <ActivityIndicator color={colors.green.base} style={s.container} />;
};
s
export default Loading;
