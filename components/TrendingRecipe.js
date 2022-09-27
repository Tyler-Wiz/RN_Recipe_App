import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import { TrendingData } from "../firebase/trending-config";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { ScrollView } from "react-native-gesture-handler";
import { RecipeContext } from "../store/Recipe-context";
import { useContext } from "react";
import { GlobalStyles } from "../constants/styles";

export const TrendingRecipe = () => {
  const [allRecipes, isLoading, trending] = TrendingData();
  const navigation = useNavigation();
  const ctx = useContext(RecipeContext);

  return (
    <View style={styles.container}>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {trending.map((item, i) => (
          <View key={i}>
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
            >
              <View style={styles.wrapper}>
                <Image source={{ uri: item[0].artwork }} style={styles.image} />
                <View style={styles.titleWrapper}>
                  <Text style={styles.title}>{item[0].name}</Text>
                </View>
                <View style={styles.infoWrapper}>
                  <Text style={styles.timeCalories}>{item[0].time}</Text>
                  <Text style={styles.timeCalories}>-</Text>
                  <Text style={styles.timeCalories}>{item[0].calories}</Text>
                </View>
              </View>
            </TouchableOpacity>
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
                console.log(item[0].id);
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
        ))}
      </ScrollView>
      <ActivityIndicator size="small" animating={isLoading} color="grey" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
  },
  wrapper: {
    marginRight: 10,
    marginTop: 10,
  },
  description: {
    fontFamily: "Montserrat600",
    fontSize: 16,
  },
  image: {
    width: 220,
    height: 140,
    borderRadius: 10,
  },
  titleWrapper: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 12,
    padding: 1,
  },
  title: {
    fontFamily: "Montserrat500",
    fontSize: 13,
    width: 140,
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
  icon: {
    position: "absolute",
    top: "10%",
    left: "80%",
  },
});
