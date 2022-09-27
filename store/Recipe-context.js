import { createContext, useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const RecipeContext = createContext({
  addBookMarked: () => {},
  removeBookmarked: () => {},
  pickFavorite: () => {},
  removeFavorite: () => {},
  bookmarked: [],
  favorite: [],
});

export const RecipeProvider = ({ children }) => {
  const [bookmarked, setBookMarked] = useState([]);
  const [favorite, setFavorite] = useState([]);

  const runStorage = async () => {
    const booked = await AsyncStorage.getItem("@MySuperStore:key");
    let bookmarked = booked;
    return bookmarked;
  };

  const clearAsyncStorage = async () => {
    AsyncStorage.clear();
  };

  useEffect(() => {
    runStorage();
  }, []);

  const pickFavorite = (id) => {
    setFavorite((prevState) => [...prevState, id]);
  };

  const removeFavorite = (id) => {
    setFavorite(favorite.filter((item) => item.id !== id));
  };

  const addBookMarked = async (image, title, time, calories, id) => {
    setBookMarked((prevState) => [
      ...prevState,
      { image, title, time, calories, id },
    ]);
    await AsyncStorage.setItem("@MySuperStore:key", JSON.stringify(bookmarked));
  };

  const removeBookmarked = async (id) => {
    setBookMarked(bookmarked.filter((item) => item.id !== id));
    await AsyncStorage.setItem("@MySuperStore:key", JSON.stringify(bookmarked));
  };

  const value = {
    bookmarked: bookmarked,
    addBookMarked: addBookMarked,
    removeBookmarked: removeBookmarked,
    pickFavorite: pickFavorite,
    favorite: favorite,
    removeFavorite: removeFavorite,
  };

  return (
    <RecipeContext.Provider value={value}>{children}</RecipeContext.Provider>
  );
};
