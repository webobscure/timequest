import React, { useState } from "react";
import {
  View,
  TextInput,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
} from "react-native";
import Navbar from "../components/Navbar";
import BackButton from "../components/BackButton";

export default function SubscriptionScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.headerAbout}>
        <BackButton  />
        <Text style={styles.text}>Управление подпиской</Text>
      </View>
      <View>
        <View style={styles.subBlock}>
          <Text style={{ fontWeight: "700", fontSize: 23, color: "#FFF" }}>
            Подписка:
          </Text>
          <Text style={{ fontSize: 15, color: "#FFF" }}>
            Следующее списание будет: 28.12.2024 г.
          </Text>
        </View>
      </View>
      <View>
      <TouchableOpacity
              style={styles.profile_button}
              onPress={() => navigation.navigate("Payment page")}
            >
              <Text style={styles.profile_text}>Способ оплаты</Text>
              <Image
                source={require("../assets/arrow.png")}
                style={styles.arrow_img}
              />
            </TouchableOpacity>
      </View>
      <TouchableOpacity style={styles.paymentButton}>
        <Text style={styles.paymentButton__text}>Отменить подписку</Text>
      </TouchableOpacity>
      <Navbar />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#000",
  },
  button: {
    backgroundColor: "#F3F285",
    width: 342,
    height: 45,
    borderRadius: 10,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    color: "#FFF",
    fontSize: 24,
    position: "relative",
    right: 15,
  },
  headerAbout: {
    position: "absolute",
    top: 60,
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  backButton: {
    position: "relative",
    right: 50,
  },
  subBlock: {
    display: "flex",
    flexDirection: "column",
    bottom: 250,
    right: 50,
    gap: 20,
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
  paymentButton: {
    width: 400,
    height: 45,
    backgroundColor: "#F3F285",
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    bottom: 100,
    borderRadius: 15
  },
  paymentButton__text: {
    fontSize: 19,
    fontWeight: "600"
  }
});
