import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity,
  FlatList,
  ScrollView,
} from "react-native";
import { useTheme } from "../tools/ThemeProvider";
import { getThemeStyles } from "../theme/themeStyles";
import Navbar from "../components/Navbar";
import BackButton from "../components/BackButton";

export default function AchievmentsScreen({ navigation }) {
  const { count, setCount } = useState(0);
  const { isDarkTheme } = useTheme();
  const themeStyles = getThemeStyles(isDarkTheme);
  const data = [
    { achieve_id: 1, title: "Достижение" },
    { achieve_id: 2, title: "Достижение" },
    { achieve_id: 3, title: "Достижение" },
    { achieve_id: 4, title: "Достижение" },
    { achieve_id: 5, title: "Достижение" },
    { achieve_id: 6, title: "Достижение" },
    { achieve_id: 7, title: "Достижение" },
    { achieve_id: 8, title: "Достижение" },

  ];
  const renderAchieve = ({item}) => (
    <TouchableOpacity
    style={[
      styles.achievment_container__item,
      { backgroundColor: themeStyles.statsItem },
    ]}
  >
      <Text
        style={[
          styles.achieve__text,
          { color: themeStyles.textColor },
        ]}
      >
        {item.title}
      </Text>
  </TouchableOpacity>
  )
  return (

     <View
      style={[
        styles.container,
        { backgroundColor: themeStyles.profileContainer },
      ]}
    >
      <View style={styles.headerAbout}>
       <BackButton />
        <Text style={[styles.text, { color: themeStyles.textColor }]}>
          Достижения
        </Text>
      </View>
      <View style={{ top: 120}}>
      <FlatList
        data={data}
        renderItem={renderAchieve}
        numColumns={2}
        columnWrapperStyle={styles.achievment_container}
        />
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
    fontWeight: "700",
    position: "relative",
    right: 15,
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
    right: 90,

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
  achievment_container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 20,
    marginVertical: 10,
  },
  achievment_container__item: {
    width: 177,
    height: 166,
    borderRadius: 10,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  achieve__text: {
    position: "absolute",
    bottom: 5,
  },
});
