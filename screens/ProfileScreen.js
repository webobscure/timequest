import React from "react";
import {
  Text,
  StyleSheet,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import Navbar from "../components/Navbar";

export default function ProfileScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <View style={styles.profile_container}>
          <View style={styles.upperBlock}>
            <Text style={styles.avatar_text}>Мой профиль</Text>
            <View style={styles.userBlock}>
              <TouchableOpacity>
                <Image
                  source={require("../assets/profile-mask.png")}
                  style={styles.image_avatar}
                />
                <Image
                  source={require("../assets/changeAvatar.png")}
                  style={styles.changer}
                />
              </TouchableOpacity>
              <Text style={styles.avatar_nick}>Артём</Text>
              <View>
                <TouchableOpacity style={styles.logoutButton}>
                  <Image source={require("../assets/logout.png")} />
                  <Text style={{ color: "#FF5353", fontSize: 16 }}>Выход</Text>
                </TouchableOpacity>
              </View>
            </View>
            <View style={styles.subBlock}>
              <Text style={{ fontWeight: "700", fontSize: 23 }}>Подписка:</Text>
              <View style={{ left: 40, gap: 10 }}>
                <Text style={{ fontSize: 15 }}>Следующее списание будет:</Text>
                <Text style={{ fontSize: 15, fontWeight: "600" }}>
                  28.12.2024 г.
                </Text>
              </View>
            </View>
          </View>
          <View style={styles.statsBlock}>
            <View style={styles.statsBlock__item}>
              <Image
                source={require("../assets/streak.png")}
                style={{ width: 43, height: 43 }}
              />
              <View style={styles.statsBlock__el}>
                <Text style={styles.statsText__item}>Рекорд дней:</Text>
                <Text
                  style={{ color: "#E36F51", fontSize: 20, fontWeight: "500", bottom: 3 }}
                >
                  3
                </Text>
              </View>
            </View>
            <View style={styles.statsBlock__item}>
              <Image
                source={require("../assets/league.png")}
                style={{ width: 43, height: 43 }}
              />
              <View style={styles.statsBlock__el}>
                <Text style={styles.statsText__item}>Деревянная лига</Text>
               
              </View>
            </View>
            <View style={styles.statsBlock__item}>
              <Text style={{color: "#E36F51", fontSize: 35, fontWeight: "700"}}>10 000</Text>
              <View style={styles.statsBlock__el}>
                <Text style={styles.statsText__item}>Очки опыта</Text>
               
              </View>
            </View>
            <View style={styles.statsBlock__item}>
              <Image
                source={require("../assets/achievs.png")}
                style={{ width: 124 }}
              />
              <View style={styles.statsBlock__el}>
                <Text style={styles.statsText__item}>Достижения</Text>
               
              </View>
            </View>
          </View>
          <View style={styles.setting}>
            <TouchableOpacity
              style={styles.profile_button}
              onPress={() =>
                navigation.navigate("Subscription page", {
                  screen: "Subscription page",
                })
              }
            >
              <Text style={styles.profile_text}>Управление подпиской </Text>
              <Image
                source={require("../assets/arrow.png")}
                style={styles.arrow_img}
              />
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.profile_button}
              onPress={() =>
                navigation.navigate("Settings page", {
                  screen: "Settings page",
                })
              }
            >
              <Text style={styles.profile_text}>Настройки профиля</Text>
              <Image
                source={require("../assets/arrow.png")}
                style={styles.arrow_img}
              />
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.profile_button}
              onPress={() =>
                navigation.navigate("Support page", { screen: "Support page" })
              }
            >
              <Text style={styles.profile_text}>Написать в поддержку</Text>
              <Image
                source={require("../assets/arrow.png")}
                style={styles.arrow_img}
              />
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.profile_button}
              onPress={() =>
                navigation.navigate("About page", { screen: "About page" })
              }
            >
              <Text style={styles.profile_text}>О приложении</Text>
              <Image
                source={require("../assets/arrow.png")}
                style={styles.arrow_img}
              />
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.profile_button}
              onPress={() =>
                navigation.navigate("Theme page", { screen: "Theme page" })
              }
            >
              <Text style={styles.profile_text}>Настройка приложения</Text>
              <Image
                source={require("../assets/arrow.png")}
                style={styles.arrow_img}
              />
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
      <Navbar />
    </View>
  );
}

const styles = StyleSheet.create({
  scrollView: {
    flex: 1,
  },
  container: {
    display: "flex",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#000",
  },
  setting: {
    marginTop: 30,
  },
  arrow_img: {
    marginRight: 10,
  },
  profile_text: {
    color: "#FFF",
    fontSize: 22,
    marginLeft: 10,
    fontWeight: "500",
  },
  profile_button: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#262626",
    width: 420,
    height: 50,
    borderRadius: 10,
    marginTop: 7,
  },
  image_avatar: {
    width: 56,
    height: 56,
  },
  avatar_nick: {
    fontSize: 24,
    color: "#000",
    fontWeight: "600",
  },

  profile_container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    top: 50,
  },
  avatar_text: {
    color: "#000",
    fontSize: 32,
    fontWeight: "bold",
    top: 60,
    left: 110,
  },
  upperBlock: {
    backgroundColor: "#FFF",
    display: "flex",
    flexDirection: "row",
    width: 430,
    height: 275,
    bottom: 55,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  userBlock: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    position: "absolute",
    gap: 20,
    left: 10,
    top: 110,
  },
  logoutButton: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 5,
    left: 150,
  },
  changer: {
    width: 15,
    height: 15,
    left: 43,
    bottom: 18,
  },
  subBlock: {
    top: 200,
    display: "flex",
    flexDirection: "row",
    right: 200,
  },
  statsBlock: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "center",
    gap: 10,
  },
  statsBlock__item: {
    backgroundColor: "#262626",
    width: 208,
    height: 96,
    borderRadius: 5,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  statsText__item: {
    fontSize: 16,
    color: "#FFF",
    fontWeight: "500",
  },
  statsBlock__el: {
    display: "flex",
    flexDirection: "row",
    gap: 10,
    top: 10,
  },
});
