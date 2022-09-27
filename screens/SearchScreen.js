import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ActivityIndicator,
} from "react-native";
import React, { useState } from "react";
import { SearchInput } from "../ui/SearchInput";
import { TrendingData } from "../firebase/trending-config";
import { CategoryList } from "../components/CategoryList";

export const SearchScreen = () => {
  const [allRecipes, isLoading, trending] = TrendingData();
  const [filterData, setFilterData] = useState([]);

  const searchSubject = (text) => {
    setFilterData(
      allRecipes.filter((recipe) =>
        recipe[0].name.toLowerCase().includes(text.toLowerCase())
      )
    );
  };

  return (
    <SafeAreaView style={styles.bottomSafeArea}>
      <View style={styles.container}>
        <Text style={styles.header}>Search Meals</Text>
        <SearchInput
          onUpdateValue={(text) => {
            searchSubject(text);
          }}
        />
      </View>
      <ActivityIndicator size="small" animating={isLoading} color="grey" />
      <CategoryList data={filterData} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  bottomSafeArea: {
    flex: 1,
    backgroundColor: "#FAFAFA",
  },
  container: {
    marginTop: 30,
    padding: 20,
  },
  header: {
    fontFamily: "Montserrat500",
    fontSize: 14,
    textAlign: "center",
  },
});
