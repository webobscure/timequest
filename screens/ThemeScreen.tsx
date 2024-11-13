import React, { useEffect, useState } from "react";
import {
  View,
  TextInput,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity, Modal, FlatList, Switch
} from "react-native";
import Navbar from "../components/Navbar";
import { useTheme } from "../tools/ThemeProvider";
import { getThemeStyles } from "../theme/themeStyles";
import BackButton from "../components/BackButton";

export default function ThemeScreen({ navigation }) {
  const [isLightThemeChecked, setLightThemeChecked] = useState(false);
  const [isDarkThemeChecked, setDarkThemeChecked] = useState(false);
  const [isSystemThemeChecked, setSystemThemeChecked] = useState(false);
  const { isDarkTheme, setDarkTheme, setLightTheme, setSystemTheme } = useTheme();

  const checkTheme = () => {
    if (isDarkTheme === true) {
      setDarkThemeChecked(true);  // Устанавливаем в true
      setLightThemeChecked(false); // Устанавливаем в false, если нужно
    } else {
      setLightThemeChecked(true);  // Устанавливаем в true
      setDarkThemeChecked(false);   // Устанавливаем в false, если нужно
    }
  };

  useEffect(() => {
    checkTheme();
  },[isDarkTheme])

  const themeStyles = getThemeStyles(isDarkTheme);

  return (
    <View style={[styles.container, {backgroundColor: themeStyles.backgroundColor}]}>
      <View style={styles.headerAbout}>
        <BackButton style={styles.backButton}/>
        <Text style={[styles.text, {color: themeStyles.textColor}]}>Настройки приложения</Text>
      </View>
      
      <View style={styles.themeBlock}>
       <View style={styles.themeBlock__item}>
       <Image source={require("../assets/lightTheme.png")} />
        <Text style={[styles.themeText, { color: themeStyles.textColor}]} >Светлая</Text>
        <TouchableOpacity style={styles.checkbox} onPress={() => {
          setLightThemeChecked(true);
          setDarkThemeChecked(false);
          setSystemThemeChecked(false);
          setLightTheme();
        }}>
          <View style={isLightThemeChecked ? styles.checked : styles.unchecked}></View>
        </TouchableOpacity>
       </View>
       <View style={styles.themeBlock__item}>
       <Image source={require("../assets/darkTheme.png")} />
        <Text style={[styles.themeText, { color: themeStyles.textColor}]} >Тёмная</Text>
        <TouchableOpacity style={styles.checkbox} onPress={() => {
          setDarkThemeChecked(true);
          setLightThemeChecked(false);
          setSystemThemeChecked(false);
          setDarkTheme();

        }}>
          <View style={isDarkThemeChecked ? styles.checked : styles.unchecked}></View>
        </TouchableOpacity>
       </View>
       <View style={styles.themeBlock__item}>
       <Image source={require("../assets/systemTheme.png")} />
        <Text style={[styles.themeText, { color: themeStyles.textColor}]} >Как в системе</Text>
        <TouchableOpacity style={styles.checkbox} onPress={() => {
          setSystemThemeChecked(!isSystemThemeChecked);
          setLightThemeChecked(false);
          setDarkThemeChecked(false);
          setSystemTheme();
        }}>
          <View style={isSystemThemeChecked ? styles.checked : styles.unchecked}></View>
        </TouchableOpacity>
       </View>

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
  },
  checkbox: {
    backgroundColor: "#575757",
    width: 22,
     height: 22,
     borderRadius: 10
  },
  checked: {
    backgroundColor: "#FFF",
    width: 15,
     height: 15,
     borderRadius: 10,
     left: 3.5,
     top: 3.5
  },
  unchecked: {
    backgroundColor: "none",
    width: 15,
     height: 15,
     borderRadius: 10,
     left: 3.5,
     top: 3.5
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
    fontSize: 24,
    position: "relative",
    right: 15,
  },
  themeText: {
    fontSize: 20,
    position: "relative",
  },
  themeBlock__item: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: "center",
    marginHorizontal: 10,
    gap: 10
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
    right: 50,
  },
  subBlock: {
    display: "flex",
    flexDirection: "column",
    bottom: 250,
    right: 50,
    gap: 20,
  },
  arrow_img: {
    marginRight: 10,
  },
  profile_text: {
    color: "#FFF",
    fontSize: 22,
    marginLeft: 10,
    fontWeight: "500",
  },
  profile_button: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#262626",
    width: 420,
    height: 50,
    borderRadius: 10,
    marginTop: 7,
  },
  paymentButton: {
    width: 400,
    height: 45,
    backgroundColor: "#F3F285",
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    bottom: 100,
    borderRadius: 15
  },
  paymentButton__text: {
    fontSize: 19,
    fontWeight: "600"
  },
  themeBlock: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    position: 'absolute',
    top: 200,
    gap: 30
  },
  themeText: {
    color: "#FFF",
    fontSize: 15
  },
  modalBlock: {
    top: 40,
    backgroundColor: "#FFF"
  },
  check: {
    position: 'absolute',
    top: 300
  },
  modalBlock__container: {
    backgroundColor: "#FFF"
  },
  pickerText: {
    left: 300,
    fontSize: 15,
    marginVertical: 5
  },
  
});
