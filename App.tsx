import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator, NativeStackNavigationProp } from "@react-navigation/native-stack";
import { LogBox } from "react-native";
import { createContext, FC, useContext, useEffect } from "react";
import IntroScreen from "./screens/IntroScreen";
import LoginScreen from "./screens/LoginScreen";
import SignupScreen from "./screens/SignupScreen";
import NavigationScreen from "./screens/NavigationScreen";
import HomeScreen from "./screens/HomeScreen";
import ProfileScreen from "./screens/ProfileScreen";
import EventScreen from "./screens/EventScreen";
import FavoriteScreen from "./screens/FavoriteScreen";
import SettingScreen from "./screens/SettingScreen";
import AboutScreen from "./screens/AboutScreen";
import SupportScreen from "./screens/SupportScreen";
import TournamentScreen from "./screens/TournamentScreen";
import SubscriptionScreen from "./screens/SubscriptionScreen";
import PaymentScreen from "./screens/PaymentScreen";
import ThemeScreen from "./screens/ThemeScreen";
import AchievmentsScreen from "./screens/AchievmentsScreen";
import { ThemeProvider } from "./tools/ThemeProvider";
import { Context } from "./context/StoreContext";
import { RootStackParamList } from "./navigation/types";
import { ContextProvider } from "./context/StoreContext";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {observer} from 'mobx-react-lite';

// Disable specific log warnings
LogBox.ignoreLogs([
  "Non-serializable values were found in the navigation state",
]);



// Create the navigation stack
const Stack = createNativeStackNavigator<RootStackParamList>();

const App: FC = () => {
  const {store} = useContext((Context))

  useEffect(() => {
    // Загружаем токен при старте приложения
    const loadToken = async () => {
      const token = await AsyncStorage.getItem('token');
      if (token) {
        store.setAuth(true);
        // Можно здесь вызвать store.checkUser() или другие действия
      } else {
        store.setAuth(false);
      }
    };

    loadToken();
  }, [store]);
  return (
    <ContextProvider>
      <ThemeProvider>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen
              name="Intro page"
              options={{ headerShown: false }}
              component={IntroScreen}
            />
            <Stack.Screen
              name="Login page"
              options={{ headerShown: false }}
              component={LoginScreen}
            />
            <Stack.Screen
              name="Sign up page"
              options={{ headerShown: false }}
              component={SignupScreen}
            />
            <Stack.Screen
              name="Navigation page"
              options={{ headerShown: false }}
              component={NavigationScreen}
            />
            <Stack.Screen
              name="Home page"
              options={{ headerShown: false }}
              component={HomeScreen}
            />
            <Stack.Screen
              name="Profile page"
              options={{ headerShown: false }}
              component={ProfileScreen}
            />
            <Stack.Screen
              name="Support page"
              options={{ headerShown: false }}
              component={SupportScreen}
            />
            <Stack.Screen
              name="About page"
              options={{ headerShown: false }}
              component={AboutScreen}
            />
            <Stack.Screen
              name="Event page"
              options={{ headerShown: false }}
              component={EventScreen}
            />
            <Stack.Screen
              name="Settings page"
              options={{ headerShown: false }}
              component={SettingScreen}
            />
            <Stack.Screen
              name="Favorite page"
              options={{ headerShown: false }}
              component={FavoriteScreen}
            />
            <Stack.Screen
              name="Tournament page"
              options={{ headerShown: false }}
              component={TournamentScreen}
            />
            <Stack.Screen
              name="Subscription page"
              options={{ headerShown: false }}
              component={SubscriptionScreen}
            />
            <Stack.Screen
              name="Payment page"
              options={{ headerShown: false }}
              component={PaymentScreen}
            />
            <Stack.Screen
              name="Theme page"
              options={{ headerShown: false }}
              component={ThemeScreen}
            />
            <Stack.Screen
              name="Achive page"
              options={{ headerShown: false }}
              component={AchievmentsScreen}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </ThemeProvider>
    </ContextProvider>
  );
}
export default observer(App);


