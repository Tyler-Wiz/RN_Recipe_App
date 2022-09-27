import { StyleSheet, Text, View, TextInput } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { GlobalStyles } from "../constants/styles";

export const SearchInput = ({
  placeholder,
  keyboardType,
  value,
  onUpdateValue,
  label,
  onPressIn,
}) => {
  return (
    <View>
      <View style={styles.wrapper}>
        <Ionicons name="search-outline" size={26} style={styles.icon} />
        <TextInput
          placeholder={placeholder}
          keyboardType={keyboardType}
          style={styles.input}
          onChangeText={onUpdateValue}
          value={value}
          onPressIn={onPressIn}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: "row",
    justifyContent: "center",
    alignContent: "center",
    padding: 10,
    marginVertical: 10,
  },
  input: {
    paddingVertical: 13,
    paddingHorizontal: 45,
    borderColor: GlobalStyles.colors.primaryGreyExtra,
    borderWidth: 1,
    borderRadius: 8,
    fontSize: 14,
    fontFamily: "Montserrat500",
    color: GlobalStyles.colors.primaryText,
    flex: 1,
    justifyContent: "center",
    alignContent: "center",
  },
  icon: {
    position: "absolute",
    top: 21,
    left: 20,
  },
});
