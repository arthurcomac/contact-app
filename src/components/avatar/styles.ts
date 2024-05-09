import { StyleSheet } from "react-native";

import { theme } from "@/theme";

export const styles = StyleSheet.create({
  letter: {
    backgroundColor: theme.colors.white,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontFamily: theme.fontFamily.medium,
  },
})