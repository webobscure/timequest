import React, { useState } from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';
import { useTheme } from '../tools/ThemeProvider';
import { getThemeStyles } from '../theme/themeStyles';

export default function AchievmentsScreen({ navigation }) {
    const {count, setCount} = useState(0);
    const {isDarkTheme} = useTheme();
    const themeStyles = getThemeStyles(isDarkTheme);
  return (
    <View style={[styles.container, {backgroundColor: themeStyles.profileContainer}]}>
         <View style={styles.headerAbout}>
            <TouchableOpacity onPress={() => navigation.navigate('Profile page')}>
                <Image source={require("../assets/backButton.png")} style={styles.backButton}/>
            </TouchableOpacity>
            <Text style={[styles.text, {color: themeStyles.textColor}]}>Достижения</Text>
            </View>
            <View style={styles.achievment_container}>
                <View style={[styles.achievment_container__item, {backgroundColor: themeStyles.statsItem}]}>
                    <Text style={[styles.achieve__text, {color: themeStyles.textColor}]}>Достижение {count}</Text>
                </View>
            </View>
    </View>
  )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#000',
    },
    button: {
        backgroundColor: '#F3F285',
        width: 342,
        height: 45,
        borderRadius: 10,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    text: {
        color: '#FFF',
        fontSize: 28,
        fontWeight: "700",
        position: 'relative',
        right: 15
    },
    headerAbout: {
        position: "absolute",
        top: 60,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    backButton: {
        position: 'relative',
        right: 90
    },
    inputs_container: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 20,
        maxWidth: 342
  
    },
    input_text: {
        backgroundColor: "#FFF",
        width: 342,
        height: 40,
        borderRadius: 10,
        position: 'relative',
    },
    input_text_message: {
        backgroundColor: "#FFF",
        width: 342,
        height: 137,
        borderRadius: 10,
        position: 'relative',
        
    },
    textInput: {
        color: "#FFF",
        fontSize: 18,
        marginBottom: 13
    },
    achievment_container: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexWrap: 'wrap'
    },
    achievment_container__item: {
        width: 177,
        height: 166,
        borderRadius: 10,
        position: 'relative',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    achieve__text: {
        position: 'absolute',
        bottom: 5
    }
  });
