import { View, Image, Button, StyleSheet, Text, TouchableOpacity } from "react-native";
import avatar from "../assets/avatar.png";
import { useTheme } from "../tools/ThemeProvider";
import { getThemeStyles } from "../theme/themeStyles";
import { IUser } from "../models/IUser";
import { useState, useEffect, useContext } from "react";
import { Context } from "../context/StoreContext";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function Header() {
  const {store} = useContext(Context);
  const { isDarkTheme } = useTheme();
  const themeStyles = getThemeStyles(isDarkTheme);
  // const [user, setUser] = useState<IUser | null>(null);

  useEffect(() => {
  
    if(AsyncStorage.getItem("token")) {
      store.checkUser();
    }

    console.log("User - ",store.user)
  }, []);
  return (
    <>
     {store.isAuth ? (
       <View style={styles.header_panel}>
       <View style={styles.userBlock}>
         <Image source={require("../assets/avatar.png")} style={styles.image_avatar} />
         <Text style={[styles.text, { color: themeStyles.statsText }]}>
          {store.user.nickname}
         </Text>
       </View>
       <View style={styles.heartBlock}>
         <Image
           source={require("../assets/fire.png")}
         />
         <Text style={[styles.text, { color: themeStyles.statsText }]}>0</Text>
       </View>
       <Image
         source={require("../assets/heart.png")}
       />
       <TouchableOpacity style={[styles.searchButton, {backgroundColor: themeStyles.searchButton}]}>
         <Image source={require("../assets/search.png")} />
       </TouchableOpacity>
     </View>
      ) : (
        <View>
          <Text>Loading...</Text> {/* Показываем загрузку, пока нет пользователя */}
        </View>
      )}
      
    </>
  );
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
    height: 35,
    width: 35,
    position: "relative",
    left: 10,
  },

  text: {
    fontSize: 16,
  },
  heartBlock: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 10,
  },
  userBlock: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 20,
  },
  searchButton: {
    width: 35,
    height: 35,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 15,
    right: 10
  },
});
