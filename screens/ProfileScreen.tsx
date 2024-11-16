import React, { useEffect, useContext, useState } from "react";
import {
  Text,
  StyleSheet,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
  ActivityIndicator,
} from "react-native";
import Navbar from "../components/Navbar";
import { useTheme } from "../tools/ThemeProvider";
import { getThemeStyles } from "../theme/themeStyles";
import { IUser } from "../models/IUser";
import { Context } from "../context/StoreContext";

export default function ProfileScreen({ navigation }) {
  const { store } = useContext(Context);
  const [user, setUser] = useState<IUser | null>(null);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true)
    if (store.isAuth && store.user) {
      setUser(store.user); // Сохранение пользователя из store
    }
    console.log(user)
    setLoading(false)
  }, [store.isAuth, store.user]);

  const { isDarkTheme } = useTheme();
  const themeStyles = getThemeStyles(isDarkTheme);

  return (
    <>
      {store.isAuth ? (
        <View
          style={[
            styles.container,
            { backgroundColor: themeStyles.profileContainer },
          ]}
        >
          <ScrollView style={styles.scrollView}>
            <View style={styles.profile_container}>
              <View
                style={[
                  styles.upperBlock,
                  { backgroundColor: themeStyles.textColor },
                ]}
              >
                <Text
                  style={[
                    styles.avatar_text,
                    { color: themeStyles.profileContainer },
                  ]}
                >
                  Мой профиль
                </Text>
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
                  <Text
                    style={[styles.avatar_nick, { color: themeStyles.profileNick }]}
                  >
                    {store.user.nickname}
                  </Text>
                  <View>
                    <TouchableOpacity style={styles.logoutButton} onPress={() => {
                      store.logout();
                      navigation.navigate("Login page");
                    }}>
                      <Image source={require("../assets/logout.png")} />
                      <Text style={{ color: "#FF5353", fontSize: 16 }}>Выход</Text>
                    </TouchableOpacity>
                  </View>
                </View>
                <View style={styles.subBlock}>
                  <Text
                    style={{
                      fontWeight: "700",
                      fontSize: 23,
                      color: themeStyles.profileNick,
                    }}
                  >
                    Подписка:
                  </Text>
                  <View style={{ left: 40, gap: 10 }}>
                    <Text style={{ fontSize: 15, color: themeStyles.subText }}>
                      Следующее списание будет:
                    </Text>
                    <Text
                      style={{
                        fontSize: 15,
                        fontWeight: "600",
                        color: themeStyles.subText,
                      }}
                    >
                      28.12.2024 г.
                    </Text>
                  </View>
                </View>
              </View>
              <View style={styles.statsBlock}>
                <View
                  style={[
                    styles.statsBlock__item,
                    { backgroundColor: themeStyles.statsItem },
                  ]}
                >
                  <Image
                    source={require("../assets/streak.png")}
                    style={{ width: 43, height: 43 }}
                  />
                  <View style={styles.statsBlock__el}>
                    <Text
                      style={[
                        styles.statsText__item,
                        { color: themeStyles.statsText },
                      ]}
                    >
                      Рекорд дней:
                    </Text>
                    <Text
                      style={{
                        color: "#E36F51",
                        fontSize: 20,
                        fontWeight: "500",
                        bottom: 3,
                      }}
                    >
                      3
                    </Text>
                  </View>
                </View>
                <View
                  style={[
                    styles.statsBlock__item,
                    { backgroundColor: themeStyles.statsItem },
                  ]}
                >
                  <Image
                    source={require("../assets/league.png")}
                    style={{ width: 43, height: 43 }}
                  />
                  <View style={styles.statsBlock__el}>
                    <Text
                      style={[
                        styles.statsText__item,
                        { color: themeStyles.statsText },
                      ]}
                    >
                      Деревянная лига
                    </Text>
                  </View>
                </View>
                <View
                  style={[
                    styles.statsBlock__item,
                    { backgroundColor: themeStyles.statsItem },
                  ]}
                >
                  <Text
                    style={{ color: "#E36F51", fontSize: 35, fontWeight: "700" }}
                  >
                    10 000
                  </Text>
                  <View style={styles.statsBlock__el}>
                    <Text
                      style={[
                        styles.statsText__item,
                        { color: themeStyles.statsText },
                      ]}
                    >
                      Очки опыта
                    </Text>
                  </View>
                </View>
                <View
                  style={[
                    styles.statsBlock__item,
                    { backgroundColor: themeStyles.statsItem },
                  ]}
                >
                  <TouchableOpacity style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }} onPress={() => navigation.navigate("Achive page")}>
                    <Image
                      source={require("../assets/achievs.png")}
                      style={{ width: 124 }}
                    />
                    <View style={styles.statsBlock__el}>
                      <Text
                        style={[
                          styles.statsText__item,
                          { color: themeStyles.statsText },
                        ]}
                      >
                        Достижения
                      </Text>
                    </View>
                  </TouchableOpacity>
                </View>
              </View>
              <View style={styles.setting}>
                <TouchableOpacity
                  style={[
                    styles.profile_button,
                    { backgroundColor: themeStyles.statsItem },
                  ]}
                  onPress={() =>
                    navigation.navigate("Subscription page", {
                      screen: "Subscription page",
                    })
                  }
                >
                  <Text
                    style={[styles.profile_text, { color: themeStyles.statsText }]}
                  >
                    Управление подпиской{" "}
                  </Text>
                  <Image
                    source={require("../assets/arrow.png")}
                    style={styles.arrow_img}
                  />
                </TouchableOpacity>
                <TouchableOpacity
                  style={[
                    styles.profile_button,
                    { backgroundColor: themeStyles.statsItem },
                  ]}
                  onPress={() =>
                    navigation.navigate("Settings page", {
                      screen: "Settings page",
                    })
                  }
                >
                  <Text
                    style={[styles.profile_text, { color: themeStyles.statsText }]}
                  >
                    Настройки профиля
                  </Text>
                  <Image
                    source={require("../assets/arrow.png")}
                    style={styles.arrow_img}
                  />
                </TouchableOpacity>
                <TouchableOpacity
                  style={[
                    styles.profile_button,
                    { backgroundColor: themeStyles.statsItem },
                  ]}
                  onPress={() =>
                    navigation.navigate("Support page", { screen: "Support page" })
                  }
                >
                  <Text
                    style={[styles.profile_text, { color: themeStyles.statsText }]}
                  >
                    Написать в поддержку
                  </Text>
                  <Image
                    source={require("../assets/arrow.png")}
                    style={styles.arrow_img}
                  />
                </TouchableOpacity>
                <TouchableOpacity
                  style={[
                    styles.profile_button,
                    { backgroundColor: themeStyles.statsItem },
                  ]}
                  onPress={() =>
                    navigation.navigate("About page", { screen: "About page" })
                  }
                >
                  <Text
                    style={[styles.profile_text, { color: themeStyles.statsText }]}
                  >
                    О приложении
                  </Text>
                  <Image
                    source={require("../assets/arrow.png")}
                    style={styles.arrow_img}
                  />
                </TouchableOpacity>
                <TouchableOpacity
                  style={[
                    styles.profile_button,
                    { backgroundColor: themeStyles.statsItem },
                  ]}
                  onPress={() =>
                    navigation.navigate("Theme page", { screen: "Theme page" })
                  }
                >
                  <Text
                    style={[styles.profile_text, { color: themeStyles.statsText }]}
                  >
                    Настройка приложения
                  </Text>
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
      ) : (
        <View>
           <ActivityIndicator size="large" color="#0000ff" /> {/* Показываем загрузку, пока нет пользователя */}
        </View>
      )}
    </>
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
    fontSize: 32,
    fontWeight: "bold",
    top: 60,
    left: 110,
  },
  upperBlock: {
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
    left: 100,
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
