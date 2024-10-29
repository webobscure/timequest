import React from 'react'
import { TouchableOpacity, Image,StyleSheet, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
export default function BackButton({ style }) {
    const navigation = useNavigation();
  return (
    <View >
        <TouchableOpacity onPress={() => navigation.goBack()} >
          <Image
            source={require("../assets/backButton.png")}
            style={[styles.backButton, style]}
          />
        </TouchableOpacity>
    </View>
     
  )
}

const styles = StyleSheet.create({
    backButton: {
        position: "relative",
        
      },
})
