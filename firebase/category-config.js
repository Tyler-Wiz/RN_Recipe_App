import { useState, useEffect } from "react";
import { getAll } from "./firebase-config";

export const Category = () => {
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

  const soup = allRecipes.filter((recipe) => {
    if (recipe[0].category.includes("Soups")) {
      return recipe[0];
    }
  });

  const rice = allRecipes.filter((recipe) => {
    if (recipe[0].category.includes("Rice")) {
      return recipe[0];
    }
  });

  const stew = allRecipes.filter((recipe) => {
    if (recipe[0].category.includes("Stews")) {
      return recipe[0];
    }
  });

  const sides = allRecipes.filter((recipe) => {
    if (recipe[0].category.includes("Sides")) {
      return recipe[0];
    }
  });

  const snack = allRecipes.filter((recipe) => {
    if (recipe[0].category.includes("Snack")) {
      return recipe[0];
    }
  });

  return [allRecipes, isLoading, sides, stew, soup, rice, snack];
};
