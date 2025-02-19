import React from 'react'
import { TouchableOpacity, Image,StyleSheet, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Save from '../assets/save.svg';
import { useTheme } from "../tools/ThemeProvider";
import { getThemeStyles } from "../theme/themeStyles";


export default function BackButton({ style }) {
        const { isDarkTheme } = useTheme();
        const navigation = useNavigation();
        const themeStyles = getThemeStyles(isDarkTheme);
    
  return (
    <View style={[styles.save_container, {backgroundColor: themeStyles.actionButton}]}>
        <TouchableOpacity  >
          <Save />
        </TouchableOpacity>
    </View>
     
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
        backgroundColor: "#353333"
      }
})
