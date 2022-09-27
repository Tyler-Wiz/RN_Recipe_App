import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { CategoryList } from "../components/CategoryList";

export const CategoryScreen = ({ navigation, route }) => {
  const data = route.params.data;
  const title = route.params.title;

  return (
    <SafeAreaView style={styles.bottomSafeArea}>
      <View style={styles.backBooKmark}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("Tab", { screen: "home" });
          }}
        >
          <Ionicons name="chevron-back-circle" size={35} color="black" />
        </TouchableOpacity>
        <Text style={styles.title}>{title}</Text>
      </View>
      <CategoryList data={data} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  bottomSafeArea: {
    flex: 1,
    backgroundColor: "#FAFAFA",
  },
  backBooKmark: {
    marginTop: 40,
    paddingHorizontal: 25,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
  },
  title: {
    fontFamily: "Montserrat600",
    fontSize: 16,
    textTransform: "uppercase",
  },
});
