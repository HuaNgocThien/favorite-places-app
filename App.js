import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import AllPlaces from "./src/screens/AllPlaces";
import AddPlace from "./src/screens/AddPlace";
import IconButton from "./src/components/UI/IconButton";

const Stack = createStackNavigator();

export default function App() {
  return (
    <>
      <StatusBar />
      <NavigationContainer>
        <Stack.Navigator initialRouteName="AllPlaces">
          <Stack.Screen
            name="AllPlaces"
            component={AllPlaces}
            options={({ navigation }) => ({
              headerRight: ({ tintColor }) => (
                <IconButton
                  icon="add"
                  color={tintColor}
                  size={24}
                  onPress={() => {
                    navigation.navigate("AddPlace");
                  }}
                />
              ),
            })}
          />
          <Stack.Screen name="AddPlace" component={AddPlace} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}
