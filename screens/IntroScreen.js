import React, { useEffect } from "react";
import { View, Text, Image, Button, StyleSheet } from "react-native";
import { theme } from "../theme/theme";

export default function IntroScreen({ navigation }) {
  useEffect(() => {
    setTimeout(function() {
      navigation.navigate("Login page")
    }, 2000)
  })
  return (
    <View
      
      style={styles.container}
    >
      <Image source={require('../assets/intro.png')} style={styles.startImage} />
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    width: 300,
    height: 50,
    borderRadius: 25,
    justifyContent: "center",
  },
  button_text: {
    color: "red",
  },
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: theme.bgYellow(1),
    flex: 1,
    
  },
  text: {
    fontWeight: 'bold',
    fontSize: 20
  },
  images: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: 2,
    marginTop: 100
  },
  buttonContainer: {
    position: 'absolute',
    backgroundColor: 'purple',
    bottom: 50,
    width: 200,
    borderRadius: 20
  },
  startImage: {
    width: 430,
    position: 'absolute',
    bottom: 0
  }
});
