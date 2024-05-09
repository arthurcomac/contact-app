import { View, ViewProps, TextInput, TextInputProps, } from "react-native";

import { styles } from "./styles";

import { theme } from "@/theme";

function Imput({children, style}: ViewProps){
  return(
    <View style={[styles.container, style]}>
      {children}
    </View>
  )
}

function Field({ ...rest }: TextInputProps){
  return(
    <TextInput
    style={styles.input}
      placeholderTextColor={theme.colors.gray_300}
      { ...rest }
    />
  )
}

Imput.Field = Field;

export { Imput }