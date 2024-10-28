import React from 'react'
import { TouchableOpacity, Image,StyleSheet, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
export default function BackButton() {
    const navigation = useNavigation();
  return (
    <View style={styles.backButton}>
        <TouchableOpacity onPress={() => navigation.goBack()} >
          <Image
            source={require("../assets/backButton.png")}
            style={styles.backButton}
          />
        </TouchableOpacity>
    </View>
     
  )
}

const styles = StyleSheet.create({
    backButton: {
        position: "absolute",
        left: -40,
        top: -3
        
      },
})
