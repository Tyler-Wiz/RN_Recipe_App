import { createStackNavigator } from "@react-navigation/stack";
import { MyTabs } from "./TabNavigator";
import { RecipeScreen } from "../screens";
import { CategoryScreen } from "../screens";

const Stack = createStackNavigator();

export const MyStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Tab" component={MyTabs} />
      <Stack.Screen name="Recipe" component={RecipeScreen} />
      <Stack.Screen name="Category" component={CategoryScreen} />
    </Stack.Navigator>
  );
};
