
import {React} from "react";
import { View, Image, Button, StyleSheet } from "react-native";
import avatar from "../assets/avatar.png";

 export default function Header() {
 
    return (
        <>
        <View style={styles.header_panel}>
            <Image source={avatar} style={styles.image_avatar} />

            <Image
              source={require("../assets/heart.png")}
              style={styles.heart_img}
            />
            <Image source={require("../assets/search.png")} />
          </View>
        </>
    )
}

const styles = StyleSheet.create({
    
      header_panel: {
        width: "100%",
        height: 56,
        position: "absolute",
        top: 60,
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
      },
      image_avatar: {
        height: 56,
        width: 56,
        position: "relative",
        left: 10,
      },
      heart_img: {
        left: 80,
      }
})
