import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  View,
  ScrollView,
} from "react-native";
import Markdown from 'react-native-markdown-display';
import { useTheme } from "../tools/ThemeProvider";
import { getThemeStyles } from "../theme/themeStyles";
import Navbar from "../components/Navbar";
import axios from "axios";

export default function ExerciseScreen({  }) {
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

     <View
      style={[
        styles.container,
        { backgroundColor: themeStyles.profileContainer },
      ]}
    >
       <ScrollView>
      <Markdown>{markdown}</Markdown>
    </ScrollView>
       
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
    top: 300

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
