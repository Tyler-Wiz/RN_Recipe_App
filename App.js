import React, { useCallback, useEffect, useState } from "react";
import * as SplashScreen from "expo-splash-screen";
import * as Font from "expo-font";
import { NavigationContainer } from "@react-navigation/native";
import { MyStack } from "./Navigation/StackNavigator";
import { RecipeProvider } from "./store/Recipe-context";
import { StatusBar } from "expo-status-bar";

export default function App() {
  const [appIsReady, setAppIsReady] = useState(false);

  useEffect(() => {
    async function prepare() {
      try {
        await SplashScreen.preventAutoHideAsync();
        await Font.loadAsync({
          Montserrat300: require("./assets/fonts/Montserrat-Light.ttf"),
          Montserrat400: require("./assets/fonts/Montserrat-Regular.ttf"),
          Montserrat500: require("./assets/fonts/Montserrat-Medium.ttf"),
          Montserrat600: require("./assets/fonts/Montserrat-SemiBold.ttf"),
          Montserrat700: require("./assets/fonts/Montserrat-Bold.ttf"),
        });
        await new Promise((resolve) => setTimeout(resolve, 2000));
      } catch (e) {
        console.warn(e);
      } finally {
        setAppIsReady(true);
      }
    }

    prepare();
  }, []);

  const onLayoutRootView = useCallback(async () => {
    if (appIsReady) {
      await SplashScreen.hideAsync();
    }
  }, [appIsReady]);

  if (!appIsReady) {
    return null;
  }

  return (
    <RecipeProvider>
      <NavigationContainer onReady={onLayoutRootView}>
        <StatusBar style="dark" />
        <MyStack />
      </NavigationContainer>
    </RecipeProvider>
  );
}
