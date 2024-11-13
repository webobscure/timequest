import React, { Component, useEffect, useState } from "react";
import { Text, View, StyleSheet, TouchableOpacity, Image } from "react-native";
import Navbar from "../components/Navbar";
import Header from "../components/Header";
import { collection, getDocs } from "firebase/firestore";
import { FIREBASE_AUTH, FIREBASE_DB } from "../firebase";

export default function FavoriteScreen() {
  const [exersice, setExersice] = useState([]);

  const fetchData = async () => {
    try {
      const querySnapshot = await getDocs(collection(FIREBASE_DB, "exersice"));
      const data = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      // console.log("Данные: ", data);
      setExersice(data)
    } catch (error) {
      console.error("Ошибка получения данных: ", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);
    return (
        <>
         <View style={styles.black_container}>
        <Header />
        <View style={styles.favorite}>
                {exersice ? exersice.map((data, index)=> (
              <TouchableOpacity  >
                  <Image
                  key={index}
                  source={{
                    uri: data.background
                  }}
                  style={styles.contentImage}
                />
              </TouchableOpacity>

                )) : 
                <>
               <Text>Not found exercises!</Text>
                </>}
            </View>
        <Navbar />
        </View>
       
        </>
    )
}

const styles = StyleSheet.create({
    black_container: {
        backgroundColor: "#000",
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      },
      favorite: {
        display: "flex",
        flexDirection: "column",
        maxWidth: 440,
        gap: 10
      },
      voucher: {
        borderColor: "#FFF",
        width: 430,
        height: 170,
        borderRadius: 10,
      },
      eventPage: {
        maxWidth: "100%",
        maxHeight: "100%",
        top: 140,
        gap: 10
      },
      contentImage: {
        width: 320,
        height: 200,
        borderRadius: 10
      },
      century_title: {
        color: "#FFF",
        fontSize: 24,
        fontWeight: "600",
        marginBottom: 10,
      },
      sevenWonders: {
        width: 430,
        height: 200,
        borderRadius: 10,
      },
      wonder: {
        maxWidth: 435,
        top: 40,

      }
})