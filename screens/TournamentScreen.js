import React, { useState } from "react";
import {
  View,
  TextInput,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
} from "react-native";
import Navbar from "../components/Navbar";
import { getDatabase, ref, set } from "firebase/database";
import { useTheme } from "../tools/ThemeProvider";
import { getThemeStyles } from "../theme/themeStyles";

export default function SupportScreen({ navigation }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [theme, setTheme] = useState("");
  const [message, setMessage] = useState("");
  const { isDarkTheme } = useTheme();
  const themeStyles = getThemeStyles(isDarkTheme);

  return (
    <View
      style={[styles.container, { backgroundColor: themeStyles.backgroundColor }]}
    >
      <View style={styles.headerAbout}>
        <Text style={[styles.text, { color: themeStyles.textColor }]}>
          Рекордсмены
        </Text>
      </View>
        <View style={styles.leagues}>
            <View style={[styles.leagues__item, {backgroundColor: themeStyles.league}]}></View>
            <View style={[styles.leagues__item, {backgroundColor: themeStyles.leagueBlock}]}>
                <Image source={require('../assets/lock.png')}/>
            </View>
            <View style={[styles.leagues__item, {backgroundColor: themeStyles.leagueBlock}]}>
                <Image source={require('../assets/lock.png')}/>
            </View>
            <View style={[styles.leagues__item, {backgroundColor: themeStyles.leagueBlock}]}>
                <Image source={require('../assets/lock.png')}/>
            </View>
            <View style={[styles.leagues__item, {backgroundColor: themeStyles.leagueBlock}]}>
                <Image source={require('../assets/lock.png')}/>
            </View>
        </View>
        <Text style={[styles.league__title,{color: themeStyles.textColor}]}>Черная лига</Text>
        <View style={[styles.hr, {backgroundColor: themeStyles.hr}]}></View>
        <View style={styles.leaderboard}>
            <View style={styles.leaderboard__item}>

            </View>
            <View style={styles.leaderboard__item}></View>

        </View>
      <Navbar />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#000",
  },
  button: {
    backgroundColor: "#F3F285",
    width: 342,
    height: 45,
    borderRadius: 10,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    color: "#FFF",
    fontSize: 28,
    position: "relative",
    fontWeight: "bold"
  },
  headerAbout: {
    position: "absolute",
    top: 60,
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  backButton: {
    position: "relative",
    right: 120,
  },
  inputs_container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: 20,
    maxWidth: 342,
  },
  input_text: {
    backgroundColor: "#FFF",
    width: 342,
    height: 40,
    borderRadius: 10,
    position: "relative",
  },
  input_text_message: {
    backgroundColor: "#FFF",
    width: 342,
    height: 137,
    borderRadius: 10,
    position: "relative",
  },
  textInput: {
    color: "#FFF",
    fontSize: 18,
    marginBottom: 13,
  },
  leagues: {
    position: 'absolute',
    top: 120,
    gap: 20,
    display: 'flex',
    flexDirection: 'row'
  },
  leagues__item: {
    width: 60,
    height: 74,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  league__title: {
    position: 'absolute',
    top: 220,
    left: 20,
    fontWeight: "700"
  },
  hr: {
    width: 381,
    height: 1,
    position: 'absolute',
    top: 250
  },
  leaderboard__item: {
    width: 381,
    height: 54,
    backgroundColor: "#F5F5F5"
  }
});
