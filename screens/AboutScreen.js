import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import Navbar from '../components/Navbar';
import BackButton from '../components/BackButton';

export default function AboutScreen({ navigation }) {
    return (
        <View style={styles.container}>
            <View style={styles.headerAbout}>
            <BackButton />
            <Text style={styles.text}>О приложении</Text>
            </View>
            <View style={styles.aboutPage} >
                <Image source={require("../assets/timequest.png")} />
                <Text style={styles.app}>TimeQuest</Text>
                <View style={styles.ageRow}>
                    <Image source={require("../assets/sixPlus.png")} />
                    <Image source={require("../assets/eightPlus.png")} />
                    <Image source={require("../assets/tenPlus.png")} />
                    <Image source={require("../assets/twelvePlus.png")} />
                </View>
            </View>
            <View>
                <Text style={styles.aboutPage_text}>
Наше приложение помагает детям изучать
историю и прививает любовь к историческому
миру.</Text>
                <Text style={styles.aboutPage_text}>
Мы супер пупер команда энтузиастов,
которые хотят помочь вам познать исторический мир.</Text>
            </View>
        <Navbar />

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#000',
    },
    text: {
        color: '#FFF',
        fontSize: 24,
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
        right: 100
    },
    ageRow: {
        display: 'flex',
        flexDirection: 'row',
        gap: 10
    },
    aboutPage: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        top: 200
    },
    app: {
        fontSize: 24,
        color: '#FFF',
        margin: 10,
        fontWeight: "600"
    },
    aboutPage_text: {
        fontSize: 18,
        color: '#FFF',
        position: 'relative',
        top: 20,
        marginTop: 50
        
    }
});
