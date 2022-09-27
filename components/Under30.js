import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import { Under30Data } from "../firebase/under30-config";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import { RecipeContext } from "../store/Recipe-context";
import { useContext } from "react";
import { GlobalStyles } from "../constants/styles";

export const Under30 = () => {
  const [allRecipes, isLoading, under] = Under30Data();
  const navigation = useNavigation();

  const ctx = useContext(RecipeContext);

  return (
    <View style={styles.container}>
      <Text style={styles.description}>Under 30 Minutes</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {under.map((item, i) => (
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
            <View style={styles.wrapper}>
              <Image source={{ uri: item[0].artwork }} style={styles.image} />
              <View style={styles.titleWrapper}>
                <Text style={styles.title}>{item[0].name}</Text>
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
              <View style={styles.infoWrapper}>
                <Text style={styles.timeCalories}>{item[0].time}</Text>
                <Text style={styles.timeCalories}>-</Text>
                <Text style={styles.timeCalories}>{item[0].calories}</Text>
              </View>
            </View>
          </TouchableOpacity>
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
});
