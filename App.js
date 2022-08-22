// Components
import CustomDrawer from "./src/components/CustomDrawer";
// Screens
import Login from "./src/screens/Login";
import MainScreen from "./src/screens/MainScreen";
// Paper Components
import { Provider as PaperProvider } from "react-native-paper";
// Native Base Components
import { NativeBaseProvider } from "native-base";
// React Navigation
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
// Theme
import theme from "./src/Theme";

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NativeBaseProvider>
      <PaperProvider theme={theme}>
        <NavigationContainer>
          <Drawer.Navigator
            useLegacyImplementation={true}
            initialRouteName="Login"
            screenOptions={{
              headerTintColor: "#bf5af2",
              headerTitle: "",
            }}
            drawerContent={(props) => <CustomDrawer {...props} />}
          >
            <Drawer.Screen
              name="Login"
              component={Login}
              options={{ headerTransparent: true }}
            />
            <Drawer.Screen
              name="Main"
              component={MainScreen}
              options={{ headerTransparent: true }}
            />
          </Drawer.Navigator>
        </NavigationContainer>
      </PaperProvider>
    </NativeBaseProvider>
  );
}
