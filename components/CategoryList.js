import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { useContext } from "react";
import { RecipeContext } from "../store/Recipe-context";
import { GlobalStyles } from "../constants/styles";

export const CategoryList = ({ data }) => {
  const navigation = useNavigation();
  const ctx = useContext(RecipeContext);

  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {data.map((item, i) => (
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("Recipe", {
                itemId: item.id,
                title: item[0].name,
                time: item[0].time,
                calories: item[0].calories,
                artwork: item[0].artwork,
                serving: item[0].serving,
              });
            }}
            key={i}
          >
            <View>
              <View style={styles.wrapper}>
                <View style={styles.imgTitleContainer}>
                  <Image
                    source={{ uri: item[0].artwork }}
                    style={styles.image}
                  />
                  <View>
                    <View>
                      <Text style={styles.title}>{item[0].name}</Text>
                    </View>
                    <View style={styles.infoWrapper}>
                      <Text style={styles.timeCalories}>{item[0].time}</Text>
                      <Text style={styles.timeCalories}>-</Text>
                      <Text style={styles.timeCalories}>
                        {item[0].calories}
                      </Text>
                    </View>
                  </View>
                </View>
                <View style={styles.titleWrapper}>
                  <TouchableOpacity
                    style={styles.icon}
                    onPress={() => {
                      ctx.addBookMarked(
                        item[0].artwork,
                        item[0].name,
                        item[0].time,
                        item[0].calories,
                        item[0].id
                      );
                      ctx.pickFavorite(item[0].id);
                    }}
                    disabled={ctx.favorite.includes(item[0].id)}
                  >
                    <Ionicons
                      name={
                        ctx.favorite.includes(item[0].id)
                          ? "bookmark"
                          : "bookmark-outline"
                      }
                      size={20}
                      color={GlobalStyles.colors.primary}
                    />
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
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
