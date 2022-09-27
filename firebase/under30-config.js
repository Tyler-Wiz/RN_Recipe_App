import { useState, useEffect } from "react";
import { getAll } from "./firebase-config";

export const Under30Data = () => {
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

  const under = allRecipes.filter((recipe) => {
    if (recipe[0].tag.includes("Under")) {
      return recipe[0];
    }
  });

  return [allRecipes, isLoading, under];
};
