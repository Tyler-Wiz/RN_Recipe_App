import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { CategoriesData } from "../Data/data";
import { Category } from "../firebase/category-config";

export const Categories = () => {
  const [allRecipes, isLoading, sides, stew, soup, rice, snack] = Category();
  const navigation = useNavigation();

  let title = "";
  return (
    <View style={styles.container}>
      <Text style={styles.description}>All Categories</Text>
      {CategoriesData.map((category, i) => {
        title = category.title;
        if (title === "Soups") {
          return (
            <View key={i}>
              <TouchableOpacity
                style={styles.wrapper}
                onPress={() => {
                  navigation.navigate("Category", {
                    data: soup,
                    title: category.title,
                  });
                }}
              >
                <View style={styles.imageWrapper}>
                  <Image source={category.imageUrl} style={styles.image} />
                  <Text style={styles.title}>{category.title}</Text>
                </View>
                <View>
                  <Text style={styles.title}>{soup.length} recipes</Text>
                </View>
              </TouchableOpacity>
            </View>
          );
        }
        if (title === "Stews") {
          return (
            <View key={i}>
              <TouchableOpacity
                style={styles.wrapper}
                onPress={() => {
                  navigation.navigate("Category", {
                    data: stew,
                    title: category.title,
                  });
                }}
              >
                <View style={styles.imageWrapper}>
                  <Image source={category.imageUrl} style={styles.image} />
                  <Text style={styles.title}>{category.title}</Text>
                </View>
                <View>
                  <Text style={styles.title}>{stew.length} recipes</Text>
                </View>
              </TouchableOpacity>
            </View>
          );
        }
        if (title === "Sides") {
          return (
            <View key={i}>
              <TouchableOpacity
                style={styles.wrapper}
                onPress={() => {
                  navigation.navigate("Category", {
                    data: sides,
                    title: category.title,
                  });
                }}
              >
                <View style={styles.imageWrapper}>
                  <Image source={category.imageUrl} style={styles.image} />
                  <Text style={styles.title}>{category.title}</Text>
                </View>
                <View>
                  <Text style={styles.title}>{sides.length} recipes</Text>
                </View>
              </TouchableOpacity>
            </View>
          );
        }
        if (title === "Rice & Pasta") {
          return (
            <View key={i}>
              <TouchableOpacity
                style={styles.wrapper}
                onPress={() => {
                  navigation.navigate("Category", {
                    data: rice,
                    title: category.title,
                  });
                }}
              >
                <View style={styles.imageWrapper}>
                  <Image source={category.imageUrl} style={styles.image} />
                  <Text style={styles.title}>{category.title}</Text>
                </View>
                <View>
                  <Text style={styles.title}>{rice.length} recipes</Text>
                </View>
              </TouchableOpacity>
            </View>
          );
        }
        if (title === "Snack") {
          return (
            <View key={i}>
              <TouchableOpacity
                style={styles.wrapper}
                onPress={() => {
                  navigation.navigate("Category", {
                    data: snack,
                    title: category.title,
                  });
                }}
              >
                <View style={styles.imageWrapper}>
                  <Image source={category.imageUrl} style={styles.image} />
                  <Text style={styles.title}>{category.title}</Text>
                </View>
                <View>
                  <Text style={styles.title}>{snack.length} recipes</Text>
                </View>
              </TouchableOpacity>
            </View>
          );
        }
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    marginVertical: 10,
  },
  wrapper: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  imageWrapper: {
    marginVertical: 10,
    flexDirection: "row",
    alignItems: "center",
  },
  description: {
    fontFamily: "Montserrat600",
    fontSize: 16,
    marginVertical: 20,
  },
  image: {
    width: 50,
    height: 50,
    marginRight: 10,
  },
  title: {
    fontSize: 12,
    textTransform: "capitalize",
    fontFamily: "Montserrat600",
  },
});
