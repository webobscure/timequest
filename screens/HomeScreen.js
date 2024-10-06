import {
  Text,
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
  FlatList,
  useColorScheme,
} from "react-native";
import React, { Component, useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { FIREBASE_AUTH, FIREBASE_DB } from "../firebase";
import Navbar from "../components/Navbar";
import { collection, getDocs } from "firebase/firestore";
import Header from "../components/Header";

export default function HomeScreen({ navigation }) {
  const scheme = useColorScheme();
  const [isDarkTheme, setIsDarkTheme] = useState(scheme === 'dark')
  const [user, setUser] = useState();
  const [exersice, setExersice] = useState([]);
  const [imageUrls, setImageUrls] = useState([]);

  // Функция для получения данных из Firestore
  const fetchData = async () => {
    try {
      const querySnapshot = await getDocs(collection(FIREBASE_DB, "exersice"));
      const data = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      console.log("Данные: ", data);
      setExersice(data);
    } catch (error) {
      console.error("Ошибка получения данных: ", error);
    }
  };
  useEffect(() => {
    // onAuthStateChanged(FIREBASE_AUTH, (user) => {
    //   setUser(user);
    // });
    fetchData();
  }, [scheme]);

  
  return (
    <>
      {/* {user ? ( */}
      <View style={styles.black_container}>
        <ScrollView style={styles.scrollView}>
          <Header />
          <View style={styles.content_container}>
            <View style={styles.universe_block}>
              <Image
                source={require("../assets/universe.png")}
                style={styles.universe_image}
              />
              <View style={styles.exBlock}>
                <Text style={{ color: "#FFF", fontSize: 18 }}>
                  Астрономия, алхимия и медицина
                </Text>
                <Text style={{ color: "#CFCFCF", width: 350 }}>
                  Три древние дисциплины, которые играли важную роль в развитии
                  научных знаний....
                </Text>
              </View>

              <View style={styles.actionBlock}>
                <TouchableOpacity style={styles.openButton}>
                  <Text style={{ color: "#000" }}>Подробнее</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.saveBlock}>
                  <Image
                    source={require("../assets/save.png")}
                    style={styles.saveIcon}
                  />
                </TouchableOpacity>
              </View>
            </View>
            <View style={styles.bronze_century}>
              <Text style={styles.century_title}>Бронзовый Век</Text>
              <FlatList
                data={exersice}
                keyExtractor={(item) => item.id} // Уникальный ключ для каждого элемента
                renderItem={({ item }) => (
                  <TouchableOpacity>
                    <Image
                      source={{ uri: item.background }} // Используем URL из Firebase
                      style={styles.contentImage} // Стили для изображения
                    />
                  </TouchableOpacity>
                )}
                horizontal={true} // Горизонтальная прокрутка
                showsHorizontalScrollIndicator={false} // Убираем индикатор прокрутки
                style={styles.renderBlock} // Стили для контейнера
                contentContainerStyle={{ paddingHorizontal: 10 }} // Отступы по бокам
              />
            </View>
            <View style={styles.bronze_century}>
              <Text style={styles.century_title}>Cеребрянный Век</Text>
              <FlatList
                data={exersice}
                keyExtractor={(item) => item.id} // Уникальный ключ для каждого элемента
                renderItem={({ item }) => (
                  <TouchableOpacity>
                    <Image
                      source={{ uri: item.background }} // Используем URL из Firebase
                      style={styles.contentImage} // Стили для изображения
                    />
                  </TouchableOpacity>
                )}
                horizontal={true} // Горизонтальная прокрутка
                showsHorizontalScrollIndicator={false} // Убираем индикатор прокрутки
                style={styles.renderBlock} // Стили для контейнера
                contentContainerStyle={{ paddingHorizontal: 10 }} // Отступы по бокам
              />
            </View>
            <View style={styles.bronze_century}>
              <Text style={styles.century_title}>Золотой Век</Text>
              <FlatList
                data={exersice}
                keyExtractor={(item) => item.id} // Уникальный ключ для каждого элемента
                renderItem={({ item }) => (
                  <TouchableOpacity>
                    <Image
                      source={{ uri: item.background }} // Используем URL из Firebase
                      style={styles.contentImage} // Стили для изображения
                    />
                  </TouchableOpacity>
                )}
                horizontal={true} // Горизонтальная прокрутка
                showsHorizontalScrollIndicator={false} // Убираем индикатор прокрутки
                style={styles.renderBlock} // Стили для контейнера
                contentContainerStyle={{ paddingHorizontal: 10 }} // Отступы по бокам
              />
            </View>
          </View>
        </ScrollView>
      </View>

      <Navbar />

      {/* ) : (
        <Text>Hello</Text>
      )} */}
    </>
  );
}

const styles = StyleSheet.create({
  scrollView: {
    flex: 1,
  },
  black_container: {
    backgroundColor: "#000",
    width: "100%",
    height: "100%",
    position: "relative",
  },

  century_title: {
    color: "#FFF",
    fontSize: 24,
    fontWeight: "600",
    marginBottom: 10,
  },
  content_container: {
    display: "flex",
    flex: 1,
    justifyContent: "center",
  },
  oneRow: {
    display: "flex",
    flexDirection: "row",
    gap: 10,
  },

  image_avatar: {
    height: 56,
    width: 56,
    position: "relative",
    left: 10,
  },
  bronze_century: {
    marginTop: 30,
    width: 500,
  },
  silver_century: {
    marginTop: 30,
  },

  gold_century: {
    marginTop: 20,
  },
  contentImage: {
    width: 243,
    height: 170,
    marginRight: 10,
    borderRadius: 10,
  },
  bottom_pannel__image: {
    width: 15,
    height: 18,
  },
  heart_img: {
    left: 80,
  },
  universe_block: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
    top: 120,
  },
  universe_image: {
    width: 400,
    height: 300,
  },
  saveIcon: {
    width: 12,
    height: 14,
  },
  saveBlock: {
    backgroundColor: "#1A1A1A",
    borderRadius: 20,
    position: "relative",
    width: 26,
    height: 26,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  openButton: {
    width: 276,
    height: 26,
    backgroundColor: "#EC704B",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
  },
  exBlock: {
    position: "relative",
    display: "block",
    bottom: 120,
    gap: 15,
    left: 10,
  },
  actionBlock: {
    position: "relative",
    display: "flex",
    flexDirection: "row",
    bottom: 110,
    gap: 30,
  },

  touchable: {
    // Устанавливаем размеры для TouchableOpacity
    width: "100%", // или фиксированная ширина
    height: 200, // или нужная высота
  },
  renderBlock: {
    // Добавьте дополнительные стили, если необходимо
    flexGrow: 0, // Убираем автоматическое расширение
  },
});
