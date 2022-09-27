import { useState, useEffect } from "react";
import { getAll } from "./firebase-config";

export const TrendingData = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [allRecipes, setAllRecipes] = useState([]);

  const getData = async () => {
    setIsLoading(true);
    const recipes = await getAll();
    let recipeArr = [];
    recipes.forEach((recipe) => {
      recipeArr.push({ id: recipe.id, ...recipe.data() });
    });
    setAllRecipes([...recipeArr]);
    setIsLoading(false);
  };

  useEffect(() => {
    getData();
  }, []);

  const trending = allRecipes.filter((recipe) => {
    if (recipe[0].tag.includes("trending")) {
      return recipe[0];
    }
  });

  return [allRecipes, isLoading, trending];
};
