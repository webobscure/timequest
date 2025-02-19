import React from 'react'
import { TouchableOpacity, Image,StyleSheet, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Arrow from "../assets/arrow.svg"
import { useTheme } from "../tools/ThemeProvider";
import { getThemeStyles } from "../theme/themeStyles";

export default function BackButton({ style }) {
   const { isDarkTheme } = useTheme();
        const themeStyles = getThemeStyles(isDarkTheme);
    const navigation = useNavigation();
  return (
    <>
        <TouchableOpacity onPress={() => navigation.goBack()} style={[styles.save_container, {backgroundColor: themeStyles.actionButton}]}>
          <Arrow />
        </TouchableOpacity>
    </>
   
     
  )
}

const styles = StyleSheet.create({
  save_container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius:35,
    width: 40,
    height: 40,
    backgroundColor: "#353333",
  }
})
