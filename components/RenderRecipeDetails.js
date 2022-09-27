import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { useState } from "react";
import { GlobalStyles } from "../constants/styles";

export const RenderRecipeDetails = ({ data }) => {
  const [isVisible, setIsVisible] = useState({});

  const toggleVisibility = (id) => {
    setIsVisible((prevState) => ({
      ...prevState,
      [id]: !prevState[id],
    }));
  };
  return (
    <View style={styles.container}>
      {data.map((chapter, i) => (
        <View key={i}>
          <TouchableOpacity
            onPress={() => {
              toggleVisibility(chapter.id);
            }}
            style={styles.chapterHeader}
          >
            <Text style={styles.title}>Ingredients</Text>
            <Ionicons
              name={
                isVisible[chapter.id]
                  ? "md-chevron-up-circle"
                  : "chevron-down-circle"
              }
              size={24}
              color={GlobalStyles.colors.primary}
            />
          </TouchableOpacity>
          {isVisible[chapter.id] ? (
            <View style={styles.ingredientWrapper}>
              {chapter.ingredient.map((item, i) => (
                <View key={i}>
                  <Text style={styles.ingredient}>{item}</Text>
                </View>
              ))}
            </View>
          ) : null}
          <View style={styles.setContainer}>
            <Text style={styles.title}>Step By Step</Text>
            <Text style={styles.paragraph}>{chapter.StepOne}</Text>
            <Text style={styles.paragraph}>{chapter.StepTwo}</Text>
            <Text style={styles.paragraph}>{chapter.StepThree}</Text>
            <Text style={styles.paragraph}>{chapter.StepTwo}</Text>
            <Text style={styles.paragraph}>{chapter.StepThree}</Text>
            <Text style={styles.paragraph}>{chapter.StepFour}</Text>
            <Text style={styles.paragraph}>{chapter.StepFive}</Text>
            {chapter.StepSix || chapter.StepSeven || chapter.StepEight ? (
              <View>
                <Text style={styles.paragraph}>{chapter.StepSix}</Text>
                <Text style={styles.paragraph}>{chapter.StepSeven}</Text>
                <Text style={styles.paragraph}>{chapter.StepEight}</Text>
              </View>
            ) : null}
          </View>
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 30,
    padding: 10,
  },
  chapterHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 5,
    padding: 15,
    backgroundColor: "#F8F8FF",
  },
  ingredientWrapper: {
    backgroundColor: "#F8F8FF",
    paddingHorizontal: 15,
  },
  ingredient: {
    fontSize: 13,
    color: "black",
    paddingVertical: 10,
    textTransform: "capitalize",
    fontFamily: "Montserrat500",
  },
  paragraph: {
    fontSize: 13,
    color: "black",
    lineHeight: 28,
    paddingVertical: 10,
    lineHeight: 18,
    fontFamily: "Montserrat400",
  },
  title: {
    fontSize: 15,
    color: "black",
    paddingVertical: 10,
    textTransform: "capitalize",
    fontFamily: "Montserrat600",
  },
  setContainer: {
    marginTop: 10,
    marginBottom: 60,
    paddingVertical: 5,
    backgroundColor: "#F8F8FF",
    padding: 10,
    paddingBottom: 50,
  },
});
