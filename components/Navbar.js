import { useNavigation } from "@react-navigation/native";
import { React } from "react";
import {
  View,
  Image,
  Button,
  StyleSheet,
  TouchableOpacity,
  Text,
} from "react-native";
import { useTheme } from "../tools/ThemeProvider";
import { getThemeStyles } from "../theme/themeStyles";
import Home from '../assets/home.svg';
import Event from '../assets/event.svg';
import Profile from '../assets/profile.svg';
import Save from '../assets/save.svg';
import Tournament from '../assets/tour.svg';

export default function Navbar() {
  const { isDarkTheme } = useTheme();
  const themeStyles = getThemeStyles(isDarkTheme);
  const navigation = useNavigation();
  const handlePress = (event) => {
    switch (event) {
      case "home":
        navigation.navigate("Home page");
        break;
      case "event":
        navigation.navigate("Event page");
        break;
      case "fav":
        navigation.navigate("Favorite page");
        break;
      case "profile":
        navigation.navigate("Profile page");
        break;
      case "rat":
        navigation.navigate("Tournament page");
        break;
    }
  };
  return (
    <>
      <View style={[styles.bottom_panel, {backgroundColor: themeStyles.navBackground}]}>
        <View style={styles.panel}>
          <View style={styles.panelItem}>
            <TouchableOpacity
              style={styles.button}
              onPress={() => handlePress("home")}
            >
              <Home
                style={styles.bottom_pannel__image}
              />
              <Text style={[styles.text, {color: themeStyles.navColor}]}>Главная</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.panelItem}>
            <TouchableOpacity
              style={styles.button}
              onPress={() => handlePress("event")}
            >
              <Event
                style={styles.bottom_pannel__image}
              />
              <Text style={[styles.text, {color: themeStyles.navColor}]}>События</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.panelItem}>
            <TouchableOpacity
              style={styles.button}
              onPress={() => handlePress("rat")}
            >
              <Tournament
                style={styles.bottom_pannel__image}
              />
              <Text style={[styles.text, {color: themeStyles.navColor}]}>Рейтинг</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.panelItem}>
            <TouchableOpacity
              style={styles.button}
              onPress={() => handlePress("fav")}
            >
              <Save
                style={styles.bottom_pannel__image}
              />
              <Text style={[styles.text, {color: themeStyles.navColor}]}>Избранное</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.panelItem}>
            <TouchableOpacity
              style={styles.button}
              onPress={() => handlePress("profile")}
            >
              <Profile
                style={styles.bottom_pannel__image}
                stroke="#B4B4B4"
                strokeWidth={2}
              />
              <Text style={[styles.text, {color: themeStyles.navColor}]}>Профиль</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  bottom_panel: {
    backgroundColor: "#222",
    position: "absolute",
    width: 450,
    height: 86,
    bottom: 0,
    borderRadius: 15,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  panel: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    marginBottom: 20,
    gap: 5,
  },
  panelItem: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    flexDirection: "column",
    alignItems: "center",
    padding: 10,
    borderRadius: 5,
    gap: 10,
  },
  text: {
    color: "#B4B4B4",
    fontSize: 12,
  },
  image: {
    width: 20,
    height: 20,
    marginRight: 10,
  },
  bottom_pannel__image: {
    color: '#B4B4B4',
    
  }
});
