import { View, Text, StyleSheet, Button, Image } from 'react-native'
import React from 'react'

const NavigationScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
          <Image source={require("../assets/coliseum.png")} style={styles.image} />
          

           <View style={styles.navigation}>
           <Text  style={styles.text}>Давайте начнем
           изучать историю!</Text>
                <View  style={styles.regButton}>
                <Button title="Регистрация" color={"#1A1A1A"} onPress={() => navigation.navigate('Sign up page')} />
                </View>
                <View style={styles.signButton} >
                <Button title="Войти" color={"#DBC2FC"} onPress={() => navigation.navigate('Login page')}/>
                </View>
            </View>
    </View>
  )
}

const styles = StyleSheet.create({
    image: {
        position: 'absolute',
        top: 200,
        zIndex: 50,
    },
    container: {
        display: "flex",
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#000" 
    },
    text: {
        color: "#FFFFFF",
        fontSize: 34,
        fontWeight: "700",
        width: 300
    },
    navigation: {
        position: "absolute",
        bottom: 20
    },
    regButton: {
        backgroundColor: "#F3F285",
        marginTop: 38,
        width:343,
        height: 50,
        justifyContent: "center",
        borderRadius: 43,
    },
    signButton: {
        backgroundColor: "#000",
        width:343,
        height: 50,
        marginTop: 14,
        marginBottom: 14,
        justifyContent: "center",
        borderRadius: 43,
        borderColor: "#DBC2FC",
        borderWidth: 1
    },
})

export default NavigationScreen