import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  Image,
  ActivityIndicator,
} from "react-native";
import React, { useState, useEffect } from "react";
import { Ionicons } from "@expo/vector-icons";
import { getDetails } from "../firebase/firebase-config";
import { RenderRecipeDetails } from "../components/RenderRecipeDetails";
import { GlobalStyles } from "../constants/styles";

export const RecipeScreen = ({ navigation, route }) => {
  const [details, setDetails] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const itemId = route.params.itemId;
  const title = route.params.title;
  const time = route.params.time;
  const calories = route.params.calories;
  const artwork = route.params.artwork;
  const serving = route.params.serving;

  const getEachQuestions = async () => {
    setIsLoading(true);
    const details = await getDetails(itemId);
    let preDetails = [];
    details.forEach((detail) => {
      preDetails.push({ id: detail.id, ...detail.data() });
    });
    setDetails([...preDetails]);
    setIsLoading(false);
  };
  useEffect(() => {
    getEachQuestions();
  }, []);

  return (
    <ScrollView>
      <View style={styles.bottomSafeArea}>
        <Image source={{ uri: artwork }} style={styles.image} />
        <View style={styles.backBooKmark}>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("Tab", { screen: "home" });
            }}
          >
            <Ionicons name="chevron-back-circle" size={30} color="black" />
          </TouchableOpacity>
        </View>
        <View style={styles.container}>
          <Text style={styles.title}>{title}</Text>
          <View style={styles.infoWrapper}>
            <Text style={styles.timeCalories}>{time}</Text>
            <Text style={styles.timeCalories}>-</Text>
            <Text style={styles.timeCalories}>{calories}</Text>
            <Text style={styles.timeCalories}>-</Text>
            <Text style={styles.timeCalories}>{serving}</Text>
          </View>
        </View>
        <View>
          <RenderRecipeDetails data={details} />
          <ActivityIndicator size="small" animating={isLoading} color="grey" />
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  bottomSafeArea: {
    flex: 1,
    backgroundColor: "#ffffff",
  },
  backBooKmark: {
    position: "absolute",
    top: 60,
    paddingHorizontal: 25,
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
  },
  image: {
    width: "100%",
    height: 250,
  },
  container: {
    padding: 10,
  },
  title: {
    fontFamily: "Montserrat600",
    fontSize: 18,
    marginTop: 10,
  },
  timeCalories: {
    fontFamily: "Montserrat300",
    fontSize: 12,
    marginRight: 10,
  },
  infoWrapper: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 10,
  },
});
