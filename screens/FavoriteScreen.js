import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  TouchableOpacity,
} from "react-native";
import React, { useContext } from "react";
import { RecipeContext } from "../store/Recipe-context";
import { MaterialIcons } from "@expo/vector-icons";
import { ScrollView } from "react-native-gesture-handler";
import { GlobalStyles } from "../constants/styles";

export const FavoriteScreen = () => {
  const ctx = useContext(RecipeContext);
  return (
    <SafeAreaView style={styles.bottomSafeArea}>
      <ScrollView style={styles.container}>
        <Text style={styles.description}>Bookmarked Recipes</Text>
        {ctx.bookmarked?.map((item, i) => (
          <View key={i}>
            <View>
              <View style={styles.wrapper}>
                <TouchableOpacity>
                  <View style={styles.imgTitleContainer}>
                    <Image source={{ uri: item.image }} style={styles.image} />
                    <View>
                      <View>
                        <Text style={styles.title}>{item.title}</Text>
                      </View>
                      <View style={styles.infoWrapper}>
                        <Text style={styles.timeCalories}>{item.time}</Text>
                        <Text style={styles.timeCalories}>-</Text>
                        <Text style={styles.timeCalories}>{item.calories}</Text>
                      </View>
                    </View>
                  </View>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => {
                    ctx.removeBookmarked(item.id);
                    ctx.removeFavorite(item.id);
                  }}
                >
                  <View style={styles.titleWrapper}>
                    <MaterialIcons
                      name="delete"
                      size={24}
                      color={GlobalStyles.colors.delete}
                    />
                  </View>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        ))}
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
    flex: 1,
    marginTop: 20,
    padding: 15,
  },
  wrapper: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderBottomColor: "black",
    borderBottomWidth: 0.2,
    paddingVertical: 10,
  },
  imgTitleContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  description: {
    fontFamily: "Montserrat600",
    fontSize: 16,
    textAlign: "center",
    marginVertical: 20,
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 10,
    marginRight: 20,
  },
  titleWrapper: {
    padding: 1,
  },
  title: {
    fontFamily: "Montserrat600",
    fontSize: 12,
  },
  infoWrapper: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 5,
  },
  timeCalories: {
    fontFamily: "Montserrat300",
    fontSize: 11,
    marginRight: 10,
  },
});
