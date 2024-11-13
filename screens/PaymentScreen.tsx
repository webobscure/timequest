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

export default function PaymentScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.headerAbout}>
        <BackButton style={styles.backButton} />
        <Text style={styles.text}>Способ оплаты</Text>
      </View>
      <View style={styles.paymentBlock}>
        <View style={styles.input__container}>
            <Text style={styles.input__label}>Номер карты</Text>
            <TextInput style={styles.input}/>
        </View>
        <View style={styles.input_noWrap}>
        <View style={styles.input__containerWrap}>
        <Text style={styles.input__label}>Дата</Text>
        <TextInput style={styles.input}/>
        </View>
        <View style={styles.input__containerWrap}>
        <Text style={styles.input__label}>CVV/CVC</Text>
        <TextInput style={styles.input} secureTextEntry={true}/>
        </View>
        <TouchableOpacity style={styles.editButton}>
            <Image  source={require("../assets/edit.png")} style={{width:20,height:20}} />
            <Text style={{color: "#FFF", fontSize: 15}}>Редактировать</Text>
        </TouchableOpacity>
        </View>
      </View>
      <TouchableOpacity style={styles.paymentButton}>
        <Text style={styles.paymentButton__text}>Сохранить</Text>
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
    right: 100,
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
  },
  input: {
    backgroundColor: "#FFF",
    height: 40,
    borderRadius: 15,
  },
  input__label: {
    color: "#FFF",
    fontSize: 15,
    marginBottom: 15
  },
  input_noWrap: {
    display: 'flex',
    flexDirection: 'row',
    gap: 10,
    top: 10
  },
  input__container: {
    display: 'flex',
    flexDirection: 'column',
    width: 400
  },
  input__containerWrap: {
    width: 195,
  },
  editButton: {
    position: 'absolute',
    top: 90,
    display: 'flex',
    flexDirection: 'row',
     gap: 10
  },
  paymentBlock: {
    bottom: 200,
  },
});
