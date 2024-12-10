import {
  View,
  Text,
  TextProps,
  TouchableOpacity,
  TouchableOpacityProps,
  ActivityIndicator,
} from "react-native";
import React from "react";
import { s } from "./styles";
import { colors } from "@/styles/theme";
import { IconProps as TablerIconProps } from "@tabler/icons-react-native";

type ButonProps = TouchableOpacityProps & {
  loading?: boolean;
};

function Button({ children, style, loading = false, ...props }: ButonProps) {
  return (
    <TouchableOpacity
      style={[s.container, style]}
      disabled={loading}
      {...props}
    >
      {loading ? (
        <ActivityIndicator color={colors.gray[100]} size="small" />
      ) : (
        children
      )}
    </TouchableOpacity>
  );
}

type IconProps = TablerIconProps & {
  icon: React.ComponentType<TablerIconProps>;
};

function Icon({ icon: Icon }: IconProps) {
  return <Icon size={24} color={colors.gray[100]} />;
}

function Title({ children }: TextProps) {
  return <Text style={s.title}>{children}</Text>;
}

Button.Title = Title;
Button.Icon = Icon;

export { Button, Title };
