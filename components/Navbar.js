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
export default function Navbar() {
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
    }
  };
  return (
    <>
      <View style={styles.bottom_panel}>
        <View style={styles.panelItem}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => handlePress("home")}
          >
            <Image
              source={require("../assets/home.png")}
              style={styles.bottom_pannel__image}
            />
            <Text style={styles.text}>Главная</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.panelItem}>
        <TouchableOpacity
            style={styles.button}
            onPress={() => handlePress("event")}
          >
            <Image
              source={require("../assets/event.png")}
              style={styles.bottom_pannel__image}
            />
            <Text style={styles.text}>События</Text>
          </TouchableOpacity>
          
        </View>
        <View style={styles.panelItem}>
        <TouchableOpacity
            style={styles.button}
            onPress={() => handlePress("fav")}
          >
            <Image
              source={require("../assets/save.png")}
              style={styles.bottom_pannel__image}
            />
            <Text style={styles.text}>Избранное</Text>
          </TouchableOpacity>
         
        </View>
        <View style={styles.panelItem}>
        <TouchableOpacity
            style={styles.button}
            onPress={() => handlePress("profile")}
          >
            <Image
              source={require("../assets/profile.png")}
              style={styles.bottom_pannel__image}
            />
            <Text style={styles.text}>Профиль</Text>
          </TouchableOpacity>
          
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  bottom_panel: {
    backgroundColor: "#222",
    position: "absolute",
    width: 386,
    height: 66,
    bottom: 40,
    left: 25,
    borderRadius: 40,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
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
    fontSize: 17,
  },
  image: {
    width: 20,
    height: 20,
    marginRight: 10,
  },
});
