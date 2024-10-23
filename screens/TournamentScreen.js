import React, { useState } from "react";
import {
  View,
  TextInput,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
  FlatList,
} from "react-native";
import Navbar from "../components/Navbar";
import { getDatabase, ref, set } from "firebase/database";
import { useTheme } from "../tools/ThemeProvider";
import { getThemeStyles } from "../theme/themeStyles";

const data = [
  { id: "1", name: "Артём", score: 1000 },
  { id: "2", name: "Александр", score: 900 },
  { id: "3", name: "Михаил", score: 800 },
  { id: "4", name: "Артём", score: 700 },
  { id: "5", name: "Артём", score: 600 },
  { id: "6", name: "Артём", score: 500 },
  { id: "7", name: "Артём", score: 450 },
  { id: "8", name: "Артём", score: 300 },
  { id: "9", name: "Артём", score: 200 },
  { id: "10", name: "Артём", score: 100 },
];

export default function SupportScreen({ navigation }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [theme, setTheme] = useState("");
  const [message, setMessage] = useState("");
  const { isDarkTheme } = useTheme();
  const themeStyles = getThemeStyles(isDarkTheme);
  const renderItem = ({ item, index }) => {
    return (
      <View>
        {/* Добавляем блок "Зона понижения" после 5-го места */}
        {index === 5 && (
          <View style={styles.derank_container}>
            <View
              style={[
                styles.hr_derank,
                { backgroundColor: themeStyles.statsText },
              ]}
            ></View>
            <Text
              style={[styles.derank__title, { color: themeStyles.statsText }]}
            >
              Зона понижения
            </Text>
            <View
              style={[
                styles.hr_derank,
                { backgroundColor: themeStyles.statsText },
              ]}
            ></View>
          </View>
        )}
        <View
          style={[
            styles.leaderboard__item,
            index % 2 === 0
              ? { backgroundColor: themeStyles.leagueBlock }
              : { backgroundColor: themeStyles.leagueOddBlock }, // Чередование стилей
          ]}
        >
          <View style={styles.leaderboard__place}>
            <Text
              style={[styles.text, styles.place, { color: themeStyles.textColor }]}
            >
              {index + 1}
            </Text>
            <Image
              source={require("../assets/user-avatar.png")}
              style={styles.userScore__img}
            />
            <Text
              style={[styles.userScore__text, { color: themeStyles.textColor }]}
            >
              {item.name}
            </Text>
          </View>
          <Text
            style={[
              styles.userScore__text,
              { color: themeStyles.textColor, right: 10 },
            ]}
          >
            {item.score} pt
          </Text>
        </View>
      </View>
    );
  };
  return (
    <View
      style={[
        styles.container,
        { backgroundColor: themeStyles.backgroundColor },
      ]}
    >
      <View style={styles.headerAbout}>
        <Text style={[styles.text, { color: themeStyles.textColor }]}>
          Рекордсмены
        </Text>
      </View>
      <View style={styles.leagues}>
        <View
          style={[
            styles.leagues__item,
            { backgroundColor: themeStyles.league },
          ]}
        ></View>
        <View
          style={[
            styles.leagues__item,
            { backgroundColor: themeStyles.leagueBlock },
          ]}
        >
          <Image source={require("../assets/lock.png")} />
        </View>
        <View
          style={[
            styles.leagues__item,
            { backgroundColor: themeStyles.leagueBlock },
          ]}
        >
          <Image source={require("../assets/lock.png")} />
        </View>
        <View
          style={[
            styles.leagues__item,
            { backgroundColor: themeStyles.leagueBlock },
          ]}
        >
          <Image source={require("../assets/lock.png")} />
        </View>
        <View
          style={[
            styles.leagues__item,
            { backgroundColor: themeStyles.leagueBlock },
          ]}
        >
          <Image source={require("../assets/lock.png")} />
        </View>
      </View>
      <Text style={[styles.league__title, { color: themeStyles.textColor }]}>
        Черная лига
      </Text>
      <View style={[styles.hr, { backgroundColor: themeStyles.hr }]}></View>
        <View style={styles.leaderboard}>
          <FlatList
            data={data}
            renderItem={renderItem}
            keyExtractor={(item) => item.id}
          />
          
        </View>
      <Navbar />
    </View>
  );
}

const styles = StyleSheet.create({
  scrollView: {
    flex: 1,
  },
  leaderboard__place: {
    display: "flex",
    flexDirection: "row",
    gap: 30,
    alignItems: "center",
  },
  place: {
    width: 30,
    fontSize: 22,
    position: "relative",
    fontWeight: "bold",
    left: 5,
  },

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
    fontWeight: "bold",
  },
  userScore__text: {
    color: "#FFF",
    fontSize: 24,
    position: "relative",
    fontWeight: "400",
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
    position: "absolute",
    top: 120,
    gap: 20,
    display: "flex",
    flexDirection: "row",
  },
  leagues__item: {
    width: 60,
    height: 74,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  league__title: {
    position: "absolute",
    top: 220,
    left: 20,
    fontWeight: "700",
  },
  hr: {
    width: 381,
    height: 1,
    position: "absolute",
    top: 250,
  },
  hr_derank: {
    width: 90,
    height: 1,
  },
  leaderboard__item: {
    width: 381,
    height: 54,
    backgroundColor: "#F5F5F5",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
  },
  userScore__img: {
    width: 40,
    height: 40,
  },
  leaderboard: {
    top: 270,
    position: "relative",
  },
  derank_container: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 10,
  },
  derank__title: {
    fontSize: 23,
    fontWeight: "500",
  },
});
