import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  View,
  ScrollView,
  Image,
  Dimensions,
  Text
} from "react-native";
import Markdown from 'react-native-markdown-display';
import { useTheme } from "../tools/ThemeProvider";
import { getThemeStyles } from "../theme/themeStyles";
import Navbar from "../components/Navbar";
import axios from "axios";
import BackButton from "../components/BackButton";
import SaveButton from "../components/SaveButton";

const { width } = Dimensions.get('window'); // Получаем ширину экрана
const { height } = Dimensions.get('window'); // Получаем ширину экрана


export default function ExerciseScreen() {
  const { isDarkTheme } = useTheme();
  const themeStyles = getThemeStyles(isDarkTheme);
  const [markdown, setMarkdown] = useState('');

  useEffect(() => {
    const fetchMarkdown = async () => {
      try {
        const response = await axios.get('http://localhost:3000/markdown'); 
        setMarkdown(response.data);
      } catch (error) {
        console.error('Ошибка загрузки Markdown:', error);
      }
    };

    fetchMarkdown();
  }, []);

  return (
  <>
   
    <View style={[styles.container, { backgroundColor: themeStyles.profileContainer }]}>
    <View style={styles.headerAbout}>
              <BackButton  style={styles.backButton}/>
              <SaveButton  style={styles.backButton}/>
            </View>
      <ScrollView style={styles.ex_container}>
        <Image source={require('../assets/contentTwo.png')} style={styles.ex_image} />
        <View style={styles.ex_markdown}>
        <Markdown  style={{
                   text: {
                   color: themeStyles.textColor,
                   fontWeight: 500
                   }
                 }}>{markdown}</Markdown>
        </View>
      </ScrollView>
      <Navbar />
    </View>
  </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#000",
    paddingHorizontal: 10, // Отступы по бокам
  },
  ex_container: {
    flexGrow: 1, // Позволяет ScrollView занимать доступное пространство
    width: '100%', // Занимает всю доступную ширину
  },
  ex_image: {
    marginTop: 60,
    width: width, // Задаем ширину изображения как 90% от ширины экрана
    height: height * 0.2, // Автоматическая высота
  },
  ex_markdown: {
    width: '100%', // Занимает всю доступную ширину
    paddingHorizontal: 5, // Отступы по бокам для текста
  },
 
  headerAbout: {
    display: "flex",
    flexDirection: 'row',
    justifyContent:"center",
    alignItems: 'center',
    top: 60,
    left: height * 0.0,
     gap: width * 0.7

  },
  backButton: {
    position: "relative",
    right: height * 0.155,
    bottom: 1
  },
});
