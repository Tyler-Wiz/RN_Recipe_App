import { StyleSheet, Text, View, SafeAreaView, ScrollView } from "react-native";
import React from "react";
import { TrendingRecipe } from "../components/TrendingRecipe";
import { SearchInput } from "../ui/SearchInput";
import { Under30 } from "../components/Under30";
import { Categories } from "../components/Categories";
import { GlobalStyles } from "../constants/styles";

export const HomeScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.bottomSafeArea}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.container}>
          <Text style={styles.greeting}>Hello,</Text>
          <Text style={styles.description}>
            What Would You Like to Cook today?
          </Text>
          <SearchInput
            placeholder="Search Recipe"
            onPressIn={() => {
              navigation.navigate("search");
            }}
          />
          <TrendingRecipe />
          <Under30 />
          <Categories />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  bottomSafeArea: {
    flex: 1,
    backgroundColor: "#FAFAFA",
  },
  container: {
    padding: 15,
    marginTop: 30,
    flex: 1,
  },
  greeting: {
    fontFamily: "Montserrat600",
    fontSize: 19,
    marginVertical: 5,
    color: GlobalStyles.colors.primary,
  },
  description: {
    fontFamily: "Montserrat300",
    fontSize: 12,
  },
});
