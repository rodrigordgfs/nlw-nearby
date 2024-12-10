import { StyleSheet } from "react-native";
import { colors, fontFamily } from "@/styles/theme";

export const s = StyleSheet.create({
    container: {
        backgroundColor: colors.green.base,
        height: 56,
        maxHeight: 56,
        borderRadius: 10,
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "row",
        gap: 14
    },
    title: {
        color: colors.gray[100],
        fontSize: 16,
        fontFamily: fontFamily.semiBold
    }
});